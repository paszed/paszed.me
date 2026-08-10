import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Navbar } from "./navbar";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

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

vi.mock("@/brand", () => ({
  BrandLogo: () => (
    <div data-testid="brand-logo">Brand</div>
  ),
}));

vi.mock("@/config/navigation", () => ({
  navigation: [
    {
      href: "/",
      key: "home",
    },
    {
      href: "/services",
      key: "services",
    },
    {
      href: "/projects",
      key: "work",
    },
    {
      href: "/process",
      key: "process",
    },
    {
      href: "/pricing",
      key: "pricing",
    },
    {
      href: "/about",
      key: "about",
    },
    {
      href: "/faq",
      key: "faq",
    },
    {
      href: "/contact",
      key: "contact",
    },
  ],
}));

vi.mock("@/design-system", async (importOriginal) => {
  const actual =
    await importOriginal<
      typeof import("@/design-system")
    >();

  return {
    ...actual,
    ThemeToggle: () => (
      <button
        type="button"
        data-testid="theme-toggle"
      >
        Theme
      </button>
    ),
  };
});

vi.mock("./mobile-menu", () => ({
  MobileMenu: () => (
    <div data-testid="mobile-menu">
      Mobile Menu
    </div>
  ),
}));

describe("Navbar", () => {
  beforeEach(async () => {
    vi.clearAllMocks();

    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en",
    );
  });

  it("renders the brand logo", () => {
    renderWithProviders(
      <Navbar locale="en" />,
    );

    expect(
      screen.getByTestId("brand-logo"),
    ).toBeInTheDocument();
  });

  it("renders the primary navigation", () => {
    renderWithProviders(
      <Navbar locale="en" />,
    );

    expect(
      screen.getByRole("navigation"),
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderWithProviders(
      <Navbar locale="en" />,
    );

    const links = [
      ["/en", ""],
      ["/en/services", "Services"],
      ["/en/projects", "Our Work"],
      ["/en/process", "Process"],
      ["/en/pricing", "Pricing"],
      ["/en/about", "About Us"],
      ["/en/faq", "FAQ"],
      ["/en/contact", "Contact"],
    ] as const;

    for (const [href, name] of links) {
      const link = name
        ? screen.getAllByRole("link", { name })
          .find(
            (element) =>
              element.getAttribute("href") ===
              href,
          )
        : screen
            .getAllByRole("link")
            .find(
              (element) =>
                element.getAttribute("href") ===
                href,
            );

      expect(link).toBeDefined();
      expect(link).toHaveAttribute(
        "href",
        href,
      );
    }
  });

  it("marks the active navigation item", async () => {
    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en/projects",
    );

    renderWithProviders(
      <Navbar locale="en" />,
    );

    expect(
      screen.getByRole("link", {
        name: "Our Work",
      }),
    ).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("renders the contact action", () => {
    renderWithProviders(
      <Navbar locale="en" />,
    );

    const contactLinks =
      screen.getAllByRole("link", {
        name: "Contact",
      });

    expect(contactLinks).toHaveLength(2);

    expect(
      contactLinks.some(
        (link) =>
          link.getAttribute("href") ===
          "/en/contact",
      ),
    ).toBe(true);
  });

  it("renders the theme toggle", () => {
    renderWithProviders(
      <Navbar locale="en" />,
    );

    expect(
      screen.getAllByTestId(
        "theme-toggle",
      ),
    ).toHaveLength(1);
  });

  it("renders the mobile menu", () => {
    renderWithProviders(
      <Navbar locale="en" />,
    );

    expect(
      screen.getByTestId("mobile-menu"),
    ).toBeInTheDocument();
  });

  it("renders the header", () => {
    const { container } =
      renderWithProviders(
        <Navbar locale="en" />,
      );

    expect(
      container.querySelector("header"),
    ).toBeInTheDocument();
  });
});
