"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
     <div className="min-h-screen bg-gradient-to-bl from-blue-300 via-indigo-100 to-blue-100 ">
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            Our Purpose
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto ">
           Our mission is to foster technical growth, innovation, and a culture of knowledge sharing for every aspiring engineer.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6">
                Our Mission
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower organizations and individuals with innovative solutions that 
                drive meaningful progress. We believe in the transformative power of technology 
                when combined with human insight and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6">
                Our Vision
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the catalyst for positive change in the digital landscape, 
                creating solutions that not only solve problems but inspire new ways 
                of thinking and working in an interconnected world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
}