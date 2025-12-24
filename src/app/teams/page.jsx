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
    <section className="min-h-screen bg-[url('/mobile-vector-1.svg')] bg-cover bg-center bg-no-repeat px-6 sm:px-10 lg:px-24 py-14">
      {/* Heading */}
      <h2 className="text-center mb-10 text-[clamp(28px,5vw,42px)] font-extrabold tracking-widest uppercase text-black">
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
              <div className="overflow-hidden rounded-xl bg-white border-2 border-gray-300/70">
                {/* Image */}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover"
                />

                {/* Title */}
                <div className="px-4 py-3 border-t border-slate-200 text-center">
                  <h3 className="text-[clamp(18px,3vw,22px)] font-extrabold text-gray-900">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
