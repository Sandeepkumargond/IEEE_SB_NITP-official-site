"use client";
import React from "react";
import { motion } from "framer-motion";
import { Eye, Trash2 } from "lucide-react";

export default function AdminDashboard() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 items-center justify-center flex flex-col gap-4"
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
            <button
            className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]"
            >Add Events</button>
          </motion.div>

          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-white text-center"
          >
            <h2 className="text-2xl font-semibold mb-3">📝 Blogs</h2>
            <p className="text-sm text-gray-300">Blog section coming soon!</p>
          </motion.div>

          {/* Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-white flex flex-col gap-4 items-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">👤 Members</h2>
            <motion.div
            className="flex flex-col gap-5 w-full"
            >
                <motion.div 
            initial={{ opacity : 0, y: 20 }}
            animate={{ opacity: 1, y : 0 }}
            transition={{ delay : 1.2, duartion : 0.6}}
            className="flex items-center gap-4 p-4 bg-[#035b99] rounded-xl shadow-md hover:bg-[#0373c2] transition duration-300">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                alt="member"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Diksha Bharti</h3>
                <p className="text-sm text-gray-200">Active Member</p>
              </div>
            </motion.div>
            <motion.div 
            initial={{ opacity : 0, x : 30 }}
            animate={{ opacity: 1, x : 0 }}
            transition={{ delay : 1.2, duartion : 0.6}}
            className="flex items-center gap-4 p-4 bg-[#035b99] rounded-xl shadow-md hover:bg-[#0373c2] transition duration-300">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
                alt="member"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Diksha Bharti</h3>
                <p className="text-sm text-gray-200">Active Member</p>
              </div>
            </motion.div>
            </motion.div>
            <button
            className="bg-[#02406a] px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:translate-y-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:opacity-80 hover:bg-[#5c8cab]"
            >Add Members</button>
          </motion.div>
          
        </div>
      </motion.div>
    </motion.div>
  );
}
