import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { JournalEntry } from "@/types/journal";

import { getNextArticle } from "./get-next-article";
import { getPreviousArticle } from "./get-previous-article";
import { getPublishedArticles } from "./get-published-articles";

vi.mock("./get-published-articles", () => ({
  getPublishedArticles: vi.fn(),
}));

const mockedGetPublishedArticles =
  vi.mocked(getPublishedArticles);

const articles = [
  {
    slug: "first",
    title: "First",
  },
  {
    slug: "second",
    title: "Second",
  },
  {
    slug: "third",
    title: "Third",
  },
] as JournalEntry[];

describe("journal navigation", () => {
  beforeEach(() => {
    mockedGetPublishedArticles.mockReset();
    mockedGetPublishedArticles.mockReturnValue(articles);
  });

  describe("getNextArticle", () => {
    it("returns the next article", () => {
      expect(getNextArticle("first")).toBe(
        articles[1],
      );
    });

    it("returns undefined for the last article", () => {
      expect(
        getNextArticle("third"),
      ).toBeUndefined();
    });

    it("returns undefined for an unknown slug", () => {
      expect(
        getNextArticle("unknown"),
      ).toBeUndefined();
    });
  });

  describe("getPreviousArticle", () => {
    it("returns the previous article", () => {
      expect(getPreviousArticle("second")).toBe(
        articles[0],
      );
    });

    it("returns undefined for the first article", () => {
      expect(
        getPreviousArticle("first"),
      ).toBeUndefined();
    });

    it("returns undefined for an unknown slug", () => {
      expect(
        getPreviousArticle("unknown"),
      ).toBeUndefined();
    });
  });
});
