"use client";
import React, { useEffect, useState } from "react";
import {
  PencilIcon,
  FileText,
  Camera,
  Tags,
  MonitorPlay,
  Github,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";
import { addProjects } from "@/lib/projectAction";
import { CldUploadWidget } from "next-cloudinary";

export default function ProjectUpdateForm() {
  const router = useRouter();

  // logic for sending form data for further processing

  const todayDate = new Date().toISOString().split("T")[0]; 

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    demo : "",
    date : todayDate,
    repo: "",
    images : []
  });

  // for submit button to validate user input
  const [isDisabled, setIsDisabled] = useState(false);

  // check if the fields are empty or not
  useEffect(() => {
    const isFieldEmpty = Object.values(formData).some((field) => field === "");

    // if there is any empty field set the disabled true
    setIsDisabled(isFieldEmpty);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProjects(formData);
      console.log(response);

      if (response?.success) {
        router.push("/admin");
      } else {
        alert("Error adding project");
      }
    } catch (error) {
      console.log("Error in adding project : ", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#30a5da] to-[#07689F] min-h-screen items-center justify-center py-20">
      {/* animation div */}
      <div className="grid  bg-white rounded-3xl shadow-2xl overflow-hidden w-[90%] lg:w-[80%] mx-auto gap-4">

        {/* form div */}
        <motion.div className="bg-gradient-to-b from-[#eaf4f9] to-[#d8eefb] p-10 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-medium text-[#07689F] text-center mb-2"
          >
            Project Addition Form
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#0A5782] font-semibold text-[16px] text-center mb-8"
          >
            ( Please provide the following details to feature project on the
            IEEE website. )
          </motion.p>

          {/* Form component */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400"
            >
              <PencilIcon className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="title"
                type="text"
                value={formData.title}
                placeholder="Enter title of project"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </motion.div>

            {/* Desc */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-start border border-[#0781C2] rounded-lg p-3 shadow-sm shadow-blue-400 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
            >
              <FileText className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <textarea
                name="description"
                type="text"
                placeholder="Enter project description"
                required
                value={formData.description}
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </motion.div>

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400"
            >
              <Tags className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="category"
                type="text"
                value={formData.category}
                placeholder="Enter category of project"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </motion.div>

            {/* demo link */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400"
            >
              <MonitorPlay className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="demo"
                type="text"
                value={formData.demo}
                placeholder="Enter demo link of project"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, demo: e.target.value })
                }
              />
            </motion.div>

            {/* Date of project creation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400"
            >
              <Calendar className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="date"
                type="date"
                value={formData.date}
                placeholder="Enter date of project"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </motion.div>
            {/* repo link */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400"
            >
              <Github className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="repo"
                type="text"
                value={formData.repo}
                placeholder="Enter repository link of project"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, repo: e.target.value })
                }
              />
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]"
            >
              <Camera className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <CldUploadWidget
                uploadPreset="ieee_website"
                onSuccess={(result) => {
                  const url = result.info.secure_url;

                  setFormData((prev) => ({
                    ...prev,
                    images: [...prev.images, url],
                  }));
                }}
              >
                {({ open }) => {
                  return (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="bg-[#2084b2] hover:bg-[#07689F] cursor-pointer text-white px-4 py-2 rounded-md shadow transition duration-300"
                    >
                      Upload Image
                    </button>
                  );
                }}
              </CldUploadWidget>
              {/* Image preview */}
              {formData.images.length > 0 && (
                <div className="flex gap-3 flex-wrap mt-5">
                  {formData.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`uploaded-${i}`}
                      className="w-24 h-24 object-cover rounded border"
                    />
                  ))}
                </div>
              )}
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
              Add Project
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
