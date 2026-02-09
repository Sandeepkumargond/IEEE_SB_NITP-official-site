"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const galleryItems = [
  {
    title: "Inaugral Ceremony",
  cover: "/SHL02945.jpg",
    description:
      "The Inaugural Ceremony of IEEE SB NITP marked the beginning of a new chapter, bringing together students, faculty, and industry leaders to celebrate innovation and collaboration in technology.",
    images: ["SHL02741.jpg","SHL02753.jpg","SHL02756.jpg","SHL02773.jpg","SHL02793.jpg","SHL02795.jpg","SHL02799.jpg","SHL02800.jpg","SHL02810.jpg","SHL02890.jpg","SHL02899.jpg","SHL02908.jpg","SHL02922.jpg","SHL02939.jpg","SHL02945.jpg"],
  },
  {
    title: "Hack O Fest'2024",
  cover: "/SHL03934.jpg",
    description:
      "HackO'Fest is a premier, often 30 to 36-hour, national-level hackathon organized by Think India SC NITP and IEEE SB NITP at the National Institute of Technology, Patna. It serves as a, intense, collaborative platform for students to develop innovative, functional software (web/mobile/ML) or hardware solutions to real-world problems.",
    images: ["SHL03793.jpg","SHL03821.jpg","SHL03867.jpg","SHL03934.jpg","SHL03953.jpg","SHL03963.jpg","SHL04037.jpg","SHL04092.jpg","SHL04099.jpg","SHL04134.jpg","SHL04139.jpg","SHL04144.jpg","SHL04149.jpg","SHL04215.jpg","SHL04248.jpg"],
  },
];

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [exploreEvent, setExploreEvent] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
        setSelectedImage(null);
        setExploreEvent(null);
      }
      if (selectedImage && selectedEvent) {
        if (e.key === "ArrowRight") handleNextImage();
        if (e.key === "ArrowLeft") handlePrevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedEvent]);

  const handleNextImage = useCallback(() => {
    if (!selectedEvent || !selectedImage) return;
    const i = selectedEvent.images.indexOf(selectedImage);
    setSelectedImage(selectedEvent.images[(i + 1) % selectedEvent.images.length]);
  }, [selectedEvent, selectedImage]);

  const handlePrevImage = useCallback(() => {
    if (!selectedEvent || !selectedImage) return;
    const i = selectedEvent.images.indexOf(selectedImage);
    setSelectedImage(
      selectedEvent.images[(i - 1 + selectedEvent.images.length) % selectedEvent.images.length]
    );
  }, [selectedEvent, selectedImage]);

  return (
    <div className="bg-gradient-to-b from-[#020817] via-[#0a3a52] to-[#020817] min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 px-6 md:px-20 flex-grow pb-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and learning.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-blue-400/30"
            >
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-blue-200 text-xs mb-3">
                  {item.images.length} photos
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => setExploreEvent(item)}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg"
                  >
                    Explore
                  </button>
                  <button
                    onClick={() => setSelectedEvent(item)}
                    className="px-4 py-1.5 bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Explore Modal */}
      {exploreEvent && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setExploreEvent(null)}
        >
          <div
            className="bg-slate-900 p-8 rounded-xl max-w-xl w-full border border-blue-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold text-white mb-3">
              {exploreEvent.title}
            </h3>
            <p className="text-blue-200 mb-6">
              {exploreEvent.description}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setExploreEvent(null);
                  setSelectedEvent(exploreEvent);
                }}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
              >
                View Photos
              </button>
              <button
                onClick={() => setExploreEvent(null)}
                className="px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event Gallery Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-slate-900 rounded-xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-white">
                {selectedEvent.title}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedEvent.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-56 object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-full object-contain"
          />

          <button
            onClick={handlePrevImage}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
