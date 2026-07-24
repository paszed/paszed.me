import { describe, expect, it } from "vitest";

import {
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "./typography";

describe("typography constants", () => {
  describe("fontSize", () => {
    it("exports the expected font scale", () => {
      expect(fontSize).toEqual({
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      });
    });

    it("uses rem units", () => {
      Object.values(fontSize).forEach((value) => {
        expect(value).toMatch(/rem$/);
      });
    });
  });

  describe("fontWeight", () => {
    it("exports the expected weight scale", () => {
      expect(fontWeight).toEqual({
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      });
    });

    it("uses valid CSS font weights", () => {
      Object.values(fontWeight).forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(100);
        expect(value).toBeLessThanOrEqual(900);
        expect(value % 100).toBe(0);
      });
    });
  });

  describe("lineHeight", () => {
    it("exports the expected line-height scale", () => {
      expect(lineHeight).toEqual({
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      });
    });

    it("uses positive values", () => {
      Object.values(lineHeight).forEach((value) => {
        expect(value).toBeGreaterThan(0);
      });
    });
  });

  describe("letterSpacing", () => {
    it("exports the expected tracking scale", () => {
      expect(letterSpacing).toEqual({
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      });
    });

    it("uses em units or zero", () => {
      Object.values(letterSpacing).forEach((value) => {
        expect(
          value === "0" || value.endsWith("em"),
        ).toBe(true);
      });
    });
  });
});
