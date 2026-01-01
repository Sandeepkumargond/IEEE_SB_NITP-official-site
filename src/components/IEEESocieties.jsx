"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SectionUnderline = () => (
    <div className="flex justify-center mt-3">
      <svg width="200" height="20" viewBox="0 0 200 20">
        <path d="M20 6 Q100 0 180 6" stroke="#3B82F6" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M30 10 Q100 6 170 10" stroke="#60A5FA" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M40 14 Q100 10 160 14" stroke="#93C5FD" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );

export default function IEEESocieties() {
  return (
    <section className="py-16 px-8 lg:px-20 bg-[#C7D9F0]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          IEEE Societies
        </h2>
        <SectionUnderline/>
        <p className="text-gray-700 max-w-2xl mx-auto mt-10">
          IEEE offers a diverse range of technical societies that help members stay at the
          forefront of innovation. Explore these active communities driving breakthroughs in
          signal processing and microwave technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        {/* -------- IEEE Signal Processing Society -------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F1F8FF] p-8 rounded-2xl shadow-md"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/IEEE_SPS.png"
              alt="IEEE Signal Processing Society"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#2563EB] mb-3">
            IEEE Signal Processing Society
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The IEEE Signal Processing Society is a global community focused on advancing
            the theory and application of signal processing technology. Members engage in
            research, publications, and conferences that shape the future of communications,
            sensing, and data analysis.
          </p>

          <a
            href="https://signalprocessingsociety.org/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#5FD4F4] text-gray-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>

        {/* -------- IEEE Microwave Theory & Techniques Society -------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#FFF8F1] p-8 rounded-2xl shadow-md"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/IEEE_MTTS.png"
              alt="IEEE Microwave Theory and Techniques Society"
              width={200}
              height={400}
              className="object-contain"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#AD5C1A] mb-3">
            IEEE Microwave Theory and Techniques Society
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The IEEE MTT Society focuses on the science and technology of microwave theory,
            RF, and wireless communications. It brings together engineers and researchers
            contributing to cutting‑edge developments in circuits, antennas, and RF systems.
          </p>

          <a
            href="https://mtt.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#5FD4F4] text-gray-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}
