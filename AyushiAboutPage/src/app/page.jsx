import React from "react";
import HeroSection from "../components/HeroSection";
import MissionVisionSection from "../components/MissionVisionSection";
import ValuesSection from "../components/ValuesSection";
import StatsSection from "../components/StatsSection";

import Details from "../components/Details";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <Details/>
      <MissionVisionSection />
      <ValuesSection />
      <StatsSection />
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}