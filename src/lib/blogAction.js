import { Blog } from "./models";
import { verifyToken } from "./adminAction";
import { NextResponse } from "next/server";
import { connectDB } from "./connectDB";

/* blog addition, edit, delete (CRUD) */
export const createBlog = async (FormData) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    // taking out form data
    const blogData = Object.fromEntries(FormData.entries());

    const newBlog = new Blog({
      title: blogData.title,
      desc: blogData.desc,
      images: blogData.images,
    });

    await newBlog.save();
    return NextResponse.json(
      {
        message: "New blog is created successfully!!",
        success: true,
        data: newBlog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error creating new blog : ", error);
    return NextResponse.json(
      {
        message: "Error craeting new blog",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const editBlog = async (FormData) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    const formData = Object.fromEntries(FormData.entries());

    const blogId = formData._id || formData.id;
    if (!blogId) {
      throw new Error("Event ID is required to update the blog.");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        title: formData.title,
        desc: formData.desc,
        images: formData.images,
        author : formData.author,
      },
      { new: true }
    );

    if (!updatedBlog) {
      throw new Error("Blog not found!");
    }

    return NextResponse.json(
      {
        message: "Blog updated successfully!",
        success: true,
        data: updatedBlog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error editing the blog : ", error);
    return NextResponse.json(
      {
        message: "Error editing the blog",
        success: false,
      },
      { status: 500 }
    );
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

    return NextResponse.json(
      {
        message: "Blog deleted successfully!!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting the blog : ", error);
    return NextResponse.json(
      {
        message: "Error deleting the blog",
        success: false,
      },
      { status: 500 }
    );
  }
};
