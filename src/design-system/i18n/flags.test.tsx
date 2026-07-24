import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Flags } from "./flags";

describe("Flags", () => {
  it("renders the English flag", () => {
    renderWithProviders(
      <Flags locale="en" />,
    );

    expect(
      screen.getByText("🇬🇧"),
    ).toBeInTheDocument();
  });

  it("renders the German flag", () => {
    renderWithProviders(
      <Flags locale="de" />,
    );

    expect(
      screen.getByText("🇩🇪"),
    ).toBeInTheDocument();
  });

  it("renders the Spanish flag", () => {
    renderWithProviders(
      <Flags locale="es" />,
    );

    expect(
      screen.getByText("🇪🇸"),
    ).toBeInTheDocument();
  });

  it("renders the French flag", () => {
    renderWithProviders(
      <Flags locale="fr" />,
    );

    expect(
      screen.getByText("🇫🇷"),
    ).toBeInTheDocument();
  });

  it("renders the Hungarian flag", () => {
    renderWithProviders(
      <Flags locale="hu" />,
    );

    expect(
      screen.getByText("🇭🇺"),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Flags
        locale="en"
        className="custom-class"
      />,
    );

    expect(
      screen.getByText("🇬🇧"),
    ).toHaveClass("custom-class");
  });
});
