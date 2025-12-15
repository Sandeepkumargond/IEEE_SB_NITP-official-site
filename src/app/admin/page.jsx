"use client";
import React, { useEffect, useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import { deleteBlog, fetchAllBlog } from "@/lib/blogAction";
import { fetchAllProjects } from "@/lib/projectAction";
import { createEvent, deleteEvent, fetchAllEvents } from "@/lib/eventAction";
import Link from "next/link";
import { fetchAllMembers, getAdmin, registerAdmin, deleteAdmin } from "@/lib/adminAction";
import { deleteProjects } from "@/lib/projectAction";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [newAdminUsername, setNewAdminUsername] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  // member addition and showcase
 useEffect(() => {
  const fetchMembers = async() => {
    try {
      const response = await fetchAllMembers();
      console.log(response);

      setMembers(response.data || [])
    } 
    catch (error) {
      console.log(error);
    }
  };
  
  fetchMembers();
 },[])

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

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAdmin({ username: newAdminUsername, password: newAdminPassword });
      console.log("registerAdmin ->", response);
      if (response.success) {
        // refresh admin list
        const adminsResp = await getAdmin();
        setAdmins(adminsResp.data || []);
        setNewAdminUsername("");
        setNewAdminPassword("");
        alert(response.message || "Admin added");
      } else {
        alert(response.message || "Failed to add admin");
      }
    } catch (error) {
      console.log(error);
      alert("Error adding admin");
    }
  }

  const handleDeleteAdmin = async (id) => {
    if (!confirm("Are you sure you want to delete this admin?")) return;
    try {
      const response = await deleteAdmin(id);
      console.log("deleteAdmin ->", response);
      if (response.success) {
        const adminsResp = await getAdmin();
        setAdmins(adminsResp.data || []);
        alert(response.message || "Admin deleted");
      } else {
        alert(response.message || "Failed to delete admin");
      }
    } catch (error) {
      console.log(error);
      alert("Error deleting admin");
    }
  }

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

  // fetching events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetchAllEvents();
        console.log(response);

        setEvents(response.data || []);
      } catch (error) {
        console.error("Error loading blogs:", error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  const handleEventDelete = async(id) => {
    try {
      const response = await deleteEvent(id);
      console.log(response);

      setEvents((prevEvents) => prevEvents.filter((event) => event._id != id))
    } 
    catch (error) {
      console.log("Error deleting the event : ",error);
    }
  }

// handle project
useEffect(() => {
  const loadAllProjects = async () => {
    try {
      const response = await fetchAllProjects(); 
      console.log(response);
      setProjects(response.data || []);
    } catch (error) {
      console.log("Error in fetching projects : ", error);
    }
  };

  loadAllProjects();
}, []);

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
    <div className="bg-linear-to-br from-[#014f74] via-[#013f60] to-[#012f4a] min-h-screen py-10 px-4 w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white text-4xl text-center font-bold mb-10 tracking-wide">
          Admin Dashboard
        </h1>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 items-center flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">
               Events
            </h2>

            {/* Event Cards */}
            <div className="flex flex-col gap-5 w-full">
              {events.map((event, index) => (
                <div
                  key={event._id || index}
                  className="flex flex-col sm:flex-row items-center gap-5 bg-[#035b99] rounded-xl p-4 shadow-md"
                >
                  {event.images.length > 0 ? 
                  <img
                  src={event.images[0]}
                  alt="Event"
                  className="object-cover h-24 w-24 rounded-xl shadow-md"
                /> : 
                <img
                    src="https://sih.gov.in/img/events/sih-2022/3.jpg"
                    alt="Event"
                    className="object-cover h-24 w-24 rounded-xl shadow-md"
                  />
                }
                  
                  <div className="flex flex-col items-center sm:items-start gap-2 text-white text-center sm:text-left">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <div className="flex gap-2">
                      <Link href="/events" className="flex items-center gap-2 bg-green-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-green-700">
                        <Eye size={18} /> View
                      </Link>
                      <button
                      onClick={() => handleEventDelete(event._id)}
                      className="flex items-center gap-2 bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            <Link href="/events/create" className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md">
              Add Events
            </Link>
          </div>
          </div>

          {/* Blog Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white text-center flex flex-col gap-6">
            <h2 className="text-2xl font-semibold mb-3">📝 Blogs</h2>

            {blogs.length === 0 ? (
              <p className="text-sm text-gray-300">Blog section coming soon!</p>
            ) : (
              <div className="flex flex-col gap-5 w-full">
                {blogs.map((blog, id) => (
                  <div
                    key={blog._id || id}
                    className="flex items-center justify-between bg-[#035b99] rounded-xl p-4 shadow-md"
                  >
                    <h3 className="text-white text-lg font-semibold truncate max-w-xs">
                      {blog.title}
                    </h3>
                    <div className="flex gap-3">
                      <Link
                        href='/blog'
                        className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-green-700"
                      >
                        <Eye size={18} /> View
                      </Link>
                      <button onClick={() => handleBlogDelete(blog._id)} className="flex items-center gap-1 bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add Blogs Button with margin top */}
            <div className="mt-6">
              <Link href="blogs/create" className="inline-block bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md">Add Blogs</Link>
            </div>
          </div>

          {/* Admins Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">
               Admins
            </h2>
            {/* Add Admin Form */}
            <form onSubmit={handleAddAdmin} className="w-full max-w-sm flex flex-col gap-3 mb-3">
              <input
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 text-white"
                placeholder="username"
                value={newAdminUsername}
                onChange={(e) => setNewAdminUsername(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder:text-gray-300 text-white"
                placeholder="password"
                type="password"
                value={newAdminPassword}
                onChange={(e) => setNewAdminPassword(e.target.value)}
              />
              <button type="submit" className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold">Add Admin</button>
            </form>
            <div className="flex flex-col gap-5 w-full">
              {admins.map((admin) => (
                <div key={admin._id} className="flex items-center gap-4 p-3 bg-[#035b99] rounded-xl shadow-md px-5">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                  alt="member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{admin.username}</h3>
                </div>
                <div className="ml-auto flex gap-2">
                  <button onClick={() => handleDeleteAdmin(admin._id)} className="bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700">Delete</button>
                </div>
                </div>
              ))}
              
            </div>
          </div>

          {/* Project Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white text-center flex flex-col gap-6">
            <h2 className="text-2xl font-semibold mb-3">🤖 Projects</h2>

            {projects.length === 0 ? (
              <p className="text-sm text-gray-300">Projetcs coming soon!</p>
            ) : (
              <div className="flex flex-col gap-5 w-full">
                {projects.map((project, id) => (
                  <div
                    key={project._id || id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#035b99] rounded-xl p-4 shadow-md gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-lg font-semibold truncate">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/90 truncate">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <Link href='/projects' className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-green-700">
                        <Eye size={18} /> View
                      </Link>
                      <button onClick={() => handleProjectDelete(project._id)} className="flex items-center gap-1 bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700">
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add Projects Button with margin top */}
            <div className="mt-6">
              <Link href="projects/create" className="inline-block bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md">Add Projects</Link>
            </div>
          </div>

          {/* Members Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Members
            </h2>
            <div className="flex flex-col gap-5 w-full">
              {members.map((member) => (
                <div key={member._id} className="flex items-center gap-4 p-3 bg-[#035b99] rounded-xl shadow-md px-5">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                  alt="member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                </div>
                </div>
              ))}
              
            </div>
            <Link href="certificate/new" className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md">Add Members</Link>
          </div>

        </div>
      </div>
    </div>
  );
}