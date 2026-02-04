"use server";
import { connectDB } from "./connectDB";
import { Lead } from "./models";
import { verifyToken } from "./adminAction";

// Add a new lead
export const addLead = async ({
  name,
  designation,
  year,
  githubLink,
  linkedInLink,
  profilePic,
}) => {
  try {
    await connectDB();

    const isVerified = await verifyToken();
    if (!isVerified || !isVerified.isVerified) {
      return {
        message: "Unauthorized access!",
        success: false,
      };
    }

    const newLead = new Lead({
      name,
      designation,
      year,
      githubLink: githubLink || "",
      linkedInLink: linkedInLink || "",
      profilePic: profilePic || [],
    });

    await newLead.save();

    return {
      message: "Lead added successfully!",
      success: true,
      data: {
        _id: newLead._id.toString(),
        name: newLead.name,
        designation: newLead.designation,
        year: newLead.year,
        githubLink: newLead.githubLink,
        linkedInLink: newLead.linkedInLink,
      },
    };
  } catch (error) {
    console.log("Error adding lead:", error);
    return {
      message: "Error adding lead",
      success: false,
    };
  }
};

// Fetch all leads
export const fetchAllLeads = async () => {
  try {
    await connectDB();

    const leads = await Lead.find({}).sort({ year: -1, createdAt: 1 }).lean();

    const plainLeads = leads.map((lead) => ({
      _id: lead._id?.toString(),
      name: lead.name,
      designation: lead.designation,
      year: lead.year,
      githubLink: lead.githubLink ?? "",
      linkedInLink: lead.linkedInLink ?? "",
      profilePic: lead.profilePic ?? [],
      createdAt: lead.createdAt
        ? new Date(lead.createdAt).toLocaleDateString("en-GB")
        : null,
    }));

    return {
      message: "Leads fetched successfully!",
      success: true,
      data: plainLeads,
    };
  } catch (error) {
    console.log("Error fetching leads:", error);
    return {
      message: "Error fetching leads",
      success: false,
      data: [],
    };
  }
};

// Fetch leads by year
export const fetchLeadsByYear = async (year) => {
  try {
    await connectDB();

    const leads = await Lead.find({ year: parseInt(year) })
      .sort({ createdAt: 1 })
      .lean();

    const plainLeads = leads.map((lead) => ({
      _id: lead._id?.toString(),
      name: lead.name,
      designation: lead.designation,
      year: lead.year,
      githubLink: lead.githubLink ?? "",
      linkedInLink: lead.linkedInLink ?? "",
      profilePic: lead.profilePic ?? [],
      createdAt: lead.createdAt
        ? new Date(lead.createdAt).toLocaleDateString("en-GB")
        : null,
    }));

    return {
      message: `Leads for year ${year} fetched successfully!`,
      success: true,
      data: plainLeads,
    };
  } catch (error) {
    console.log("Error fetching leads by year:", error);
    return {
      message: "Error fetching leads by year",
      success: false,
      data: [],
    };
  }
};

// Delete a lead
export const deleteLead = async (leadId) => {
  try {
    await connectDB();

    const isVerified = await verifyToken();
    if (!isVerified || !isVerified.isVerified) {
      return {
        message: "Unauthorized access!",
        success: false,
      };
    }

    const deletedLead = await Lead.findByIdAndDelete(leadId);

    if (!deletedLead) {
      return {
        message: "Lead not found!",
        success: false,
      };
    }

    return {
      message: "Lead deleted successfully!",
      success: true,
    };
  } catch (error) {
    console.log("Error deleting lead:", error);
    return {
      message: "Error deleting lead",
      success: false,
    };
  }
};

// Update a lead
export const updateLead = async (leadId, updateData) => {
  try {
    await connectDB();

    const isVerified = await verifyToken();
    if (!isVerified || !isVerified.isVerified) {
      return {
        message: "Unauthorized access!",
        success: false,
      };
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      leadId,
      { $set: updateData },
      { new: true },
    ).lean();

    if (!updatedLead) {
      return {
        message: "Lead not found!",
        success: false,
      };
    }

    return {
      message: "Lead updated successfully!",
      success: true,
      data: {
        _id: updatedLead._id?.toString(),
        name: updatedLead.name,
        designation: updatedLead.designation,
        year: updatedLead.year,
        githubLink: updatedLead.githubLink ?? "",
        linkedInLink: updatedLead.linkedInLink ?? "",
        profilePic: updatedLead.profilePic ?? [],
      },
    };
  } catch (error) {
    console.log("Error updating lead:", error);
    return {
      message: "Error updating lead",
      success: false,
    };
  }
};
