import { createRef } from "react";
import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Field, FieldLabel } from "./field";
import { Input } from "./input";

describe("Input", () => {
  it("renders a native input", () => {
    renderWithProviders(<Input aria-label="Email" />);

    expect(
      screen.getByRole("textbox", {
        name: "Email",
      }),
    ).toBeInTheDocument();
  });

  it("forwards refs", () => {
    const ref = createRef<HTMLInputElement>();

    renderWithProviders(<Input ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("accepts native input props", () => {
    renderWithProviders(
      <Input
        aria-label="Email"
        type="email"
        placeholder="john@example.com"
        required
      />,
    );

    const input = screen.getByRole("textbox", {
      name: "Email",
    });

    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute(
      "placeholder",
      "john@example.com",
    );
    expect(input).toBeRequired();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Input
        aria-label="Name"
        className="custom-class"
      />,
    );

    expect(
      screen.getByRole("textbox", {
        name: "Name",
      }),
    ).toHaveClass("custom-class");
  });

  it("integrates with Field", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input />
      </Field>,
    );

    expect(
      screen.getByLabelText("Email"),
    ).toBeInTheDocument();
  });

  it("supports controlled values", () => {
    renderWithProviders(
      <Input
        aria-label="Username"
        value="paszed"
        readOnly
      />,
    );

    expect(
      screen.getByDisplayValue("paszed"),
    ).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    renderWithProviders(
      <Input
        aria-label="Disabled"
        disabled
      />,
    );

    expect(
      screen.getByRole("textbox", {
        name: "Disabled",
      }),
    ).toBeDisabled();
  });
});
