import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Page } from "./page";

describe("Page", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Page>
        <h1>Dashboard</h1>
      </Page>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Dashboard",
      }),
    ).toBeInTheDocument();
  });

  it("renders a semantic section", () => {
    renderWithProviders(
      <Page>
        <div>Content</div>
      </Page>,
    );

    const section =
      screen
        .getByText("Content")
        .closest("section");

    expect(section).toBeInTheDocument();

    expect(section).toHaveClass(
      "py-16",
      "sm:py-20",
      "lg:py-24",
    );
  });

  it("includes the default container", () => {
    renderWithProviders(
      <Page>
        <div>Content</div>
      </Page>,
    );

    const container =
      screen.getByText("Content")
        .parentElement?.parentElement;

    expect(container).toHaveClass(
      "mx-auto",
      "w-full",
      "max-w-6xl",
      "px-5",
      "sm:px-6",
      "lg:px-8",
    );
  });

  it("constrains the content width", () => {
    renderWithProviders(
      <Page>
        <div>Content</div>
      </Page>,
    );

    const measure =
      screen.getByText("Content")
        .parentElement;

    expect(measure).toHaveClass(
      "mx-auto",
      "max-w-4xl",
    );
  });

  it("renders with empty content", () => {
    renderWithProviders(
      <Page>
        <></>
      </Page>,
    );

    expect(
      document.querySelector("section"),
    ).toBeInTheDocument();
  });
});
