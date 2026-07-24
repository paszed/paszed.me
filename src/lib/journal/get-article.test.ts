import { describe, expect, it } from "vitest";

import { journal } from "@/content";

import { getArticle } from "./get-article";

describe("getArticle", () => {
  it("returns the article matching the slug", () => {
    const article = journal[0];

    expect(getArticle(article.slug)).toBe(article);
  });

  it("returns undefined for an unknown slug", () => {
    expect(
      getArticle("article-that-does-not-exist"),
    ).toBeUndefined();
  });
});
