import { describe, expect, it } from "vitest";

import { search } from "./search";

const index = [
  {
    id: "1",
    title: "About",
    description: "About page",
    href: "/about",
    category: "Page" as const,
    keywords: ["bio"],
  },
  {
    id: "2",
    title: "Dev Toolbox",
    description: "Developer tools",
    href: "/projects/dev-toolbox",
    category: "Project" as const,
    keywords: ["terminal", "cli"],
  },
  {
    id: "3",
    title: "Building a Timeless Design System",
    description: "Design systems",
    href: "/journal/design-system",
    category: "Article" as const,
    keywords: ["design"],
  },
];

describe("search", () => {
  it("returns every item for an empty query", () => {
    expect(search(index, "")).toEqual(index);
  });

  it("matches titles", () => {
    expect(search(index, "toolbox")).toHaveLength(1);
  });

  it("matches exact titles", () => {
    expect(search(index, "About")).toEqual([index[0]]);
  });

  it("matches title prefixes", () => {
    expect(search(index, "Dev")).toEqual([index[1]]);
  });

  it("matches descriptions", () => {
    expect(search(index, "developer")).toHaveLength(1);
  });

  it("matches keywords", () => {
    expect(search(index, "terminal")).toHaveLength(1);
  });

  it("matches categories", () => {
    expect(search(index, "article")).toEqual([index[2]]);
  });

  it("is case insensitive", () => {
    expect(search(index, "ABOUT")).toHaveLength(1);
  });

  it("trims whitespace", () => {
    expect(search(index, "   about   ")).toEqual([index[0]]);
  });

  it("sorts by relevance", () => {
    const results = search(index, "design");

    expect(results[0]).toEqual(index[2]);
  });

  it("orders matches by descending score", () => {
    const items = [
      {
        id: "1",
        title: "React",
        description: "",
        href: "/1",
        category: "Page" as const,
        keywords: [],
      },
      {
        id: "2",
        title: "React Hooks",
        description: "",
        href: "/2",
        category: "Page" as const,
        keywords: [],
      },
      {
        id: "3",
        title: "Learning React",
        description: "",
        href: "/3",
        category: "Page" as const,
        keywords: [],
      },
    ];

    const results = search(items, "react");

    expect(results.map((result) => result.id)).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  it("returns an empty array when nothing matches", () => {
    expect(search(index, "xxxxxxxx")).toEqual([]);
  });
});
