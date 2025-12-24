"use client"

import { ExternalLink } from 'lucide-react';


const ProjectCard = ({ project }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const imageSrc = project.images?.[0] && isValidUrl(project.images[0]) ? project.images[0] : '/fallback-image.jpg';

  return (
    <div className="relative p-2 py-1 md:h-full mb-4 sm:h-auto">
      {/* SVG Border */}
      <div className="absolute inset-0 pointer-events-none z-21">
        <svg
          width="100%"
          height="100%"
          viewBox="3.203125 3.390619993209839 573.6878547668457 804.3123171329498"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M22.2902 3.39062C22.2902 88.5096 22.9266 122.717 22.9266 213.24M22.9266 213.24C22.9266 303.764 22.8282 468.752 22.2902 579.641C21.7522 690.53 21.3347 798.464 21.3347 798.464C21.3347 814.127 20.1579 795.644 20.2437 787.31C20.351 776.893 21.3806 480.507 21.3806 454.633C21.3806 428.759 22.2902 297.048 22.9266 213.24Z" stroke="#012B42" strokeWidth="4.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M467.799 791.718C555.155 791.718 542.955 791.718 571.656 791.718C571.163 792.004 566.712 793.097 564.876 793.319C562.58 793.596 502.354 793.445 489.501 793.445C445.501 793.445 246.735 792.412 233.726 792.412M467.799 791.718C467.799 791.718 257.105 793.445 223.502 793.445C189.898 793.445 197.846 793.491 126.905 793.445C73.8679 793.41 10.4478 793.445 6.18005 793.445C1.91231 793.445 3.48705 791.373 3.48705 791.373C33.3184 792.412 85.2359 792.412 153.422 792.412C176.918 792.412 204.401 792.412 233.726 792.412M467.799 791.718C403.938 791.718 313.43 792.412 233.726 792.412" stroke="#012B42" strokeWidth="6.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M556.421 405.658C556.422 504.769 557.838 567.128 557.838 631.931C557.838 696.735 557.115 806.52 557.115 806.52C557.115 806.52 555.448 811.145 555.448 802.105C555.448 793.065 556.538 728.796 556.421 636.432C556.304 544.069 556.31 447.283 556.421 405.658ZM556.421 405.658C556.421 358.937 555.664 263.5 555.709 210.392C555.759 150.84 555.709 65.0813 555.709 7.57812" stroke="#012B42" strokeWidth="4.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.7188 17.9027C45.308 17.9027 71.9965 17.9027 87.7323 17.9027M87.7323 17.9027C103.468 17.9027 173.335 18.2079 202.918 18.2079M87.7323 17.9027C87.7323 17.9027 121.856 16.9527 141.863 16.9527C161.87 16.9527 202.918 18.2079 202.918 18.2079M576.891 18.2079C545.582 18.2079 560.058 17.9027 528.961 17.9027C511.236 17.9027 489.551 18.4114 458.465 18.2079M286.188 16.9527C307.702 16.9821 420.148 17.9572 458.465 18.2079M286.188 16.9527C263.939 16.9223 232.501 18.2079 202.918 18.2079M286.188 16.9527C286.188 16.9527 340.133 16.9527 370.346 16.9527M458.465 18.2079C458.465 18.2079 400.558 16.9527 370.346 16.9527M202.918 18.2079C221.05 18.2079 263.09 18.2079 286.188 18.2079C309.287 18.2079 351.918 17.3711 370.346 16.9527" stroke="#012B42" strokeWidth="6.28125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Card Content */}
      <div className="relative bg-white p-3 min-w-fit sm:p-3 md:p-4 min-h-full sm:mx-0.5 md:mx-1 z-9 overflow-hidden">

        <div className="mb-3 sm:mb-3 overflow-hidden rounded-md relative">
          <img
            src={imageSrc}
            alt='NO IMG FOUND'
            className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
          />

          <div className="absolute top-1 left-1">
            <span className="inline-block bg-[#0a5782] bg-opacity-80 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
              {project.category || 'Uncategorized'}
            </span>
          </div>
        </div>


        <div className="flex items-start justify-between mb-2 min-h-12">
          <h3 className="flex-1 pr-2 text-lg sm:text-xl md:text-2xl font-medium text-[#012B42] leading-tight line-clamp-2">
            {project.title || 'Untitled Project'}
          </h3>
          {project.repo && isValidUrl(project.repo) ? (
            <a
              href={project.repo}
              target="_blank"

              className="flex-shrink-0 w-8 h-8 bg-[#0a5782] text-white flex items-center justify-center hover:bg-[#024060] rounded-md"
              title="View Repository"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="flex-shrink-0 w-8 h-8 bg-gray-300 text-white flex items-center justify-center rounded-md opacity-50 cursor-not-allowed">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          )}
        </div>


        <div className="min-h-10">
          <p className="text-[#012B42] text-sm sm:text-base md:text-lg line-clamp-3 overflow-ellipsis">
            {project.description || 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard; 