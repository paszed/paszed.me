import { describe, expect, it } from "vitest";

import { formatReadingTime } from "./reading-time";

describe("formatReadingTime", () => {
  it("formats reading time in minutes", () => {
    expect(formatReadingTime(1)).toBe("1 min read");
    expect(formatReadingTime(5)).toBe("5 min read");
    expect(formatReadingTime(12)).toBe("12 min read");
  });

  it("handles zero minutes", () => {
    expect(formatReadingTime(0)).toBe("0 min read");
  });
});
