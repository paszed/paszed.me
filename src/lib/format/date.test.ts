import { describe, expect, it } from "vitest";

import { formatDate } from "./date";

describe("formatDate", () => {
  it("formats a date in English", () => {
    expect(
      formatDate(new Date("2026-07-07")),
    ).toBe("July 7, 2026");
  });

  it("formats another valid date", () => {
    expect(
      formatDate(new Date("2024-01-01")),
    ).toBe("January 1, 2024");
  });
});
