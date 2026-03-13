// "use client";

// import { useTheme } from "@/app/context/ThemeContext";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   console.log("Current theme:", theme);

//   return (
//      <button
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="relative w-16 h-8 bg-neutral-300 dark:bg-neutral-700 rounded-full flex items-center px-1 transition-colors duration-300 shadow-inner"
//       aria-label="Toggle theme"
//     >
//       {/* Moving circle */}
//       <div
//         className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-black shadow-md transform transition-transform duration-300 ${
//           theme === "dark" ? "translate-x-8" : "translate-x-0"
//         }`}
//       />
//       {/* Icons */}
//       <Sun className="absolute left-1 w-4 h-4 text-yellow-400" />
//       <Moon className="absolute right-1 w-4 h-4 text-blue-400" />
//     </button>
//   );
  
// }