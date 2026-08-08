import {
  render,
  screen,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { SearchItem } from "../types/search";

import { SearchResults } from "./search-results";

const results: SearchItem[] = [
  {
    id: "about",
    title: "About",
    description: "About page",
    href: "/about",
    category: "Page",
    keywords: [],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Portfolio project",
    href: "/projects/portfolio",
    category: "Project",
    keywords: [],
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Article",
    href: "/journal/design-system",
    category: "Article",
    keywords: [],
  },
];

const empty = {
  title: "No results found",
  description: "Try a different search term.",
};

const categories = {
  Project: "Projects",
  Article: "Articles",
  Page: "Pages",
};

describe("SearchResults", () => {
  it("renders the empty state", () => {
    render(
      <SearchResults
        results={[]}
        selectedIndex={0}
        query="missing"
        empty={empty}
        categories={categories}
      />,
    );

    expect(
      screen.getByText(/no results/i),
    ).toBeInTheDocument();
  });

  it("renders nothing when there are no results and no query", () => {
    const { container } = render(
      <SearchResults
        results={[]}
        selectedIndex={0}
        query=""
        empty={empty}
        categories={categories}
      />,
    );

    expect(
      container.firstChild,
    ).toBeNull();
  });

  it("renders every result", () => {
    render(
      <SearchResults
        results={results}
        selectedIndex={0}
        query=""
        empty={empty}
        categories={categories}
      />,
    );

    expect(
      screen.getByText("About"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Portfolio"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Design System"),
    ).toBeInTheDocument();
  });

  it("renders grouped categories", () => {
    render(
      <SearchResults
        results={results}
        selectedIndex={0}
        query=""
        empty={empty}
        categories={categories}
      />,
    );

    expect(
      screen.getAllByText("Page").length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Project").length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Article").length,
    ).toBeGreaterThan(0);
  });
});
