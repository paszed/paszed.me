import { describe, expect, it } from "vitest";

import { journal } from "@/content";

import { getAllArticles } from "./get-all-articles";

describe("getAllArticles", () => {
  it("returns every journal article", () => {
    expect(getAllArticles()).toEqual(journal);
  });

  it("returns a new array", () => {
    expect(getAllArticles()).not.toBe(journal);
  });
});
