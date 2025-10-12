"use client";

import React  from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export default function HeroSection() {
  

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-100 via-indigo-100 to-purple-100 ">
    
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
            <br/>
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
  );
}
