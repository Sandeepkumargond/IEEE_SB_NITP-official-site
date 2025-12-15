"use client";
import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  Pencil,
  Newspaper,
  Camera,
  FileText,
  MapPin,
  Link,
} from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { motion } from "framer-motion";
import { addMember } from "@/lib/adminAction";
import { useRouter } from "next/navigation";
import { createEvent } from "@/lib/eventAction";

export default function EventUpdateForm() {

  const router = useRouter()

  // logic for sending form data for further processing
  const [formData, setFormData] = useState({
    title : "",
    desc : "",
    images : [],
    eventDate : Date.now(),
    location : "",
    registrationLink : ""
  });

  // for submit button to validate user input
  const [isDisabled, setIsDisabled] = useState(false);

  // check if the fields are empty or not
  useEffect(() => {
    const isFieldEmpty = Object.values(formData).some((field) => field === "");

    // if there is any empty field set the disabled true
    setIsDisabled(isFieldEmpty);
  }, [formData]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const formObj = new FormData()
      Object.entries(formData).forEach(([key,value]) => {
        formObj.append(key,value)
      })

      const response = await createEvent(formData);
      console.log(response)

      if(response?.success){
        router.push('/admin')
      }
      else{
        alert("Error adding events")
      }
    } 
    catch (error) {
      console.log("Error in adding events : ", error) 
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#30a5da] to-[#07689F] min-h-screen items-center justify-center py-20">
      {/* animation div */}
      <div className="grid bg-white rounded-3xl shadow-2xl overflow-hidden w-[90%] lg:w-[80%] mx-auto gap-4">

        {/* form div */}
        <motion.div className="bg-gradient-to-b from-[#eaf4f9] to-[#d8eefb] p-10 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-medium text-[#07689F] text-center mb-2"
          >
            Event Registration Form
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#0A5782] font-semibold text-[16px] text-center mb-8"
          >
            ( Provide accurate event details for official listing and promotion. )
          </motion.p>

          {/* Form component */}
          <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-5">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400"
            >
              <Pencil className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="title"
                type="text"
                value={formData.title}
                placeholder="Enter event title"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-start border border-[#0781C2] rounded-lg p-3 shadow-sm shadow-blue-400 focus-within:ring-2 focus-within:ring-[#3DBAF3]"
            >
              <FileText className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <textarea
                name="desc"
                type="desc"
                placeholder="Enter event description"
                required
                value={formData.desc}
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
              />
            </motion.div>

            {/* eventDate */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]"
            >
              <CalendarDays className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="eventDate"
                type="date"
                placeholder="Enter event date"
                required
                value={formData.eventDate}
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData, eventDate: e.target.value })
                }
              />
            </motion.div>

            {/* location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]"
            >
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="location"
                type="text"
                placeholder="Enter location of event"
                required
                value={formData.location}
                className="outline-none w-full text-gray-700"
                onChange={(e) =>
                  setFormData({ ...formData,location: e.target.value })
                }
              />
            </motion.div>

            {/* Regsitration link */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]"
            >
              <Link className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="registrationLink"
                type="text"
                placeholder="Enter event registration link"
                required
                value={formData.registrationLink}
                onChange={(e) =>
                  setFormData({ ...formData, registrationLink: e.target.value })
                }
                className="outline-none w-full text-gray-700"
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
              Register Event
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
