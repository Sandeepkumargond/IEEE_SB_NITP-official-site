"use client";

import { Github, Linkedin } from "lucide-react";

export default function MemberCard({ name, role, image, githubLink, linkedInLink}) {
  return (
    <div className="rounded-lg md:rounded-xl border border-blue-900 bg-white p-2 md:p-3 shadow-md hover:shadow-lg transition">
      <div className="relative mx-auto h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-xl md:rounded-2xl bg-blue-100 border-2 border-blue-900">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-2 md:mt-3 text-center">
        <h3 className="text-xs md:text-sm font-semibold text-slate-900 line-clamp-2">{name}</h3>
        <p className="text-xs text-blue-700 font-medium line-clamp-1">{role}</p>
      </div>
      <div className="mt-2 md:mt-3 flex items-center justify-center gap-1.5 md:gap-2">
        {githubLink && (
          <a
          href={githubLink}
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-full bg-blue-900 text-white 
                     transition-all duration-300 hover:bg-blue-800 hover:scale-110"
        >
          <Github className="h-3 w-3 md:h-4 md:w-4" />
        </a>
        
        )}
        {linkedInLink && (
         <a
         href={linkedInLink}
         aria-label="LinkedIn"
         target="_blank"
         rel="noopener noreferrer"
         className="grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-full bg-blue-900 text-white 
                    transition-all duration-300 hover:bg-blue-800 hover:scale-110"
       >
         <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
       </a>       
        )}
      </div>
    </div>
  );
}



