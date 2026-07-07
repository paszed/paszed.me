import { describe, expect, it } from "vitest";

import { groupSearchResults } from "./group-search-results";

const results = [
  {
    id: "1",
    title: "Project",
    description: "",
    href: "/project",
    category: "Project" as const,
    keywords: [],
  },
  {
    id: "2",
    title: "Article",
    description: "",
    href: "/article",
    category: "Article" as const,
    keywords: [],
  },
  {
    id: "3",
    title: "Page",
    description: "",
    href: "/page",
    category: "Page" as const,
    keywords: [],
  },
];

describe("groupSearchResults", () => {
  it("returns an empty array for no results", () => {
    expect(groupSearchResults([])).toEqual([]);
  });

  it("groups items by category", () => {
    const groups = groupSearchResults(results);

    expect(groups).toHaveLength(3);

    expect(groups[0].category).toBe("Project");
    expect(groups[1].category).toBe("Article");
    expect(groups[2].category).toBe("Page");
  });

  it("preserves items within each group", () => {
    const groups = groupSearchResults(results);

    expect(groups[0].items).toEqual([results[0]]);
    expect(groups[1].items).toEqual([results[1]]);
    expect(groups[2].items).toEqual([results[2]]);
  });

  it("groups multiple items in the same category", () => {
    const groups = groupSearchResults([
      results[0],
      {
        ...results[0],
        id: "4",
        title: "Another Project",
      },
    ]);

    expect(groups).toHaveLength(1);
    expect(groups[0].items).toHaveLength(2);
  });

  it("omits empty categories", () => {
    const groups = groupSearchResults([results[1]]);

    expect(groups).toHaveLength(1);
    expect(groups[0].category).toBe("Article");
  });

  it("always returns categories in display order", () => {
    const groups = groupSearchResults([
      results[2],
      results[0],
      results[1],
    ]);

    expect(groups.map((g) => g.category)).toEqual([
      "Project",
      "Article",
      "Page",
    ]);
  });
});
