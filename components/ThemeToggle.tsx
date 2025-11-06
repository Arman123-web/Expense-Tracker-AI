"use client";
import { useTheme } from "@/contexts/themeContexts";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 dark:from-emerald-900/80 dark:to-green-900/80 rounded-full shadow-lg"
    >
      <div
        className={`absolute top-0.5 w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform ${
          theme === "light" ? "left-0.5 bg-yellow-200" : "left-6 bg-emerald-600"
        }`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </div>
    </button>
  );
}
