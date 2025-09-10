"use client";
import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  IdCard,
  CalendarDays,
  Pencil,
  Newspaper,
} from "lucide-react";
import { motion } from "framer-motion";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function PeopleUpdateForm() {
  // logic for sending form data for further processing
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: 2406126, // default
    year: 2025, // deafult
    designation: "",
    contribution: "",
  });

  // for submit button to validate user input
  const [isDisabled, setIsDisabled] = useState(false);

  // check if the fields are empty or not
  useEffect(() => {
    const isFieldEmpty = Object.values(formData).some((field) => field === "");

    // if there is any empty field set the disabled true
    setIsDisabled(isFieldEmpty);
  }, [formData]);

  const handleSubmit = () => {};

  return (
    <div className="bg-gradient-to-b from-[#3DBAF3] to-[#07689F] min-h-screen items-center justify-center py-20">
      {/* animation div */}
      <div className="">
      {/* <motion.div>
        <DotLottieReact
          src="https://lottie.host/66945788-7de6-4653-8826-182979014259/3Kt5hgkbNK.lottie"
          loop
          autoplay
        />
      </motion.div> */}

      {/* form div */}
      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl py-10 px-9 mx-auto w-[90%] md:max-w-2xl hover:-translate-y-2 transition-all duration-300"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-[600] text-[#07689F] text-center mb-3"
        >
          Certificate Issuance Form
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#0A5782] font-semibold text-[16px] text-center mb-8"
        >
          ( Provide verified member details for official certificate generation.
          )
        </motion.p>

        {/* Form component */}
        <form className="flex flex-col gap-5">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3]"
          >
            <User className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <input
              name="name"
              type="text"
              placeholder="Enter member's name"
              required
              className="outline-none w-full text-gray-700"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
          >
            <Mail className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <input
              name="email"
              type="email"
              placeholder="Enter member's email address"
              required
              className="outline-none w-full text-gray-700"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </motion.div>

          {/* Roll no */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
          >
            <IdCard className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <input
              name="roll"
              type="number"
              placeholder="Enter member's roll number"
              required
              className="outline-none w-full text-gray-700"
              onChange={(e) =>
                setFormData({ ...formData, roll: e.target.value })
              }
            />
          </motion.div>

          {/* Year */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
          >
            <CalendarDays className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <input
              name="year"
              type="number"
              placeholder="Enter academic year(e.g 2025)"
              required
              className="outline-none w-full text-gray-700"
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            />
          </motion.div>

          {/* Designation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
          >
            <Pencil className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <input
              name="designation"
              type="text"
              placeholder="Enter member's designation"
              required
              onChange={(e) =>
                setFormData({ ...formData, designation: e.target.value })
              }
              className="outline-none w-full text-gray-700"
            />
          </motion.div>

          {/* Interets/ Contribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
          >
            <Newspaper className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <textarea
              name="contribution"
              placeholder="Enter member's contribution"
              required
              onChange={(e) =>
                setFormData({ ...formData, contribution: e.target.value })
              }
              className="outline-none w-full text-gray-700 h-24"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            type="submit"
            onClick={handleSubmit}
            className={`w-full bg-gradient-to-r from-[#3DBAF3] to-[#07689F] text-white py-3 rounded-lg hover:-translate-y-1 transition duration-500 shadow-md shadow-[#1a80b0] ${
              isDisabled
                ? "opacity-60 cursor-not-allowed"
                : "opacity-90 hover:cursor-pointer "
            }`}
          >
            Generate Certificate
          </motion.button>
        </form>
      </motion.div>
      </div>
      
    </div>
  );
}
