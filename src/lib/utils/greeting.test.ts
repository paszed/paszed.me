import { describe, expect, it } from "vitest";

import { getGreeting } from "./greeting";

describe("getGreeting", () => {
  it("returns the midnight greeting before 5 AM", () => {
    expect(getGreeting(new Date(2026, 0, 1, 4))).toBe(
      "BURNING THE MIDNIGHT OIL",
    );
  });

  it("returns the morning greeting", () => {
    expect(getGreeting(new Date(2026, 0, 1, 9))).toBe(
      "GOOD MORNING",
    );
  });

  it("returns the afternoon greeting", () => {
    expect(getGreeting(new Date(2026, 0, 1, 15))).toBe(
      "GOOD AFTERNOON",
    );
  });

  it("returns the evening greeting", () => {
    expect(getGreeting(new Date(2026, 0, 1, 20))).toBe(
      "GOOD EVENING",
    );
  });

  it("uses the boundary values correctly", () => {
    expect(getGreeting(new Date(2026, 0, 1, 5))).toBe(
      "GOOD MORNING",
    );
    expect(getGreeting(new Date(2026, 0, 1, 12))).toBe(
      "GOOD AFTERNOON",
    );
    expect(getGreeting(new Date(2026, 0, 1, 18))).toBe(
      "GOOD EVENING",
    );
  });
});
