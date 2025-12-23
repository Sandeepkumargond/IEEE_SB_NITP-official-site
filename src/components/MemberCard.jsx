"use client";

import { Github, Linkedin } from "lucide-react";

export default function MemberCard({ name, role, image, githubLink, linkedInLink}) {
  return (
    <div className="rounded-xl border border-blue-900 bg-white p-3 shadow-md hover:shadow-lg transition">
      <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl bg-blue-100 border-2 border-blue-900">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
        <p className="text-xs text-blue-700 font-medium">{role}</p>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {githubLink && (
          <a
          href={githubLink}
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-8 w-8 place-items-center rounded-full bg-blue-900 text-white 
                     transition-all duration-300 hover:bg-blue-800 hover:scale-110"
        >
          <Github className="h-4 w-4" />
        </a>
        
        )}
        {linkedInLink && (
         <a
         href={linkedInLink}
         aria-label="LinkedIn"
         target="_blank"
         rel="noopener noreferrer"
         className="grid h-8 w-8 place-items-center rounded-full bg-blue-900 text-white 
                    transition-all duration-300 hover:bg-blue-800 hover:scale-110"
       >
         <Linkedin className="h-4 w-4" />
       </a>       
        )}
      </div>
    </div>
  );
}



