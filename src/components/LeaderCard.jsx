"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LeaderCard({
  name,
  role,
  profilePic,
  github,
  linkedIn,
  single = false,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8
      bg-[#0f2a44] border border-cyan-400/30 rounded-3xl p-10
      shadow-lg hover:shadow-cyan-500/20 transition
      ${single ? "scale-105" : ""}`}
    >
      <img
        src={profilePic || "/Profile.png"}
        className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover"
      />

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-extrabold text-white">
          {name}
        </h3>

        <p className="uppercase tracking-widest text-cyan-400 text-sm mt-1">
          {role}
        </p>

        <div className="flex justify-center md:justify-start gap-6 mt-5">
          {github && (
            <a href={github} target="_blank" className="text-gray-300 hover:text-white">
              <FaGithub size={22} />
            </a>
          )}
          {linkedIn && (
            <a href={linkedIn} target="_blank" className="text-gray-300 hover:text-cyan-400">
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
