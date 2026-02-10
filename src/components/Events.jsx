import React, { useState, useEffect } from "react";
import { fetchAllEvents } from "@/lib/eventAction";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetchAllEvents();
        console.log(response);

        const allEvents = response.data || [];
        const now = new Date();

        // Separate upcoming and past events
        const upcoming = allEvents.filter(event => new Date(event.eventDate) >= now);
        const past = allEvents.filter(event => new Date(event.eventDate) < now);

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("Error loading events:", error);
        setUpcomingEvents([]);
        setPastEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Upcoming Events Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 pb-96">
        <div className="mb-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400">
              <span className="text-blue-200 font-semibold text-sm">Upcoming</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Upcoming Events
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Join us for exciting workshops, hackathons, and networking opportunities
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Loading events...</p>
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div className="text-center py-16 bg-slate-700/50 rounded-lg border border-slate-600">
              <p className="text-blue-100 text-lg">No upcoming events at the moment</p>
              <p className="text-blue-200/70 text-sm mt-2">Check back soon for new opportunities</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-slate-700 border-2 border-blue-400/50 rounded-lg shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700">
                    {event.images && event.images.length > 0 ? (
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-600">
                        <img src="/IEEE.jpeg" alt="IEEE Logo" className="w-20 h-20 opacity-60" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="space-y-2 mb-4 text-sm text-blue-100">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 13a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
                          <path d="M10 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z" />
                        </svg>
                        <span>
                          {new Date(event.eventDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-blue-100 text-sm mb-6 line-clamp-3 flex-grow">
                      {event.desc}
                    </p>

                    {/* Register Button */}
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2.5 px-4 rounded-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 text-center shadow-lg hover:shadow-blue-500/50"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-16"></div>

        {/* Past Events Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-400">
              <span className="text-cyan-200 font-semibold text-sm">Archives</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Past Event Highlights
            </h2>
            <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
              Relive the moments that shaped our community
            </p>
          </div>

          {pastEvents.length === 0 ? (
            <div className="text-center py-16 bg-slate-700/50 rounded-lg border border-slate-600">
              <p className="text-cyan-100 text-lg">No past events yet</p>
              <p className="text-cyan-200/70 text-sm mt-2">Completed events will appear here</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-slate-700 border-2 border-cyan-400/50 rounded-lg shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-300 opacity-85 overflow-hidden flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700">
                    {event.images && event.images.length > 0 ? (
                      <img
                        src={event.images[0]}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-600">
                        <img src="/IEEE.jpeg" alt="IEEE Logo" className="w-20 h-20 opacity-60" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="space-y-2 mb-4 text-sm text-cyan-100">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 13a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z" />
                          <path d="M10 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z" />
                        </svg>
                        <span>
                          {new Date(event.eventDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cyan-100 text-sm mb-6 line-clamp-3 flex-grow">
                      {event.desc}
                    </p>

                    {/* Disabled Button */}
                    <button
                      disabled
                      className="w-full bg-slate-600 text-slate-400 font-medium py-2 px-4 rounded-md cursor-not-allowed"
                    >
                      Event Concluded
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
