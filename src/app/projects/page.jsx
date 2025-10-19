"use client"

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import projectsData from './mock.json';
import ProjectCard from './Card.jsx'; 

const ITEMS_PER_PAGE = 6;
 
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white min-h-screen">
      {/* Background  */}
<div
  className="
    absolute top-0 left-0 w-full h-screen min-h-[50vh] pointer-events-none bg-[#0A5782] z-0
    [clip-path:polygon(0_0,100%_0,100%_38.5%,0_90%)]
     "
/>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 pt-4 sm:pt-6 md:pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 px-4">Projects</h1>
          <p className="text-white text-sm sm:text-base md:text-lg px-4">Capturing moments of innovation, collaboration, and learning.</p>
        </div>

        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-x-16 lg:gap-y-12  sm:mb-16">
         
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

       
        <div className="flex flex-wrap items-center justify-center gap-3  pb-8  px-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-1.5  px-3.5   py-2  bg-[#0a5782] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#024060] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Prev</span>
          </button>

          <span className="text-[#012B42] font-medium text-sm  md:text-lg bg-white px-3 sm:px-4 py-2  rounded-lg shadow-md ">
             {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1.5  px-3   py-2  bg-[#0a5782] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#024060] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;