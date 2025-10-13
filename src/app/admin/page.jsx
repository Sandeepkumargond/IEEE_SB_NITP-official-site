"use client";

import './admin.css';
import { useState } from "react";
import { IoIosMail } from "react-icons/io";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [projects, setProjects] = useState([]);

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
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(167.78deg,_rgba(13,_43,_204,_0.82)_20.79%,_rgba(255,_255,_255,_0.82)_91.1%)] p-4 md:p-6">
      <div
        className="relative w-full max-w-[1299px] md:min-h-[926px] rounded-[30px] border-2 border-solid border-white/60 bg-[linear-gradient(117.4deg,_rgba(255,_255,_255,_0.2)_1.72%,_rgba(255,_255,_255,_0.05)_97.87%)] backdrop-blur-[20px] shadow-[0px_20px_40px_0px_#0000001A] opacity-[0.95] flex items-center justify-center mx-auto p-4 md:p-6"
        style={{
          backgroundImage: "url(/Rectangle 25.svg)",
          backgroundSize: "cover",
        }}
      >
        {/* Desktop logo: positioned inside the box at the top-left on md+ screens */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="hidden md:block absolute top-6 left-6 w-[180px] h-auto z-20"
          style={{ opacity: 1 }}
        />

        {/* Content wrapper: on mobile we stack logo, hero and form vertically in this order */}
        <div className="w-full max-w-[919px] md:h-[655px] opacity-[1] rounded-[20px] flex flex-col md:flex-row items-stretch bg-no-repeat bg-center md:bg-[url('/Vector.svg')] md:bg-cover relative">
          {/* Mobile decorative backgrounds: applied per-section */}
          {/* Mobile: centered logo at top (visible only on small screens) */}
          <div className="md:hidden flex justify-center mt-6 mb-8">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-[180px] sm:w-[200px] h-auto"
            />
          </div>
          {/* Left Welcome section */}
          <div className="w-full md:w-1/2 p-6 md:p-12 text-center text-white flex flex-col justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none relative overflow-hidden mobile-hero-bg">
            <div className="z-10">
              <h1 className="tracking-tight align-middle text-3xl md:text-[40px] text-black font-bold mb-4">
                WELCOME TO
              </h1>

              {/* === THIS IS THE UPDATED ANIMATION CODE === */}
              <div className="text-2xl md:text-4xl font-extrabold mb-6 text-purple-700 animated-text-container">
                <div className="animated-text-wrapper">
                  <div>IEEE</div>
                  <div>STUDENT BRANCH</div>
                  <div>NIT PATNA</div>
                </div>
              </div>
              {/* === END OF UPDATED CODE === */}
              <div className="w-full md:w-[382px] h-auto mt-2 mx-auto">
                <p className="font-poppins font-semibold text-base md:text-[24px] leading-snug tracking-tight text-center align-middle text-white">
                  To keep connected with us,
                  <br />
                  please login with your personal
                  <br />
                  information
                </p>
              </div>
            </div>
            <button className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]">
              Add Events
            </button>
          </motion.div>

          {/* Right Admin login form */}
          <div className="w-full md:w-1/2 p-6 md:p-12 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex flex-col justify-center relative overflow-hidden mobile-form-bg">
            <div className="w-full z-10">
              <h2 className="text-3xl md:text-[40px] font-bold mb-8 text-black text-center items-center ">
                ADMIN LOGIN
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* The Email Input Component */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <div className="relative mt-[20px] rounded-[30px] border-2 border-white/60 bg-[linear-gradient(117.4deg,rgba(255,_255,_255,_0.4)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] hover:bg-[linear-gradient(117.4deg,_rgba(3,_246,_234,_0.1)_1.72%,_rgba(255,_255,_255,_0.1)_97.87%)] shadow-[0px_20px_40px_0px_#0000001A] backdrop-blur-[17.4px] opacity-100 py-2 px-6 transition-none">
                    <div className="w-[calc(100%-48px)] border-b border-gray-400">
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className="w-full bg-transparent outline-none pb-1 text-base md:text-xl"
                      />
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
                    <span className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                      {/* Password icon on the right */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#1f1f1f"
                        className="w-6 h-6 md:w-8 md:h-8"
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
                href="blog/create"
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
