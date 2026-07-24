import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useBreakpoint } from "./use-breakpoint";

describe("useBreakpoint", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  it("returns the current breakpoint", () => {
    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe("lg");
  });

  it("updates when the window is resized", () => {
    const { result } = renderHook(() => useBreakpoint());

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 640,
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe("sm");
  });

  it("returns xl for wide screens", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1440,
    });

    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe("xl");
  });

  it("cleans up the resize listener", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useBreakpoint());

    expect(addSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    unmount();

    expect(removeSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
