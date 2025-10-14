"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MissionVisionSection from "@/components/MissionVisionSection";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";

export default function About() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
 {/* background */}
        <div className="relative w-full h-100  overflow-hidden shadow-lg ring-4 ring-blue-200">
          <Image
            src="/background.png"
            alt="Important Person"
            width={400}
            height={400}
            className="object-cover w-full h-full blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* Inner content container */}
            <div className="flex flex-col items-center text-center p-6 lg: max-w-3xl mx-auto leading-relaxed px-4">
              <h1 className="text-6xl font-bold font-serif text-white mb-4">
                About Us
              </h1>
              <p className="font-lato  text-white text-base ">
                Welcome to the IEEE Student Branch at NIT Patna (NITP). As a vibrant community
                of young engineers, we are dedicated to advancing innovation, learning, and
                collaboration in the field of technology. Our branch serves as a platform where
                students connect, collaborate, and enhance their skills.
              </p>

              <button
                className="bg-[#1A66AD] mt-5 text-white px-4 py-2 rounded-lg hover:bg-[#155a94] transition"
                onClick={() => {
                  const el = document.getElementById("details");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                See More
              </button>
            </div>
          </div>
        </div>

      {/* Hero Section Starts*/}
      <div className="min-h-screen bg-gradient-to-bl from-blue-300 via-indigo-100 to-blue-100 ">

       
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-indigo-100/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-100/50 to-orange-100/30 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <h1 className="text-3xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  OUR SOURCE OF INSPIRATION
                </span>
              </h1>
              {/* Person Image */}
              <div className="w-60 h-60 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-200">
                <Image
                  src="/director.jpg"
                  alt="Important Person"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Person Info */}
              <div>
                <h1 className="text-3xl md:text-3xl font-bold text-slate-900 mb-3">
                  Prof. PRADIP KUMAR JAIN
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Director
                  </span>
                </h1>
                <p className="bg-white text-slate-700 max-w-4xl mx-auto p-8 rounded-xl shadow-lg leading-relaxed text-lg md:text-xl">
                  We are blessed to find ourselves lucky to be part of this institution,
                  directed by the motivational, inspirational, and highly knowledgeable
                  Prof. P.K Jain. Whenever we have encountered challenges, his advice and
                  guidance have always made our path clear. His righteousness has guided us
                  to traverse the correct path, and he continuously motivates us to improve
                  and bring out the best in ourselves.

                  Prof. Jain is a major source of inspiration, portraying the best example
                  of living a life with simple living and high thinking. He glorifies our
                  institute to the highest level, and we are proud to be part of this
                  institution under his leadership.

                  We are thankful for all the support and guidance he has provided to the
                  students. Prof. Jain is a senior member of IEEE, Fellow of the Institution
                  of Electronics and Telecommunications Engineers of India, Fellow of the
                  Institution of Engineers of India, and also a Fellow of the Vacuum Electron
                  Devices and Application Society.
                </p>

              </div>
            </motion.div>


          </div>
        </section>
      </div>
      {/* Hero section ended */}

       


      {/* Details  Section */}

        <div id="details" className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >

            <h1 className="text-5xl font-semibold text-slate-900 tracking-tight">
              IEEE <span className="font-medium">Community</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advancing technological innovation for the benefit of humanity
            </p>
          </motion.div>
        </div>

        {/* Main Content  */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* IEEE Main Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-blue-100/50 hover:shadow-3xl hover:shadow-blue-200/50 transition-all duration-500">
              <div className="p-10">
                {/* IEEE Header */}
                <div className="flex items-center gap-6 mb-8">

                  <img
                    src="/ieee.png"
                    alt="logo"
                    className="w-21 h-21 object-contain"
                  />

                  <div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-1">IEEE</h2>
                    <p className="text-sm text-slate-500 tracking-wider uppercase">
                      Institute of Electrical and Electronics Engineers
                    </p>
                  </div>
                </div>

                {/* IEEE Content */}
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                   
                    <p className="text-slate-600 leading-relaxed">
                      IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. IEEE, pronounced "Eye-triple-E," stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name.IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.
                    </p>
                  </div>


                  <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-slate-300">
                    <p className="text-slate-700 italic">
                      "IEEE and its members inspire a global community through highly cited
                      publications, conferences, technology standards, and professional and
                      educational activities."
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* IEEE SB NITP Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-indigo-100/50 hover:shadow-3xl hover:shadow-indigo-200/50 transition-all duration-500">
              <div className="p-10">
                {/* IEEE SB NITP Header */}
                <div className="flex items-center gap-6 mb-8">

                  <img
                    src="/nitplogo.png"
                    alt="logo"
                    className="w-16 h-16 object-contain rounded-3xl"
                  />

                  <div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-1">IEEE SB NITP</h2>
                    <p className="text-sm text-slate-500 tracking-wider uppercase">
                      Student Branch • NIT Patna
                    </p>
                  </div>
                </div>

                {/* IEEE SB NITP Content */}
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-6">
                   
                    <p className="text-slate-600 leading-relaxed">
                      IEEE Student Branch, NIT Patna was established with an enthusiastic initiative of 13 students of NIT Patna enrolled in B.Tech programme of Electrical Engineering and Electronics and Communication Engineering under the leadership of Prof Kumar Abhishek, Assistant professor of Computer Science and Engineering. In this whole path our mentors were the three great visionaries of our college Dr Asok De (Director NIT Patna), Dr D.K. Singh (HOD, Electronics and Communication Engineering), and Dr M.P Singh (HOD, Computer Science and Engineering). Prof. Kumar Abhishek became the first Branch Counsellor of the Student Branch and Shruti Neha became the first Student Branch Chair. IEEE Student Branch, NITP was established with a vision of making students aware of new developments in various engineering fields and to provide support in implementing new innovative ideas of future engineers which can give a new shape to this world.
                    </p>
                  </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-indigo-300">
                    <h4 className="font-medium text-slate-800 mb-3">Vision Statement</h4>
                    <p className="text-slate-700 italic">
                      "Making students aware of new developments in various engineering fields
                      and providing support in implementing innovative ideas of future engineers
                      which can give a new shape to this world."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div></div>
        {/* Details Section ended */}

      <MissionVisionSection />
      <ValuesSection />
      <StatsSection />

    </div>


  );
}
