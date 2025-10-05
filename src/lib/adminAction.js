import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { connectDB } from "./connectDB";
import { Admin, Member,Event } from "./models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* admin (login,register,logout) */
export const registerAdmin = async (FormData) => {
  try {
    await connectDB();
    const adminData = Object.fromEntries(FormData.entries());

    console.log(adminData);

    // validating if username and password is present
    if (!adminData.username || !adminData.password) {
      return NextResponse.json({
        message: "Username and password are required",
        success: false
      }, { status: 400 });
    }    

    const isAdminPresent = await Admin.findOne({
      username: adminData.username,
    });

    // if admin is registered..redirect to login
    if (isAdminPresent) {
      return redirect("/login");
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(adminData.password, 10);

    // register new admin
    const newAdmin = new Admin({
      username: adminData.username,
      password: hashedPassword,
    });

    await newAdmin.save();

    return NextResponse.json(
      {
        message: "Admin registered successfully ! Login",
        success: true,
        data: newAdmin,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error registering user!",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const loginAdmin = async (FormData) => {
  try {
    await connectDB();

    const adminData = Object.fromEntries(FormData.entries());
    console.log(adminData);

    // check whether the admin is registered
    const isAdminRegistered = await Admin.findOne({
      username: adminData.username,
    });

    // redirect to register route if the user is not found
    if (!isAdminRegistered) {
      return redirect("/register");
    }

    // if admin is found check the password
    const isPasswordValid = await bcrypt.compare(
      adminData.password,
      isAdminRegistered.password
    );

    if (!isPasswordValid) {
      throw new Error("Incorrect credentials!");
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

    return NextResponse.json(
      {
        message: "Logged in successfully !!",
        success: true,
        data: isAdminRegistered,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error logging the user!",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const logoutAdmin = async () => {
  try {
    await connectDB();
    // removie cookie
    const cookieStore = cookies();
    cookieStore.delete("admin_token");

    return NextResponse.json({
      message: "Logged out successfully !!",
    },{status : 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error logging out",
      },
      { status: 500 }
    );
  }
};

// verify token for protected routing
export const verifyToken = async () => {
  try {
    await connectDB();

    const cookieStore = cookies();
    const token = cookieStore.get("admin_token");

    if (!token?.value) {
      throw new Error("Unauthorized access!");
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

/* member details registering (certificate creation and storage) and fetching */
export const addMember = async (FormData) => {
  try {
    await connectDB();
    const memberDetails = Object.fromEntries(FormData.entries());

    // finding if existing member is present
    const existingMember = await Member.findOne({
      email: memberDetails.email,
    });

    if (existingMember) {
      return NextResponse.json(
        {
          message: "Member already registered!",
          success: false,
        },
        { status: 400 }
      );
    }

    // generate unique certificate number
    const countMembers = await Member.countDocuments();

    const uniqueNumber = String(countMembers + 1).padStart(3, "0");
    const certificateNo = `ieeenitp-2025-${uniqueNumber}`;

    // creating download url
    const downloadUrl = `${process.env.BASE_URL}/certificate/${certificateNo}`;

    // mailing setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${process.env.MAIL_USER}`,
          pass: `${process.env.MAIL_PASS}`,
        },
      });

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

    return NextResponse.json(
      {
        message: "New member added successfully!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error adding member : ", error);
    return NextResponse.json(
      {
        message: "Error registering the member",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const fetchMember = async ({certificateNo}) => {
  try {
    await connectDB()

    if(!certificateNo){
      console.log("Enter certificate number to fetch member")
    }

    const existingMember = await Member.findOne({
      certificateNo
    })

    if(!existingMember){
      throw new Error("No member found!!")
    }

    return NextResponse.json({
      message : "Member fetched successfully!!",
      data : existingMember,
      success : true
    },{status : 200})
  } 
  catch (error) {
    console.log("Error fetching member : ",error);
    return NextResponse.json({
      message : "Error fetching member",
      success : false
    },{status : 500})
  }
};

export const fetchAllMembers = async() => {
  try {
    await connectDB()

    const members = await Member.find({}).sort({certificateNo : -1});

    return NextResponse.json({
      message : "Members fetched successfully!!",
      success : true,
      data : members
    },{status : 200})
  } 
  catch (error) {
    console.log("Error in fetching all member", error)
    return NextResponse.json({
      message : "Error fetching all members",
      success : false
    },{status : 500})
  }
}
