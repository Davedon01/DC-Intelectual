"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import ThemeToggle from "../context/ThemeToggle";
import ThemeSwitch from "../context/ThemeSwitch";
import Image from "next/image";
import logo from "../../public/DC_Intellectual_logo-removebg-preview.webp";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Tracks", href: "/tracks" },
    { name: "Projects", href: "/projects" },
    { name: "Articles", href: "/articles" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="h-full p-6 flex flex-col justify-between bg-white dark:bg-gray-500/10 border-r border-neutral-200 dark:border-neutral-800">
      {/* Top: Logo & Links */}
      <div>
        <Image
          src={logo}
          alt="DC Intellectuals Logo"
          width={40}
          height={40}
          priority
          className=""
        />

        <nav className="space-y-6 text-sm mb-10 text-neutral-900 dark:text-gray-100">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-ink text-blue-400   "
                    : "dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

         {/* Bottom: Theme Switch */}
      <div className="pt-6 border-t border-neutral-300 dark:border-neutral-400 flex items-center justify-between">
        <span className="text-sm text-neutral-600 dark:text-neutral-200">
          Theme
        </span>
        <ThemeSwitch />
        {/* <ThemeToggle /> */}
      </div>
      </div>
    </div>
  );
}
