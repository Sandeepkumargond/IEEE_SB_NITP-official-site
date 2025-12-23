"use client";
import Image from "next/image";
import { useState } from "react";
import ContactPage from "@/app/contact/page";
import OfficeBearsSection from "@/components/OfficeBearsSection";

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
        <div className="absolute inset-0 bg-linear-to-b from-[#001a33]/10 to-[#020817]/40 z-10" />

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
            <Link href="#contact">
            <button className="px-6 py-2 bg-white text-[#020817] rounded-full font-semibold hover:bg-sky-200 transition">
              Become a Member
            </button>
            </Link>
            
            <Link 
            href="/about"
            className="px-6 py-2 border border-white rounded-full hover:bg-white/10 transition">
              Learn More
            </Link>
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

              <Link 
              href="https://www.ieee.org/"
              className="px-6 py-2 border border-[#020817] rounded-full hover:bg-[#020817] hover:text-white transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFICE BEARERS SECTION ===== */}
      <OfficeBearsSection />

      {/* ===== CONNECT WITH EXPERTS ===== */}
      <section id="contact">
        <div>
          <ContactPage/>
        </div>
      </section>

     
    </main>
  );
}
