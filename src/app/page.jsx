import React from "react";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER SECTION */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col justify-center items-center gap-4 p-6">
        <h1 className="text-5xl font-semibold text-[#07689F]">IEEE HOME PAGE</h1>
        <p className="text-2xl text-[#0E486C]">(To be designed soon)</p>
      </main>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
