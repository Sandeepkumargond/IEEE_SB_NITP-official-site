"use client";
import React, { useEffect, useState } from "react";
import { Eye, Trash2, LogOut, Send } from "lucide-react";
import { deleteBlog, fetchAllBlog } from "@/lib/blogAction";
import { fetchAllProjects } from "@/lib/projectAction";
import { createEvent, deleteEvent, fetchAllEvents } from "@/lib/eventAction";
import Link from "next/link";
import { fetchAllMembers, getAdmin, registerAdmin, deleteAdmin, logoutAdmin, issueCertificate, deleteMember } from "@/lib/adminAction";
import { deleteProjects } from "@/lib/projectAction";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [newAdminUsername, setNewAdminUsername] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  
  // Pagination states
  const [eventsPage, setEventsPage] = useState(1);
  const [blogsPage, setBlogsPage] = useState(1);
  const [projectsPage, setProjectsPage] = useState(1);
  const [membersPage, setMembersPage] = useState(1);
  const [adminsPage, setAdminsPage] = useState(1);
  const itemsPerPage = 5;

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
      alert("Error logging out");
    }
  }

  // Handle Issue Certificate
  const handleIssueCertificate = async (memberId) => {
    try {
      const response = await issueCertificate(memberId);
      console.log(response);
      
      if (response.success) {
        // Refresh members list
        const membersResp = await fetchAllMembers();
        setMembers(membersResp.data || []);
        alert(response.message || "Certificate issued successfully!");
      } else {
        alert(response.message || "Failed to issue certificate");
      }
    } catch (error) {
      console.log(error);
      alert("Error issuing certificate");
    }
  }

  // Handle Delete Member
  const handleDeleteMember = async (memberId) => {
    if (!confirm("Are you sure you want to delete this member?")) return;
    
    try {
      const response = await deleteMember(memberId);
      console.log(response);
      
      if (response.success) {
        // Refresh members list
        const membersResp = await fetchAllMembers();
        setMembers(membersResp.data || []);
        alert(response.message || "Member deleted successfully!");
      } else {
        alert(response.message || "Failed to delete member");
      }
    } catch (error) {
      console.log(error);
      alert("Error deleting member");
    }
  }

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
        {/* Heading with Logout */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-white text-4xl text-center font-bold tracking-wide flex-1">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 items-center flex flex-col gap-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold text-white">
                Events
              </h2>
              <Link href="/events/create" className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600">
                add event
              </Link>
            </div>

            {/* Event Cards */}
            <div className="flex flex-col gap-5 w-full">
              {events.slice((eventsPage - 1) * itemsPerPage, eventsPage * itemsPerPage).map((event, index) => (
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
            </div>
            {events.length > itemsPerPage && (
              <div className="flex items-center justify-between w-full mt-auto pt-4">
                <button
                  onClick={() => setEventsPage(eventsPage - 1)}
                  disabled={eventsPage === 1}
                  className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                >
                  Prev
                </button>
                <span className="text-white font-semibold">{eventsPage}/{Math.ceil(events.length / itemsPerPage)}</span>
                <button
                  onClick={() => setEventsPage(eventsPage + 1)}
                  disabled={eventsPage >= Math.ceil(events.length / itemsPerPage)}
                  className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Blog Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white flex flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold">📝 Blogs</h2>
              <Link href="/blogs/create" className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600">
                add blog
              </Link>
            </div>

            {blogs.length === 0 ? (
              <p className="text-sm text-gray-300">Blog section coming soon!</p>
            ) : (
              <>
                <div className="flex flex-col gap-5 w-full">
                  {blogs.slice((blogsPage - 1) * itemsPerPage, blogsPage * itemsPerPage).map((blog, id) => (
                    <div
                      key={blog._id || id}
                      className="flex items-center justify-between bg-[#035b99] rounded-xl p-4 shadow-md"
                    >
                      <h3 className="text-white text-lg font-semibold truncate max-w-xs">
                        {blog.title}
                      </h3>
                      <div className="flex gap-3">
                        <Link
                          href='/blogs'
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
                {blogs.length > itemsPerPage && (
                  <div className="flex items-center justify-between w-full mt-auto pt-4">
                    <button
                      onClick={() => setBlogsPage(blogsPage - 1)}
                      disabled={blogsPage === 1}
                      className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                    >
                      Prev
                    </button>
                    <span className="text-white font-semibold">{blogsPage}/{Math.ceil(blogs.length / itemsPerPage)}</span>
                    <button
                      onClick={() => setBlogsPage(blogsPage + 1)}
                      disabled={blogsPage >= Math.ceil(blogs.length / itemsPerPage)}
                      className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Add Blogs Button with margin top */}
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
              {admins.slice((adminsPage - 1) * itemsPerPage, adminsPage * itemsPerPage).map((admin) => (
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
            {admins.length > itemsPerPage && (
              <div className="flex items-center justify-between w-full mt-auto pt-4">
                <button
                  onClick={() => setAdminsPage(adminsPage - 1)}
                  disabled={adminsPage === 1}
                  className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                >
                  Prev
                </button>
                <span className="text-white font-semibold">{adminsPage}/{Math.ceil(admins.length / itemsPerPage)}</span>
                <button
                  onClick={() => setAdminsPage(adminsPage + 1)}
                  disabled={adminsPage >= Math.ceil(admins.length / itemsPerPage)}
                  className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Project Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white flex flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-semibold">🤖 Projects</h2>
              <Link href="/projects/create" className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600">
                add project
              </Link>
            </div>

            {projects.length === 0 ? (
              <p className="text-sm text-gray-300">Projetcs coming soon!</p>
            ) : (
              <>
                <div className="flex flex-col gap-5 w-full">
                  {projects.slice((projectsPage - 1) * itemsPerPage, projectsPage * itemsPerPage).map((project, id) => (
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
                {projects.length > itemsPerPage && (
                  <div className="flex items-center justify-between w-full mt-auto pt-4">
                    <button
                      onClick={() => setProjectsPage(projectsPage - 1)}
                      disabled={projectsPage === 1}
                      className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                    >
                      Prev
                    </button>
                    <span className="text-white font-semibold">{projectsPage}/{Math.ceil(projects.length / itemsPerPage)}</span>
                    <button
                      onClick={() => setProjectsPage(projectsPage + 1)}
                      disabled={projectsPage >= Math.ceil(projects.length / itemsPerPage)}
                      className="bg-blue-500 disabled:bg-gray-500 text-white px-3 py-1 rounded-lg font-medium hover:bg-blue-600"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Add Projects Button with margin top */}
          </div>

          {/* Members Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white flex flex-col gap-4 lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
              <h2 className="text-2xl font-semibold">
                Members
              </h2>
              <Link href="/certificate/new" className="bg-green-500 hover:bg-green-600 transition text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                + add member
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {members.slice((membersPage - 1) * itemsPerPage, membersPage * itemsPerPage).map((member) => (
                <div key={member._id} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-[#035b99] rounded-xl shadow-md hover:shadow-lg transition">
                  <img
                    src={member.profilePic && member.profilePic.length > 0 ? member.profilePic[0] : "https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"}
                    alt="member"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">{member.name}</h3>
                    <p className="text-sm text-gray-300 truncate">{member.email}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {member.certificateIssued ? (
                        <span className="text-green-400 font-medium">✓ Certificate Issued</span>
                      ) : (
                        <span className="text-yellow-400 font-medium">⚠ Pending</span>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                    {member.certificateIssued ? (
                      <div className="flex items-center justify-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg font-semibold shadow-md flex-1 sm:flex-none">
                        <span>✓</span>
                        <span>Issued</span>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleIssueCertificate(member._id)}
                        className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold shadow-md transition flex-1 sm:flex-none"
                      >
                        <Send size={16} />
                        <span>Issue</span>
                      </button>
                    )}
                    <button 
                      onClick={() => handleDeleteMember(member._id)}
                      className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold shadow-md transition flex-1 sm:flex-none"
                    >
                      <Trash2 size={16} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {members.length > itemsPerPage && (
              <div className="flex flex-wrap items-center justify-between gap-3 w-full mt-auto pt-4">
                <button
                  onClick={() => setMembersPage(membersPage - 1)}
                  disabled={membersPage === 1}
                  className="bg-blue-500 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 disabled:cursor-not-allowed transition"
                >
                  ← Prev
                </button>
                <span className="text-white font-semibold text-center flex-1 sm:flex-none">{membersPage}/{Math.ceil(members.length / itemsPerPage)}</span>
                <button
                  onClick={() => setMembersPage(membersPage + 1)}
                  disabled={membersPage >= Math.ceil(members.length / itemsPerPage)}
                  className="bg-blue-500 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 disabled:cursor-not-allowed transition"
                >
                  Next →
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}