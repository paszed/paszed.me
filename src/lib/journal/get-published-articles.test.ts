import { describe, expect, it } from "vitest";

import { getPublishedArticles } from "./get-published-articles";

describe("getPublishedArticles", () => {
  it("returns only published articles", () => {
    const articles = getPublishedArticles();

    expect(
      articles.every((article) => article.published),
    ).toBe(true);
  });

  it("returns articles sorted newest first", () => {
    const articles = getPublishedArticles();

    for (let i = 1; i < articles.length; i++) {
      expect(
        articles[i - 1].publishedAt!.getTime(),
      ).toBeGreaterThanOrEqual(
        articles[i].publishedAt!.getTime(),
      );
    }
  });
});
