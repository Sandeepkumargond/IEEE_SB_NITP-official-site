"use server"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { connectDB } from "./connectDB";
import { Admin, Member } from "./models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

/* admin (login,register,logout) */
export const registerAdmin = async ({username,password}) => {
  try {
    await connectDB();

    // validating if username and password is present
    if (!username || !password) {
      return {
        message: "Username and password are required",
        success: false
      };
    }    

    // If there is at least one admin already, only an authenticated admin
    // should be able to create additional admins. If no admin exists yet
    // (fresh install/bootstrap), allow creating the first admin without auth.
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      const isVerified = await verifyToken();
      if (!isVerified || !isVerified.isVerified) {
        return {
          message: "Unauthorized: only logged-in admins can add a new admin",
          success: false,
        };
      }
    }

    const isAdminPresent = await Admin.findOne({ username: username });

    // if admin is registered..redirect to login
    if (isAdminPresent) {
      return{
        redirect : true,
        message : "User already registered",
        success : false
      }
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // register new admin
    const newAdmin = new Admin({
      username: username,
      password: hashedPassword,
    });

    await newAdmin.save();

    return {
        message: "Admin registered successfully ! Login",
        success: true,
        data: newAdmin.toObject(),
    };
      
  } catch (error) {
    console.log(error)
    return {
        message: "Error registering user!",
        success: false,
      };
  }
};

export const loginAdmin = async ({username,password}) => {
  try {
    await connectDB();


    // check whether the admin is registered
    const isAdminRegistered = await Admin.findOne({
      username: username,
    }).lean();

    // redirect to register route if the user is not found
    if (!isAdminRegistered) {
      return {
        success: false,
        message: "Admin not found",
        redirect: true,
      };
    }

    // if admin is found check the password
    const isPasswordValid = await bcrypt.compare(
      password,
      isAdminRegistered.password
    );

    if (!isPasswordValid) {
      return{
        success : false,
        message : "Incorrect credentials"
      }
    }

    // set token for 5 hrs for secired path
    const token = jwt.sign(
      {
        id: isAdminRegistered._id,
        username: isAdminRegistered.username,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "5h" }
    );

    // set cookies
    const cookieStore = cookies();

    cookieStore.set("admin_token", token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 5, // 5 hours
      }
    );

    return {
      message: "Logged in successfully !!",
      success: true,
      username : isAdminRegistered.username,
    };
      
  } catch (error) {
    console.log("Login error " ,error)
    return{
        message: "Error logging the user!",
        success: false,
      };
  }
};

export const logoutAdmin = async () => {
  try {
    await connectDB();
    // removie cookie
    const cookieStore = cookies();
    cookieStore.delete("admin_token");

    return {
      message: "Logged out successfully !!",
    };
  } catch (error) {
    console.log(error);
    return {
        message: "Error logging out",
      };
  }
};

// verify token for protected routing
export const verifyToken = async () => {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token");

    if (!token?.value) {
      return {
        message : "Unauthorized access"
      };
    }

    const payload = jwt.verify(token.value, process.env.TOKEN_SECRET);

    return {
      isVerified: true,
      user: payload,
    };
  } catch (error) {
    console.log("verify token error:", error);

    if (error.name === "TokenExpiredError") {
      return redirect("/login");
    }

    return {
      isVerified: false,
      message: error.message,
    };
  }
};

// get admin
export const getAdmin = async() => {
  try {
    await connectDB();
    
    const isVerified = await verifyToken();
    if(!isVerified){
      console.log("Unauthorized access !");
      throw new Error("Unauthorized access !!")
    }

    const adminData = await Admin.find({}).sort({_id : -1}).lean();

    const plainAdmins = (Array.isArray(adminData) ? adminData : []).map((a) => {
      const adminObj = { ...a };
      // remove sensitive fields
      if (adminObj.password) delete adminObj.password;
      // ensure _id is a plain string
      if (adminObj._id) adminObj._id = adminObj._id.toString();
      if (adminObj.createdAt) adminObj.createdAt = new Date(adminObj.createdAt).toLocaleDateString("en-GB");
      if (adminObj.updatedAt) adminObj.updatedAt = new Date(adminObj.updatedAt).toLocaleDateString("en-GB");
      return adminObj;
    });

    return {
      message: "Admins fetched successfully!!",
      data: plainAdmins,
      success: true,
    };
  } 
  catch (error) {
    console.log("Error fetching admins : ", error);
    return{
      message : "Error fetching admin!",
      success : false
    }
  }
}

