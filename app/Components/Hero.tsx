"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/DC_hero_image.webp";

interface Project {
  slug: string;
  title: string;
}

export default function Hero({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="relative w-full py-24 overflow-hidden">
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-20">
        <div className="mesh-gradient"></div>
      </div>

      {/* Floating light effects from Version 1 */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full animate-floatSlow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full animate-floatReverse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image Section with Version 1 animations */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-72 h-105 md:w-80 md:h-120 overflow-hidden group rounded-2xl">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20 blur-2xl scale-110 opacity-70 group-hover:opacity-90 transition duration-700"></div>

            <Image
              src={img}
              alt="DC Intellectual Projects"
              fill
              className="object-cover image-blend transition-transform duration-6000 ease-linear group-hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative">
          <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/30 dark:border-neutral-800 p-10 rounded-2xl shadow-xl">
            
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 
              bg-linear-to-r from-blue-600 via-purple-600 to-indigo-500 
              bg-clip-text text-transparent">
              DC Intellectual Projects
            </h1>

            <p className="text-neutral-700 dark:text-neutral-400 mb-8 text-lg leading-relaxed">
              A structured archive of psychological studies, behavioral
              frameworks, and analytical explorations.
            </p>

            {/* Search Container */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics, temperaments..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-xl border border-neutral-300 dark:border-neutral-700 
                bg-white/70 dark:bg-neutral-950/70 text-sm 
                focus:outline-none focus:ring-2 focus:ring-purple-500 
                transition-all duration-300"
              />

              {/* Search Results Dropdown (Floating) */}
              {query && (
                <div className="absolute z-10 w-full mt-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl max-h-60 overflow-y-auto">
                  {filteredProjects.length === 0 ? (
                    <p className="p-4 text-sm text-neutral-500">No results found</p>
                  ) : (
                    filteredProjects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block px-5 py-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors border-b last:border-none border-neutral-100 dark:border-neutral-800"
                      >
                        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                          {project.title}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* Input Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 focus-within:opacity-100 transition pointer-events-none"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}