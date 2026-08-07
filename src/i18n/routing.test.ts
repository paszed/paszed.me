import { describe, expect, it } from "vitest";

import {
  getLocale,
  isLocale,
} from "./routing";

describe("routing", () => {
  it("accepts supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("de")).toBe(true);
    expect(isLocale("hu")).toBe(true);
  });

  it("rejects invalid locales", () => {
    expect(isLocale("fr")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it("returns the provided locale", () => {
    expect(getLocale("en")).toBe("en");
  });

  it("falls back to the default locale", () => {
    expect(getLocale("invalid")).toBe("en");
    expect(getLocale()).toBe("en");
  });
});
