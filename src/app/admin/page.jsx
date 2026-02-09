"use client";
import React, { useEffect, useState } from "react";
import {
  Eye,
  Trash2,
  LogOut,
  Send,
  Plus,
  X,
  Filter,
  Pencil,
} from "lucide-react";
import { deleteBlog, fetchAllBlog } from "@/lib/blogAction";
import { fetchAllProjects } from "@/lib/projectAction";
import { createEvent, deleteEvent, fetchAllEvents } from "@/lib/eventAction";
import Link from "next/link";
import {
  fetchAllMembers,
  getAdmin,
  registerAdmin,
  deleteAdmin,
  logoutAdmin,
  issueCertificate,
  deleteMember,
} from "@/lib/adminAction";
import { deleteProjects } from "@/lib/projectAction";
import { useRouter } from "next/navigation";
import {
  addLead,
  fetchAllLeads,
  fetchLeadsByYear,
  deleteLead,
  updateLead,
} from "@/lib/leadAction";
import { CldUploadWidget } from "next-cloudinary";

export default function AdminDashboard() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [newAdminUsername, setNewAdminUsername] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  // Leads state
  const [leads, setLeads] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    designation: "",
    year: 2026,
    githubLink: "",
    linkedInLink: "",
    profilePic: [],
  });
  const [showEditLeadModal, setShowEditLeadModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  // Pagination states
  const [eventsPage, setEventsPage] = useState(1);
  const [blogsPage, setBlogsPage] = useState(1);
  const [projectsPage, setProjectsPage] = useState(1);
  const [membersPage, setMembersPage] = useState(1);
  const [adminsPage, setAdminsPage] = useState(1);
  const [leadsPage, setLeadsPage] = useState(1);
  const itemsPerPage = 5;

  // Year options for leads filter (2017-2026)
  const yearOptions = Array.from({ length: 10 }, (_, i) => 2017 + i);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
      alert("Error logging out");
    }
  };

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
  };

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
  };

  // member addition and showcase
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetchAllMembers();
        console.log(response);

        setMembers(response.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMembers();
  }, []);

  // fetching the admins
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await getAdmin();
        console.log(response);

        setAdmins(response.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdmins();
  }, []);

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAdmin({
        username: newAdminUsername,
        password: newAdminPassword,
      });
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
  };

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
  };

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

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id != id));
    } catch (error) {
      alert("Error deleting blog!");
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

  const handleEventDelete = async (id) => {
    try {
      const response = await deleteEvent(id);
      console.log(response);

      setEvents((prevEvents) => prevEvents.filter((event) => event._id != id));
    } catch (error) {
      console.log("Error deleting the event : ", error);
    }
  };

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

  const handleProjectDelete = async (id) => {
    try {
      const response = await deleteProjects(id);
      console.log(response);

      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id != id),
      );
    } catch (error) {
      console.log("Error deleting the projects : ", error);
    }
  };

  // Fetch leads (with optional year filter)
  useEffect(() => {
    const loadLeads = async () => {
      try {
        let response;
        if (selectedYear === "all") {
          response = await fetchAllLeads();
        } else {
          response = await fetchLeadsByYear(selectedYear);
        }
        console.log("Leads:", response);
        setLeads(response.data || []);
        setLeadsPage(1);
      } catch (error) {
        console.log("Error fetching leads:", error);
        setLeads([]);
      }
    };

    loadLeads();
  }, [selectedYear]);

  // Handle add lead
  const handleAddLead = async (e) => {
    e.preventDefault();
    try {
      const response = await addLead({
        name: newLead.name,
        designation: newLead.designation,
        year: parseInt(newLead.year),
        githubLink: newLead.githubLink,
        linkedInLink: newLead.linkedInLink,
        profilePic: newLead.profilePic,
      });
      console.log("Add lead response:", response);

      if (response.success) {
        // Refresh leads list
        const leadsResp =
          selectedYear === "all"
            ? await fetchAllLeads()
            : await fetchLeadsByYear(selectedYear);
        setLeads(leadsResp.data || []);
        setNewLead({
          name: "",
          designation: "",
          year: 2026,
          githubLink: "",
          linkedInLink: "",
          profilePic: [],
        });
        setShowAddLeadModal(false);
        alert(response.message);
      } else {
        alert(response.message || "Failed to add lead");
      }
    } catch (error) {
      console.log("Error adding lead:", error);
      alert("Error adding lead");
    }
  };

  // Handle delete lead
  const handleDeleteLead = async (leadId) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      const response = await deleteLead(leadId);
      console.log("Delete lead response:", response);

      if (response.success) {
        setLeads((prevLeads) =>
          prevLeads.filter((lead) => lead._id !== leadId),
        );
        alert(response.message);
      } else {
        alert(response.message || "Failed to delete lead");
      }
    } catch (error) {
      console.log("Error deleting lead:", error);
      alert("Error deleting lead");
    }
  };

  // Handle edit lead - open modal with lead data
  const handleEditLead = (lead) => {
    setEditingLead({
      _id: lead._id,
      name: lead.name,
      designation: lead.designation,
      year: lead.year,
      githubLink: lead.githubLink || "",
      linkedInLink: lead.linkedInLink || "",
      profilePic: lead.profilePic || [],
    });
    setShowEditLeadModal(true);
  };

  // Handle update lead
  const handleUpdateLead = async (e) => {
    e.preventDefault();
    try {
      const response = await updateLead(editingLead._id, {
        name: editingLead.name,
        designation: editingLead.designation,
        year: parseInt(editingLead.year),
        githubLink: editingLead.githubLink,
        linkedInLink: editingLead.linkedInLink,
        profilePic: editingLead.profilePic,
      });
      console.log("Update lead response:", response);

      if (response.success) {
        // Refresh leads list
        const leadsResp =
          selectedYear === "all"
            ? await fetchAllLeads()
            : await fetchLeadsByYear(selectedYear);
        setLeads(leadsResp.data || []);
        setShowEditLeadModal(false);
        setEditingLead(null);
        alert(response.message);
      } else {
        alert(response.message || "Failed to update lead");
      }
    } catch (error) {
      console.log("Error updating lead:", error);
      alert("Error updating lead");
    }
  };

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
              <h2 className="text-2xl font-semibold text-white">Events</h2>
              <Link
                href="/events/create"
                className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600"
              >
                Add Event
              </Link>
            </div>

            {/* Event Cards */}
            <div className="flex flex-col gap-5 w-full">
              {events
                .slice(
                  (eventsPage - 1) * itemsPerPage,
                  eventsPage * itemsPerPage,
                )
                .map((event, index) => (
                  <div
                    key={event._id || index}
                    className="flex flex-col sm:flex-row items-center gap-5 bg-[#035b99] rounded-xl p-4 shadow-md"
                  >
                    {event.images.length > 0 ? (
                      <img
                        src={event.images[0]}
                        alt="Event"
                        className="object-cover h-24 w-24 rounded-xl shadow-md"
                      />
                    ) : (
                      <img
                        src="https://sih.gov.in/img/events/sih-2022/3.jpg"
                        alt="Event"
                        className="object-cover h-24 w-24 rounded-xl shadow-md"
                      />
                    )}

                    <div className="flex flex-col items-center sm:items-start gap-2 text-white text-center sm:text-left">
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <div className="flex gap-2">
                        <Link
                          href="/events"
                          className="flex items-center gap-2 bg-green-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-green-700"
                        >
                          <Eye size={18} /> View
                        </Link>
                        <button
                          onClick={() => handleEventDelete(event._id)}
                          className="flex items-center gap-2 bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700"
                        >
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
                <span className="text-white font-semibold">
                  {eventsPage}/{Math.ceil(events.length / itemsPerPage)}
                </span>
                <button
                  onClick={() => setEventsPage(eventsPage + 1)}
                  disabled={
                    eventsPage >= Math.ceil(events.length / itemsPerPage)
                  }
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
              <h2 className="text-2xl font-semibold">Blogs</h2>
              <Link
                href="/blogs/create"
                className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600"
              >
                Add Blog
              </Link>
            </div>

            {blogs.length === 0 ? (
              <p className="text-sm text-gray-300">Blog section coming soon!</p>
            ) : (
              <>
                <div className="flex flex-col gap-5 w-full">
                  {blogs
                    .slice(
                      (blogsPage - 1) * itemsPerPage,
                      blogsPage * itemsPerPage,
                    )
                    .map((blog, id) => (
                      <div
                        key={blog._id || id}
                        className="flex items-center justify-between bg-[#035b99] rounded-xl p-4 shadow-md"
                      >
                        <h3 className="text-white text-lg font-semibold truncate max-w-xs">
                          {blog.title}
                        </h3>
                        <div className="flex gap-3">
                          <Link
                            href="/blogs"
                            className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-green-700"
                          >
                            <Eye size={18} /> View
                          </Link>
                          <button
                            onClick={() => handleBlogDelete(blog._id)}
                            className="flex items-center gap-1 bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700"
                          >
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
                    <span className="text-white font-semibold">
                      {blogsPage}/{Math.ceil(blogs.length / itemsPerPage)}
                    </span>
                    <button
                      onClick={() => setBlogsPage(blogsPage + 1)}
                      disabled={
                        blogsPage >= Math.ceil(blogs.length / itemsPerPage)
                      }
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
            <h2 className="text-2xl font-semibold mb-4 text-center">Admins</h2>
            {/* Add Admin Form */}
            <form
              onSubmit={handleAddAdmin}
              className="w-full max-w-sm flex flex-col gap-3 mb-3"
            >
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
              <button
                type="submit"
                className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold"
              >
                Add Admin
              </button>
            </form>
            <div className="flex flex-col gap-5 w-full">
              {admins
                .slice(
                  (adminsPage - 1) * itemsPerPage,
                  adminsPage * itemsPerPage,
                )
                .map((admin) => (
                  <div
                    key={admin._id}
                    className="flex items-center gap-4 p-3 bg-[#035b99] rounded-xl shadow-md px-5"
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                      alt="member"
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold">
                        {admin.username}
                      </h3>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <button
                        onClick={() => handleDeleteAdmin(admin._id)}
                        className="bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700"
                      >
                        Delete
                      </button>
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
                <span className="text-white font-semibold">
                  {adminsPage}/{Math.ceil(admins.length / itemsPerPage)}
                </span>
                <button
                  onClick={() => setAdminsPage(adminsPage + 1)}
                  disabled={
                    adminsPage >= Math.ceil(admins.length / itemsPerPage)
                  }
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
              <h2 className="text-2xl font-semibold">Projects</h2>
              <Link
                href="/projects/create"
                className="bg-green-500 text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600"
              >
                Add Project
              </Link>
            </div>

            {projects.length === 0 ? (
              <p className="text-sm text-gray-300">Projetcs coming soon!</p>
            ) : (
              <>
                <div className="flex flex-col gap-5 w-full">
                  {projects
                    .slice(
                      (projectsPage - 1) * itemsPerPage,
                      projectsPage * itemsPerPage,
                    )
                    .map((project, id) => (
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
                          <Link
                            href="/projects"
                            className="flex items-center gap-1 bg-green-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-green-700"
                          >
                            <Eye size={18} /> View
                          </Link>
                          <button
                            onClick={() => handleProjectDelete(project._id)}
                            className="flex items-center gap-1 bg-red-400 text-black px-3 py-1 rounded-lg font-medium shadow-sm border-b-4 border-red-700"
                          >
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
                    <span className="text-white font-semibold">
                      {projectsPage}/{Math.ceil(projects.length / itemsPerPage)}
                    </span>
                    <button
                      onClick={() => setProjectsPage(projectsPage + 1)}
                      disabled={
                        projectsPage >=
                        Math.ceil(projects.length / itemsPerPage)
                      }
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
              <h2 className="text-2xl font-semibold">Members</h2>
              <Link
                href="/certificate/new"
                className="bg-green-500 hover:bg-green-600 transition text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
              >
                Add Member
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full">
              {members
                .slice(
                  (membersPage - 1) * itemsPerPage,
                  membersPage * itemsPerPage,
                )
                .map((member) => (
                  <div
                    key={member._id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-[#035b99] rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    <img
                      src={
                        member.profilePic && member.profilePic.length > 0
                          ? member.profilePic[0]
                          : "https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                      }
                      alt="member"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-300 truncate">
                        {member.email}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {member.certificateIssued ? (
                          <span className="text-green-400 font-medium">
                            ✓ Certificate Issued
                          </span>
                        ) : (
                          <span className="text-yellow-400 font-medium">
                            ⚠ Pending
                          </span>
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
                <span className="text-white font-semibold text-center flex-1 sm:flex-none">
                  {membersPage}/{Math.ceil(members.length / itemsPerPage)}
                </span>
                <button
                  onClick={() => setMembersPage(membersPage + 1)}
                  disabled={
                    membersPage >= Math.ceil(members.length / itemsPerPage)
                  }
                  className="bg-blue-500 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 disabled:cursor-not-allowed transition"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
          {/* Leads Section */}
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20 text-white flex flex-col gap-4 lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full">
              <h2 className="text-2xl font-semibold">Leads</h2>
              <div className="flex items-center gap-2 flex-wrap">
                {/* Year Filter */}
                <div className="flex items-center gap-2">
                  <Filter size={18} />
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="all" className="text-black">
                      All Years
                    </option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year} className="text-black">
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setShowAddLeadModal(true)}
                  className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-black px-3 py-1.5 rounded-lg text-sm font-semibold transition"
                >
                  <Plus size={16} /> Add Lead
                </button>
              </div>
            </div>

            {/* Leads List */}
            {leads.length === 0 ? (
              <p className="text-sm text-gray-300">
                No leads found for the selected filter.
              </p>
            ) : (
              <>
                <div className="flex flex-col gap-3 w-full">
                  {leads
                    .slice(
                      (leadsPage - 1) * itemsPerPage,
                      leadsPage * itemsPerPage,
                    )
                    .map((lead) => (
                      <div
                        key={lead._id}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-[#035b99] rounded-xl shadow-md hover:shadow-lg transition"
                      >
                        <img
                          src={
                            lead.profilePic && lead.profilePic.length > 0
                              ? lead.profilePic[0]
                              : "https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                          }
                          alt={lead.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white truncate">
                            {lead.name}
                          </h3>
                          <p className="text-sm text-gray-300 truncate">
                            {lead.designation}
                          </p>
                          <div className="flex gap-2 mt-1 flex-wrap">
                            <span className="text-xs bg-purple-400/30 text-purple-200 px-2 py-0.5 rounded-full">
                              {lead.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleEditLead(lead)}
                            className="flex items-center justify-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg font-semibold shadow-md transition"
                          >
                            <Pencil size={16} />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteLead(lead._id)}
                            className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold shadow-md transition"
                          >
                            <Trash2 size={16} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Pagination */}
                {leads.length > itemsPerPage && (
                  <div className="flex flex-wrap items-center justify-between gap-3 w-full mt-auto pt-4">
                    <button
                      onClick={() => setLeadsPage(leadsPage - 1)}
                      disabled={leadsPage === 1}
                      className="bg-blue-500 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 disabled:cursor-not-allowed transition"
                    >
                      ← Prev
                    </button>
                    <span className="text-white font-semibold text-center flex-1 sm:flex-none">
                      {leadsPage}/{Math.ceil(leads.length / itemsPerPage)}
                    </span>
                    <button
                      onClick={() => setLeadsPage(leadsPage + 1)}
                      disabled={
                        leadsPage >= Math.ceil(leads.length / itemsPerPage)
                      }
                      className="bg-blue-500 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 disabled:cursor-not-allowed transition"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Add Lead Modal */}
          {showAddLeadModal && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
              <div className="bg-[#014f74] rounded-2xl p-6 w-full max-w-md shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Add New Lead</h3>
                  <button
                    onClick={() => setShowAddLeadModal(false)}
                    className="text-white/70 hover:text-white transition"
                  >
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleAddLead} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={newLead.name}
                    onChange={(e) =>
                      setNewLead({ ...newLead, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Designation * (e.g., Chairperson, Secretary)"
                    value={newLead.designation}
                    onChange={(e) =>
                      setNewLead({ ...newLead, designation: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <select
                    value={newLead.year}
                    onChange={(e) =>
                      setNewLead({ ...newLead, year: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year} className="text-black">
                        {year}
                      </option>
                    ))}
                  </select>
                  <input
                    type="url"
                    placeholder="GitHub Profile Link (optional)"
                    value={newLead.githubLink}
                    onChange={(e) =>
                      setNewLead({ ...newLead, githubLink: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="url"
                    placeholder="LinkedIn Profile Link (optional)"
                    value={newLead.linkedInLink}
                    onChange={(e) =>
                      setNewLead({ ...newLead, linkedInLink: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Profile Picture Upload */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">
                      Profile Picture
                    </label>
                    <CldUploadWidget
                      uploadPreset="ieee_website"
                      onSuccess={(result) => {
                        const url = result.info.secure_url;
                        setNewLead((prev) => ({
                          ...prev,
                          profilePic: [...prev.profilePic, url],
                        }));
                      }}
                    >
                      {({ open }) => (
                        <button
                          type="button"
                          onClick={() => open()}
                          className="w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition flex items-center justify-center gap-2"
                        >
                          <Plus size={18} /> Upload Image
                        </button>
                      )}
                    </CldUploadWidget>
                    {newLead.profilePic.length > 0 && (
                      <div className="flex gap-2 flex-wrap mt-2">
                        {newLead.profilePic.map((pic, i) => (
                          <div key={i} className="relative">
                            <img
                              src={pic}
                              alt={`uploaded-${i}`}
                              className="w-16 h-16 rounded-lg object-cover border-2 border-white/30"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setNewLead((prev) => ({
                                  ...prev,
                                  profilePic: prev.profilePic.filter(
                                    (_, idx) => idx !== i,
                                  ),
                                }))
                              }
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-lg transition"
                  >
                    Add Lead
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Edit Lead Modal */}
          {showEditLeadModal && editingLead && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
              <div className="bg-gradient-to-br from-[#023b59] to-[#012f4a] rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Edit Lead</h2>
                  <button
                    onClick={() => {
                      setShowEditLeadModal(false);
                      setEditingLead(null);
                    }}
                    className="text-white/70 hover:text-white transition"
                  >
                    <X size={24} />
                  </button>
                </div>
                <form
                  onSubmit={handleUpdateLead}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    placeholder="Name *"
                    value={editingLead.name}
                    onChange={(e) =>
                      setEditingLead({ ...editingLead, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="Designation * (e.g., Chairperson, Secretary)"
                    value={editingLead.designation}
                    onChange={(e) =>
                      setEditingLead({
                        ...editingLead,
                        designation: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <select
                    value={editingLead.year}
                    onChange={(e) =>
                      setEditingLead({ ...editingLead, year: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year} className="text-black">
                        {year}
                      </option>
                    ))}
                  </select>
                  <input
                    type="url"
                    placeholder="GitHub Profile Link (optional)"
                    value={editingLead.githubLink}
                    onChange={(e) =>
                      setEditingLead({
                        ...editingLead,
                        githubLink: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="url"
                    placeholder="LinkedIn Profile Link (optional)"
                    value={editingLead.linkedInLink}
                    onChange={(e) =>
                      setEditingLead({
                        ...editingLead,
                        linkedInLink: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Profile Picture Upload */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">
                      Profile Picture
                    </label>
                    <CldUploadWidget
                      uploadPreset="ieee_website"
                      onSuccess={(result) => {
                        const url = result.info.secure_url;
                        setEditingLead((prev) => ({
                          ...prev,
                          profilePic: [...(prev.profilePic || []), url],
                        }));
                      }}
                    >
                      {({ open }) => (
                        <button
                          type="button"
                          onClick={() => open()}
                          className="w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition flex items-center justify-center gap-2"
                        >
                          <Plus size={18} /> Upload Image
                        </button>
                      )}
                    </CldUploadWidget>
                    {editingLead.profilePic &&
                      editingLead.profilePic.length > 0 && (
                        <div className="flex gap-2 flex-wrap mt-2">
                          {editingLead.profilePic.map((pic, i) => (
                            <div key={i} className="relative">
                              <img
                                src={pic}
                                alt={`uploaded-${i}`}
                                className="w-16 h-16 rounded-lg object-cover border-2 border-white/30"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setEditingLead((prev) => ({
                                    ...prev,
                                    profilePic: prev.profilePic.filter(
                                      (_, idx) => idx !== i,
                                    ),
                                  }))
                                }
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition"
                  >
                    Update Lead
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
