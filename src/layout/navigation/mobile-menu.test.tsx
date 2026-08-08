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

let MobileMenu: typeof import("./mobile-menu").MobileMenu;

const defaultProps = {
  labels: {
    open: "Open navigation menu",
    close: "Close navigation menu",
    navigation: "Mobile navigation",
  },

  navigationLabels: {
    home: "Home",
    projects: "Projects",
    about: "About",
    journal: "Journal",
    now: "Now",
  },
};

function renderMobileMenu(
  props = {},
) {
  return renderWithProviders(
    <MobileMenu
      {...defaultProps}
      {...props}
    />,
  );
}

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
    <a
      href={href}
      {...props}
    >
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
      href: "/",
      key: "home",
    },
    {
      href: "/projects",
      key: "projects",
    },
    {
      href: "/about",
      key: "about",
    },
  ],
}));

describe("MobileMenu", () => {
  beforeEach(async () => {
    vi.clearAllMocks();

    const mobileMenuModule =
      await import("./mobile-menu");

    MobileMenu =
      mobileMenuModule.MobileMenu;

    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en",
    );
  });

  it("renders the menu toggle button", () => {
    renderMobileMenu();

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();
  });

  it("opens the menu", () => {
    renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    expect(
      screen.getAllByRole("button", {
        name: "Close navigation menu",
      }),
    ).toHaveLength(2);

    expect(
      screen.getByRole("link", {
        name: "Home",
      }),
    ).toBeInTheDocument();
  });

  it("closes the menu when the toggle is clicked again", () => {
    renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    fireEvent.click(
      screen.getAllByRole("button", {
        name: "Close navigation menu",
      })[0],
    );

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Close navigation menu",
      }),
    ).not.toBeInTheDocument();
  });

  it("closes the menu when the backdrop is clicked", () => {
    renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    fireEvent.click(
      screen.getAllByRole("button", {
        name: "Close navigation menu",
      })[1],
    );

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Close navigation menu",
      }),
    ).not.toBeInTheDocument();
  });

  it("renders every navigation link", () => {
    renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

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
        name: "Projects",
      }),
    ).toHaveAttribute(
      "href",
      "/en/projects",
    );

    expect(
      screen.getByRole("link", {
        name: "About",
      }),
    ).toHaveAttribute(
      "href",
      "/en/about",
    );
  });

  it("marks the active route", async () => {
    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      "/en/projects",
    );

    renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    const projects =
      screen.getByRole(
        "link",
        {
          name: "Projects",
        },
      );

    expect(projects).toHaveClass(
      "bg-surface",
    );

    expect(projects).toHaveClass(
      "text-accent",
    );
  });

  it("closes after clicking a navigation link", () => {
    renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    fireEvent.click(
      screen.getByRole("link", {
        name: "Projects",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Close navigation menu",
      }),
    ).not.toBeInTheDocument();
  });

  it("closes when the pathname changes", async () => {
    const { usePathname } =
      await import("next/navigation");

    const mockPathname =
      vi.mocked(usePathname);

    const { rerender } =
      renderMobileMenu();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    expect(
      screen.getByRole("link", {
        name: "Projects",
      }),
    ).toBeInTheDocument();

    mockPathname.mockReturnValue(
      "/en/projects",
    );

    rerender(
      <MobileMenu
        {...defaultProps}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Close navigation menu",
      }),
    ).not.toBeInTheDocument();
  });

  it("renders the navigation landmark", () => {
    renderMobileMenu();

    expect(
      screen.getByRole("navigation"),
    ).toBeInTheDocument();
  });
});
