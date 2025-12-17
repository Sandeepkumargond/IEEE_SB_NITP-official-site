"use client";

import { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";

export default function CommitteePage() {

  const officeBearers = [
    {
      name : "Vansh Tyagi",
      designation : "Co-Chairperson",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Vansh Tyagi",
      designation : "Co-Chairperson",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Vansh Tyagi",
      designation : "Co-Chairperson",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Nandini Prasad",
      designation : "Co-Chairperson",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Kapil Gupta",
      designation : "Joint Secretary",
      githubLink : "https://github.com/Kapilgupta25",
      linkedInLink : "https://www.linkedin.com/in/kapil-gupta-a41216289",
      profilePic : "https://drive.google.com/open?id=1-5m5oFkysgxYhhF35a_nzOsVUeY-fQTM"
    },
    {
      name : "Aryan Kumar Arya",
      designation : "Treasurer",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Saurabh Yadav",
      designation : "Technical Lead",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Gungun Singh",
      designation : "Project Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Sandeep Kumar Gond",
      designation : "Web Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Prashasti Prabhakar",
      designation : "Event Management Head",
      githubLink : "https://github.com/Prashasti-27",
      linkedInLink : "https://www.linkedin.com/in/prashasti-prabhakar-215626364/",
      instagramLink : "",
      profilePic : "https://drive.google.com/open?id=1uaY8Z2wsQS-4nyJNxjt2TvfZ9vgn-SyY"
    },
    {
      name : "Deepak Kumar",
      designation : "PR & Sponser Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Lisha Rani",
      designation : "PR & Sponser Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Navneet Shreya",
      designation : "ML Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Devansh Pratap Singh",
      designation : "ML Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Md. Yaseen Siddiqui",
      designation : "Design Head",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    },
    {
      name : "Prabrity Rani",
      designation : "Editor-In-Chief",
      githubLink : "",
      linkedInLink : "",
      instagramLink : "",
      profilePic : ""
    }
  ]

  

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Meet our <span className="text-sky-700">Office Bearers</span>
        </h1>
        <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
          Meet the masterminds behind the innovation! Introducing the dynamic team leaders of IEEE NIT Patna.
        </p>

        
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {officeBearers.map((m,id) => (
              <MemberCard key={id} name={m.name} role={m.designation} image={m.profilePic} githubLink={m.githubLink} linkedInLink={m.linkedInLink} instagramLink={m.instagramLink} />
            ))}
          </div>
      </div>
    </main>
  );
}


