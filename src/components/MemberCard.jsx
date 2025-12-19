"use client";

import { Github, Linkedin } from "lucide-react";

export default function MemberCard({ name, role, image, githubLink, linkedInLink}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl bg-slate-100">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{role}</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        {githubLink && (
          <a
          href={githubLink}
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-9 w-9 place-items-center rounded-full bg-sky-600 text-white 
                     transition-all duration-300 hover:bg-sky-700 hover:scale-110"
        >
          <Github className="h-5 w-5" />
        </a>
        
        )}
        {linkedInLink && (
         <a
         href={linkedInLink}
         aria-label="LinkedIn"
         target="_blank"
         rel="noopener noreferrer"
         className="grid h-9 w-9 place-items-center rounded-full bg-sky-600 text-white 
                    transition-all duration-300 hover:bg-sky-700 hover:scale-110"
       >
         <Linkedin className="h-5 w-5" />
       </a>       
        )}
      </div>
    </div>
  );
}



