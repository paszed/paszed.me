import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Heading } from "./heading";

describe("Heading", () => {
  it("renders an h1", () => {
    render(
      <Heading as="h1">
        Main heading
      </Heading>,
    );

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Main heading",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("renders an h2", () => {
    render(
      <Heading as="h2">
        Section heading
      </Heading>,
    );

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Section heading",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  it("renders an h3", () => {
    render(
      <Heading as="h3">
        Subsection heading
      </Heading>,
    );

    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Subsection heading",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H3");
  });

  it("defaults to h2", () => {
    render(
      <Heading>
        Default heading
      </Heading>,
    );

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Default heading",
    });

    expect(heading.tagName).toBe("H2");
  });

  it("merges custom class names", () => {
    render(
      <Heading
        as="h1"
        className="custom-heading"
      >
        Custom
      </Heading>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toHaveClass("custom-heading");
  });

  it("includes its base styling", () => {
    render(
      <Heading as="h2">
        Styled heading
      </Heading>,
    );

    expect(
      screen.getByRole("heading", {
        level: 2,
      }),
    ).toHaveClass(
      "font-serif",
      "font-semibold",
      "text-fg",
    );
  });
});