/* member details registering (certificate creation and storage) and fetching */
export const addMember = async ({name,email,year,designation,role,contributions}) => {
  try {
    await connectDB();
    
    const isVerified = await verifyToken();

    if(!isVerified){
      return{
        message : "Unauthorized access !",
        success : false
      }
    }

    // finding if existing member is present
    const existingMember = await Member.findOne({
      email: email,
    });

    if (existingMember) {
      return {
          message: "Member already registered!",
          success: false,
        };
    }

    const countMembers = await Member.countDocuments();

    const uniqueNumber = String(countMembers + 1).padStart(3, "0");
    const certificateNo = `ieeenitp-2025-${uniqueNumber}`;

    const downloadUrl = `${process.env.BASE_URL}/certificate/${certificateNo}`;

    console.log(process.env.MAIL_USER)
    console.log(process.env.MAIL_PASS)

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${process.env.MAIL_USER}`,
          pass: `${process.env.MAIL_PASS}`,
        },
      });

      const memberDetails = {
        name,
      email,
      year,
      designation,
      role,
      contributions : contributions ? contributions : "",
      }

      const mailOptions = {
        from: `${process.env.MAIL_USER}`,
        to: memberDetails.email,
        subject: "Your IEEE Certificate is ready!",
        html: `
          <p>Greetings ${memberDetails.name},</p>
          <p>We're excited to let you now that your work is recognised and your certificate has been generated!</p>
          <p>You can download it using the link below:</p>
        <a href="${downloadUrl}" target="_blank">${downloadUrl}</a>
        <p><strong>Certificate Number:</strong> ${certificateNo}</p>
        <br />
        <p>Regards, <br/> IEEE Student Branch NIT Patna</p> 
        `,
      };
   
      await transporter.sendMail(mailOptions)

      console.log("Mail sent successfully!!")

    const newMember = new Member({
      ...memberDetails,
      certificateNo,
      downloadUrl
    });

    await newMember.save();

    return{
        message: "New member added successfully!",
        success: true,
      };
  } catch (error) {
    console.log("Error adding member : ", error);
    return {
        message: "Error registering the member",
        success: false,
      };
  }
};

export const fetchMember = async ({certificateNo}) => {
  try {
    await connectDB()

    if(!certificateNo){
      console.log("Enter certificate number to fetch member")
    }

    const existingMember = await Member.findOne({ certificateNo }).lean();

    if (!existingMember) {
      throw new Error("No member found!!");
    }

    const memberObj = { ...existingMember };
    if (memberObj._id) memberObj._id = memberObj._id.toString();
    if (memberObj.createdAt) memberObj.createdAt = new Date(memberObj.createdAt).toLocaleDateString("en-GB");
    if (memberObj.updatedAt) memberObj.updatedAt = new Date(memberObj.updatedAt).toLocaleDateString("en-GB");

    return {
      message: "Member fetched successfully!!",
      data: memberObj,
      success: true,
    };
  } 
  catch (error) {
    console.log("Error fetching member : ",error);
    return {
      message : "Error fetching member",
      success : false
    }
  }
};

export const fetchAllMembers = async() => {
  try {
    await connectDB()

    const members = await Member.find({}).sort({ certificateNo: -1 }).lean();

    const plainMembers = (Array.isArray(members) ? members : []).map((m) => {
      const memberObj = { ...m };
      if (memberObj._id) memberObj._id = memberObj._id.toString();
      if (memberObj.createdAt) memberObj.createdAt = new Date(memberObj.createdAt).toLocaleDateString("en-GB");
      if (memberObj.updatedAt) memberObj.updatedAt = new Date(memberObj.updatedAt).toLocaleDateString("en-GB");
      return memberObj;
    });

    return {
      message: "Members fetched successfully!!",
      success: true,
      data: plainMembers,
    };
  } 
  catch (error) {
    console.log("Error in fetching all member", error)
    return {
      message : "Error fetching all members",
      success : false
    }
  }
}

export const deleteAdmin = async (id) => {
  try {
    await connectDB();

    const data = await verifyToken();
    if (!data?.isVerified) {
      return {
        message: "Unauthorized access !!",
        success: false,
      };
    }

    if (!id) {
      return {
        message: "Admin id is required to delete",
        success: false,
      };
    }

    const adminCount = await Admin.countDocuments();
    if (adminCount <= 1) {
      return {
        message: "Operation not allowed: at least one admin must exist",
        success: false,
      };
    }

    const admin = await Admin.findById(id);
    if (!admin) {
      return {
        message: "Admin not found",
        success: false,
      };
    }

    await Admin.findByIdAndDelete(id);

    return {
      message: "Admin deleted successfully",
      success: true,
    };
  } catch (error) {
    console.log("Error deleting admin :", error);
    return {
      message: "Error deleting admin",
      success: false,
    };
  }
};
