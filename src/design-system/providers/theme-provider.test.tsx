import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeProvider } from "./theme-provider";

const { nextThemesProvider } = vi.hoisted(() => ({
  nextThemesProvider: vi.fn(
    ({
      children,
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div data-testid="next-themes-provider">
        {children}
      </div>
    ),
  ),
}));

vi.mock("next-themes", () => ({
  ThemeProvider: nextThemesProvider,
}));

describe("ThemeProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders its children", () => {
    render(
      <ThemeProvider>
        <div>Content</div>
      </ThemeProvider>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("uses the default configuration", () => {
    render(
      <ThemeProvider>
        <div>Content</div>
      </ThemeProvider>,
    );

    const props = nextThemesProvider.mock.calls[0][0];

    expect(props.attribute).toBe("class");
    expect(props.defaultTheme).toBe("system");
    expect(props.enableSystem).toBe(true);
    expect(props.disableTransitionOnChange).toBe(true);
  });

  it("passes custom configuration through", () => {
    render(
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange={false}
      >
        <div>Content</div>
      </ThemeProvider>,
    );

    const props = nextThemesProvider.mock.calls[0][0];

    expect(props.attribute).toBe("data-theme");
    expect(props.defaultTheme).toBe("dark");
    expect(props.enableSystem).toBe(false);
    expect(props.disableTransitionOnChange).toBe(false);
  });

  it("forwards children to NextThemesProvider", () => {
    render(
      <ThemeProvider>
        <span>Theme content</span>
      </ThemeProvider>,
    );

    const props = nextThemesProvider.mock.calls[0][0];

    expect(props.children).toBeDefined();
    expect(
      screen.getByText("Theme content"),
    ).toBeInTheDocument();
  });
});
