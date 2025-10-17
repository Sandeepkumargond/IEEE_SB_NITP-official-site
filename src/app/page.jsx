import React from "react";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    // <div className="min-h-screen flex items-center justify-center">
    <div className="min-h-screen flex flex-col justify-between">
      {/* main content section */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-semibold text-[#07689F]">
          IEEE HOME PAGE
        </h1>
        <p className="text-2xl text-[#0E486C]">(To be designed soon)</p>
      </div>
      <section id="contact-section">
        <ContactSection />
      </section>
    </div>
  );
}
