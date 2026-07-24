import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Calendar } from "./calendar";

describe("Calendar", () => {
  it("renders the calendar", () => {
    renderWithProviders(<Calendar />);

    expect(
      screen.getByRole("grid"),
    ).toBeInTheDocument();
  });

  it("shows outside days by default", () => {
    renderWithProviders(<Calendar />);

    expect(
      screen.getByRole("grid"),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    const { container } = renderWithProviders(
      <Calendar className="custom-class" />,
    );

    expect(
      container.querySelector(".custom-class"),
    ).toBeInTheDocument();
  });

  it("accepts DayPicker props", () => {
    renderWithProviders(
      <Calendar mode="single" />,
    );

    expect(
      screen.getByRole("grid"),
    ).toBeInTheDocument();
  });
});
