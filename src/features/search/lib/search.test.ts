import { describe, expect, it } from "vitest";

import { search } from "./search";
import type { SearchItem } from "../types/search";

const items: SearchItem[] = [
  {
    id: "1",
    title: "React",
    description: "Frontend library",
    href: "/react",
    category: "Article",
    keywords: ["react", "frontend"],
  },
  {
    id: "2",
    title: "Next.js",
    description: "React framework",
    href: "/next",
    category: "Project",
    keywords: ["nextjs", "react"],
  },
  {
    id: "3",
    title: "Docker",
    description: "Containers",
    href: "/docker",
    category: "Page",
    keywords: ["containers"],
  },
];

describe("search()", () => {
  it("returns all items for an empty query", () => {
    expect(search(items, "")).toHaveLength(3);
  });

  it("matches titles", () => {
    expect(search(items, "docker")[0].title).toBe("Docker");
  });

  it("matches descriptions", () => {
    expect(search(items, "framework")[0].title).toBe("Next.js");
  });

  it("matches keywords", () => {
    expect(search(items, "frontend")[0].title).toBe("React");
  });

  it("returns an empty array for no matches", () => {
    expect(search(items, "rust")).toEqual([]);
  });
});
