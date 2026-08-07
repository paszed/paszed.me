import {
  describe,
  expect,
  it,
} from "vitest";

import { getLocaleFromPath } from "./get-locale-from-path";

describe("getLocaleFromPath", () => {
  it("returns locale from valid paths", () => {
    expect(
      getLocaleFromPath(
        "/de/projects",
      ),
    ).toBe("de");
  });

  it("falls back to English for unknown locales", () => {
    expect(
      getLocaleFromPath(
        "/fr/projects",
      ),
    ).toBe("en");
  });

  it("falls back to English for root paths", () => {
    expect(
      getLocaleFromPath(
        "/",
      ),
    ).toBe("en");
  });
});
