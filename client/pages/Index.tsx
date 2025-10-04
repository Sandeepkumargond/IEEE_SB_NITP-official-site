import { EventCard } from "@/components/EventCard";

export default function Index() {
  const events = [
    {
      title: "IMPULSE",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/5b0564e914517cc719e3517a49493fb76e19cac2?width=510"
    },
    {
      title: "CODE THE UNCODED", 
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/c42f8fca316fe149f1bb51c1eb233747091992cb?width=510"
    },
    {
      title: "QUESO-E-QUEST",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a151137e40809eae86bd17a518ae5c609a363294?width=516"
    }
  ];



  return (
    <div className="bg-ieee-background">
      {/* Hero Section */}
      <section className="w-full h-[769px] ieee-gradient relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Main Title */}
          <div className="w-full max-w-[947px] px-4 text-center">
            <h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight mb-4">
              Explore Our Events,Fuel Your Curiosity
            </h1>
            
            {/* Subtitle */}
            <p className="text-white/90 text-base lg:text-xl font-medium mb-8 lg:mb-12">
              Workshops,Hackathons,Competitions & More
            </p>

            {/* Register Link (dummy) */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-[194px] h-[49px] inline-flex items-center justify-center bg-ieee-primary rounded-[15px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-ieee-primary/90 transition-colors"
            >
              <span className="text-white text-base font-semibold">Register now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-ieee-blue text-2xl lg:text-[32px] font-bold">
              Our Past Events Highlights
            </h2>
          </div>

          {/* Event Cards */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                imageUrl={event.imageUrl}
                href="#"
                className="flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
