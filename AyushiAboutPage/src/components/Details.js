"use client"
import React from "react";
import { motion } from "framer-motion";


export default function IEEEInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* IEEE Main Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-blue-100/50 hover:shadow-3xl hover:shadow-blue-200/50 transition-all duration-500">
              <div className="p-10">
                {/* IEEE Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 text-white" />
                  </div>
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
                    <h3 className="text-lg font-medium text-slate-800 mb-3">Global Leadership</h3>
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-indigo-100/50 hover:shadow-3xl hover:shadow-indigo-200/50 transition-all duration-500">
              <div className="p-10">
                {/* IEEE SB NITP Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 text-white" />
                  </div>
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
                    <h3 className="text-lg font-medium text-slate-800 mb-3">Foundation Story</h3>
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
        </div>

      </div>
    </div>
  );
}