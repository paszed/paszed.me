import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { SectionHeader } from "./section-header";

vi.mock("../typography", () => ({
  Heading: ({
    as: Tag = "h2",
    children,
  }: {
    as?: "h1" | "h2";
    children: React.ReactNode;
  }) => <Tag>{children}</Tag>,

  Eyebrow: ({
    children,
  }: {
    children: React.ReactNode;
  }) => <span>{children}</span>,

  Text: ({
    children,
  }: {
    children: React.ReactNode;
  }) => <p>{children}</p>,
}));

describe("SectionHeader", () => {
  it("renders the title", () => {
    renderWithProviders(
      <SectionHeader title="Projects" />,
    );

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Projects",
      }),
    ).toBeInTheDocument();
  });

  it("renders an h1 when level is 1", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        level={1}
      />,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Projects",
      }),
    ).toBeInTheDocument();
  });

  it("renders the eyebrow", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        eyebrow="Featured"
      />,
    );

    expect(
      screen.getByText("Featured"),
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        description="A collection of recent work."
      />,
    );

    expect(
      screen.getByText(
        "A collection of recent work.",
      ),
    ).toBeInTheDocument();
  });

  it("renders actions when not centered", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        actions={
          <button>
            View all
          </button>
        }
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "View all",
      }),
    ).toBeInTheDocument();
  });

  it("does not render actions when centered", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        centered
        actions={
          <button>
            View all
          </button>
        }
      />,
    );

    expect(
      screen.queryByRole("button", {
        name: "View all",
      }),
    ).not.toBeInTheDocument();
  });

  it("applies centered layout classes", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        centered
        className="test-section-header"
      />,
    );

    expect(
      document.querySelector(
        ".test-section-header",
      ),
    ).toHaveClass(
      "items-center",
      "text-center",
    );
  });

  it("applies the default layout classes", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        className="test-section-header"
      />,
    );

    expect(
      document.querySelector(
        ".test-section-header",
      ),
    ).toHaveClass(
      "md:flex-row",
      "md:items-end",
      "md:justify-between",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        className="border-b"
      />,
    );

    expect(
      document.querySelector(".border-b"),
    ).toHaveClass("border-b");
  });

  it("uses the correct content width when centered", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        centered
        className="test-section-header"
      />,
    );

    expect(
      document.querySelector(
        ".test-section-header",
      )?.firstElementChild,
    ).toHaveClass("max-w-3xl");
  });

  it("uses the default content width", () => {
    renderWithProviders(
      <SectionHeader
        title="Projects"
        className="test-section-header"
      />,
    );

    expect(
      document.querySelector(
        ".test-section-header",
      )?.firstElementChild,
    ).toHaveClass("max-w-2xl");
  });
});
