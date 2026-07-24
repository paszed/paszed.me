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
import { getSortedArticles } from "./get-sorted-articles";

vi.mock("./get-sorted-articles", () => ({
  getSortedArticles: vi.fn(),
}));

const mockedGetSortedArticles =
  vi.mocked(getSortedArticles);

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
    mockedGetSortedArticles.mockReset();
    mockedGetSortedArticles.mockReturnValue(articles);
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
