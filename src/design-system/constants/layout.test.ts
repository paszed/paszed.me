import { describe, expect, it } from "vitest";

import {
  aligns,
  gaps,
  justifies,
} from "./layout";

describe("layout constants", () => {
  describe("gaps", () => {
    it("exports the expected gap scale", () => {
      expect(gaps).toEqual({
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        "2xl": "gap-12",
      });
    });

    it("contains only Tailwind gap utilities", () => {
      Object.values(gaps).forEach((value) => {
        expect(value).toMatch(/^gap-/);
      });
    });
  });

  describe("aligns", () => {
    it("exports the expected alignment utilities", () => {
      expect(aligns).toEqual({
        start: "items-start",
        center: "items-center",
        end: "items-end",
      });
    });

    it("contains only Tailwind items utilities", () => {
      Object.values(aligns).forEach((value) => {
        expect(value).toMatch(/^items-/);
      });
    });
  });

  describe("justifies", () => {
    it("exports the expected justification utilities", () => {
      expect(justifies).toEqual({
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
      });
    });

    it("contains only Tailwind justify utilities", () => {
      Object.values(justifies).forEach((value) => {
        expect(value).toMatch(/^justify-/);
      });
    });
  });
});
