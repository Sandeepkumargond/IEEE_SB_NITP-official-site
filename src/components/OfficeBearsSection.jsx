"use client";
import { useState, useEffect } from "react";
import MemberCard from "@/components/MemberCard";
import { fetchLeadsByYear } from "@/lib/leadAction";

export default function OfficeBearsSection() {
  const officeBearers = [
    {
      name: "Aditya Srivastava",
      designation: "Chairperson",
      githubLink: "",
      linkedInLink: "https://www.linkedin.com/in/adityasriofficial/",
      profilePic: "/office_bearers/Aditya.png",
    },
    {
      name: "Vansh Tyagi",
      designation: "Co-Chairperson",
      githubLink: "https://github.com/VanshTyagi05",
      linkedInLink: "https://www.linkedin.com/in/vansh-tyagi-887a6627a/",
      profilePic: "/office_bearers/Vansh.jpeg",
    },
    {
      name: "Nandini Prasad",
      designation: "Secretary",
      githubLink: "https://github.com/Nandini-Prasadd",
      linkedInLink: "https://www.linkedin.com/in/nandini-prasad-9294a9250",
      profilePic: "/office_bearers/nandini.jpg",
    },
    {
      name: "Kapil Gupta",
      designation: "Joint Secretary",
      githubLink: "https://github.com/Kapilgupta25",
      linkedInLink: "https://www.linkedin.com/in/kapil-gupta-a41216289",
      profilePic: "/office_bearers/Kapil.jpg",
    },
    {
      name: "Aryan Kumar Arya",
      designation: "Treasurer",
      githubLink: "https://github.com/AryanKumarArya007",
      linkedInLink: "https://www.linkedin.com/in/aryan-kumar-arya-84a61628b/",
      profilePic: "/office_bearers/ARYAN.jpeg",
    },
    {
      name: "Saurabh Yadav",
      designation: "Technical Lead",
      githubLink: "https://github.com/kg-saurabh",
      linkedInLink: "https://www.linkedin.com/in/saurabh-yadav-932a2328a",
      profilePic: "/office_bearers/SOURABH.webp",
    },
    {
      name: "Gungun Singh",
      designation: "Project Head",
      githubLink: "https://github.com/gungun-2010",
      linkedInLink: "https://www.linkedin.com/in/gungun-singh-1068b12a3/",
      profilePic: "/office_bearers/GUNGUN.jpg",
    },
    {
      name: "Sandeep Kumar Gond",
      designation: "Web Head",
      githubLink: "https://github.com/Sandeepkumargond",
      linkedInLink: "https://www.linkedin.com/in/sandeepkumargond/",
      profilePic: "/office_bearers/Sandeep_Kumar.jpg",
    },
    {
      name: "Prashasti Prabhakar",
      designation: "Event Management Head",
      githubLink: "https://github.com/Prashasti-27",
      linkedInLink: "https://www.linkedin.com/in/prashasti-prabhakar-215626364/",
      profilePic: "/office_bearers/PRASHASTI.jpg",
    },
    {
      name: "Deepak Kumar",
      designation: "PR & Sponser Head",
      githubLink: "https://github.com/Deep07954",
      linkedInLink: "https://www.linkedin.com/in/deepak-kumar-4529bb28a",
      profilePic: "/office_bearers/DEEPAK.jpg",
    },
    {
      name: "Lisha Rani",
      designation: "PR & Sponser Head",
      githubLink: "https://github.com/Lisha-Rani",
      linkedInLink: "https://www.linkedin.com/in/lisha-rani-041455290/",
      profilePic: "/office_bearers/lisha.jpg",
    },
    {
      name: "Navneet Shreya",
      designation: "ML Head",
      githubLink: "https://github.com/NavneetShreya",
      linkedInLink: "http://www.linkedin.com/in/navneet-shreya",
      profilePic: "/office_bearers/Navneet.jpeg",
    },
    {
      name: "Moh Yaseen Siddiqui",
      designation: "Design Head",
      githubLink: "https://github.com/Yaseen11121",
      linkedInLink: "http://www.linkedin.com/in/mys54",
      profilePic: "/office_bearers/mysPhoto.jpg",
    },
    {
      name: "Prabrity Rani",
      designation: "Editor-In-Chief",
      githubLink: "https://github.com/prabrity16",
      linkedInLink: "http://www.linkedin.com/in/prabrity-rani-193929346",
      profilePic: "/office_bearers/prabrity.jpg",
    },
  ];

  // Year options (2017-2026)
  const yearOptions = Array.from({ length: 10 }, (_, i) => 2017 + i);

  // Fetch leads based on selected year
  useEffect(() => {
    const loadLeads = async () => {
      setLoading(true);
      try {
        const response = await fetchLeadsByYear(selectedYear);
        if (response.success && response.data && response.data.length > 0) {
          // Use database leads
          const leadsWithPic = response.data.map((lead) => ({
            ...lead,
            profilePic:
              lead.profilePic && lead.profilePic.length > 0
                ? lead.profilePic[0]
                : "/Profile.png",
          }));
          setLeads(leadsWithPic);
        } else {
          setLeads([]);
        }
      } catch (error) {
        console.log("Error fetching leads:", error);
        if (selectedYear === 2025) {
          const staticWithPic = staticOfficeBearers2025.map((member) => ({
            ...member,
            profilePic: member.profilePic || "/Profile.png",
          }));
          setLeads(staticWithPic);
        } else {
          setLeads([]);
        }
      }
      setLoading(false);
    };

    loadLeads();
  }, [selectedYear]);

  // Separate chairperson/co-chairperson from others
  const chairpersonTeam = leads.filter((lead) =>
    lead.designation?.toLowerCase().includes("chairperson"),
  );

  const otherMembers = leads.filter(
    (lead) => !lead.designation?.toLowerCase().includes("chairperson"),
  );

  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 py-12 md:py-20 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center">
          Meet our <span className="text-blue-300">Office Bearers</span>
        </h2>
        <p className="mt-2 md:mt-3 text-center text-gray-200 text-sm md:text-base max-w-3xl mx-auto">
          Meet the masterminds behind the innovation! Introducing the dynamic
          team leaders of IEEE NIT Patna.
        </p>

        {/* Year Select Filter */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <label className="text-white font-medium">Select Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="mt-12 flex justify-center">
            <div className="text-white text-lg">Loading...</div>
          </div>
        ) : leads.length === 0 ? (
          <div className="mt-12 flex justify-center">
            <div className="text-white/70 text-lg bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              No office bearers found for {selectedYear}.
            </div>
          </div>
        ) : (
          <>
            {/* Chairperson and Co-Chairperson */}
            {chairpersonTeam.length > 0 && (
              <div className="mt-12 flex justify-center px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
                  {chairpersonTeam.map((lead, idx) => (
                    <MemberCard
                      key={`chair-${lead._id || idx}`}
                      name={lead.name}
                      role={lead.designation}
                      image={lead.profilePic}
                      githubLink={lead.githubLink || ""}
                      linkedInLink={lead.linkedInLink || ""}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All other team members */}
            {otherMembers.length > 0 && (
              <div className="mt-16 md:mt-24">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                  {otherMembers.map((lead, idx) => (
                    <MemberCard
                      key={`other-${lead._id || idx}`}
                      name={lead.name}
                      role={lead.designation}
                      image={lead.profilePic}
                      githubLink={lead.githubLink || ""}
                      linkedInLink={lead.linkedInLink || ""}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
