import { describe, expect, it } from "vitest";

import {
  color,
  colors,
} from "./colors";

describe("color constants", () => {
  it("exports the expected semantic color tokens", () => {
    expect(colors).toEqual({
      background: "var(--background)",
      foreground: "var(--foreground)",

      surface: "var(--surface)",
      surfaceForeground: "var(--surface-foreground)",

      primary: "var(--primary)",
      primaryForeground: "var(--primary-foreground)",

      secondary: "var(--secondary)",
      secondaryForeground: "var(--secondary-foreground)",

      accent: "var(--accent)",
      accentForeground: "var(--accent-foreground)",

      muted: "var(--muted)",
      mutedForeground: "var(--muted-foreground)",

      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",

      success: "var(--success)",
      successForeground: "var(--success-foreground)",

      warning: "var(--warning)",
      warningForeground: "var(--warning-foreground)",

      destructive: "var(--destructive)",
      destructiveForeground: "var(--destructive-foreground)",

      info: "var(--info)",
      infoForeground: "var(--info-foreground)",
    });
  });

  it("uses CSS custom properties for every token", () => {
    Object.values(colors).forEach((value) => {
      expect(value).toMatch(/^var\(--.+\)$/);
    });
  });

  it("returns the mapped CSS variable for every token", () => {
    (Object.keys(colors) as Array<keyof typeof colors>).forEach((token) => {
      expect(color(token)).toBe(colors[token]);
    });
  });

  it("contains matching foreground tokens for semantic color pairs", () => {
    expect(colors).toHaveProperty("primaryForeground");
    expect(colors).toHaveProperty("secondaryForeground");
    expect(colors).toHaveProperty("accentForeground");
    expect(colors).toHaveProperty("surfaceForeground");
    expect(colors).toHaveProperty("mutedForeground");
    expect(colors).toHaveProperty("successForeground");
    expect(colors).toHaveProperty("warningForeground");
    expect(colors).toHaveProperty("destructiveForeground");
    expect(colors).toHaveProperty("infoForeground");
  });
});
