"use server"
import { Blog } from "./models";
import { verifyToken } from "./adminAction";
import { connectDB } from "./connectDB";

/* blog addition, edit, delete (CRUD) */
export const createBlog = async ({title,desc,images}) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    if (!title || !desc || !Array.isArray(images)) {
      throw new Error("Title, description, and images array are required!");
    }    

    const newBlog = new Blog({
      title: title,
      desc: desc,
      images: images,
    });

    await newBlog.save();
    return {
        message: "New blog is created successfully!!",
        success: true,
        data: newBlog.toObject(),
      };
  } 
  catch (error) {
    console.log("Error creating new blog : ", error);
    return {
        message: "Error craeting new blog",
        success: false,
      }
  }
};

export const editBlog = async ({id,title, desc, images,author}) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    if (!id) {
      throw new Error("Blog ID is required to update the blog.");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: title,
        desc: desc,
        images: images,
        author : author,
      },
      { new: true }
    );

    if (!updatedBlog) {
      throw new Error("Blog not found!");
    }

    return {
        message: "Blog updated successfully!",
        success: true,
        data: updatedBlog.toObject(),
      };
  } catch (error) {
    console.log("Error editing the blog : ", error);
    return {
        message: "Error editing the blog",
        success: false,
      };
  }
};

export const deleteBlog = async (id) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    const blogId = id;
    if (!blogId) {
      throw new Error("Blog id is required !");
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
      console.log("No blog found");
      throw new Error("No blog found !");
    }

    await Blog.findByIdAndDelete(blogId);

    return {
        message: "Blog deleted successfully!!",
        success: true,
      };
  } 
  catch (error) {
    console.log("Error deleting the blog : ", error);
    return{
        message: "Error deleting the blog",
        success: false,
      };
  }
};

export const fetchAllBlog = async() => {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({createdAt : -1}).lean();
    return {
      message: "Blogs fetched successfully!!",
      success: true,
      data: blogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString("en-GB") : null,
      updatedAt: blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString("en-GB") : null
      }))
    }
  } 
  catch (error) {
    console.log("Error fetching blog !!",error);
    return{
      message : "Error fetching blog",
      success : false
    }
  }
}
