"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
// import ThemeToggle from "../context/ThemeToggle";
import ThemeSwitch from "../context/ThemeSwitch";
import logo from '../../public/DC_Intellectual_logo-removebg-preview.webp'
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Tracks", href: "/tracks" },
    { name: "Projects", href: "/projects" },
    { name: "Articles", href: "/articles" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="border-b border-gray-200 bg-white/80 dark:bg-neutral-950 dark:border-neutral-800 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif text-lg tracking-wide text-ink dark:text-white">
            <Image
              src={logo}
              alt="DC Intellectuals Logo"
              width={40}
              height={40}
              priority
              className="border border-blue-800"
            />
          </Link>

          <div className="flex items-center space-x-4 md:hidden">
            {/* <ThemeSwitch /> */}
            <button onClick={() => setIsOpen(true)} className="text-gray-700 dark:text-neutral-200">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-950 border-r border-gray-200 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-neutral-800">
          <span className="font-serif text-lg text-neutral-900 dark:text-white">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={20} className="text-neutral-900 dark:text-white" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 text-sm text-neutral-900 dark:text-neutral-100">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-ink font-medium dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Theme Switch */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">Theme</span>
            <ThemeSwitch />
            {/* <ThemeToggle />  */}
          </div>
        </div>
      </div>
    </>
  );
}