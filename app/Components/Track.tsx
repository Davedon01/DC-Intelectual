"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

interface Project {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
}

export default function Tracks({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState("All Disciplines");

  // Memoizing the filtered list for performance
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        (project.description?.toLowerCase().includes(search.toLowerCase()) ?? false);

      const matchesDiscipline =
        discipline === "All Disciplines" ||
        project.category?.toLowerCase() === discipline.toLowerCase();

      return matchesSearch && matchesDiscipline;
    });
  }, [search, discipline, projects]);

  // Dynamically generate category list from provided project data
  const categories = useMemo(() => {
    const uniqueCats = new Set(projects.map((p) => p.category).filter(Boolean));
    return ["All Disciplines", ...Array.from(uniqueCats)];
  }, [projects]);

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif mb-2">Research Index</h2>
          <p className="text-neutral-500 dark:text-neutral-400">Filter the intellectual archive by discipline or keyword.</p>
        </div>

        {/* Search & Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="relative w-full md:w-3/5">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search manuscripts, topics, or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 outline-none transition-all shadow-sm"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-4 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                <span className="text-xs uppercase font-bold tracking-tighter">Clear</span>
              </button>
            )}
          </div>

          <div className="relative w-full md:w-1/3">
            <select
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:ring-4 focus:ring-blue-500/5 outline-none transition-all appearance-none cursor-pointer shadow-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col p-8 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Category & Status Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg">
                    {project.category || "Research"}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700 group-hover:bg-blue-500 group-hover:scale-150 transition-all duration-500" />
                </div>

                <h3 className="font-serif text-2xl mb-4 text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8 line-clamp-3 leading-relaxed font-light italic">
                  {project.description || "Explore this manuscript and analytical framework within our intellectual archive."}
                </p>

                {/* Footer Meta */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-neutral-50 dark:border-neutral-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.length ? (
                      project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-tight text-neutral-400"
                        >
                          #{tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-[9px] uppercase tracking-widest text-neutral-300">Folio Item</span>
                    )}
                  </div>
                  <span className="text-neutral-300 group-hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 text-center rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-800">
              <div className="max-w-xs mx-auto">
                <p className="text-neutral-500 dark:text-neutral-400 italic mb-4">
                  "No intellectual intersections found for this search."
                </p>
                <button 
                  onClick={() => {setSearch(""); setDiscipline("All Disciplines");}}
                  className="text-xs font-bold uppercase tracking-widest text-blue-600 underline underline-offset-4"
                >
                  Reset Parameters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}