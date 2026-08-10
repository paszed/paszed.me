import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { FooterSection } from "./footer-section";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/design-system/icons/social-icon", () => ({
  SocialIcon: ({
    name,
  }: {
    name: string;
  }) => (
    <span
      data-testid="social-icon"
      data-name={name}
    />
  ),
}));

describe("FooterSection", () => {
  const items = [
    {
      label: "GitHub",
      href: "https://github.com/paszed",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ] as const;

  it("renders the section heading", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
      />,
    );

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Developer",
      }),
    ).toBeInTheDocument();
  });

  it("renders every navigation item", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
      />,
    );

    expect(
      screen.getByRole("link", {
        name: "GitHub",
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/paszed",
    );

    expect(
      screen.getByRole("link", {
        name: "Projects",
      }),
    ).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("renders non-link items as text", () => {
    const itemsWithText = [
      ...items,
      {
        label: "Vienna, Austria",
      },
    ] as const;

    renderWithProviders(
      <FooterSection
        title="Developer"
        items={itemsWithText}
      />,
    );

    expect(
      screen.getByText("Vienna, Austria"),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("link", {
        name: "Vienna, Austria",
      }),
    ).not.toBeInTheDocument();
  });

  it("opens external links in a new tab", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
      />,
    );

    expect(
      screen.getByRole("link", {
        name: "GitHub",
      }),
    ).toHaveAttribute("target", "_blank");

    expect(
      screen.getByRole("link", {
        name: "GitHub",
      }),
    ).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("does not add external attributes to internal links", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
      />,
    );

    expect(
      screen.getByRole("link", {
        name: "Projects",
      }),
    ).not.toHaveAttribute("target");

    expect(
      screen.getByRole("link", {
        name: "Projects",
      }),
    ).not.toHaveAttribute("rel");
  });

  it("does not render social icons by default", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
      />,
    );

    expect(
      screen.queryByTestId(
        "social-icon",
      ),
    ).not.toBeInTheDocument();
  });

  it("renders a social icon for each item when showIcons is enabled", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
        showIcons
      />,
    );

    const icons =
      screen.getAllByTestId(
        "social-icon",
      );

    expect(icons).toHaveLength(2);

    expect(icons[0]).toHaveAttribute(
      "data-name",
      "GitHub",
    );

    expect(icons[1]).toHaveAttribute(
      "data-name",
      "Projects",
    );
  });

  it("does not render a social icon for non-link items", () => {
    const itemsWithText = [
      {
        label: "Vienna, Austria",
      },
    ] as const;

    renderWithProviders(
      <FooterSection
        title="Developer"
        items={itemsWithText}
        showIcons
      />,
    );

    expect(
      screen.queryByTestId(
        "social-icon",
      ),
    ).not.toBeInTheDocument();

    expect(
      screen.getByText("Vienna, Austria"),
    ).toBeInTheDocument();
  });

  it("renders an empty list when no items are provided", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={[]}
      />,
    );

    expect(
      screen.getByRole("list"),
    ).toBeInTheDocument();

    expect(
      screen.queryAllByRole("listitem"),
    ).toHaveLength(0);
  });

  it("applies the heading styles", () => {
    renderWithProviders(
      <FooterSection
        title="Developer"
        items={items}
      />,
    );

    expect(
      screen.getByRole("heading", {
        level: 2,
      }),
    ).toHaveClass(
      "text-xs",
      "font-semibold",
      "uppercase",
      "tracking-[0.2em]",
      "text-fg-muted",
    );
  });
});
