// card.jsx
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { VscRunAbove } from "react-icons/vsc";
import NOIMG from '../../../public/NO_IMG.png'; 


function escapeRegExp(s = "") {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text = "", q = "") {
  if (!q) return text;
  const re = new RegExp(`(${escapeRegExp(q)})`, "ig");
  const parts = text.split(re);
  return parts.map((part, idx) =>
    part.toLowerCase() === q.toLowerCase() ? (
      <mark
        key={idx}
        className="bg-[#3DBAF3]/30 rounded px-0.5 font-medium"
      >
        {part}
      </mark>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

export default function ProjectCard({ project, view = "grid" , highlight: q }) {
  
  
  
  const imgHeight = view === "list" ? "h-40" : "h-63";

  const Card = ({ children }) => (
    <article
      className="relative overflow-hidden rounded-xl border border-[#07689F]/10 bg-white/90  transition-all duration-300 ease-out  hover:border-[#07689F] hover:-translate-y-1"
      
    >
      
      {children}
    </article>
  );

  const Media = () => (
    <div className="">
      <img
        src={project.image || NOIMG }
        
        loading="lazy"
        className={`w-full  ${imgHeight}`}
      />
      
      <span className="absolute top-3 left-3 z-10 rounded-full bg-white/95  px-2.5 py-1 text-xs font-medium text-[#0a5782] border border-[#07689F]/30 shadow-md">
        {project.category}
      </span>
    </div>
  );

  const ActionButton = ({ href, children, className = "", title }) => (
    <a
      href={href}
      target="_blank"
      
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ease-out border ${className} hover:scale-105  `}
      title={title}
    >
      {children}
    </a>
  );

  const Actions = () => (
    <div className="mt-3 flex items-center justify-between">
      <div className="flex gap-1.5">
        {project.repo && (
          <ActionButton
            href={project.repo}
            className="bg-[#F0F9FF] text-[#0a5782] hover:bg-[#3DBAF3]/20 border-[#07689F]/30"
          >
            <FaGithub />
            Repo
          </ActionButton>
        )}
        {project.demo && (
          <ActionButton
            href={project.demo}
            className="bg-gradient-to-r from-[#07689F] to-[#0a5782] text-white shadow-sm hover:from-[#0a5782] hover:to-[#07689F]"
          >
           
            Demo
             <VscRunAbove />
          </ActionButton>
        )}
      </div>
      <div className="text-xs  text-[#0a5782]/60 opacity-80">
        {String(project.date)}
      </div>
    </div>
  );

  const Content = () => (
    <div className={`p-4`}>
      <h3 className={`text-base md:text-lg font-semibold text-[#0a5782]  `}>
        {highlight(project.title, q)}
      </h3>
      <p className={`mt-2 text-sm text-[#0a5782]/80  `}>
        {highlight(project.description, q)}
      </p>
      <Actions />
    </div>
  );

  if (view === "list") {
    return (
      <Card>
        <div className="flex h-full">
          <div className="w-48 flex-shrink-0">
            <Media />
          </div>
          <div className="flex-1 flex flex-col">
            <Content />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <Media />
      <Content />
    </Card>
  );
}




