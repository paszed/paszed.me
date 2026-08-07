import { describe, expect, it } from "vitest";

import { getLocalizedPath } from "./get-localized-path";

describe("getLocalizedPath", () => {
  it("replaces an existing locale", () => {
    expect(
      getLocalizedPath(
        "/en/projects",
        "de",
      ),
    ).toBe("/de/projects");
  });

  it("adds locale when pathname has no locale", () => {
    expect(
      getLocalizedPath(
        "/projects",
        "de",
      ),
    ).toBe("/de/projects");
  });

  it("handles the root path", () => {
    expect(
      getLocalizedPath(
        "/",
        "de",
      ),
    ).toBe("/de/");
  });

  it("falls back to locale root when pathname is empty", () => {
    expect(
      getLocalizedPath(
        "",
        "de",
      ),
    ).toBe("/de");
  });
});
