import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { ReadingProgressBar } from "./progress";

describe("ReadingProgressBar", () => {
  function renderProgress(value: number) {
    renderWithProviders(
      <ReadingProgressBar
        value={value}
        data-testid="progress"
      />,
    );

    const progress =
      screen.getByTestId("progress");

    const indicator =
      progress.firstElementChild;

    expect(indicator).not.toBeNull();

    return indicator as HTMLElement;
  }

  it("renders the progress value", () => {
    const indicator = renderProgress(42);

    expect(indicator).toHaveStyle({
      width: "42%",
    });
  });

  it("clamps values below zero", () => {
    const indicator = renderProgress(-20);

    expect(indicator).toHaveStyle({
      width: "0%",
    });
  });

  it("clamps values above one hundred", () => {
    const indicator = renderProgress(120);

    expect(indicator).toHaveStyle({
      width: "100%",
    });
  });

  it("merges class names and forwards props", () => {
    renderWithProviders(
      <ReadingProgressBar
        value={50}
        className="custom-class"
        data-testid="progress"
        aria-label="Reading progress"
      />,
    );

    expect(
      screen.getByTestId("progress"),
    )
      .toHaveClass("custom-class");

    expect(
      screen.getByTestId("progress"),
    ).toHaveAttribute(
      "aria-label",
      "Reading progress",
    );
  });
});
