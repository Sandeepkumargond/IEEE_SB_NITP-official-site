import { Projects } from "./models";
import { verifyToken } from "./adminAction";
import { connectDB } from "./connectDB";

console.log("Project model:", Projects);
console.log("Is Project a function?", typeof Projects === "function");

if (Projects.schema) {
  console.log("Project.schema.paths:", Projects.schema.paths);
} else {
  console.log("Project.schema is undefined!");
}

export const addProjects = async ({
  title,
  description,
  category,
  demo,
  repo,
  date,
  images,
}) => {
  try {
    await connectDB();

    const isVerified = await verifyToken();
    if (!isVerified) {
      return {
        message: "Unauthorized access!",
        success: false,
      };
    }

    console.log("user verified");

    if (!title || !description || !category || !demo || !repo || !date) {
      return {
        message: "All required fields must be filled",
        success: false,
      };
    }

    const projectDate = new Date(date);
    if (isNaN(projectDate)) {
      return {
        message: "Invalid date format",
        success: false,
      };
    }

    const newProject = new Projects({
        title,
        description,
        category,
        demo,
        date: projectDate.getTime(),
        repo,
        images: Array.isArray(images) ? images : [],
      });
      
      console.log("newProject instance:", newProject);
      console.log("typeof newProject.save:", typeof newProject.save);
      

    await newProject.save();

    return {
      message: "New project added successfully!",
      success: true,
    };
  } 
  catch (error) {
    console.log("Error in adding the projects : ", error);
    return {
      message: "Error adding projects !",
      success: false,
    };
  }
};

// fetch all projects
export const fetchAllProjects = async () => {
  try {
    await connectDB();

    const isVerified = await verifyToken();
    if (!isVerified) {
      return {
        message: "Unauthorized access!",
        success: false,
      };
    }

    const allProjects = await Projects.find({})
      .sort({ createdAt: -1 })
      .populate("members");

    return {
      message: "All projects fetched successfully!",
      success: true,
      data: allProjects,
    };
  } catch (error) {
    console.log("Error in fetching all projects : ", error);
    return {
      message: "Error fetching the projects",
      success: false,
    };
  }
};

export const deleteProjects = async (id) => {
  try {
    await connectDB();
    const isVerified = await verifyToken();

    if (!isVerified) {
      return {
        message: "Unauthorized access !",
        success: false,
      };
    }

    const projectId = id;
    if (!projectId) {
      return {
        message: "Id is required",
        success: false,
      };
    }

    const deletedProject = await Projects.findByIdAndDelete(id);
    return {
      message: "Project deleted successfully!",
      success: true,
    };
  } catch (error) {
    console.log("Error in deleting the projects : ", error);
    return {
      message: "Error deleting the projects",
      success: false,
    };
  }
};
