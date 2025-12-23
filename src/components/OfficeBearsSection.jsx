"use client";
import MemberCard from "@/components/MemberCard";

export default function OfficeBearsSection() {
  const officeBearers = [
    {
      name: "XYZ",
      designation: "Chairperson",
      githubLink: "",
      linkedInLink: "",
      profilePic: "",
    },
    {
      name: "Vansh Tyagi",
      designation: "Co-Chairperson",
      githubLink: "https://github.com/VanshTyagi05",
      linkedInLink: "https://www.linkedin.com/in/vansh-tyagi-887a6627a/",
      profilePic: "/office_bearers/vansh.jpg",
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
      profilePic: "",
    },
    {
      name: "Aryan Kumar Arya",
      designation: "Treasurer",
      githubLink: "",
      linkedInLink: "",
      profilePic: "",
    },
    {
      name: "Saurabh Yadav",
      designation: "Technical Lead",
      githubLink: "https://github.com/kg-saurabh",
      linkedInLink: "https://www.linkedin.com/in/saurabh-yadav-932a2328a",
      profilePic: "",
    },
    {
      name: "Gungun Singh",
      designation: "Project Head",
      githubLink: "https://github.com/gungun-2010",
      linkedInLink: "https://www.linkedin.com/in/gungun-singh-1068b12a3/",
      profilePic: "",
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
      profilePic: "",
    },
    {
      name: "Deepak Kumar",
      designation: "PR & Sponser Head",
      githubLink: "https://github.com/Deep07954",
      linkedInLink: "https://www.linkedin.com/in/deepak-kumar-4529bb28a",
      profilePic: "",
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

  // Set default profile pic for empty ones
  officeBearers.forEach((member) => {
    if (member.profilePic === "") {
      member.profilePic = "/Profile.png";
    }
  });

  // Separate chairperson/co-chairperson from others
  const chairpersonTeam = officeBearers.filter(
    (member) =>
      member.designation === "Chairperson" ||
      member.designation === "Co-Chairperson"
  );

  const otherMembers = officeBearers.filter(
    (member) =>
      member.designation !== "Chairperson" &&
      member.designation !== "Co-Chairperson"
  );

  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Meet our <span className="text-blue-300">Office Bearers</span>
        </h2>
        <p className="mt-3 text-center text-gray-200 max-w-3xl mx-auto">
          Meet the masterminds behind the innovation! Introducing the dynamic
          team leaders of IEEE NIT Patna.
        </p>

        {/* Chairperson and Co-Chairperson */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-2 gap-3 w-96 h-48">
            {chairpersonTeam.map((member, idx) => (
              <MemberCard
                key={`chair-${idx}`}
                name={member.name}
                role={member.designation}
                image={member.profilePic}
                githubLink={member.githubLink}
                linkedInLink={member.linkedInLink}
              />
            ))}
          </div>
        </div>

        {/* All other team members */}
        <div className="mt-24">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {otherMembers.map((member, idx) => (
              <MemberCard
                key={`other-${idx}`}
                name={member.name}
                role={member.designation}
                image={member.profilePic}
                githubLink={member.githubLink}
                linkedInLink={member.linkedInLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
