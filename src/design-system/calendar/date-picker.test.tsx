import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { DatePicker } from "./date-picker";

describe("DatePicker", () => {
  it("renders the placeholder", () => {
    renderWithProviders(<DatePicker />);

    expect(
      screen.getByRole("button"),
    ).toHaveTextContent("Pick a date");
  });

  it("renders the selected date", () => {
    const date = new Date(2026, 6, 22);

    renderWithProviders(
      <DatePicker value={date} />,
    );

    expect(
      screen.getByRole("button"),
    ).toHaveTextContent(
      date.toLocaleDateString(),
    );
  });

  it("supports a custom placeholder", () => {
    renderWithProviders(
      <DatePicker placeholder="Choose" />,
    );

    expect(
      screen.getByRole("button"),
    ).toHaveTextContent("Choose");
  });

  it("forwards disabled", () => {
    renderWithProviders(
      <DatePicker disabled />,
    );

    expect(
      screen.getByRole("button"),
    ).toBeDisabled();
  });

  it("calls onChange when a date is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const value = new Date(2026, 6, 22);

    renderWithProviders(
      <DatePicker
        value={value}
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: value.toLocaleDateString(),
      }),
    );

    const day = screen.getByRole("button", {
      name: /Friday, July 31st, 2026/i,
    });

    await user.click(day);

    expect(onChange).toHaveBeenCalledTimes(1);

    const selectedDate =
      onChange.mock.calls[0]?.[0];

    expect(selectedDate).toBeInstanceOf(Date);

    expect(selectedDate).toEqual(
      new Date(2026, 6, 31),
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <DatePicker className="custom-class" />,
    );

    expect(
      screen.getByRole("button"),
    ).toHaveClass("custom-class");
  });
});
