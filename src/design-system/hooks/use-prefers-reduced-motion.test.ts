import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

describe("usePrefersReducedMotion", () => {
  let listeners = new Set<() => void>();
  let matches = false;

  beforeEach(() => {
    listeners = new Set();
    matches = false;

    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({
        get matches() {
          return matches;
        },
        media: "(prefers-reduced-motion: reduce)",
        onchange: null,
        addEventListener: (
          event: string,
          listener: () => void,
        ) => {
          if (event === "change") {
            listeners.add(listener);
          }
        },
        removeEventListener: (
          event: string,
          listener: () => void,
        ) => {
          if (event === "change") {
            listeners.delete(listener);
          }
        },
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    );
  });

  it("returns false by default", () => {
    const { result } = renderHook(() =>
      usePrefersReducedMotion(),
    );

    expect(result.current).toBe(false);
  });

  it("returns true when reduced motion is preferred", () => {
    matches = true;

    const { result } = renderHook(() =>
      usePrefersReducedMotion(),
    );

    expect(result.current).toBe(true);
  });

  it("updates when the media query changes", () => {
    const { result } = renderHook(() =>
      usePrefersReducedMotion(),
    );

    expect(result.current).toBe(false);

    act(() => {
      matches = true;
      listeners.forEach((listener) => listener());
    });

    expect(result.current).toBe(true);

    act(() => {
      matches = false;
      listeners.forEach((listener) => listener());
    });

    expect(result.current).toBe(false);
  });

  it("registers and cleans up the media query listener", () => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const addEventListenerSpy = vi.spyOn(
      mediaQuery,
      "addEventListener",
    );

    const removeEventListenerSpy = vi.spyOn(
      mediaQuery,
      "removeEventListener",
    );

    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => mediaQuery),
    );

    const { unmount } = renderHook(() =>
      usePrefersReducedMotion(),
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });
});
