import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[820px] flex flex-col items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="hero background"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-transparent pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top: Hero text block */}
        <div className="overflow-hidden p-8 sm:p-10 lg:p-16">
          <div className="relative">

            <p className="text-sm md:text-base text-white/95">Hi there!</p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white max-w-2xl">
              Welcome to&nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200">
                IEEE NITP
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/85 max-w-2xl">
              Where technology meets possibilities when we meet each other...
            </p>

            {/* faint horizontal divider */}
            <div className="mt-8 border-t border-white/10 pt-8" />
          </div>
        </div>

        {/* Bottom: Info block stacked under hero */}
        <div className="mt-8">
          <div className="bg-white/6 backdrop-blur-sm rounded-xl border border-white/8 overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
                  The IEEE Student Branch of NIT Patna gives students a community of peers, and a connection to
                  faculty and industry professionals who drive innovation in countless technical fields. Student
                  involvement in Branch activities, whether special projects, social and technical meetings,
                  outreach programs, conferences, local Section or Regional opportunities, etc. can help develop
                  a record of accomplishment and capabilities beyond the norm.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                <div className="flex-1">
                  <p className="text-sm text-white/70">Read more about our activities and how to join.</p>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-full max-w-xs h-28 sm:h-36 rounded-md border border-dashed border-white/20 bg-white/6 flex items-center justify-center px-4 text-center">
                    <h3 className="text-lg sm:text-2xl font-bold text-cyan-100 leading-tight">Who are WE?</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* decorative blueprint lines */}
            <svg className="hidden sm:block absolute right-6 -bottom-8 opacity-10 pointer-events-none" width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M8 60 H312" stroke="white" strokeWidth="0.6" strokeDasharray="6 6" />
              <path d="M48 8 V112" stroke="white" strokeWidth="0.6" strokeDasharray="6 6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}