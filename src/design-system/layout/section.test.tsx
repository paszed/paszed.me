import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Section } from "./section";

describe("Section", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Section>
        <div>Content</div>
      </Section>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("renders a semantic section element", () => {
    renderWithProviders(
      <Section>
        <div>Content</div>
      </Section>,
    );

    const section =
      screen
        .getByText("Content")
        .closest("section");

    expect(section).toBeInTheDocument();
  });

  it("applies the default spacing classes", () => {
    renderWithProviders(
      <Section>
        <div>Content</div>
      </Section>,
    );

    const section =
      screen
        .getByText("Content")
        .closest("section");

    expect(section).toHaveClass(
      "py-14",
      "sm:py-20",
      "lg:py-28",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Section className="bg-muted">
        <div>Content</div>
      </Section>,
    );

    const section =
      screen
        .getByText("Content")
        .closest("section");

    expect(section).toHaveClass(
      "bg-muted",
      "py-14",
    );
  });

  it("renders only one section wrapper", () => {
    const { container } =
      renderWithProviders(
        <Section>
          <div>Content</div>
        </Section>,
      );

    expect(
      container.querySelectorAll("section"),
    ).toHaveLength(1);
  });
});
