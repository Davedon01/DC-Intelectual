"use client";

import Link from "next/link";
import { useState } from "react";

const tracks = [
  {
    title: "Foundations of Human Nature",
    description: "Temperaments, personality systems, behavioral patterns.",
    href: "/tracks/foundations",
    tags: ["Psychology", "Personality"],
  },
  {
    title: "Social Psychology",
    description: "Conformity, validation loops, group behavior.",
    href: "/tracks/social-psychology",
    tags: ["Psychology", "Sociology"],
  },
  {
    title: "Mediocrity & Growth",
    description: "Comfort traps, fear mechanisms, discipline systems.",
    href: "/tracks/mediocrity-growth",
    tags: ["Self-Improvement", "Behavior"],
  },
  {
    title: "Behavioral Frameworks",
    description: "Decision-making models, self-awareness tools, applied frameworks.",
    href: "/tracks/behavioral-frameworks",
    tags: ["Frameworks", "Applied Psychology"],
  },
];

export default function Tracks() {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState("All Disciplines");

  // Filter tracks by search & discipline
  const filteredTracks = tracks.filter((track) => {
    const matchesSearch = track.title.toLowerCase().includes(search.toLowerCase());
    const matchesDiscipline =
      discipline === "All Disciplines" ||
      track.tags.some((tag) => tag.toLowerCase() === discipline.toLowerCase());
    return matchesSearch && matchesDiscipline;
  });

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Search / Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Search tracks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-5 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition"
          />
          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className="w-full md:w-1/3 px-5 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition"
          >
            <option>All Disciplines</option>
            <option>Psychology</option>
            <option>Sociology</option>
            <option>Self-Improvement</option>
            <option>Behavior</option>
            <option>Frameworks</option>
            <option>Applied Psychology</option>
          </select>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTracks.length > 0 ? (
            filteredTracks.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="block p-6 bg-white dark:bg-neutral-900 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl mb-2">{track.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{track.description}</p>
                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-neutral-500 dark:text-neutral-400">
              No tracks found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}