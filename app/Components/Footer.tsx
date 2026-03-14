"use client";

import Link from "next/link";
import Img from "@/public/DC_Intelectual_footer.webp";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden">
      
      {/* Footer Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${Img.src})` }}
      />
      
      {/* Overlay to blend with site theme */}
      <div className="absolute inset-0 -z-10 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm" />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 relative z-0">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-serif text-neutral-900 dark:text-white mb-4">
            DC Intellectual
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A digital archive exploring psychology, behavioral systems,
            temperament theory, and analytical insights into human nature.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link></li>
            <li><Link href="/articles" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Articles</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link></li>
          </ul>
        </div>

        {/* Topics */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
            Topics
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li>Human Temperament</li>
            <li>Social Psychology</li>
            <li>Behavioral Systems</li>
            <li>Personal Development</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
            Connect
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li><a href="https://twitter.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Twitter / X</a></li>
            <li><a href="https://github.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">GitHub</a></li>
            <li><a href="mailto:contact@example.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Email</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200/50 dark:border-neutral-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} DC Intellectual. All rights reserved.</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}