"use client";

import Image from "next/image";
import img from "@/public/DC_hero_image.webp";

export default function Hero() {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — Your Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <Image
              src={img}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="DC Intellectual Projects"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE — Styled Text Block */}
        <div className="relative">
          <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 md:p-10 rounded-2xl shadow-sm">
            <h1 className="text-3xl md:text-4xl font-serif text-neutral-800 dark:text-neutral-500 leading-tight mb-6">
              DC Intellectual Projects
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              A structured archive of psychological studies, behavioral
              frameworks, and analytical explorations into human temperament,
              social systems, and personal growth.
            </p>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics, temperaments, social psychology..."
                className="w-full px-5 py-3 text-neutral-600 dark:text-neutral-400 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
