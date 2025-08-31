"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export default function HeroSection() {
  return (
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
    SOURCE OF INSPIRATION
  </span>
</h1>
          {/* Person Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-200">
            <Image
              src="/director.jpg" // put your image inside /public/person.jpg
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
           <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light border-2 border-slate-500 rounded-xl p-6 shadow-4xl">
  We are blessed to find ourselves lucky to be the part of this institution
  which is directed by our motivational, inspirational, enthusiastically,
  highly legitimate and highly knowledgeable personality Prof. P.K Jain.
  Whenever we have stumbled with some problems, a piece of advice or direction
  from his side have made our path crystal clear. His righteousness has always
  guided us to traverse the correct path. He has always motivated us to improve
  and bring the best of us. He is the major source of inspiration for all of us,
  as he portrays the best example to live a life with simple living and high
  thinking. He glorifies our institutes to the best level. We are proud to be
  part of this institution directed by a great personality like Prof. P.K Jain,
  Director NIT Patna. We are thankful for all the support and guidance that he
  has bestowed to the students of this college. He is a senior member of IEEE,
  fellow of Institution of Electronics and Telecommunications Engineers of
  India, Fellow of Institution of Engineers of India and also a fellow of
  Vacuum Electron Devices and Application Society.
</p>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
