import React, { useState, useEffect } from "react";
import { fetchAllEvents } from "@/lib/eventAction";

const Events = () => {
  const [events,setEvents] = useState([]);

    // fetching events
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await fetchAllEvents();
          console.log(response);
  
          setEvents(response.data || []);
        } catch (error) {
          console.error("Error loading blogs:", error);
          setEvents([]);
        }
      };
  
      fetchEvents();
    }, []);

  return (
    <div className="bg-gradient-to-br from-cyan-300 via-sky-300 to-sky-400 min-h-screen p-5">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
          Explore Our Events, Fuel Your Curiosity
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-6">
          Workshops, Hackathons, Competitions &amp; More
        </p>
        <a
          href="#events"
          className="bg-sky-900 hover:bg-sky-950 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          View Events
        </a>
      </div>

      {/* Events Section */}
      <section id="events" className="max-w-6xl mx-auto bg-gray-50 rounded-3xl py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Past Event Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-80 p-4 flex flex-col items-center"
            >
              {event.images && event.images.length > 0 ? 
              <img
                src={event.images[0]}
                alt={event.title}
                className="rounded-lg w-full h-56 object-cover mb-4"
              />
              : 
              <img
              src="/IEEE.png"
              className="rounded-lg w-full h-56 object-fit mb-4"
              />
              }
              <h3 className="text-lg font-semibold text-center mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {new Date(event.eventDate).toLocaleDateString()} • {event.location}
              </p>
              <p className="text-sm text-gray-700 mb-4 text-center">{event.desc}</p>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d4d73] text-white font-medium py-2 px-5 rounded-lg hover:bg-[#0b3d5b] transition-colors"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
