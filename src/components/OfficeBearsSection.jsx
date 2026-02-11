"use client";
import { useState, useEffect } from "react";
import MemberCard from "@/components/MemberCard";
import { fetchLeadsByYear } from "@/lib/leadAction";

export default function OfficeBearsSection() {
  const [selectedPeriod, setSelectedPeriod] = useState("2025-2026");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  // Period options (2017-2018 to 2026-2027)
  const periodOptions = Array.from({ length: 10 }, (_, i) => {
    const year = 2017 + i;
    return `${year}-${year + 1}`;
  });

  // Fetch leads based on selected period
  useEffect(() => {
    const loadLeads = async () => {
      setLoading(true);
      try {
        const year = parseInt(selectedPeriod.split('-')[0]);
        const response = await fetchLeadsByYear(year);
        if (response.success && response.data?.length > 0) {
          setLeads(
            response.data.map((lead) => ({
              ...lead,
              profilePic: lead.profilePic?.[0] || "/Profile.png",
            }))
          );
        } else {
          setLeads([]);
        }
      } catch (error) {
        console.log("Error fetching leads:", error);
        setLeads([]);
      }
      setLoading(false);
    };

    loadLeads();
  }, [selectedPeriod]);

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

        {/* Period Select Filter */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <label className="text-white font-medium">Select Period:</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {periodOptions.map((period) => (
                <option key={period} value={period}>
                  {period}
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
              No office bearers found for {selectedPeriod}.
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
