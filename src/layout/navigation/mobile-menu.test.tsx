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

import { MobileMenu } from "./mobile-menu";

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

vi.mock("@/config/navigation", () => ({
  navigation: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About",
    },
  ],
}));

describe("MobileMenu", () => {
  beforeEach(async () => {
    vi.clearAllMocks();

    const { usePathname } = await import(
      "next/navigation"
    );

    vi.mocked(usePathname).mockReturnValue("/");
  });

  it("renders the menu toggle button", () => {
    renderWithProviders(<MobileMenu />);

    expect(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    ).toBeInTheDocument();
  });

  it("opens the menu", () => {
    renderWithProviders(<MobileMenu />);

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
    renderWithProviders(<MobileMenu />);

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

    const link = screen.getByRole("link", {
      name: "Home",
    });

    const menuContainer =
      link.closest("nav")?.parentElement
        ?.parentElement;

    expect(menuContainer).toHaveClass(
      "pointer-events-none",
    );
  });

  it("closes the menu when the backdrop is clicked", () => {
    renderWithProviders(<MobileMenu />);

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
    renderWithProviders(<MobileMenu />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    expect(
      screen.getByRole("link", {
        name: "Home",
      }),
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", {
        name: "Projects",
      }),
    ).toHaveAttribute(
      "href",
      "/projects",
    );

    expect(
      screen.getByRole("link", {
        name: "About",
      }),
    ).toHaveAttribute(
      "href",
      "/about",
    );
  });

  it("marks the active route", async () => {
    const { usePathname } = await import(
      "next/navigation"
    );

    vi.mocked(usePathname).mockReturnValue(
      "/projects",
    );

    renderWithProviders(<MobileMenu />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Open navigation menu",
      }),
    );

    const projects = screen.getByRole(
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
    renderWithProviders(<MobileMenu />);

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

  it("renders the navigation landmark", () => {
    renderWithProviders(<MobileMenu />);

    expect(
      screen.getByRole("navigation"),
    ).toBeInTheDocument();
  });
});
