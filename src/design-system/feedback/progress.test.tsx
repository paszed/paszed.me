import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Progress } from "./progress";

describe("Progress", () => {
  it("renders", () => {
    renderWithProviders(
      <Progress
        value={50}
        data-testid="progress"
      />,
    );

    expect(
      screen.getByTestId("progress"),
    ).toBeInTheDocument();
  });

  it("applies the progress width", () => {
    renderWithProviders(
      <Progress
        value={75}
        data-testid="progress"
      />,
    );

    const indicator =
      screen.getByTestId("progress").firstElementChild;

    expect(indicator).toHaveStyle({
      width: "75%",
    });
  });

  it("clamps values below zero", () => {
    renderWithProviders(
      <Progress
        value={-10}
        data-testid="progress"
      />,
    );

    const indicator =
      screen.getByTestId("progress").firstElementChild;

    expect(indicator).toHaveStyle({
      width: "0%",
    });
  });

  it("clamps values above one hundred", () => {
    renderWithProviders(
      <Progress
        value={150}
        data-testid="progress"
      />,
    );

    const indicator =
      screen.getByTestId("progress").firstElementChild;

    expect(indicator).toHaveStyle({
      width: "100%",
    });
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Progress
        value={50}
        className="custom-class"
        data-testid="progress"
      />,
    );

    expect(
      screen.getByTestId("progress"),
    ).toHaveClass("custom-class");
  });
});
