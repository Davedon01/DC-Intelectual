// // "use client";

// // import { useTheme } from "@/app/context/ThemeContext";

// // export default function ThemeSwitch() {
// //   const { theme, toggleTheme } = useTheme();
// //   console.log("Current theme:", theme);

// //   return (
// //     <button
// //       onClick={toggleTheme}
// //       className="relative w-16 h-8 bg-neutral-300 dark:bg-neutral-700 rounded-full transition-all duration-300 flex items-center px-1"
// //     >
// //       <div
// //         className={`w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-all duration-300 ${
// //           theme === "dark" ? "translate-x-8" : "translate-x-0"
// //         }`}
// //       />
// //     </button>
// //   );
// // }



// "use client";

// import { useTheme } from "@/app/context/ThemeContext";
// import { Sun, Moon } from "lucide-react";

// export default function ThemeSwitch() {
//   const { theme, toggleTheme } = useTheme();
//   console.log("Current theme:", theme);

//   return (
//     <button
//       onClick={toggleTheme}
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









"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React, { JSX } from "react";

export default function ThemeSwitch(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  console.log("Current theme:", theme);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="px-3 py-2 rounded-full
                 bg-gray-200 dark:bg-gray-700
                 text-sm font-medium transition"
    >
      {theme === "light" ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} className="text-gray-200" />
      )}
    </button>
  );
}