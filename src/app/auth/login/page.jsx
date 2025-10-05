"use client";

import { LockKeyhole, User } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#056b9a] to-[#07689F] px-4">
      <motion.form
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 flex flex-col gap-6"
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-semibold text-gray-200 text-center"
        >
          Admin Login
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-start bg-white/10 border border-white/30 rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#b7def0] shadow-md"
        >
          <User className="w-5 h-5 text-white mr-3 mt-1" />
          <input
            name="username"
            type="text"
            placeholder="Enter username"
            required
            className="outline-none w-full bg-transparent text-white placeholder:text-gray-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-start bg-white/10 border border-white/30 rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#b7def0] shadow-md"
        >
          <LockKeyhole className="w-5 h-5 text-white mr-3 mt-1" />
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            required
            className="outline-none w-full bg-transparent text-white placeholder:text-gray-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <button
            type="submit"
            className="bg-[#03426793] text-white py-2 rounded-2xl font-semibold hover:scale-3d hover:scale-105 transition cursor-pointer duration-300 shadow-lg"
          >
            Login
          </button>
          <a
            href="/auth/login"
            className="text-center text-slate-300 hover:text-blue-300 transition duration-200 cursor-pointer"
          >
            New Admin? Click to register!
          </a>
        </motion.div>
      </motion.form>
    </div>
  );
}
