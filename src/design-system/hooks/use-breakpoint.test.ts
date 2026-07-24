import { act, renderHook } from "@testing-library/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { useBreakpoint } from "./use-breakpoint";

function resizeTo(width: number) {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });

  window.dispatchEvent(new Event("resize"));
}

describe("useBreakpoint", () => {
  beforeEach(() => {
    resizeTo(0);
  });

  it("returns 'base' below the small breakpoint", () => {
    resizeTo(639);

    const { result } = renderHook(() => useBreakpoint());

    expect(result.current).toBe("base");
  });

  it.each([
    [640, "sm"],
    [768, "md"],
    [1024, "lg"],
    [1280, "xl"],
    [1536, "2xl"],
  ] as const)(
    "returns %s at %ipx",
    (width, breakpoint) => {
      resizeTo(width);

      const { result } = renderHook(() =>
        useBreakpoint(),
      );

      expect(result.current).toBe(breakpoint);
    },
  );

  it("updates when the window is resized", () => {
    resizeTo(768);

    const { result } = renderHook(() =>
      useBreakpoint(),
    );

    expect(result.current).toBe("md");

    act(() => {
      resizeTo(1280);
    });

    expect(result.current).toBe("xl");

    act(() => {
      resizeTo(500);
    });

    expect(result.current).toBe("base");
  });

  it("removes the resize listener on unmount", () => {
    const addEventListenerSpy = vi.spyOn(
      window,
      "addEventListener",
    );

    const removeEventListenerSpy = vi.spyOn(
      window,
      "removeEventListener",
    );

    const { unmount } = renderHook(() =>
      useBreakpoint(),
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
