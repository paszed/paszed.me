"use client";

import { Moon, Sun } from "lucide-react";

import { useMounted } from "@/design-system/hooks/use-mounted";
import { useTheme } from "@/design-system/hooks/use-theme";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({
  className,
}: ThemeToggleProps) {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-full",
          "text-fg-secondary",
          className,
        )}
      >
        <span className="size-4" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group inline-flex size-9 items-center justify-center rounded-full",
        "text-fg-secondary",
        "transition-[background-color,color,transform] duration-200",
        "hover:bg-muted hover:text-fg",
        "active:scale-95",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-accent",
        className,
      )}
    >
      {isDark ? (
        <Sun
          className="size-[17px] transition-transform duration-200 group-hover:rotate-12"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="size-[17px] transition-transform duration-200 group-hover:-rotate-12"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
