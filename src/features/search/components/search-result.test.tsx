import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SearchResult } from "./search-result";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const item = {
  id: "1",
  title: "Dev Toolbox",
  description: "Developer tools",
  href: "/projects/dev-toolbox",
  category: "Project" as const,
  keywords: [],
};

describe("SearchResult", () => {
  it("renders the title", () => {
    render(
      <SearchResult
        item={item}
        selected={false}
        query=""
      />,
    );

    expect(
      screen.getByText("Dev Toolbox"),
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(
      <SearchResult
        item={item}
        selected={false}
        query=""
      />,
    );

    expect(
      screen.getByText("Developer tools"),
    ).toBeInTheDocument();
  });

  it("renders the category", () => {
    render(
      <SearchResult
        item={item}
        selected={false}
        query=""
      />,
    );

    expect(
      screen.getByText("Project"),
    ).toBeInTheDocument();
  });

  it("renders the link", () => {
    render(
      <SearchResult
        item={item}
        selected={false}
        query=""
      />,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveAttribute(
      "href",
      "/projects/dev-toolbox",
    );
  });

  it("applies selected styling", () => {
    const { container } = render(
      <SearchResult
        item={item}
        selected
        query=""
      />,
    );

    expect(
      container.querySelector(".border-accent"),
    ).toHaveClass(
      "border-accent",
      "bg-surface",
    );
  });

  it("uses an interactive card when not selected", () => {
    const { container } = render(
      <SearchResult
        item={item}
        selected={false}
        query=""
      />,
    );

    expect(
      container.querySelector(
        ".hover\\:-translate-y-1",
      ),
    ).toBeInTheDocument();
  });

  it("highlights matching title text", () => {
    render(
      <SearchResult
        item={item}
        selected={false}
        query="Toolbox"
      />,
    );

    expect(
      screen.getByText("Toolbox"),
    ).toHaveClass("bg-accent/15");
  });

  it("highlights matching description text", () => {
    render(
      <SearchResult
        item={item}
        selected={false}
        query="Developer"
      />,
    );

    expect(
      screen.getByText("Developer"),
    ).toHaveClass("bg-accent/15");
  });
});
