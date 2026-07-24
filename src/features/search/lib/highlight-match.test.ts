import { describe, expect, it } from "vitest";

import { highlightMatch } from "./highlight-match";

describe("highlightMatch", () => {
  it("returns the original text when the query is empty", () => {
    expect(highlightMatch("Hello World", "")).toEqual([
      {
        text: "Hello World",
        highlighted: false,
      },
    ]);
  });

  it("ignores whitespace-only queries", () => {
    expect(highlightMatch("Hello World", "   ")).toEqual([
      {
        text: "Hello World",
        highlighted: false,
      },
    ]);
  });

  it("highlights a matching word", () => {
    expect(highlightMatch("Hello World", "World")).toEqual([
      {
        text: "Hello ",
        highlighted: false,
      },
      {
        text: "World",
        highlighted: true,
      },
    ]);
  });

  it("matches regardless of case", () => {
    expect(highlightMatch("Hello WORLD", "world")).toEqual([
      {
        text: "Hello ",
        highlighted: false,
      },
      {
        text: "WORLD",
        highlighted: true,
      },
    ]);
  });

  it("highlights multiple matches", () => {
    expect(highlightMatch("React React React", "react")).toEqual([
      {
        text: "React",
        highlighted: true,
      },
      {
        text: " ",
        highlighted: false,
      },
      {
        text: "React",
        highlighted: true,
      },
      {
        text: " ",
        highlighted: false,
      },
      {
        text: "React",
        highlighted: true,
      },
    ]);
  });

  it("treats regular expression characters literally", () => {
    expect(highlightMatch("React [beta]", "[beta]")).toEqual([
      {
        text: "React ",
        highlighted: false,
      },
      {
        text: "[beta]",
        highlighted: true,
      },
    ]);
  });
});
