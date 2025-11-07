import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[720px] md:min-h-[820px] lg:min-h-[880px] flex items-start overflow-hidden">
      {/* Background image (keep hero-bg.png in /public) */}
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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-24">
        <div className="bg-white/6 backdrop-blur-sm rounded-xl border border-white/8 overflow-hidden">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            {/* left hero text block */}
            <div className="p-8 sm:p-10 lg:p-16 flex items-start">
              <div className="relative z-10 w-full">
                {/* dotted decorative top-left (only on md+) */}
                <div className="hidden md:block mb-4">
                  <svg width="84" height="84" viewBox="0 0 24 24" className="opacity-70 text-white/25" aria-hidden>
                    <defs>
                      <pattern id="dots-hero" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="0.5" cy="0.5" r="0.35" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="24" height="24" fill="url(#dots-hero)" />
                  </svg>
                </div>

                <p className="text-sm sm:text-base text-white/95">Hi there!</p>
                <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-xl">
                  Welcome to&nbsp;
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200">
                    IEEE NITP
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base text-white/85 max-w-lg">
                  Where technology meets possibilities when we meet each other...
                </p>
              </div>

              {/* faint horizontal divider */}
              <div className="absolute left-6 right-6 bottom-0 h-px bg-white/10" />
            </div>

            {/* right info block with "Who are WE?" */}
            <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-center relative">
              <div className="w-full max-w-2xl">
                <div className="border-2 border-white/8 rounded-md p-5 sm:p-6 md:p-8 bg-white/4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                        The IEEE Student Branch of NIT Patna gives students a community of peers, and a
                        connection to faculty and industry professionals who drive innovation in countless
                        technical fields. Student involvement in Branch activities, outreach programs,
                        conferences, and projects develops capabilities beyond the norm.
                      </p>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-[300px] h-32 sm:h-36 md:h-40 lg:h-44 rounded-md border border-dashed border-white/20 bg-white/6 flex items-center justify-center px-4 text-center">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-100 leading-tight">Who are WE?</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle blueprint decoration (small screens reduced opacity/size) */}
                <svg className="absolute -left-6 -top-6 opacity-10 hidden sm:block pointer-events-none" width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M8 60 H312" stroke="white" strokeWidth="0.6" strokeDasharray="6 6" />
                  <path d="M48 8 V112" stroke="white" strokeWidth="0.6" strokeDasharray="6 6" />
                  <path d="M272 8 V112" stroke="white" strokeWidth="0.6" strokeDasharray="6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}