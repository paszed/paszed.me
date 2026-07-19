import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TextLink } from "./text-link";

describe("TextLink", () => {
  it("renders its children", () => {
    render(
      <TextLink href="/about">
        About
      </TextLink>,
    );

    expect(
      screen.getByRole("link", {
        name: "About",
      }),
    ).toBeInTheDocument();
  });

  it("renders the correct href", () => {
    render(
      <TextLink href="/projects">
        Projects
      </TextLink>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("merges custom class names", () => {
    render(
      <TextLink
        href="/"
        className="custom-link"
      >
        Home
      </TextLink>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveClass("custom-link");
  });

  it("forwards HTML attributes", () => {
    render(
      <TextLink
        href="/"
        aria-label="Home link"
      >
        Home
      </TextLink>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveAttribute(
      "aria-label",
      "Home link",
    );
  });

  it("includes its base styling", () => {
    render(
      <TextLink href="/">
        Home
      </TextLink>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveClass(
      "inline-flex",
      "items-center",
      "text-sm",
    );
  });
});
