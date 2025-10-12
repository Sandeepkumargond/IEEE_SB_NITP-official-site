import React from "react";
import IMPULSE from '../assets/impulse.jpg';
import CODEUNCODED from '../assets/codeduncoded.jpg';
import QUESOEQUEST from '../assets/queso.jpg';

const events = [
  {
    image: IMPULSE,
    title: "IMPULSE",
  },
  {
    image: CODEUNCODED,
    title: "CODE-THE-UNCODED",
  },
  {
    image: QUESOEQUEST,
    title: "QUESO-E-QUEST",
  },
];

const Events = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-300 via-sky-300 to-sky-400 min-h-screen p-5 ">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
          Explore Our Events, Fuel Your Curiosity
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-6">
          Workshops, Hackathons, Competitions &amp; More
        </p>
        <button className="bg-sky-900 hover:bg-sky-950 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
          Register now
        </button>
      </div>

      {/* Events Section */}
      <section className="max-w-6xl mx-auto bg-gray-50 rounded-3xl py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Past Event Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-80 p-4 flex flex-col items-center"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-lg w-full h-56 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-center mb-4">
                {event.title}
              </h3>
              <button className="bg-[#0d4d73] text-white font-medium py-2 px-5 rounded-lg hover:bg-[#0b3d5b] transition-colors">
                View details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
