import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type {
  AnchorHTMLAttributes,
} from "react";

import {
  fireEvent,
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { LanguageSwitcher } from "./language-switcher";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("LanguageSwitcher", () => {
  async function mockPathname(
    pathname: string | null,
  ) {
    const { usePathname } =
      await import("next/navigation");

    vi.mocked(usePathname).mockReturnValue(
      pathname as string,
    );
  }

  function openMenu() {
    fireEvent.click(
      screen.getByRole("button"),
    );
  }

  it("renders the current locale button", async () => {
    await mockPathname(
      "/en/about",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    expect(
      screen.getByRole("button", {
        name: /English/i,
      }),
    ).toBeInTheDocument();
  });

  it("uses locale from pathname when valid", async () => {
    await mockPathname(
      "/de/projects",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    expect(
      screen.getByRole("button", {
        name: /Deutsch/i,
      }),
    ).toBeInTheDocument();
  });

  it("falls back to English for root path without locale segment", async () => {
    await mockPathname(
      "/",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    expect(
      screen.getByRole("button", {
        name: /English/i,
      }),
    ).toBeInTheDocument();
  });

  it("falls back to English for unknown locale paths", async () => {
    await mockPathname(
      "/fr/projects",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    expect(
      screen.getByRole("button", {
        name: /English/i,
      }),
    ).toBeInTheDocument();
  });

  it("falls back to root pathname when pathname is null", async () => {
    await mockPathname(
      null,
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    expect(
      screen.getByRole("button", {
        name: /English/i,
      }),
    ).toBeInTheDocument();
  });

  it("opens the locale menu", async () => {
    await mockPathname(
      "/en/about",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    openMenu();

    expect(
      screen.getByRole("menu"),
    ).toBeInTheDocument();
  });

  it("renders alternative locales", async () => {
    await mockPathname(
      "/en/about",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    openMenu();

    expect(
      screen.getByRole("link", {
        name: /Deutsch/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /Magyar/i,
      }),
    ).toBeInTheDocument();
  });

  it("does not render current locale", async () => {
    await mockPathname(
      "/de/projects",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    openMenu();

    expect(
      screen.queryByRole("link", {
        name: /Deutsch/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("preserves path when switching locale", async () => {
    await mockPathname(
      "/de/projects",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    openMenu();

    expect(
      screen.getByRole("link", {
        name: /Magyar/i,
      }),
    ).toHaveAttribute(
      "href",
      "/hu/projects",
    );
  });

  it("does not close when clicking inside the switcher", async () => {
    await mockPathname(
      "/en/projects",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    openMenu();

    fireEvent.mouseDown(
      screen.getByRole("menu"),
    );

    expect(
      screen.getByRole("menu"),
    ).toBeInTheDocument();
  });

  it("closes menu after selecting a locale", async () => {
    await mockPathname(
      "/en/projects",
    );

    renderWithProviders(
      <LanguageSwitcher />,
    );

    openMenu();

    fireEvent.click(
      screen.getByRole("link", {
        name: /Deutsch/i,
      }),
    );

    expect(
      screen.queryByRole("menu"),
    ).not.toBeInTheDocument();
  });

  it("handles outside clicks", async () => {
    await mockPathname(
      "/en/projects",
    );

    renderWithProviders(
      <>
        <LanguageSwitcher />
        <div data-testid="outside">
          Outside
        </div>
      </>,
    );

    openMenu();

    fireEvent.mouseDown(
      screen.getByTestId("outside"),
    );

    expect(
      screen.queryByRole("menu"),
    ).not.toBeInTheDocument();
  });
});
