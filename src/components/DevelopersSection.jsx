"use client";
import React from "react";
import TeamsPage from "@/app/teams/page";  // direct import

export default function DevelopersSection() {
  return (
    <section>
      <h2>Developers</h2>
      <TeamsPage />   {/* direct render of domain list */}
    </section>
  );
}