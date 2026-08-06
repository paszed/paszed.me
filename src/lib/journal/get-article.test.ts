import { describe, expect, it, vi } from "vitest";

import type { JournalEntry } from "@/types/journal";

import {
  getArticle,
  getPublishedArticle,
} from "./get-article";

vi.mock("@/content", () => ({
  journal: [
    {
      slug: "published-article",
      title: "Published Article",
      published: true,
    },
    {
      slug: "draft-article",
      title: "Draft Article",
      published: false,
    },
  ] as JournalEntry[],
}));

describe("getArticle", () => {
  it("returns the article matching the slug", () => {
    expect(
      getArticle("published-article")?.title,
    ).toBe("Published Article");
  });

  it("returns undefined for an unknown slug", () => {
    expect(
      getArticle("article-that-does-not-exist"),
    ).toBeUndefined();
  });
});

describe("getPublishedArticle", () => {
  it("returns a published article matching the slug", () => {
    expect(
      getPublishedArticle("published-article")?.title,
    ).toBe("Published Article");
  });

  it("returns undefined for an unpublished article", () => {
    expect(
      getPublishedArticle("draft-article"),
    ).toBeUndefined();
  });

  it("returns undefined for an unknown slug", () => {
    expect(
      getPublishedArticle(
        "article-that-does-not-exist",
      ),
    ).toBeUndefined();
  });
});
