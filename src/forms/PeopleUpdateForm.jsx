"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  IdCard,
  CalendarDays,
  Pencil,
  Calendar1,
  Newspaper,
  Tags,
  Camera,
  Github,
  Linkedin,
} from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { addMember } from "@/lib/adminAction";

export default function PeopleUpdateForm() {
  const router = useRouter();
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
    year: new Date().getFullYear(),
    designation: "",
    team: "",
    contribution: "",
    githubLink: "",
    linkedInLink: "",
    profilePic: [],
  });

  const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 10 }, (_, i) => (currentYear - 9) + i);

  const teamOptions = ["Web","AIML","PR","Event","Design","Technical"] 

  const [isDisabled, setIsDisabled] = useState(true);

  // Disable submit if any field is empty
  useEffect(() => {
    const isFieldEmpty = Object.entries(formData).some(([_, value]) => {
      if (Array.isArray(value)) return value.length === 0;
      return value === "";
    });
    setIsDisabled(isFieldEmpty);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      year: Number(formData.year),
      designation: formData.designation,
      team: formData.team,
      contributions: formData.contribution,
      profilePic: formData.profilePic,
      githubLink: formData.githubLink,
      linkedinLink: formData.linkedInLink,
    };

    try {
      const response = await addMember(payload);

      if (response?.success) {
        router.push("/admin");
      } else {
        alert(response?.message || "Error adding member");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#30a5da] to-[#07689F] min-h-screen py-20">
      <div className="bg-white rounded-3xl shadow-2xl w-[90%] lg:w-[80%] mx-auto p-10">
        <h2 className="text-3xl font-medium text-[#07689F] text-center mb-2">
          Certificate Issuance Form
        </h2>
        <p className="text-center text-[#0A5782] mb-8">
          Provide verified member details for official certificate generation
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <Input
            icon={<User />}
            value={formData.name}
            placeholder="Enter member's name"
            onChange={(v) => setFormData({ ...formData, name: v })}
          />

          {/* Email */}
          <Input
            icon={<Mail />}
            type="email"
            value={formData.email}
            placeholder="Enter member's email"
            onChange={(v) => setFormData({ ...formData, email: v })}
          />

          {/* Roll */}
          <Input
            icon={<IdCard />}
            type="number"
            value={formData.roll}
            placeholder="Enter roll number"
            onChange={(v) => setFormData({ ...formData, roll: v })}
          />

          {/* Year */}
          <div className="flex items-center border rounded px-3 py-2">
  <CalendarDays className="w-5 h-5 text-gray-500 mr-2" />
          <select
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                   className="w-full outline-none bg-transparent"
                  >
                  
                    {yearOptions.map((year) => (
                      <option key={year} value={year} className="text-black">
                        {year}   <Calendar1 />
                      </option>
                    ))}
                  </select> </div>
          {/* Designation */}
          <Input
            icon={<Pencil />}
            value={formData.designation}
            placeholder="Enter designation"
            onChange={(v) => setFormData({ ...formData, designation: v })}
          />

          {/* Team */}
          <select
            value={formData.team}
            onChange={(e) => setFormData({ ...formData, team: e.target.value })}
            className="w-full border rounded px-3 py-2"
          >
            <option value="" disabled>
              Select team
            </option>
            {teamOptions.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>

          {/* GitHub */}
          <Input
            icon={<Github />}
            value={formData.githubLink}
            placeholder="GitHub profile link"
            onChange={(v) => setFormData({ ...formData, githubLink: v })}
          />

          {/* LinkedIn */}
          <Input
            icon={<Linkedin />}
            value={formData.linkedInLink}
            placeholder="LinkedIn profile link"
            onChange={(v) => setFormData({ ...formData, linkedInLink: v })}
          />

          {/* Contribution */}
          <div className="flex items-start border rounded-lg p-3 shadow-sm">
            <Newspaper className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <textarea
              placeholder="Enter contributions"
              className="w-full outline-none h-24"
              value={formData.contribution}
              onChange={(e) =>
                setFormData({ ...formData, contribution: e.target.value })
              }
            />
          </div>

          {/* Image Upload */}
          <div
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
              isDisabled
                ? "opacity-60 cursor-not-allowed"
                : "opacity-90 hover:cursor-pointer"
            }`}
            disabled={isDisabled}
          >
            Generate Certificate
          </button>
        </form>
      </div>
    </div>
  );
}

/* Reusable Input Component */
function Input({ icon, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="flex items-center border rounded-lg p-3 shadow-sm">
      {React.cloneElement(icon, { className: "w-5 h-5 text-gray-500 mr-3" })}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="w-full outline-none"
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
 