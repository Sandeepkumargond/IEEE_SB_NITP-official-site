"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import IEEESocieties from "@/components/IEEESocieties";

export default function About() {
  const router = useRouter();

  // Floating animation for images
  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Slow Zoom animation for image internals
  const slowZoom = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const SectionUnderline = () => (
    <div className="flex justify-center mt-3">
      <svg width="200" height="20" viewBox="0 0 200 20">
        <path
          d="M20 6 Q100 0 180 6"
          stroke="#3B82F6"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 10 Q100 6 170 10"
          stroke="#60A5FA"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M40 14 Q100 10 160 14"
          stroke="#93C5FD"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[85vh] overflow-hidden shadow-lg">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
        >
          <Image
            src="/background.png"
            alt="IEEE Background"
            fill
            className="object-cover blur-[1px]"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center p-6 max-w-2xl mx-auto"
          >
            <h1 className="text-6xl font-bold font-serif text-white mb-4">
              About Us
            </h1>
            <p className="font-lato text-white text-base opacity-90">
              Welcome to the IEEE Student Branch at NIT Patna (NITP). As a
              vibrant community of young engineers, we are dedicated to
              advancing innovation, learning, and collaboration in the field of
              technology.
            </p>
            <button
              className="bg-[#1A66AD] mt-8 text-white px-8 py-2 rounded-lg hover:bg-[#155a94] transition-all hover:scale-105 active:scale-95 shadow-lg"
              onClick={() =>
                document
                  .getElementById("inspiration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Inspiration section */}
      <section
        className="py-16 px-8 lg:px-20 "
        style={{ backgroundColor: "#C7D9F0" }}
      >
        <div className="max-w-7xl mx-auto pt-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
              Our Source Of Inspiration
            </h2>
            <div className="flex justify-center">
              <svg width="200" height="20" viewBox="0 0 200 20">
                <path
                  d="M20 6 Q100 0 180 6"
                  stroke="#3B82F6"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M30 10 Q100 6 170 10"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M40 14 Q100 10 160 14"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 m-5 items-center">
            {/* Animated Text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h3
                className="text-3xl font-bold mb-5"
                style={{ color: "#2563EB" }}
              >
                Prof. P.K. Jain
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-base">
                Prof. Pradip K. Jain, Director of NIT Patna, is a visionary
                leader whose guidance and expertise inspire innovation and
                excellence. With decades of experience in electronics
                engineering and high-power microwave research, he has
                significantly contributed to both academia and collaborative
                research with national laboratories. As a mentor, administrator,
                and researcher, Prof. Jain encourages students to push
                boundaries, fostering an environment where learning, innovation,
                and leadership thrive. His dedication and achievements make him
                a constant source of inspiration for the IEEE Student Branch at
                NIT Patna.
              </p>

              <a
                href="https://www.nitp.ac.in/Institute/Director"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#5FD4F4" }}
              >
                View More
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
              </a>
            </motion.div>

            {/* Animated Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center min-h-[400px]"
            >
              {/* Soft glowing background */}
              <div className="absolute w-96 h-96 rounded-full bg-[#BFDBFE] blur-3xl opacity-40 animate-pulse"></div>

              {/* Slow rotating decorative rings */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full border-4 border-dashed border-[#93C5FD] opacity-40"
              ></motion.div>

              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                className="absolute w-[420px] h-[420px] rounded-full border-2 border-dotted border-[#60A5FA] opacity-30"
              ></motion.div>

              {/* Floating image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/director.jpg"
                    alt="Prof. P.K. Jain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROFESSOR IN-CHARGE SECTION --- */}
      <section className="py-24 px-8 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              Professor In-Charge
            </h2>
            <SectionUnderline />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={floating}
              animate="animate"
              className="relative flex justify-center items-center"
            >
              {/* Liquid Gradient Blob */}
              <motion.div
                animate={{
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 50% 60% 50%",
                    "60% 40% 30% 70% / 50% 30% 70% 40%",
                    "40% 60% 70% 30% / 40% 50% 60% 50%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 opacity-60 shadow-inner"
              />
              <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <motion.div
                  variants={slowZoom}
                  animate="animate"
                  className="w-full h-full"
                >
                  <Image
                    src="/PI.png"
                    alt="Dr. Subodh Srivastava"
                    width={288}
                    height={288}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-[#2563EB] mb-2">
                Dr. Subodh Srivastava
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-semibold tracking-wide uppercase">
                Assistant Professor, ECE • NIT Patna
              </p>

              {/* Paragraph 1 */}
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Dr. Subodh Srivastava serves as an Assistant Professor in the
                Department of Electronics and Communication Engineering at NIT
                Patna. With a Ph.D. from the prestigious{" "}
                <strong>IIT (BHU) Varanasi</strong>, his expertise lies in{" "}
                <strong>
                  Digital Image Processing, Machine Learning, and Computer
                  Vision
                </strong>
                .
              </p>

              {/* Paragraph 2 */}
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                As the Professor In-Charge of IEEE SB NITP, he acts as a
                visionary mentor, bridging the gap between academic theory and
                industry innovation. He is dedicated to fostering a culture of
                research and excellence, empowering students to lead the next
                wave of technological advancement.
              </p>

              <a
                href="https://www.nitp.ac.in/profile/subodh@nitp.ac.in"
                target="_blank"
                className="relative inline-block px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden bg-[#5FD4F4] hover:scale-105 transition-transform"
              >
                View Profile
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- IEEE SECTION --- */}
      <section
        id="ieee"
        className="py-24 px-8 lg:px-20"
        style={{ backgroundColor: "#C7D9F0" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              IEEE
            </h2>
            <SectionUnderline />
          </div>

          {/* Floating Image */}
          <motion.div
            variants={floating}
            animate="animate"
            className="w-36 h-36 scale-130 mb-8 mx-auto"
          >
            <img
              src="/ieee.png"
              alt="IEEE Icon"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Text Content */}
          <div className="w-full text-justify flex flex-col items-center mx-auto">
            <p className="text-gray-700 leading-relaxed text-base mb-6">
              The{" "}
              <span className="font-bold">
                Institute of Electrical and Electronics Engineers (IEEE)
              </span>{" "}
              is the world’s largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
              With more than half a million members across over 160 countries,
              IEEE serves as a global platform for innovation, collaboration,
              and knowledge exchange in fields including electrical engineering,
              computer science, telecommunications, and emerging technologies.
            </p>

            <p className="text-gray-700 leading-relaxed text-base mb-8">
              Through its highly respected publications, conferences, standards
              development activities, and educational programs, IEEE empowers
              professionals and students alike to shape the future of
              technology. From research breakthroughs to real‑world
              applications, IEEE’s contributions drive progress and connect a
              diverse global community committed to excellence and technological
              impact.
            </p>

            {/* Button */}
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden bg-[#5FD4F4] mx-auto block"
            >
              View More
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
            </a>
          </div>
        </div>
      </section>

      {/* --- IEEE SB SECTION --- */}
      <section className="py-24 px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              IEEE SB NITP
            </h2>
            <SectionUnderline />
          </div>

          {/* Text Content */}
          <div className="w-[80%] mx-auto text-justify">
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              The{" "}
              <span className="font-bold">
                IEEE Student Branch at NIT Patna
              </span>{" "}
              was founded with the enthusiastic initiative of 13 students from
              the B.Tech programs in Electrical Engineering and Electronics &
              Communication Engineering. Under the guidance of Prof. Kumar
              Abhishek, Assistant Professor of Computer Science and Engineering,
              the branch was officially formed to foster innovation,
              collaboration, and professional growth among students.
            </p>
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              Our journey was shaped by the mentorship of three visionary
              leaders of NIT Patna: Dr. Asok De (Director, NIT Patna), Dr. D.K.
              Singh (HOD, Electronics & Communication Engineering), and Dr. M.P.
              Singh (HOD, Computer Science & Engineering). Prof. Kumar Abhishek
              served as the first Branch Counsellor, while Shruti Neha became
              the first Student Branch Chair.
            </p>
            <p className="text-gray-700 leading-relaxed text-base mb-8">
              Since its inception, the IEEE Student Branch, NIT Patna, has
              pursued the vision of keeping students updated with the latest
              developments in engineering and technology. The branch provides a
              platform for students to explore innovative ideas and implement
              projects that can potentially shape the future of engineering and
              society.
            </p>

            {/* Button */}
            <button
              className="relative px-8 py-3 text-gray-900 font-medium rounded-tl-full rounded-tr-full rounded-br-full shadow-md overflow-hidden bg-[#5FD4F4] transition-transform hover:scale-105 mx-auto block"
              onClick={() => router.push("/")}
            >
              View More
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-full"></div>
            </button>
          </div>
        </div>
      </section>

      {/* IEEE Societies */}
      <IEEESocieties />
    </div>
  );
}
