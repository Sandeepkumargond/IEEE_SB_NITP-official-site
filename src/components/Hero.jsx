"use client";
import Image from "next/image";
import { useState } from "react";
import About from "@/app/about/page";

import Link from "next/link";

export default function HeroPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex flex-col w-full text-white bg-[#020817]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="IEEE background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a33]/10 to-[#020817]/40 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            IEEE —{" "}
            <span className="text-sky-300">Bridging Mind and Machine</span>
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Join a global community of passionate engineers, researchers, and
            technologists driving change through ideas, leadership, and impact.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-white text-[#020817] rounded-full font-semibold hover:bg-sky-200 transition">
              Become a Member
            </button>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
            <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white mt-1 rounded-full" />
            </div>
            <span className="text-sm text-white/80">Scroll down</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="bg-white text-[#020817] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <Image
              src="/about-illustration.png"
              alt="About IEEE NITP"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The IEEE Student Branch at NIT Patna is a vibrant and dedicated
              student-led community under the global umbrella of IEEE — the
              world’s largest technical professional organization. Our branch
              brings together passionate engineers, developers, designers, and
              innovators united by a shared drive to learn, build, and lead in
              the world of technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We aim to be a catalyst for innovation, leadership, and ethical
              engineering — shaping students into contributors to global
              technology and society.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <button className="px-6 py-2 bg-[#020817] text-white rounded-full hover:bg-sky-700 transition">
                  Know More About Us
                </button>
              </Link>

              <button className="px-6 py-2 border border-[#020817] rounded-full hover:bg-[#020817] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONNECT WITH EXPERTS ===== */}
      <section className="bg-gradient-to-br from-[#001a33] via-[#002b55] to-[#001a33] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
            <h3 className="text-3xl font-bold mb-4">
              Connect with our experts
            </h3>
            <p className="text-white/80 mb-6">
              We are here for you! How can we help?
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-white/90 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/90 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/90 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-sky-400 text-[#020817] font-semibold py-2 rounded-full hover:bg-sky-300 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Illustration */}
          {/* <div className="flex justify-center">
            <Image
              src="/contact-illustration.png"
              alt="Contact IEEE NITP"
              width={400}
              height={400}
              className="object-contain"
            />
          </div> */}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center text-white/70 py-6 text-sm border-t border-white/10">
        © 2024 IEEE SB NITP. All Rights Reserved.
      </footer>
    </main>
  );
}
