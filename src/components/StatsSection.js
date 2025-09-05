"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Globe, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "30+",
    label: "Team Members",
    description: "Passionate students working together"
  },
  {
    icon: Globe,
    number: "15+",
    label: "Events",
    description: "Driving innovation through 15+ successful events."
  },
  {
    icon: Award,
    number: "20+",
    label: "Projects Delivered",
    description: "Successful solutions across industries"
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
    description: "Building excellence since day one"
  }
];

export default function StatsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            By the Numbers
          </h2>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            
           Numbers that showcase our growth
          
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-slate-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}