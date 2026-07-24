import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Alert } from "./alert";

describe("Alert", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Alert>Something happened.</Alert>,
    );

    expect(
      screen.getByText("Something happened."),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Alert className="custom-class">
        Alert
      </Alert>,
    );

    expect(
      screen.getByText("Alert").parentElement,
    ).toHaveClass("custom-class");
  });

  it("accepts native div props", () => {
    renderWithProviders(
      <Alert data-testid="alert">
        Alert
      </Alert>,
    );

    expect(
      screen.getByTestId("alert"),
    ).toBeInTheDocument();
  });
});
