import { describe, expect, it } from "vitest";

import {
  animation,
  duration,
  easing,
  transition,
} from "./motion";

describe("motion constants", () => {
  describe("duration", () => {
    it("exports the expected duration scale", () => {
      expect(duration).toEqual({
        instant: 0,
        faster: 100,
        fast: 150,
        normal: 200,
        slow: 300,
        slower: 500,
      });
    });

    it("uses non-negative durations", () => {
      Object.values(duration).forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe("easing", () => {
    it("exports the expected easing presets", () => {
      expect(easing).toEqual({
        linear: "linear",
        ease: "ease",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        easeOut: "cubic-bezier(0, 0, 0.2, 1)",
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      });
    });

    it("uses valid easing values", () => {
      Object.values(easing).forEach((value) => {
        expect(
          value === "linear" ||
            value === "ease" ||
            value.startsWith("cubic-bezier("),
        ).toBe(true);
      });
    });
  });

  describe("transition", () => {
    it("builds transitions from duration and easing tokens", () => {
      expect(transition.default).toBe(
        `${duration.normal}ms ${easing.easeInOut}`,
      );

      expect(transition.fast).toBe(
        `${duration.fast}ms ${easing.easeOut}`,
      );

      expect(transition.slow).toBe(
        `${duration.slow}ms ${easing.easeInOut}`,
      );
    });
  });

  describe("animation", () => {
    it("exports the expected animation values", () => {
      expect(animation).toEqual({
        fadeDistance: 8,
        scaleFrom: 0.96,
        staggerDelay: 50,
      });
    });

    it("uses sensible animation values", () => {
      expect(animation.fadeDistance).toBeGreaterThan(0);

      expect(animation.scaleFrom).toBeGreaterThan(0);
      expect(animation.scaleFrom).toBeLessThan(1);

      expect(animation.staggerDelay).toBeGreaterThan(0);
    });
  });
});
