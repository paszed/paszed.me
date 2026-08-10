import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  fireEvent,
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { useTheme } from "@/design-system/hooks/use-theme";
import { ThemeToggle } from "./theme-toggle";

vi.mock("lucide-react", () => ({
  Sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="sun-icon" {...props} />
  ),
  Moon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="moon-icon" {...props} />
  ),
}));

vi.mock("@/design-system/hooks/use-theme", () => ({
  useTheme: vi.fn(),
}));

vi.mock("@/design-system/hooks/use-mounted", () => ({
  useMounted: vi.fn(),
}));

const mockUseTheme = vi.mocked(useTheme);

describe("ThemeToggle", () => {
  const setTheme = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();

    const { useMounted } = await import(
      "@/design-system/hooks/use-mounted"
    );

    vi.mocked(useMounted).mockReturnValue(true);

    mockUseTheme.mockReturnValue({
      theme: "light",
      resolvedTheme: "light",
      setTheme,
      isDark: false,
      isLight: true,
    });
  });

  it("renders a placeholder before mounting", async () => {
    const { useMounted } = await import(
      "@/design-system/hooks/use-mounted"
    );

    vi.mocked(useMounted).mockReturnValue(false);

    renderWithProviders(<ThemeToggle />);

    const button = screen.getByRole("button", {
      name: "Toggle theme",
    });

    expect(button).toBeInTheDocument();
    expect(
      screen.queryByTestId("sun-icon"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("moon-icon"),
    ).not.toBeInTheDocument();

    expect(button.firstElementChild).toHaveClass(
      "size-4",
    );
  });

  it("renders the moon icon in light mode", () => {
    renderWithProviders(<ThemeToggle />);

    expect(
      screen.getByTestId("moon-icon"),
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId("sun-icon"),
    ).not.toBeInTheDocument();
  });

  it("renders the sun icon in dark mode", () => {
    mockUseTheme.mockReturnValue({
      theme: "dark",
      resolvedTheme: "dark",
      setTheme,
      isDark: true,
      isLight: false,
    });

    renderWithProviders(<ThemeToggle />);

    expect(
      screen.getByTestId("sun-icon"),
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId("moon-icon"),
    ).not.toBeInTheDocument();
  });

  it("switches from light to dark", () => {
    renderWithProviders(<ThemeToggle />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Switch to dark mode",
      }),
    );

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it("switches from dark to light", () => {
    mockUseTheme.mockReturnValue({
      theme: "dark",
      resolvedTheme: "dark",
      setTheme,
      isDark: true,
      isLight: false,
    });

    renderWithProviders(<ThemeToggle />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Switch to light mode",
      }),
    );

    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ThemeToggle className="ring-2 rounded-lg p-2" />,
    );

    expect(
      screen.getByRole("button", {
        name: "Switch to dark mode",
      }),
    ).toHaveClass(
      "ring-2",
      "rounded-lg",
      "p-2",
    );
  });

  it("uses the expected button type", () => {
    renderWithProviders(<ThemeToggle />);

    expect(
      screen.getByRole("button", {
        name: "Switch to dark mode",
      }),
    ).toHaveAttribute("type", "button");
  });
});
