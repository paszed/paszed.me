import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useTheme } from "./use-theme";

const { mockSetTheme, mockUseNextTheme } = vi.hoisted(() => ({
  mockSetTheme: vi.fn(),
  mockUseNextTheme: vi.fn(),
}));

vi.mock("next-themes", () => ({
  useTheme: mockUseNextTheme,
}));

describe("useTheme", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockUseNextTheme.mockReturnValue({
      theme: "system",
      resolvedTheme: "light",
      setTheme: mockSetTheme,
    });
  });

  it("returns the current theme values", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("system");
    expect(result.current.resolvedTheme).toBe("light");
  });

  it("exposes light/dark helpers", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.isLight).toBe(true);
    expect(result.current.isDark).toBe(false);
  });

  it("forwards setTheme", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme("dark");
    });

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("updates helpers when the resolved theme changes", () => {
    mockUseNextTheme.mockReturnValue({
      theme: "dark",
      resolvedTheme: "dark",
      setTheme: mockSetTheme,
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.resolvedTheme).toBe("dark");
    expect(result.current.isDark).toBe(true);
    expect(result.current.isLight).toBe(false);
  });
});
