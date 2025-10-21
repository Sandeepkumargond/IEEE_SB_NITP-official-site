'use client'
import React, { useEffect, useMemo, useState } from "react";
import ProjectCard from "./card";
import { IoSearchCircleOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { LuFileX2 } from "react-icons/lu";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { fetchAllProjects } from "@/lib/projectAction";

const sorters = {
  "Latest": (a, b) => b.id - a.id,
  "Oldest": (a, b) => a.id - b.id,
  "A→Z": (a, b) => a.title.localeCompare(b.title),
  "Z→A": (a, b) => b.title.localeCompare(a.title),
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [category, setCategory] = useState("All");
  const [sortKey, setSortKey] = useState("Latest");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const fetchedProjects = async() => {
      try {
        const response = await fetchAllProjects();
        console.log(response?.data);
        setProjects(response?.data || []);
      } 
      catch (error) {
        console.log("Error in fetching projects : " , error);
        alert("Error in fetching projects! Try later");
      }
    }
    fetchedProjects();
  },[])
 
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [query]);

  const categories = useMemo(() => {
    const map = new Map();
    map.set("All", projects.length);
    projects.forEach((p) => map.set(p.category, (map.get(p.category) || 0) + 1));
    return Array.from(map.entries());
  }, [projects]);

  const filtered = useMemo(() => {
    let list = [...projects];
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (debounced) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(debounced) ||
          p.description.toLowerCase().includes(debounced)
      );
    }
    const sorter = sorters[sortKey] || sorters["Latest"];
    list.sort(sorter);
    return list;
  }, [projects, category, debounced, sortKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageSafe = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (pageSafe - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, pageSafe, pageSize]);

  useEffect(() => setPage(1), [category, debounced, sortKey]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a5782] via-[#07689F] to-[#3DBAF3] py-16 px-4 relative overflow-hidden">
      

        {/* glowing effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3DBAF3] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F0F9FF] rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>



      <div className="relative z-10">
        <header className=" max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-7">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 ">
            Our Projects
          </h1>
          <p className="text-[#F0F9FF] text-lg md:text-xl max-w-2xl  mx-auto">
            Explore our innovative solutions and cutting-edge technology implementations
          </p>
        </header>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(([name, count]) => {
            const active = category === name;
            return (
              <button
                key={name}
                onClick={() => setCategory(name)}
                
                className={` relative px-3 py-1.5 rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md
                  border ${active ? "border-[#07689F] bg-[#07689F] text-white" : "border-gray-200 bg-white/80 text-[#0a5782] hover:bg-[#F0F9FF]"}
                `}
              >
                <span className="relative z-10">{name}</span>
                
                <span className="ml-1 text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

          <div className="bg-white/10  rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
              <div className="relative flex-1">
                <IoSearchCircleOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-2xl " />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full rounded-xl border border-white/30 bg-white/95 pl-10 pr-4 py-3 text-sm text-[#0a5782] placeholder:text-gray-400 focus:outline-none  transition-all shadow-sm"
                                  />
              </div>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                className="rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-[#0a5782]   transition-all shadow-sm md:w-48"
               
              >
                {Object.keys(sorters).map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-all ${
                    viewMode === "grid"
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-white text-[#07689F] shadow-lg"
                  }`}
                  
                >
                  <CiGrid41 />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-all ${
                    viewMode === "list"
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-white text-[#07689F] shadow-lg"
                  }`}
                  
                >
                  
                 <FaListUl />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-white/20"></div>
            <p className="text-center text-sm font-medium text-white/90 px-4 py-2 bg-white/10 rounded-full ">
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                `${filtered.length} project${filtered.length !== 1 ? "s" : ""} found`
              )}
            </p>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>

          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2  w-[94vw] lg:grid-cols-3 gap-6" : "flex flex-col gap-4"  }>
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className=" bg-white/20   rounded-2xl p-6 shadow-xl border border-white/10">
                    <div className="h-58 bg-white/20 rounded-xl mb-4"></div>
                    <div className="h-6 bg-white/20 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  </div>
                ))
              : paged.map((p) => <ProjectCard key={p.id} project={p} view={viewMode} highlight={debounced} />)}
          </div>

          {!loading && paged.length === 0 && (
            <div className="text-center py-16 bg-white/10  rounded-2xl border border-white/20">
             <LuFileX2  className="w-20 h-20 mx-auto mb-4 text-white/70"/>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-white/70">Try a different category or search term.</p>
            </div>
          )}

          {err && (
            <div className="text-center py-12 bg-red-500/20 backdrop-blur-md rounded-2xl border border-red-300/30">
              <p className="text-lg font-semibold text-white">{err}</p>
            </div>
          )}

          {!loading && filtered.length > pageSize && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={pageSafe === 1}
                className="px-6 py-3 rounded-xl border border-white/30 bg-white/95 text-[#0a5782] text-sm font-medium disabled:opacity-50 hover:bg-white hover:shadow-lg transition-all disabled:cursor-not-allowed flex items-center gap-2"
              >
                <GrPrevious />
                Previous
              </button>
              <div className="px-6 py-3 rounded-xl bg-white/95 text-[#0a5782] text-sm font-semibold shadow-lg">
                Page {pageSafe} of {totalPages}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={pageSafe === totalPages}
                className="px-6 py-3 rounded-xl border border-white/30 bg-white/95 text-[#0a5782] text-sm font-medium disabled:opacity-50 hover:bg-white hover:shadow-lg transition-all disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next
                <GrNext />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
