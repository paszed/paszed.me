"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/design-system/hooks/use-theme";
import { cn } from "@/lib/utils";

import { useMounted } from "@/design-system/hooks/use-mounted";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({
  className,
}: ThemeToggleProps) {
  const mounted = useMounted();

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn("rounded-lg p-2", className)}
      >
        <div className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "rounded-lg p-2 transition-colors hover:bg-muted",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
