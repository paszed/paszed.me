import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  H1,
  H2,
  H3,
} from "./heading";

describe("Heading", () => {
  it("renders H1", () => {
    render(<H1>Main heading</H1>);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Main heading",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("renders H2", () => {
    render(<H2>Section heading</H2>);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Section heading",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  it("renders H3", () => {
    render(<H3>Subsection heading</H3>);

    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Subsection heading",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H3");
  });

  it("merges custom class names", () => {
    render(
      <H1 className="custom-heading">
        Custom
      </H1>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toHaveClass("custom-heading");
  });

  it("includes its base styling", () => {
    render(<H2>Styled heading</H2>);

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
