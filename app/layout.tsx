import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Img from "@/public/DC_Intelectual_footer.webp"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents dark mode flicker before React loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className="bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          <div className="min-h-screen select-none">

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Navbar />
            </div>

            <div className="flex">

              {/* Desktop Sidebar */}
              <aside className="hidden md:block w-64 border-r border-neutral-200 dark:border-neutral-800">
                <Sidebar />
              </aside>

              {/* Main Content */}
              <main className="flex-1 px-6 py-10">
                {children}
              </main>

            </div>
            {/* Footer  */}
            <div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}