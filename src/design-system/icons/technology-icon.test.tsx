import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  TechnologyIcon,
  type TechnologyIconName,
} from "./technology-icon";

const technologies: TechnologyIconName[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Docker",
  "GitHub",
  "Linux",
  "Terminal",
];

describe("TechnologyIcon", () => {
  it.each(technologies)(
    "renders the %s icon",
    (name) => {
      const { container } = render(
        <TechnologyIcon name={name} />,
      );

      expect(
        container.querySelector("svg"),
      ).toBeInTheDocument();
    },
  );

  it("merges custom class names", () => {
    const { container } = render(
      <TechnologyIcon
        name="TypeScript"
        className="custom-class"
      />,
    );

    expect(
      container.querySelector("svg"),
    ).toHaveClass("custom-class");
  });

  it("hides the icon from assistive technology", () => {
    const { container } = render(
      <TechnologyIcon name="TypeScript" />,
    );

    const icon =
      container.querySelector("svg");

    expect(icon).toHaveAttribute(
      "aria-hidden",
      "true",
    );

    expect(icon).toHaveAttribute(
      "focusable",
      "false",
    );
  });
});
