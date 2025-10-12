import { Project, Member } from "./models";
import { verifyToken } from "./adminAction";
import { connectDB } from "./connectDB";

export const addProjects = async({title, description, members, supervisedBy, images}) => {
    try {
        await connectDB();

        const isVerified = await verifyToken();
        if(!isVerified){
            return{
                message : "Unauthorized access!",
                success : false
            }
        }

        if (!title || !description || !supervisedBy) {
            return {
                message: "All required fields must be filled",
                success: false
            }
        }

        const existingMembers = await Member.find({
            _id: { $in: members }
          });
          
        if (existingMembers.length !== members.length) {
            return {
              message: "One or more selected members do not exist.",
              success: false
            };
        }
          

        const newProject = new Project({
            title,
            description,
            members,
            supervisedBy,
            images : (images.length !== 0) ? images : []
        })

        await newProject.save();

        return {
            message : "New project added successfully!",
            success : true
        }
    } 
    catch (error) {
        console.log("Error in adding the projects : ", error);
        return {
            message : "Error adding projects !",
            success : false,
        }
    }
}

// fetch all projects 
export const fetchAllProjects = async() => {
    try {
        await connectDB();
        
        const isVerified = await verifyToken();
        if(!isVerified){
            return {
                message : "Unauthorized access!",
                success : false
            }
        }

        const allProjects = await Project.find({}).sort({createdAt : -1}).populate("members")

        return {
            message : "All projects fetched successfully!",
            success : true,
            data : allProjects
        }
    } 
    catch (error) {
        console.log("Error in fetching all projects : ", error);
        return {
            message : "Error fetching the projects",
            success : false
        }
    }
}

export const deleteProjects = async(id) => {
    try {
        await connectDB();
        const isVerified = await verifyToken();

        if(!isVerified){
            return {
                message : "Unauthorized access !",
                success : false
            }
        }

        const projectId = id;
        if(!projectId){
            return {
                message : "Id is required",
                success : false
            }
        }

        const deletedProject = await Project.findByIdAndDelete(id);
        return {
            message : "Project deleted successfully!",
            success : true
        }
    } 
    catch (error) {
        console.log("Error in deleting the projects : ", error);
        return {
            message : "Error deleting the projects",
            success : false
        }
    }
}