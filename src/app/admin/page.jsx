"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Trash2 } from "lucide-react";
import { deleteBlog, fetchAllBlog } from "@/lib/blogAction";
import { fetchAllProjects } from "@/lib/projectAction";
import { createEvent, deleteEvent } from "@/lib/eventAction";
import Link from "next/link";
import { getAdmin } from "@/lib/adminAction";
import { deleteProjects } from "@/lib/projectAction";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);

  // member addition and showcase

  // fetching the admins
  useEffect(() => {
    const fetchAdmins = async() => {
      try {
        const response = await getAdmin();
        console.log(response);

        setAdmins(response.data || [])
      } 
      catch (error) {
        console.log(error);
      }
    };

    fetchAdmins();
  },[])

  // blog fetching
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetchAllBlog();
        console.log(response);

        setBlogs(response.data || []);
      } catch (error) {
        console.error("Error loading blogs:", error);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogDelete = async (id) => {
    try {
      const response = await deleteBlog(id);
      console.log(response);

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id != id))
    } 
    catch (error) {
      alert("Error deleting blog!")
    }
  };

  // fetching all projects
  useEffect(() => {
    const fetchAllProjects = async() => {
      try {
        const response = await fetchAllProjects();
        console.log(response);
        setProjects(response.data || []);
      } 
      catch (error) {
        console.log("Error in fetching projects : ",error)
      }
    }

    fetchAllProjects();
  },[])

  const handleProjectDelete = async(id) => {
    try {
      const response = await deleteProjects(id);
      console.log(response);

      setProjects((prevProjects) => prevProjects.filter((project) => project._id != id))
    } 
    catch (error) {
      console.log("Error deleting the projects : ",error);
    }
  }

  return (
    <motion.div className="bg-gradient-to-br from-[#014f74] via-[#013f60] to-[#012f4a] min-h-screen py-10 px-4">
      <motion.div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white text-4xl text-center font-bold mb-10 tracking-wide"
        >
          Admin Dashboard
        </motion.h1>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 items-center flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold text-white text-center mb-4">
              📅 Events
            </h2>

            {/* Event Cards */}
            <div className="flex flex-col gap-5 w-full">
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-5 bg-[#035b99] rounded-xl p-4 shadow-md hover:bg-[#0373c2] transition duration-300"
                >
                  <img
                    src="https://sih.gov.in/img/events/sih-2022/3.jpg"
                    alt="Event"
                    className="object-cover h-24 w-24 rounded-xl shadow-md"
                  />
                  <div className="flex flex-col items-center sm:items-start gap-2 text-white text-center sm:text-left">
                    <h3 className="text-lg font-bold">Smart India Hackathon</h3>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 bg-green-400 text-black px-3 py-1 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-sm border-b-4 border-green-700 cursor-pointer">
                        <Eye size={18} /> View
                      </button>
                      <button className="flex items-center gap-2 bg-red-400 text-black px-3 py-1 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-sm border-b-4 border-red-700 cursor-pointer">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
            href="/"
            className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]">
              Add Events
            </Link>
          </motion.div>

          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-white text-center flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold mb-3">📝 Blogs</h2>

            {blogs.length === 0 ? (
              <p className="text-sm text-gray-300">Blog section coming soon!</p>
            ) : (
              <div className="flex flex-col gap-5 w-full">
                {blogs.map((blog, id) => (
                  <div
                    key={id}
                    className="flex items-center justify-between bg-[#035b99] rounded-xl p-4 shadow-md hover:bg-[#0373c2] transition duration-300"
                  >
                    <h3 className="text-white text-lg font-semibold truncate max-w-xs">
                      {blog.title}
                    </h3>
                    <div className="flex gap-3">
                      <Link
                        href='/blog'
                        className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-sm border-b-4 border-green-700"
                      >
                        <Eye size={18} /> View
                      </Link>
                      <button
                        onClick={() => handleBlogDelete(blog._id)}
                        className="flex items-center gap-1 bg-red-400 text-black px-3 py-1 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-sm border-b-4 border-red-700"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add Blogs Button with margin top */}
            <div className="mt-6">
              <Link
                href="blog/create"
                className="inline-block bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]"
              >
                Add Blogs
              </Link>
            </div>
          </motion.div>

          {/* Admins Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-white flex flex-col gap-4 items-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              👨‍💼 Admins
            </h2>
            <motion.div className="flex flex-col gap-5 w-full">
              {admins.map((admin) => (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duartion: 0.6 }}
                className="flex items-center gap-4 p-3 bg-[#035b99] rounded-xl shadow-md hover:bg-[#0373c2] transition duration-300 px-5"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                  alt="member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{admin.username}</h3>
                </div>
              </motion.div>
              ))}
              
            </motion.div>
          </motion.div>

          {/* Project Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-white text-center flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold mb-3">🤖 Projects</h2>

            {projects.length === 0 ? (
              <p className="text-sm text-gray-300">Projetcs coming soon!</p>
            ) : (
              <div className="flex flex-col gap-5 w-full">
                {projects.map((project, id) => (
                  <div
                    key={id}
                    className="flex items-center justify-between bg-[#035b99] rounded-xl p-4 shadow-md hover:bg-[#0373c2] transition duration-300"
                  >
                    <div>
                    <h3 className="text-white text-lg font-semibold truncate max-w-xs">
                      {project.title}
                    </h3>
                    <p>{project.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href='/blog'
                        className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-sm border-b-4 border-green-700"
                      >
                        <Eye size={18} /> View
                      </Link>
                      <button
                        onClick={() => handleProjectDelete(project._id)}
                        className="flex items-center gap-1 bg-red-400 text-black px-3 py-1 rounded-lg font-medium hover:scale-105 transition duration-300 shadow-sm border-b-4 border-red-700"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add Projects Button with margin top */}
            <div className="mt-6">
              <Link
                href="project/create"
                className="inline-block bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]"
              >
                Add Projects
              </Link>
            </div>
          </motion.div>

          {/* Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-white flex flex-col gap-4 items-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              🙍‍♂️ Members
            </h2>
            <motion.div className="flex flex-col gap-5 w-full">
              {admins.map((admin) => (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duartion: 0.6 }}
                className="flex items-center gap-4 p-3 bg-[#035b99] rounded-xl shadow-md hover:bg-[#0373c2] transition duration-300 px-5"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                  alt="member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{admin.username}</h3>
                </div>
              </motion.div>
              ))}
              
            </motion.div>
            <Link
              href="certificate/new"
              className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]"
            >
              Add Members
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
