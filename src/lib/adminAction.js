"use server"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { connectDB } from "./connectDB";
import { Admin, Member, Lead } from "./models";
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
        data: {
          _id : newAdmin._id.toString(),
          username : newAdmin.username
        }
    };
      
  } catch (error) {
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

    // set token for 5 hrs for secured path
    const token = jwt.sign(
      {
        id: isAdminRegistered._id,
        username: isAdminRegistered.username,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "5h" }
    );

    // set cookies
    const cookieStore = await cookies();

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
    const cookieStore = await cookies();
    cookieStore.delete("admin_token");

    return {
      message: "Logged out successfully !!",
    };
  } catch (error) {
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
      throw new Error("Unauthorized access !!")
    }

    const adminData = await Admin.find({}).sort({_id : -1}).lean();

    const plainAdmins = adminData.map((a) => ({
      _id: a._id?.toString(),
      username: a.username,
      email: a.email,
      role: a.role,
      createdAt: a.createdAt
        ? new Date(a.createdAt).toISOString()
        : null,
      updatedAt: a.updatedAt
        ? new Date(a.updatedAt).toISOString()
        : null,
    }));

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

/* member details registering (without certificate issuance - issuance happens on demand) */
export const addMember = async ({name,email,year,designation,team,contributions,githubLink,linkedInLink,profilePic}) => {
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

    const memberDetails = {
      name,
      email,
      year,
      designation,
      team,
      contributions : contributions ? contributions : "",
      githubLink,
      linkedInLink,
      profilePic
    }

    const newMember = new Member({
      ...memberDetails,
      certificateNo,
      downloadUrl,
      certificateIssued: false,
      issuanceDate: null
    });

    await newMember.save();

    return{
        message: "New member added successfully! Certificate will be issued when you click the issue button.",
        success: true,
      };
  } 
  catch (error) {
    console.log("Error adding member : ", error);
    return {
        message: "Error registering the member",
        success: false,
      };
  }
};

/* Issue certificate to a member */
export const issueCertificate = async (memberId) => {
  try {
    await connectDB();
    
    const isVerified = await verifyToken();

    if(!isVerified){
      return{
        message : "Unauthorized access !",
        success : false
      }
    }

    // Find member by ID
    const member = await Member.findById(memberId);

    if (!member) {
      return {
        message: "Member not found!",
        success: false,
      };
    }

    // Check if certificate is already issued
    if (member.certificateIssued) {
      return {
        message: "Certificate already issued to this member!",
        success: false,
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASS}`,
      },
    });

    const mailOptions = {
      from: `${process.env.MAIL_USER}`,
      to: member.email,
      subject: "Your IEEE Certificate is ready!",
      html: `
        <p>Greetings ${member.name},</p>
        <p>We're excited to let you know that your work is recognised and your certificate has been generated!</p>
        <p>You can download it using the link below:</p>
        <a href="${member.downloadUrl}" target="_blank">${member.downloadUrl}</a>
        <p><strong>Certificate Number:</strong> ${member.certificateNo}</p>
        <br />
        <p>Regards, <br/> IEEE Student Branch NIT Patna</p> 
      `,
    };
 
    await transporter.sendMail(mailOptions)

    // Update member to mark certificate as issued
    member.certificateIssued = true;
    member.issuanceDate = new Date();
    await member.save();

    return{
      message: "Certificate issued successfully! Email sent to member.",
      success: true,
    };
  } 
  catch (error) {
    return {
      message: "Error issuing certificate",
      success: false,
    };
  }
};

/* Delete a member */
export const deleteMember = async (memberId) => {
  try {
    await connectDB();
    
    const isVerified = await verifyToken();

    if(!isVerified){
      return{
        message : "Unauthorized access !",
        success : false
      }
    }

    // Find and delete member by ID
    const deletedMember = await Member.findByIdAndDelete(memberId);

    if (!deletedMember) {
      return {
        message: "Member not found!",
        success: false,
      };
    }

    return{
      message: "Member deleted successfully!",
      success: true,
    };
  } 
  catch (error) {
    return {
      message: "Error deleting member",
      success: false,
    };
  }
};

export const fetchMember = async ({certificateNo}) => {
  try {
    await connectDB()

    const existingMember = await Member.findOne({ certificateNo }).lean()

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
  } catch (error) {
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

    return {
      message: "Error deleting admin",
      success: false,
    };
  }
};


// fetching developers data (web team members 2024 batch)

export const fetchDevelopers = async () => {
  try {
    await connectDB();

    const developers = await Member.find({ team: "Web" }).lean();

    const plainDevelopers = developers.map((d) => ({
      _id: d._id?.toString(),
      name: d.name,
      email: d.email,
      githubLink : d.githubLink,
      linkedInLink : d.linkedInLink,
      team: d.team,
      profilePic: d.profilePic ?? [],

    }));

    return {
      success: true,
      message: "Web team members fetched successfully",
      data: plainDevelopers,
    };
  } catch (error) {
    console.error("Error fetching web team members:", error);
    return {
      success: false,
      message: "Error fetching web team members",
      data: [],
    };
  }
};

export const fetchTeamMembers = async(teamId) => {
  try {
    await connectDB();

    const developers = await Member.find({ team: teamId }).lean();
 
    const teamMembers = developers.map((d) => ({
      _id: d._id?.toString(),
      name: d.name,
      email: d.email,
      githubLink : d.githubLink,
      linkedInLink : d.linkedInLink,
      team: d.team,
      profilePic: d.profilePic ?? [],

    }));

    return {
      success: true,
      message: "Team members fetched successfully",
      data: teamMembers,
    };
  } catch (error) {
    console.error("Error fetching team members:", error);
    return {
      success: false,
      message: "Error fetching team members",
      data: [],
    };
  }
}

export const fetchMembersByTeamAndYear = async (team, year) => {
  try {
    await connectDB();

    const members = await Member.find({
      team,                 
      year: Number(year),
    })
      .sort({ certificateNo: -1 })
      .lean();

    return {
      success: true,
      data: members.map(m => ({
        ...m,
        _id: m._id.toString(),
      })),
    };
  } catch (error) {
    console.error(error);
    return { success: false, data: [] };
  }
};

export const fetchLeadersByTeamAndYear = async (team, year) => {
  try {
    await connectDB();

    const leaders = await Lead.find({
      team,
      year: Number(year),
    }).lean();

    return {
      success: true,
      data: leaders.map(leader => ({
        ...leader,
        _id: leader._id.toString(),
        role: leader.designation,
        github: leader.githubLink,
        linkedIn: leader.linkedInLink,
        profilePic: leader.profilePic?.[0] || "/Profile.png",
      })),
    };
  } catch (error) {
    return { success: false, data: [] };
  }
};

