"use client";

import { useTheme as useNextTheme } from "next-themes";

export type Theme = "light" | "dark" | "system";

export interface UseThemeResult {
  /**
   * The currently selected theme.
   */
  theme: Theme;

  /**
   * The resolved theme after taking "system" into account.
   */
  resolvedTheme: Exclude<Theme, "system"> | undefined;

  /**
   * Updates the active theme.
   */
  setTheme: (theme: Theme) => void;

  /**
   * True when the resolved theme is dark.
   */
  isDark: boolean;

  /**
   * True when the resolved theme is light.
   */
  isLight: boolean;
}

/**
 * Thin wrapper around next-themes providing a stable API for the design system.
 */
export function useTheme(): UseThemeResult {
  const {
    theme,
    resolvedTheme,
    setTheme,
  } = useNextTheme();

  return {
    theme: (theme as Theme) ?? "system",
    resolvedTheme: resolvedTheme as UseThemeResult["resolvedTheme"],
    setTheme: setTheme as (theme: Theme) => void,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
  };
}
