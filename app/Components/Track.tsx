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
    <section className="py-16 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Search & Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by title or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className="w-full md:w-1/3 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                    {project.category || "Research"}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-colors" />
                </div>

                <h3 className="font-serif text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description || "Explore this study and analytical framework within our intellectual archive."}
                </p>

                {/* Tags Footer */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags?.length ? (
                    project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-[10px] italic text-neutral-400">Archived Work</span>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-neutral-500 dark:text-neutral-400 italic">
                No projects found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}