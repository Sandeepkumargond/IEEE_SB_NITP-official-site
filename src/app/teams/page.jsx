"use client";
import Link from "next/link";

const domains = [
  { key: "Web", title: "Web Dev", image: "/web.jpg" },
  { key: "Technical", title: "Technical", image: "/technical.jpg" },
  { key: "AIML", title: "AI-ML", image: "/ai.jpeg" },
  { key: "Event", title: "Event Management Team", image: "/event.jpg" },
  { key: "PR", title: "PR and Sponsors", image: "/pr.jpg" },
  { key: "Design", title: "Content and Design", image: "/ui.jpeg" },
];

export default function TeamsPage() {
  return (
    <section className="min-h-screen bg-[#020c1b] text-slate-200 selection:bg-cyan-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-24 py-14">
        {/* Heading */}
        <h2 className="text-center mb-10 text-[clamp(28px,5vw,42px)] font-extrabold tracking-widest uppercase text-white">
          Our Domains
        </h2>

        {/* Grid */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map(({ key, title, image }) => (
            <Link
              key={key}
              href={`/teams/${key}`}
              className="group block"
            >
              {/* Card */}
              <div className="rounded-2xl transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-xl bg-white/10 border-2 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition">
                  {/* Image */}
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover opacity-80 group-hover:opacity-100 transition"
                  />

                  {/* Title */}
                  <div className="px-4 py-3 border-t border-cyan-500/20 text-center">
                    <h3 className="text-[clamp(18px,3vw,22px)] font-extrabold text-cyan-400 group-hover:text-white transition">
                      {title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
