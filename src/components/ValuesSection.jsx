"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into everything we do, driven by genuine enthusiasm for creating exceptional experiences."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Trust is the foundation of our relationships. We're transparent, honest, and committed to doing what's right."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creativity and forward-thinking approaches to solve complex challenges with elegant solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great achievements happen when talented people work together. We value every voice and perspective."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape who we are as an organization.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}