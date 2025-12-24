"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function DevelopersSection() {
  const developers = [
    {
      name: "Diksha Bharti",
      email: "dikshab.ug24.cs@nitp.ac.in",
      profilePic: "/developers/DIKSHA.jpeg",
      githubLink: "https://github.com/Diksha8-db",
      linkedInLink: "https://www.linkedin.com/in/diksha-bharti-055499326",
    },
    {
      name: "Sanya Singh",
      email: "sanyavns2727@gmail.com ",
      profilePic: "/developers/Sanya.jpeg",
      githubLink: "https://github.com/SanyaSingh0001",
      linkedInLink: "-https://www.linkedin.com/in/sanya-singh-08aa3b323",
    },
    {
      name: "Aditya Ranjan",
      email: "adityar.ug24.cs@nitp.ac.in",
      profilePic: "/developers/ADITYA RANJAN.jpg",
      githubLink: "https://github.com/adityaranjan-091",
      linkedInLink: "https://www.linkedin.com/in/aditya-ranjan-783739324",
    },
    {
      name: "Prachi",
      email: "prachi.ug24.cs@nitp.ac.in",
      profilePic: "/developers/Prachi.jpeg",
      githubLink: "https://github.com/Prachi-2407",
      linkedInLink: "https://www.linkedin.com/in/prachi-8096aa358",
    },
    {
      name: "Ayushi Prajapati",
      email: "ayuship.ug24.ec@nitp.ac.in ",
      profilePic: "/developers/AYUSHI PRAJAPATI.jpg",
      githubLink: "https://github.com/ayuship29",
      linkedInLink: "https://www.linkedin.com/in/ayushi-prajapati-b3a15b326",
    },
    {
      name: "Sakshi",
      email: "sakshi.ug24.cs@nitp.ac.in",
      profilePic: "/developers/SAKSHI SAKSHI.jpg",
      githubLink: "https://github.com/adityaranjan-091",
      linkedInLink: "https://www.linkedin.com/in/sakshi-80b99b336",
    },
    {
      name: "Shivam Kumar",
      email: "sanyavns2727@gmail.com ",
      profilePic: "/developers/SHIVAM KUMAR.png",
      githubLink: "https://github.com/shivv23",
      linkedInLink: "https://www.linkedin.com/in/shivamkumar23",
    },
    {
      name: "Md Aman",
      email: "mdaman13720@gmail.com",
      profilePic: "/developers/aman.jpeg",
      githubLink: "https://github.com/md-aman012/",
      linkedInLink: "https://www.linkedin.com/in/md-aman-76000a324",
    },
    {
      name: "Anand Kumar Thakur",
      email: "anandt.dd24.cs@nitp.ac.in",
      profilePic: "/developers/Anad.jpeg",
      githubLink: "https://github.com/yutgcx",
      linkedInLink: "",
    },
    {
      name: "Shristi",
      email: "shristi.ug24.cs@nitp.ac.in",
      profilePic: "/developers/SHRISTI SHRISTI.jpg",
      githubLink: "https://github.com/shristi482004",
      linkedInLink: "https://www.linkedin.com/in/shristi-shristi-21a025327",
    },
    {
      name: "Najuk Singh",
      email: "najuks.ug24.ec@nitp.ac.in",
      profilePic: "/developers/NAJUK SINGH.jpg",
      githubLink: "https://github.com/NAJUKSINGH",
      linkedInLink: "https://www.linkedin.com/in/najuk-singh-44915433b",
    },
  ];

  return (
    <section className="min-h-screen bg-[#00102e] py-24 px-6 relative overflow-hidden font-sans">
      {/* Ambient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#195289] opacity-[0.06] rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400 opacity-[0.05] rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#195289] to-cyan-400">
              Architects
            </span>
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            The Minds Behind the Site
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#195289] to-transparent rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {developers.map((dev, idx) => (
            <div
              key={idx}
              className="group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-[#195289]/60 transition-all duration-500 shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-full w-full bg-[#030a16] rounded-[2.5rem] p-10 overflow-hidden">
                {/* Decorative Ring */}
                <div className="absolute -top-14 -right-14 w-36 h-36 border border-[#195289]/20 rounded-full group-hover:scale-150 transition-transform duration-700" />

                <div className="flex flex-col text-left">
                  {/* Image */}
                  <div className="relative mb-10 self-center lg:self-start">
                    <div className="relative p-[2px] rounded-[2.2rem] bg-gradient-to-br from-[#195289] via-cyan-400/40 to-transparent">
                      <div className="w-40 h-40 rounded-[2rem] overflow-hidden bg-[#030a16]">
                        <img
                          src={dev.profilePic || "/Profile.png"}
                          alt={dev.name}
                          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                      {dev.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono opacity-90">
                      {dev.email}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="flex gap-4">
                      <a
                        href={dev.githubLink}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <FaGithub size={22} />
                      </a>
                      <a
                        href={dev.linkedInLink}
                        className="text-white/40 hover:text-[#0077b5] transition-colors"
                      >
                        <FaLinkedin size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
