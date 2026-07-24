import {
  act,
  renderHook,
} from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { useMounted } from "./use-mounted";

describe("useMounted", () => {
  let callback: FrameRequestCallback;
  let requestAnimationFrameSpy: ReturnType<
    typeof vi.spyOn
  >;
  let cancelAnimationFrameSpy: ReturnType<
    typeof vi.spyOn
  >;

  beforeEach(() => {
    requestAnimationFrameSpy = vi
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((nextCallback) => {
        callback = nextCallback;

        return 42;
      });

    cancelAnimationFrameSpy = vi
      .spyOn(window, "cancelAnimationFrame")
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("starts unmounted", () => {
    const { result } = renderHook(() =>
      useMounted(),
    );

    expect(result.current).toBe(false);
    expect(
      requestAnimationFrameSpy,
    ).toHaveBeenCalledTimes(1);
  });

  it("becomes mounted on the next animation frame", () => {
    const { result } = renderHook(() =>
      useMounted(),
    );

    act(() => {
      callback(0);
    });

    expect(result.current).toBe(true);
  });

  it("cancels the scheduled animation frame on unmount", () => {
    const { unmount } = renderHook(() =>
      useMounted(),
    );

    unmount();

    expect(
      cancelAnimationFrameSpy,
    ).toHaveBeenCalledTimes(1);
    expect(
      cancelAnimationFrameSpy,
    ).toHaveBeenCalledWith(42);
  });
});
