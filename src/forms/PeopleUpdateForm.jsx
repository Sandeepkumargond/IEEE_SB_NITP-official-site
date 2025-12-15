"use client";
import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  IdCard,
  CalendarDays,
  Pencil,
  Newspaper,
  Tags,
  Camera
} from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { addMember } from "@/lib/adminAction";

export default function PeopleUpdateForm() {

  const router = useRouter()

  // logic for sending form data for further processing
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: 2406126, // default
    year: 2025, // deafult
    designation: "",
    role: "",
    contribution: "",
    profilePic : []
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

    // build payload expected by server (note: server expects `contributions`)
    const payload = {
      name: formData.name,
      email: formData.email,
      year: Number(formData.year),
      designation: formData.designation,
      role: formData.role,
      contributions: formData.contribution || "",
    };

    try {
      const response = await addMember(payload)


      console.log(response)

      if (response?.success) {
        router.push("/admin");
      } else {
        alert(response?.message || "Error adding members");
      }
    } catch (error) {
      console.log("Error in generating certificate : ", error);
      alert("Error adding members");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#30a5da] to-[#07689F] min-h-screen items-center justify-center py-20">
      <div className="grid bg-white rounded-3xl shadow-2xl overflow-hidden w-[90%] lg:w-[80%] mx-auto gap-4">

        {/* form div */}
        <div className="bg-gradient-to-b from-[#eaf4f9] to-[#d8eefb] p-10 ">
          <h2 className="text-3xl font-medium text-[#07689F] text-center mb-2">Certificate Issuance Form</h2>
          <p className="text-[#0A5782] font-semibold text-[16px] text-center mb-8">( Provide verified member details for official certificate generation. )</p>

          {/* Form component */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex items-start border-[#0781C2] rounded-lg p-3 focus-within:ring-2 border-1 focus-within:ring-[#3DBAF3] shadow-sm shadow-blue-400">
              <User className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="name"
                type="text"
                value={formData.name}
                placeholder="Enter member's name"
                required
                className="outline-none w-full text-gray-700"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="flex items-start border border-[#0781C2] rounded-lg p-3 shadow-sm shadow-blue-400 focus-within:ring-2 focus-within:ring-[#3DBAF3]">
              <Mail className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="email"
                type="email"
                placeholder="Enter member's email address"
                required
                value={formData.email}
                className="outline-none w-full text-gray-700"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Roll no (kept as input but not sent to server - model doesn't include roll) */}
            <div className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]">
              <IdCard className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="roll"
                type="number"
                placeholder="Enter member's roll number"
                required
                value={formData.roll}
                className="outline-none w-full text-gray-700"
                onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
              />
            </div>

            {/* Year */}
            <div className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]">
              <CalendarDays className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="year"
                type="number"
                placeholder="Enter academic year(e.g 2025)"
                required
                value={formData.year}
                className="outline-none w-full text-gray-700"
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              />
            </div>

            {/* Designation */}
            <div className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]">
              <Pencil className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="designation"
                type="text"
                placeholder="Enter member's designation"
                required
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                className="outline-none w-full text-gray-700"
              />
            </div>

            {/* Role */}
            <div className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]">
              <Tags className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <input
                name="team"
                type="text"
                placeholder="Enter member's team name (e.g.: Web)"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="outline-none w-full text-gray-700"
              />
            </div>

            {/* Interets/ Contribution */}
            <div className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]">
              <Newspaper className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <textarea
                name="contribution"
                placeholder="Enter member's contribution"
                required
                value={formData.contribution}
                onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                className="outline-none w-full text-gray-700 h-24"
              />
            </div>

            <div
              
              className="flex items-start border border-[#0781C2] rounded-lg p-3 focus-within:ring-2 shadow-sm shadow-blue-400 focus-within:ring-[#3DBAF3]"
            >
              <Camera className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <CldUploadWidget
                uploadPreset="ieee_website"
                onSuccess={(result) => {
                  const url = result.info.secure_url;

                  setFormData((prev) => ({
                    ...prev,
                    profilePic: [...prev.profilePic, url],
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
              {formData.profilePic.length > 0 && (
                <div className="flex gap-3 flex-wrap mt-5">
                  {formData.profilePic.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`uploaded-${i}`}
                      className="w-24 h-24 object-cover rounded border"
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-[#3DBAF3] to-[#07689F] text-white py-3 rounded-lg transition duration-200 shadow-md shadow-[#1a80b0] ${
                isDisabled ? "opacity-60 cursor-not-allowed" : "opacity-90 hover:cursor-pointer"
              }`}
              disabled={isDisabled}
            >
              Generate Certificate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
