import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  fireEvent,
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Navbar } from "./navbar";

const mockToggle = vi.fn();

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
      href: "/about",
      key: "about",
    },
    {
      href: "/contact",
      key: "contact",
    },
  ],
}));

vi.mock("@/features/search", () => ({
  useCommandPalette: () => ({
    toggle: mockToggle,
  }),
}));

vi.mock("@/design-system", async (importOriginal) => {
  const actual =
    await importOriginal<
      typeof import("@/design-system")
    >();

  return {
    ...actual,
    ThemeToggle: () => (
      <button data-testid="theme-toggle">
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
    renderWithProviders(<Navbar />);

    expect(
      screen.getByTestId("brand-logo"),
    ).toBeInTheDocument();
  });

  it("renders the primary navigation", () => {
    renderWithProviders(<Navbar />);

    expect(
      screen.getByRole("navigation"),
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderWithProviders(<Navbar />);

    expect(
      screen.getByRole("link", {
        name: "Home",
      }),
    ).toHaveAttribute(
      "href",
      "/en",
    );

    expect(
      screen.getByRole("link", {
        name: "Services",
      }),
    ).toHaveAttribute(
      "href",
      "/en/services",
    );

    expect(
      screen.getByRole("link", {
        name: "Our Work",
      }),
    ).toHaveAttribute(
      "href",
      "/en/projects",
    );

    expect(
      screen.getByRole("link", {
        name: "About Us",
      }),
    ).toHaveAttribute(
      "href",
      "/en/about",
    );

    expect(
      screen.getByRole("link", {
        name: "Contact",
      }),
    ).toHaveAttribute(
      "href",
      "/en/contact",
    );
  });

  it("marks the active navigation item", async () => {
    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en/projects",
    );

    renderWithProviders(<Navbar />);

    expect(
      screen.getByRole("link", {
        name: "Our Work",
      }),
    ).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("opens the command palette", () => {
    renderWithProviders(<Navbar />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /search/i,
      }),
    );

    expect(
      mockToggle,
    ).toHaveBeenCalledOnce();
  });

  it("renders the search shortcut", () => {
    renderWithProviders(<Navbar />);

    expect(
      screen.getByText("⌘K"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /search/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders desktop and mobile controls", () => {
    renderWithProviders(<Navbar />);

    expect(
      screen.getAllByTestId(
        "theme-toggle",
      ),
    ).toHaveLength(2);

    expect(
      screen.getByTestId(
        "mobile-menu",
      ),
    ).toBeInTheDocument();
  });

  it("renders the header", () => {
    const { container } =
      renderWithProviders(<Navbar />);

    expect(
      container.querySelector("header"),
    ).toBeInTheDocument();
  });
});
