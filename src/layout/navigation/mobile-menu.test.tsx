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

const defaultProps = {
  labels: {
    open: "Open navigation menu",
    close: "Close navigation menu",
    navigation: "Mobile navigation",
  },

  navigationLabels: {
    services: "Services",
    work: "Our Work",
    process: "Process",
    pricing: "Pricing",
    about: "About Us",
    faq: "FAQ",
  },

  contactLabel: "Contact",
};

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

vi.mock("@/features/language-switcher", () => ({
  LanguageSwitcher: () => null,
}));

vi.mock("@/config/navigation", () => ({
  navigation: [
    {
      href: "/services",
      key: "services",
    },
    {
      href: "/work",
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
  ],
}));

describe("MobileMenu", () => {
  beforeEach(async () => {
    vi.clearAllMocks();

    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en",
    );
  });

  it("renders the menu toggle button", async () => {
    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();
  });

  it("opens the menu", async () => {
    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    expect(
      screen.getByRole("link", {
        name: "Services",
      }),
    ).toBeInTheDocument();
  });

  it("renders the expected navigation links", async () => {
    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
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
      "/en/work",
    );

    expect(
      screen.getByRole("link", {
        name: "Process",
      }),
    ).toHaveAttribute(
      "href",
      "/en/process",
    );

    expect(
      screen.getByRole("link", {
        name: "Pricing",
      }),
    ).toHaveAttribute(
      "href",
      "/en/pricing",
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
        name: "FAQ",
      }),
    ).toHaveAttribute(
      "href",
      "/en/faq",
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

  it("marks the active route", async () => {
    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en/work",
    );

    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
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

  it("closes when the pathname changes", async () => {
    const { usePathname } =
      await import("next/navigation");

    const pathname =
      vi.mocked(usePathname);

    pathname.mockReturnValue("/en");

    const { MobileMenu } =
      await import("./mobile-menu");

    const { rerender } =
      renderWithProviders(
        <MobileMenu {...defaultProps} />,
      );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Close navigation menu",
        expanded: true,
      }),
    ).toBeInTheDocument();

    pathname.mockReturnValue("/en/work");

    rerender(
      <MobileMenu {...defaultProps} />,
    );

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();
  });

  it("closes when Escape is pressed", async () => {
    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Close navigation menu",
        expanded: true,
      }),
    ).toBeInTheDocument();

    fireEvent.keyDown(document, {
      key: "Escape",
    });

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();
  });

  it("keeps the menu open for non-Escape keys", async () => {
    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    fireEvent.keyDown(document, {
      key: "Enter",
    });

    expect(
      screen.getByRole("button", {
        name: "Close navigation menu",
        expanded: true,
      }),
    ).toBeInTheDocument();
  });

  it("closes when the backdrop is clicked", async () => {
    const { MobileMenu } =
      await import("./mobile-menu");

    renderWithProviders(
      <MobileMenu {...defaultProps} />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    const closeButtons =
      screen.getAllByRole("button", {
        name: "Close navigation menu",
      });

    expect(closeButtons).toHaveLength(2);

    fireEvent.click(closeButtons[1]);

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();
  });
});
