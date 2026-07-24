import { describe, expect, it } from "vitest";

import {
  containerWidths,
  sectionSpacing,
} from "./spacing";

describe("spacing constants", () => {
  describe("sectionSpacing", () => {
    it("exports the expected spacing scale", () => {
      expect(sectionSpacing).toEqual({
        sm: "py-8",
        md: "py-12",
        lg: "py-20",
        xl: "py-28",
      });
    });

    it("contains only vertical padding utilities", () => {
      Object.values(sectionSpacing).forEach((value) => {
        expect(value).toMatch(/^py-/);
      });
    });
  });

  describe("containerWidths", () => {
    it("exports the expected container widths", () => {
      expect(containerWidths).toEqual({
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        prose: "max-w-3xl",
      });
    });

    it("contains only max-width utilities", () => {
      Object.values(containerWidths).forEach((value) => {
        expect(value).toMatch(/^max-w-/);
      });
    });
  });
});
