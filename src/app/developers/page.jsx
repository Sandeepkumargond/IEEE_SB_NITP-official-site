"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function DevelopersSection() {
  const topDevelopers = [
    {
      name: "Sandeep Kumar Gond",
      email: "lead@example.com",
      role: "Website Lead",
      profilePic: "/office_bearers/Sandeep_Kumar.jpg",
      githubLink: "https://github.com/Sandeepkumargond",
      linkedInLink: "https://www.linkedin.com/in/sandeepkumargond/",
    },
    {
      name: "Diksha Bharti",
      email: "dikshab.ug24.cs@nitp.ac.in",
      role: "Website POC",
      profilePic: "/developers/DIKSHA.jpeg",
      githubLink: "https://github.com/Diksha8-db",
      linkedInLink: "https://www.linkedin.com/in/diksha-bharti-055499326",
    },
  ];

  const otherDevelopers = [
    { name: "Sanya Singh", email: "sanyavns2727@gmail.com ", profilePic: "/developers/Sanya.jpeg", githubLink: "https://github.com/SanyaSingh0001", linkedInLink: "https://www.linkedin.com/in/sanya-singh-08aa3b323" },
    { name: "Aditya Ranjan", email: "adityar.ug24.cs@nitp.ac.in", profilePic: "/developers/ADITYA RANJAN.jpg", githubLink: "https://github.com/adityaranjan-091", linkedInLink: "https://www.linkedin.com/in/aditya-ranjan-783739324" },
    { name: "Prachi", email: "prachi.ug24.cs@nitp.ac.in", profilePic: "/developers/Prachi.jpeg", githubLink: "https://github.com/Prachi-2407", linkedInLink: "https://www.linkedin.com/in/prachi-8096aa358" },
    { name: "Ayushi Prajapati", email: "ayuship.ug24.ec@nitp.ac.in ", profilePic: "/developers/AYUSHI PRAJAPATI.jpg", githubLink: "https://github.com/ayuship29", linkedInLink: "https://www.linkedin.com/in/ayushi-prajapati-b3a15b326" },
    { name: "Sakshi", email: "sakshi.ug24.cs@nitp.ac.in", profilePic: "/developers/SAKSHI SAKSHI.jpg", githubLink: "https://github.com/adityaranjan-091", linkedInLink: "https://www.linkedin.com/in/sakshi-80b99b336" },
    { name: "Shivam Kumar", email: "sanyavns2727@gmail.com ", profilePic: "/developers/SHIVAM KUMAR.png", githubLink: "https://github.com/shivv23", linkedInLink: "https://www.linkedin.com/in/shivamkumar23" },
    { name: "Md Aman", email: "mdaman13720@gmail.com", profilePic: "/developers/aman.jpeg", githubLink: "https://github.com/md-aman012/", linkedInLink: "https://www.linkedin.com/in/md-aman-76000a324" },
    { name: "Anand Kumar Thakur", email: "anandt.dd24.cs@nitp.ac.in", profilePic: "/developers/Anad.jpeg", githubLink: "https://github.com/yutgcx", linkedInLink: "" },
    { name: "Shristi", email: "shristi.ug24.cs@nitp.ac.in", profilePic: "/developers/SHRISTI SHRISTI.jpg", githubLink: "https://github.com/shristi482004", linkedInLink: "https://www.linkedin.com/in/shristi-shristi-21a025327" },
    { name: "Najuk Singh", email: "najuks.ug24.ec@nitp.ac.in", profilePic: "/developers/NAJUK SINGH.jpg", githubLink: "https://github.com/NAJUKSINGH", linkedInLink: "https://www.linkedin.com/in/najuk-singh-44915433b" },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-[120px] font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="IEEE background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#020817]/70 to-[#0f1419]/85" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-[48px] font-extrabold tracking-[-1px] text-transparent bg-clip-text bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9]">
            Meet Our Development Team
          </h2>

          <div className="mx-auto mb-[30px] mt-5 h-1 w-[60px] rounded-[2px] bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]" />

          <p className="mx-auto max-w-[700px] text-lg font-medium leading-[1.8] text-[#e0e7ff]">
            The talented developers crafting innovative solutions for IEEE NIT
            Patna. Passionate about code, design, and building exceptional
            digital experiences.
          </p>
        </div>

        {/* Top Developers Section - Responsive Flex */}
        <div className="mb-20 flex flex-wrap justify-center gap-10">
          {topDevelopers.map((dev, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(`top-${idx}`)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`w-full min-w-[260px] max-w-[280px] rounded-2xl border-2 border-[#38bdf8] bg-[#1a1f2e] px-7 py-[25px] text-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                hoveredIdx === `top-${idx}`
                  ? "translate-y-[-10px] shadow-[0_25px_50px_rgba(56,189,248,0.2)]"
                  : "translate-y-0 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              }`}
            >
              {/* Profile Image */}
              <div className="mx-auto mb-3.5 h-[130px] w-[130px] cursor-pointer overflow-hidden rounded-full bg-gradient-to-br from-[#195289] to-[#0f3a5e] p-1">
                <img
                  src={dev.profilePic}
                  alt={dev.name}
                  className={`h-full w-full rounded-full object-cover transition-transform duration-300 ${
                    hoveredIdx === `top-${idx}` ? "scale-105" : "scale-100"
                  }`}
                />
              </div>

              <h3 className="mb-2 text-xl font-extrabold tracking-[-0.5px] text-[#f1f5f9]">
                {dev.name}
              </h3>

              <div className="mb-2 inline-block rounded-[20px] bg-[#38bdf8] px-3.5 py-[5px] text-[11px] font-bold uppercase tracking-[0.5px] text-[#0f1419]">
                {dev.role}
              </div>

              <p className="my-2 break-all text-[12px] font-medium text-[#cbd5e1]">
                {dev.email}
              </p>

              {/* Social Links */}
              <div className="mt-3 flex justify-center gap-3 border-t-2 border-[#334155] pt-3">
                <a
                  href={dev.githubLink}
                  target="_blank"
                  className={`flex h-[38px] w-[38px] items-center justify-center rounded-lg transition-all duration-300 ${
                    hoveredIdx === `top-${idx}` ? "bg-[#38bdf8] text-[#0f1419]" : "bg-[#2d3748] text-[#e0e7ff]"
                  }`}
                >
                  <FaGithub className="text-[18px]" />
                </a>
                <a
                  href={dev.linkedInLink}
                  target="_blank"
                  className={`flex h-[38px] w-[38px] items-center justify-center rounded-lg transition-all duration-300 ${
                    hoveredIdx === `top-${idx}` ? "bg-[#0ea5e9] text-[#0f1419]" : "bg-[#2d3748] text-[#e0e7ff]"
                  }`}
                >
                  <FaLinkedin className="text-[18px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-auto mb-[60px] mt-10 h-1 w-20 rounded-[2px] bg-[linear-gradient(90deg,transparent,#38bdf8,transparent)]" />

        {/* Other Members Grid - Responsive Grid */}
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherDevelopers.map((dev, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(`dev-${idx}`)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`rounded-2xl border border-[#38bdf8]/20 bg-[#1a1f2e] px-5 py-7 text-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                hoveredIdx === `dev-${idx}`
                  ? "translate-y-[-8px] shadow-[0_20px_40px_rgba(56,189,248,0.15)]"
                  : "translate-y-0 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              }`}
            >
              <div className="mx-auto mb-4 h-[130px] w-[130px] cursor-pointer overflow-hidden rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-1">
                <img
                  src={dev.profilePic}
                  alt={dev.name}
                  className={`h-full w-full rounded-full object-cover transition-transform duration-300 ${
                    hoveredIdx === `dev-${idx}` ? "scale-105" : "scale-100"
                  }`}
                />
              </div>

              <h3 className="mb-1.5 text-lg font-bold tracking-[-0.5px] text-[#f1f5f9]">
                {dev.name}
              </h3>

              <p className="my-2 break-all text-[12px] font-medium text-[#cbd5e1]">
                {dev.email}
              </p>

              <div className="mt-4 flex justify-center gap-3 border-t border-[#334155] pt-3.5">
                <a
                  href={dev.githubLink}
                  target="_blank"
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 ${
                    hoveredIdx === `dev-${idx}` ? "bg-[#38bdf8] text-[#0f1419]" : "bg-[#2d3748] text-[#e0e7ff]"
                  }`}
                >
                  <FaGithub className="text-[18px]" />
                </a>
                <a
                  href={dev.linkedInLink}
                  target="_blank"
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 ${
                    hoveredIdx === `dev-${idx}` ? "bg-[#0ea5e9] text-[#0f1419]" : "bg-[#2d3748] text-[#e0e7ff]"
                  }`}
                >
                  <FaLinkedin className="text-[18px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
