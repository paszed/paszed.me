import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { KeyValue } from "./key-value";

describe("KeyValue", () => {
  it("renders the label and value", () => {
    renderWithProviders(
      <KeyValue
        label="Email"
        value="john@example.com"
      />,
    );

    expect(
      screen.getByText("Email"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("john@example.com"),
    ).toBeInTheDocument();
  });

  it("accepts React nodes", () => {
    renderWithProviders(
      <KeyValue
        label={<strong>Name</strong>}
        value={<span>Paszed</span>}
      />,
    );

    expect(
      screen.getByText("Name"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Paszed"),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <KeyValue
        label="Key"
        value="Value"
        className="custom-class"
      />,
    );

    expect(
      screen.getByText("Key").parentElement,
    ).toHaveClass("custom-class");
  });

  it("accepts native div props", () => {
    renderWithProviders(
      <KeyValue
        label="Key"
        value="Value"
        data-testid="key-value"
      />,
    );

    expect(
      screen.getByTestId("key-value"),
    ).toBeInTheDocument();
  });
});
