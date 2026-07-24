import { describe, expect, it } from "vitest";

import {
  isResponsiveObject,
  normalizeResponsiveValue,
  resolveResponsiveValue,
} from "./responsive";

describe("responsive utils", () => {
  describe("isResponsiveObject", () => {
    it("returns false for primitive values", () => {
      expect(isResponsiveObject("sm")).toBe(false);
      expect(isResponsiveObject(42)).toBe(false);
      expect(isResponsiveObject(true)).toBe(false);
      expect(isResponsiveObject(null)).toBe(false);
    });

    it("returns false for arrays", () => {
      expect(isResponsiveObject(["sm", "md"])).toBe(false);
    });

    it("returns true for responsive objects", () => {
      expect(
        isResponsiveObject({
          base: "column",
          md: "row",
        }),
      ).toBe(true);
    });
  });

  describe("resolveResponsiveValue", () => {
    it("returns primitive values unchanged", () => {
      expect(resolveResponsiveValue("row", "lg")).toBe("row");
    });

    it("returns the matching breakpoint value", () => {
      expect(
        resolveResponsiveValue(
          {
            base: "column",
            md: "row",
          },
          "md",
        ),
      ).toBe("row");
    });

    it("falls back to the nearest previous breakpoint", () => {
      expect(
        resolveResponsiveValue(
          {
            base: "column",
            md: "row",
          },
          "lg",
        ),
      ).toBe("row");
    });

    it("falls back to base when appropriate", () => {
      expect(
        resolveResponsiveValue(
          {
            base: "column",
          },
          "2xl",
        ),
      ).toBe("column");
    });

    it("returns undefined when no breakpoint value is available", () => {
      expect(
        resolveResponsiveValue(
          {},
          "2xl",
        ),
      ).toBeUndefined();
    });
  });

  describe("normalizeResponsiveValue", () => {
    it("wraps primitive values", () => {
      expect(normalizeResponsiveValue("row")).toEqual({
        base: "row",
      });
    });

    it("returns responsive objects unchanged", () => {
      const value = {
        base: "column",
        md: "row",
      };

      expect(normalizeResponsiveValue(value)).toBe(value);
    });
  });
});
