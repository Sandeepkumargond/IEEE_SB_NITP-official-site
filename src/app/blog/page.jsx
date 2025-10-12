"use client";
import { useMemo, useRef, useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { fetchAllBlog } from "@/lib/blogAction";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetchAllBlog();
        console.log(response)
        
        setBlogs(response.data || []);
      } catch (error) {
        console.error('Error loading blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter((b) =>
      b.title.toLowerCase().includes(q)
    );
  }, [query, blogs]);

  function scrollByCards(direction) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const width = card ? card.clientWidth + 32 : 320; // include gap
    el.scrollBy({ left: direction * width, behavior: "smooth" });
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto"></div>
          <p className="mt-4 text-sky-600">Loading blogs...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-cyan-100 to-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white/90 px-5 py-3 text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400"
          />
          <button
            aria-label="Search"
            className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-500 text-white shadow-md"
          >
            <span className="text-xl">🔍</span>
          </button>
        </div>

        <div className="relative mt-10">
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-sky-600 text-white shadow-md hover:bg-sky-700"
          >
            ‹
          </button>

          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            <div className="flex gap-8 py-2 [ &::-webkit-scrollbar]:hidden">
              {filtered.map((b) => (
                <div
                  key={b.id}
                  data-card
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%]"
                >
                  <BlogCard
                    title={b.title}
                    desc={b.desc}
                    date={b.createdAt}
                    images={b.images}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-sky-600 text-white shadow-md hover:bg-sky-700"
          >
            ›
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}


