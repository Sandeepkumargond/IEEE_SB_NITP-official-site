"use client";

import { useMemo, useRef, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

const BLOGS = [
  {
    id: "crispr-cas9",
    title: "CRISPR-Cas9",
    excerpt:
      "Human body has been under constant surveillance since the advent of CRISPR, reshaping gene editing and therapeutics...",
    date: "2020-10-15",
  },
  {
    id: "ai-chips-step-forward",
    title: "AI Chips: A Step Forward",
    excerpt:
      "We can keep all the arguments and discussions aside—specialized silicon is redefining model performance and efficiency...",
    date: "2020-01-19",
  },
  {
    id: "wireless-electricity",
    title: "Wireless Electricity",
    excerpt:
      "From resonant inductive coupling to far‑field RF harvesting, wireless power transfer is moving from labs to products...",
    date: "2020-10-15",
  },
  {
    id: "post-quantum-crypto",
    title: "Post‑Quantum Cryptography",
    excerpt:
      "As quantum computers scale, lattice‑based schemes and signatures aim to secure the next decade of communications...",
    date: "2021-05-11",
  },
  {
    id: "edge-computing-iot",
    title: "Edge Computing for IoT",
    excerpt:
      "Pushing intelligence to the edge reduces latency, bandwidth costs, and unlocks real‑time analytics in constrained devices...",
    date: "2022-03-04",
  },
  {
    id: "computer-vision-healthcare",
    title: "Computer Vision in Healthcare",
    excerpt:
      "From radiology triage to surgical robotics, vision models assist clinicians while demanding strong data governance...",
    date: "2023-07-22",
  },
  {
    id: "space-solar-power",
    title: "Space‑Based Solar Power",
    excerpt:
      "High‑efficiency PV arrays and microwave beaming rekindle interest in delivering clean power from orbit to Earth...",
    date: "2024-02-10",
  },
  {
    id: "secure-federated-learning",
    title: "Secure Federated Learning",
    excerpt:
      "Privacy‑preserving techniques like secure aggregation and DP enable collaborative model training across silos...",
    date: "2024-09-18",
  },
  {
    id: "beyond-5g-6g",
    title: "Beyond 5G: Toward 6G",
    excerpt:
      "THz links, AI‑native networks, and reconfigurable intelligent surfaces point to the next era of connectivity...",
    date: "2025-01-08",
  },
  {
    id: "green-computing",
    title: "Green Computing",
    excerpt:
      "Lifecycle carbon metrics, energy‑aware scheduling, and hardware efficiency targets drive sustainable compute strategies...",
    date: "2025-04-02",
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const trackRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BLOGS;
    return BLOGS.filter((b) =>
      [b.title, b.excerpt, b.date].some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  function scrollByCards(direction) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const width = card ? card.clientWidth + 32 : 320; // include gap
    el.scrollBy({ left: direction * width, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white/90 px-5 py-3 text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400"
          />
          <button
            aria-label="Search"
            className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-500 text-white shadow-md"
          >
            <span className="text-xl">🔍</span>
          </button>
        </div>

        <div className="relative mt-10">
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-sky-600 text-white shadow-md hover:bg-sky-700"
          >
            ‹
          </button>

          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <div className="flex gap-8 py-2 [ &::-webkit-scrollbar]:hidden">
              {filtered.map((b) => (
                <div
                  key={b.id}
                  data-card
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%]"
                >
                  <BlogCard
                    title={b.title}
                    excerpt={b.excerpt}
                    date={b.date}
                    href={`/blog/${b.id}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-sky-600 text-white shadow-md hover:bg-sky-700"
          >
            ›
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}


