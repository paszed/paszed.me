import { describe, expect, it } from "vitest";

import {
  defaultLocale,
  localeNames,
  locales,
} from "./locale";

describe("locale", () => {
  it("exports all supported locales", () => {
    expect(locales).toEqual([
      "en",
      "de",
      "es",
      "fr",
      "hu",
    ]);
  });

  it("uses English as the default locale", () => {
    expect(defaultLocale).toBe("en");
  });

  it("contains a display name for every locale", () => {
    locales.forEach((locale) => {
      expect(localeNames[locale]).toBeTruthy();
    });
  });
});
