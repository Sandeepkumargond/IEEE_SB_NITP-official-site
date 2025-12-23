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
    el.scrollBy({ left: direction * 400, behavior: "smooth" });
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#020817] to-[#0a3a52] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-300 mx-auto"></div>
          <p className="mt-4 text-sky-300">Loading blogs...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020817] via-[#0a3a52] to-[#020817] text-white pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">IEEE </span>
            <span className="text-sky-300">Blogs</span>
          </h1>
          <p className="text-gray-300 text-lg">Insights, stories, and updates from our community</p>
        </div>

        {/* Search Section */}
        <div className="flex items-center gap-3 mb-12 max-w-xl mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="flex-1 rounded-lg border border-sky-500/30 bg-[#0a3a52]/50 px-5 py-3 text-white shadow-sm outline-none placeholder:text-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          />
          <button
            aria-label="Search"
            className="grid h-12 w-12 place-items-center rounded-lg bg-[#0a5782] text-white shadow-md hover:bg-sky-400 hover:text-[#020817] transition"
          >
            <span className="text-xl">🔍</span>
          </button>
        </div>

        {/* Blog Grid Section */}
        <div className="relative mt-10 w-full">
          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:thin] [-ms-overflow-style:auto] scrollbar-thin scrollbar-thumb-sky-500/50 scrollbar-track-sky-500/10"
          >
            <div className="flex gap-8 py-4 min-w-min">
              {filtered.map((b) => (
                <div
                  key={b._id || b.id || Math.random()}
                  data-card
                  className="snap-start shrink-0 w-80"
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
        </div>
      </div>
    </main>
  );
}


