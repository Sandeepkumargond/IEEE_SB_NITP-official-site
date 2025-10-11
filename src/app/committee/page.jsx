"use client";

import { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";

export default function CommitteePage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/mock.json", { cache: "no-store" });
        const data = await res.json();
        setMembers(Array.isArray(data.members) ? data.members : []);
      } catch (e) {
        console.error("Failed to load members", e);
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Meet our <span className="text-sky-700">Office Bearers</span>
        </h1>
        <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
          Meet the masterminds behind the innovation! Introducing the dynamic team leaders of IEEE NIT Patna.
        </p>

        {loading ? (
          <div className="mt-12 grid place-items-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-sky-600 border-t-transparent" />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((m) => (
              <MemberCard key={m.id} name={m.name} role={m.role} image={m.image} socials={m.socials} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


