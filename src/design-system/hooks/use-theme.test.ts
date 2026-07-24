import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useTheme } from "./use-theme";

const { useNextTheme } = vi.hoisted(() => ({
  useNextTheme: vi.fn(),
}));

vi.mock("next-themes", () => ({
  useTheme: useNextTheme,
}));

describe("useTheme", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns the current theme", () => {
    const setTheme = vi.fn();

    useNextTheme.mockReturnValue({
      theme: "dark",
      resolvedTheme: "dark",
      setTheme,
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.resolvedTheme).toBe("dark");
    expect(result.current.setTheme).toBe(setTheme);
    expect(result.current.isDark).toBe(true);
    expect(result.current.isLight).toBe(false);
  });

  it("returns light state correctly", () => {
    useNextTheme.mockReturnValue({
      theme: "light",
      resolvedTheme: "light",
      setTheme: vi.fn(),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.resolvedTheme).toBe("light");
    expect(result.current.isLight).toBe(true);
    expect(result.current.isDark).toBe(false);
  });

  it("falls back to 'system' when no theme is selected", () => {
    useNextTheme.mockReturnValue({
      theme: undefined,
      resolvedTheme: undefined,
      setTheme: vi.fn(),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("system");
    expect(result.current.resolvedTheme).toBeUndefined();
    expect(result.current.isDark).toBe(false);
    expect(result.current.isLight).toBe(false);
  });

  it("supports the system theme", () => {
    useNextTheme.mockReturnValue({
      theme: "system",
      resolvedTheme: "dark",
      setTheme: vi.fn(),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("system");
    expect(result.current.resolvedTheme).toBe("dark");
    expect(result.current.isDark).toBe(true);
    expect(result.current.isLight).toBe(false);
  });

  it("exposes the underlying setTheme function", () => {
    const setTheme = vi.fn();

    useNextTheme.mockReturnValue({
      theme: "light",
      resolvedTheme: "light",
      setTheme,
    });

    const { result } = renderHook(() => useTheme());

    result.current.setTheme("dark");

    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
