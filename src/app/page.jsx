import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-700 via-sky-500 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Hero area */}
        <section className="relative overflow-hidden">
          {/* subtle diagonal light overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent 30%)]"
            style={{ mixBlendMode: "overlay" }}
          />

          <div className="px-6 sm:px-10 lg:px-20 py-20 lg:py-28">
            <div className="w-full lg:max-w-4xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 lg:p-16 shadow-[0_8px_40px_rgba(8,30,63,0.28)] border border-white/10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Hi there!
                </h1>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200">
                  Welcome to&nbsp;
                  <span className="text-white/90">IEEE NITP</span>
                </h2>

                <p className="mt-6 text-sm sm:text-base text-white/85 max-w-xl">
                  Where technology meets possibilities when we meet each other...
                </p>

                {/* decorative dotted square (left) */}
                <div className="mt-10 hidden md:block">
                  <div className="w-28 h-28 border-2 border-white/10 rounded-lg flex items-center justify-center text-white/20">
                    {/* subtle decorative placeholder */}
                    <svg width="56" height="56" viewBox="0 0 24 24" className="opacity-40">
                      <rect x="1" y="1" width="22" height="22" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info / who are we section */}
        <section className="px-6 sm:px-10 lg:px-20 -mt-6 lg:-mt-12 mb-24">
          <div className="bg-white/80 rounded-2xl shadow-xl border border-white/40 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 lg:p-12">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">The IEEE Student Branch of NIT Patna</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The IEEE Student Branch of NIT Patna gives students a community of peers, and a connection
                    to faculty and industry professionals who drive innovation in countless technical fields.
                    Student involvement in Branch activities, whether special projects, social and technical meetings,
                    outreach programs, conferences, local Section or Regional opportunities, etc. can help develop a
                    record of accomplishment and capabilities beyond the norm.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="/about"
                    className="inline-block px-5 py-2 rounded-md bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm h-48 rounded-md border-2 border-dashed border-slate-200 bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-sky-600">Who are WE?</h4>
                    <p className="text-xs text-slate-500 mt-2">Student branch — creators, learners & contributors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* thin divider */}
            <div className="border-t border-white/50/10" />
            {/* optional footer-ish strip */}
            <div className="p-6 text-center text-sm text-slate-600">© {new Date().getFullYear()} IEEE SB NITP. All Rights Reserved.</div>
          </div>
        </section>
      </div>
    </main>
  );
}