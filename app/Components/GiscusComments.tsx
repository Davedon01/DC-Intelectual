"use client";

import { useEffect } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function GiscusComments() {
  const { theme } = useTheme(); // "light" or "dark"

  useEffect(() => {
    const comments = document.getElementById("giscus-comments");

    if (!comments) return;

    // Only add the script once
    if (!comments.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.setAttribute("data-repo", "Davedon01/DC-Intelectual");
      script.setAttribute("data-repo-id", "R_kgDORmifTw");
      script.setAttribute("data-category", "General");
      script.setAttribute("data-category-id", "DIC_kwDORmifT84C4Vyg");
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "0");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "bottom");
      script.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
      script.setAttribute("data-lang", "en");
      script.crossOrigin = "anonymous";
      script.async = true;

      comments.appendChild(script);
    } else {
      // Update theme if script already exists
      const iframe = comments.querySelector("iframe");
      if (iframe) {
        iframe.contentWindow?.postMessage(
          { giscus: { setConfig: { theme: theme === "dark" ? "dark" : "light" } } },
          "https://giscus.app"
        );
      }
    }
  }, [theme]); // Re-run when theme changes

  return (
    <div className="mt-20 border-t pt-10">
      <h3 className="text-xl font-semibold mb-6">Comments</h3>
      <div id="giscus-comments" />
    </div>
  );
}