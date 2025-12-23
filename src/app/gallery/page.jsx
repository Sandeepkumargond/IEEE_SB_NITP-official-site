"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const galleryItems = [
  {
    title: "Impulse 2023",
    cover: "/images.jpeg",
    images: [
      "/images.jpeg",
      "/images.jpeg",
      "/images.jpeg",
      "/images.jpeg",
      "/images.jpeg",
      "/images.jpeg",
    ],
  },
  {
    title: "TechnoHunt",
    cover: "/images-2.jpeg",
    images: [
      "/images-2.jpeg",
      "/images-2.jpeg",
      "/images-2.jpeg",
      "/images-2.jpeg",
      "/images-2.jpeg",
      "/images-2.jpeg",
    ],
  },
  {
    title: "Projects",
    cover: "/images-3.jpeg",
    images: [
      "/images-3.jpeg",
      "/images-3.jpeg",
      "/images-3.jpeg",
      "/images-3.jpeg",
      "/images-3.jpeg",
      "/images-3.jpeg",
    ],
  },
  {
    title: "Code the Uncoded",
    cover: "/images-4.jpeg",
    images: [
      "/images-4.jpeg",
      "/images-4.jpeg",
      "/images-4.jpeg",
      "/images-4.jpeg",
      "/images-4.jpeg",
      "/images-4.jpeg",
    ],
  },
  {
    title: "PPT Round",
    cover: "/images-5.jpeg",
    images: [
      "/images-5.jpeg",
      "/images-5.jpeg",
      "/images-5.jpeg",
      "/images-5.jpeg",
      "/images-5.jpeg",
      "/images-5.jpeg",
    ],
  },
  {
    title: "Alumnus Meet",
    cover: "/images-6.jpeg",
    images: [
      "/images-6.jpeg",
      "/images-6.jpeg",
      "/images-6.jpeg",
      "/images-6.jpeg",
      "/images-6.jpeg",
      "/images-6.jpeg",
    ],
  },
];

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setSelectedEvent(null);
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
    const currentIndex = selectedEvent.images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % selectedEvent.images.length;
    setSelectedImage(selectedEvent.images[nextIndex]);
  }, [selectedEvent, selectedImage]);

  const handlePrevImage = useCallback(() => {
    if (!selectedEvent || !selectedImage) return;
    const currentIndex = selectedEvent.images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + selectedEvent.images.length) % selectedEvent.images.length;
    setSelectedImage(selectedEvent.images[prevIndex]);
  }, [selectedEvent, selectedImage]);

  return (
    <div className="bg-gradient-to-b from-[#020817] via-[#0a3a52] to-[#020817] min-h-screen flex flex-col">
      <Navbar />

      {/* Main Gallery Section */}
      <section className="pt-32 px-6 md:px-20 flex-grow pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Memory Lane</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and learning from IEEE SB NITP events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedEvent(item)}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-blue-400/30 hover:border-blue-400/80"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-blue-200 text-xs mt-1">{item.images.length} photos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-6 max-w-5xl w-full overflow-y-auto max-h-[90vh] shadow-2xl border border-blue-400/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 sticky top-0 z-10 bg-gradient-to-b from-slate-800 pb-4">
              <div>
                <h3 className="text-3xl font-bold text-white">{selectedEvent.title}</h3>
                <p className="text-blue-300 text-sm mt-1">{selectedEvent.images.length} photos</p>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-blue-400 text-2xl font-bold p-2 hover:bg-slate-700/50 rounded-lg transition-all"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedEvent.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-blue-400/20 hover:border-blue-400/60"
                >
                  <img
                    src={img}
                    alt={`${selectedEvent.title} photo ${idx + 1}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                      View Full
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Viewer */}
      {selectedImage && selectedEvent && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Counter */}
            <div className="absolute top-6 right-6 bg-blue-600/90 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
              {selectedEvent.images.indexOf(selectedImage) + 1} / {selectedEvent.images.length}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 left-6 text-white text-3xl font-bold hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-lg backdrop-blur-sm"
              aria-label="Close image viewer"
            >
              ✕
            </button>

            {/* Navigation Arrows */}
            {selectedEvent.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600/70 hover:bg-blue-500 text-white p-3 rounded-full transition-all z-10 hover:scale-110 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600/70 hover:bg-blue-500 text-white p-3 rounded-full transition-all z-10 hover:scale-110 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              </>
            )}

            {/* Keyboard Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium text-center backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg">
              <p>← → to navigate • ESC to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
