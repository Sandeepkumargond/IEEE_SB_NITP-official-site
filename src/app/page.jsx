
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CommunitiesSection from "@/components/CommunitiesSection";
import SocietiesSection from "@/components/SocietiesSection";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { chunkArray } from "@/lib/utils"; // if you have it
// import { DOMAINS } from "@/lib/constants"; // if you have it

// temporary inline helper if not imported
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// temporary placeholder if DOMAINS not imported
const DOMAINS = [
  { key: "ai", teams: [{ key: "ml" }] },
  { key: "web", teams: [{ key: "frontend" }] },
  // add your actual domains here
];

export default function Home() {
  const router = useRouter();
  const rows = chunkArray(DOMAINS, 3);
  const [openDomain, setOpenDomain] = useState(null);

  function handleDomainClick(domainKey) {
    const domain = DOMAINS.find((d) => d.key === domainKey);
    if (domain && domain.teams && domain.teams.length > 0) {
      router.push(`/teams/${domain.teams[0].key}`);
      return;
    }
    router.push(`/teams/${domainKey}`);
  }

  function handleTeamClick(domainKey, teamKey, e) {
    e.stopPropagation();
    router.push(`/teams/${teamKey}`);
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <CommunitiesSection />
      <SocietiesSection />
      <Footer />
    </div>
  );
}