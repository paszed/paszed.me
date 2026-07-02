"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="text-sm"
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
