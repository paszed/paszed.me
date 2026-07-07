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

  it("matches descriptions", () => {
    expect(search(index, "developer")).toHaveLength(1);
  });

  it("matches keywords", () => {
    expect(search(index, "terminal")).toHaveLength(1);
  });

  it("is case insensitive", () => {
    expect(search(index, "ABOUT")).toHaveLength(1);
  });

  it("returns an empty array when nothing matches", () => {
    expect(search(index, "xxxxxxxx")).toEqual([]);
  });
});
