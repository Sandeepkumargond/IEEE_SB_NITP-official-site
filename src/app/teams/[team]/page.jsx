import LeaderCard from "@/components/LeaderCard";
import { fetchTeamMembers } from "@/lib/adminAction";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default async function TeamPage({ params }) {
  const { team } = (await params) || {};
  const result = await fetchTeamMembers(team);

  const TEAM_LEADERS = {
    Web: [
      {
        name: "Sandeep Kumar Gond",
        role: "Website Lead",
        profilePic: "/office_bearers/Sandeep_Kumar.jpg",
        github: "https://github.com/Sandeepkumargond",
        linkedIn: "https://www.linkedin.com/in/sandeepkumargond/",
      },
    ],
    Technical: [
      {
        name: "Saurabh Yadav",
        role: "Technical Lead",
        github: "https://github.com/kg-saurabh",
        linkedIn: "https://www.linkedin.com/in/saurabh-yadav-932a2328a",
        profilePic: "",
      },
    ],
    AIML: [
      {
        name: "Navneet Shreya",
        role: "ML Head",
        github: "https://github.com/NavneetShreya",
        linkedIn: "http://www.linkedin.com/in/navneet-shreya",
        profilePic: "/office_bearers/Navneet.jpeg",
      },
    ],
    Design: [
      {
        name: "Moh Yaseen Siddiqui",
        role: "Design Head",
        github: "https://github.com/Yaseen11121",
        linkedIn: "http://www.linkedin.com/in/mys54",
        profilePic: "/office_bearers/mysPhoto.jpg",
      },
    ],
    PR: [
      {
        name: "Deepak Kumar",
        role: "PR & Sponser Head",
        github: "https://github.com/Deep07954",
        linkedIn: "https://www.linkedin.com/in/deepak-kumar-4529bb28a",
        profilePic: "",
      },
      {
        name: "Lisha Rani",
        role: "PR & Sponser Head",
        github: "https://github.com/Lisha-Rani",
        linkedIn: "https://www.linkedin.com/in/lisha-rani-041455290/",
        profilePic: "/office_bearers/lisha.jpg",
      },
    ],
    Event: [
      {
        name: "Prashasti Prabhakar",
        role: "Event Management Head",
        github: "https://github.com/Prashasti-27",
        linkedIn:
          "https://www.linkedin.com/in/prashasti-prabhakar-215626364/",
        profilePic: "",
      },
    ],
  };

  const leaders = TEAM_LEADERS[team] || [];
  const members = result?.data || [];

  return (
    <main className="min-h-screen bg-[#020c1b] text-slate-200 selection:bg-cyan-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 lg:px-20 py-24">
        {/* Header Section */}
        <header className="text-center mb-32">
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-4 block">
            Meet the innovators
          </span>
          <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6">
            {team} Team
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            The creative minds and technical experts building the future of 
            <span className="text-cyan-400"> IEEE NIT Patna</span>.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-12 bg-cyan-500 rounded-full" />
            <div className="h-1 w-4 bg-cyan-800 rounded-full" />
          </div>
        </header>

        {/* ================= LEADERS SECTION ================= */}
        {leaders.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-bold mb-12 text-center text-white/80 italic tracking-wider">
              Leaders
            </h2>
            <div
              className={`grid gap-12 mx-auto ${
                leaders.length === 1
                  ? "max-w-2xl"
                  : "grid-cols-1 md:grid-cols-2 max-w-6xl"
              }`}
            >
              {leaders.map((leader, idx) => (
                <LeaderCard key={idx} {...leader} single={leaders.length === 1} />
              ))}
            </div>
          </section>
        )}

        {/* ================= MEMBERS SECTION ================= */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-16 text-center text-white/80 italic tracking-wider">
            Team Members
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member) => (
              <div
                key={member._id}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-cyan-500/50 hover:-translate-y-2"
              >
                {/*Image Container */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-cyan-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                  <img
                    src={member.profilePic || "/Profile.png"}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-cyan-500/70 font-semibold text-xs uppercase tracking-tighter mt-1">
                    {member.team} Member
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-5 mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    {member.githubLink && (
                      <a
                        href={member.githubLink}
                        target="_blank"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {member.linkedInLink && (
                      <a
                        href={member.linkedInLink}
                        target="_blank"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-cyan-400 transition-all"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}