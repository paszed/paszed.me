import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { JournalEntry } from "@/types/journal";

import { getPublishedArticles } from "./get-published-articles";
import { getRelatedArticles } from "./get-related-articles";

vi.mock("./get-published-articles", () => ({
  getPublishedArticles: vi.fn(),
}));

const mockedGetPublishedArticles =
  vi.mocked(getPublishedArticles);

function createArticle(
  overrides: Partial<JournalEntry>,
): JournalEntry {
  return {
    slug: "article",
    title: "Article",
    description: "Article description",
    category: "Engineering",
    published: true,
    publishedAt: new Date(
      "2026-01-01T00:00:00.000Z",
    ),
    author: "Edvard Pasz",
    readingTimeMinutes: 5,
    tags: [],
    sections: [],
    ...overrides,
  };
}

const articles: JournalEntry[] = [
  createArticle({
    slug: "current",
    title: "Current",
  }),
  createArticle({
    slug: "related-one",
    title: "Related One",
  }),
  createArticle({
    slug: "related-two",
    title: "Related Two",
  }),
  createArticle({
    slug: "related-three",
    title: "Related Three",
  }),
  createArticle({
    slug: "different",
    title: "Different",
    category: "Design",
  }),
];

describe("getRelatedArticles", () => {
  beforeEach(() => {
    mockedGetPublishedArticles.mockReset();
    mockedGetPublishedArticles.mockReturnValue(
      articles,
    );
  });

  it("returns articles from the same category", () => {
    const result =
      getRelatedArticles("current");

    expect(
      result.every(
        (article) =>
          article.category === "Engineering",
      ),
    ).toBe(true);
  });

  it("does not include the current article", () => {
    const result =
      getRelatedArticles("current");

    expect(
      result.some(
        (article) =>
          article.slug === "current",
      ),
    ).toBe(false);
  });

  it("uses a default limit of three", () => {
    expect(
      getRelatedArticles("current"),
    ).toHaveLength(3);
  });

  it("respects a custom limit", () => {
    expect(
      getRelatedArticles("current", 1),
    ).toEqual([articles[1]]);
  });

  it("returns an empty array for an unknown slug", () => {
    expect(
      getRelatedArticles("unknown"),
    ).toEqual([]);
  });
});
