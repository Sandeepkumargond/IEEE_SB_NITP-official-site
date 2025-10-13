
"use client";


import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Define your gallery items with multiple images for each
const galleryItems = [
  {
    title: "Impulse 2023",
    cover: "/images.jpeg",
    images: ["/images.jpeg", "/images.jpeg", "/images.jpeg", "/images.jpeg", "/images.jpeg", "/images.jpeg"],
  },
  {
    title: "TechnoHunt",
    cover: "/images-2.jpeg",
    images: ["/images-2.jpeg", "/images-2.jpeg","/images-2.jpeg","/images-2.jpeg", "/images-2.jpeg","/images-2.jpeg"],
  },
  {
    title: "Projects",
    cover: "/images-3.jpeg",
    images: ["/images-3.jpeg", "/images-3.jpeg", "/images-3.jpeg","/images-3.jpeg", "/images-3.jpeg", "/images-3.jpeg"],
  },
  {
    title: "Code the Uncoded",
    cover: "/images-4.jpeg",
    images: ["/images-4.jpeg", "/images-4.jpeg","/images-4.jpeg", "/images-4.jpeg","/images-4.jpeg", "/images-4.jpeg"],
  },
  {
    title: "PPT Round",
    cover: "/images-5.jpeg",
    images: ["/images-5.jpeg","/images-5.jpeg","/images-5.jpeg","/images-5.jpeg","/images-5.jpeg","/images-5.jpeg", ],
  },
  {
    title: "Alumnus Meet",
    cover: "/images-6.jpeg",
    images: ["/images-6.jpeg","/images-6.jpeg","/images-6.jpeg","/images-6.jpeg","/images-6.jpeg","/images-6.jpeg"],
  },
];

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      
      <section className="pt-32 px-6 md:px-20 flex-grow">
        <h2 className="text-5xl font-bold text-center text-[#0a4d87] mb-6">
          Gallery
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Capturing moments of innovation, collaboration, and learning.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(item)}
              className="relative rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <Footer />

      
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh] shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-[#0a4d87]">
                {selectedEvent.title}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-500 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedEvent.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="rounded-lg w-full h-48 object-cover shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
