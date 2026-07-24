import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  useFieldContext,
  useOptionalFieldContext,
} from "./field";
import { Input } from "./input";

function RequiredFieldContextConsumer() {
  useFieldContext();

  return null;
}

function OptionalFieldContextConsumer() {
  const field = useOptionalFieldContext();

  return (
    <span>
      {field ? "inside field" : "outside field"}
    </span>
  );
}

describe("Field", () => {
  it("associates the label with the input", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input />
      </Field>,
    );

    const input = screen.getByLabelText("Email");

    expect(input).toBeInTheDocument();
  });

  it("connects the description using aria-describedby", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input />
        <FieldDescription>
          We&apos;ll never share your email.
        </FieldDescription>
      </Field>,
    );

    const input = screen.getByLabelText("Email");
    const description = screen.getByText(
      "We'll never share your email.",
    );

    expect(input).toHaveAttribute(
      "aria-describedby",
      description.id,
    );
  });

  it("marks the field as invalid when an error is present", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input aria-invalid />
        <FieldError>Email is required.</FieldError>
      </Field>,
    );

    const input = screen.getByLabelText("Email");

    expect(input).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("connects the error message using aria-describedby", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input aria-invalid />
        <FieldError>Email is required.</FieldError>
      </Field>,
    );

    const input = screen.getByLabelText("Email");
    const error = screen.getByText("Email is required.");

    expect(input).toHaveAttribute(
      "aria-describedby",
      error.id,
    );
  });

  it("supports description and error simultaneously", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input
          type="password"
          aria-invalid
        />
        <FieldDescription>
          Must contain at least 12 characters.
        </FieldDescription>
        <FieldError>
          Password is too short.
        </FieldError>
      </Field>,
    );

    const input = screen.getByLabelText("Password");
    const description = screen.getByText(
      "Must contain at least 12 characters.",
    );
    const error = screen.getByText(
      "Password is too short.",
    );

    expect(input).toHaveAttribute(
      "aria-describedby",
      `${description.id} ${error.id}`,
    );

    expect(input).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("throws when required field context is used outside Field", () => {
    expect(() => {
      renderWithProviders(
        <RequiredFieldContextConsumer />,
      );
    }).toThrow(
      "Field components must be used within <Field />.",
    );
  });

  it("returns no optional field context outside Field", () => {
    renderWithProviders(
      <OptionalFieldContextConsumer />,
    );

    expect(
      screen.getByText("outside field"),
    ).toBeInTheDocument();
  });

  it("provides optional field context inside Field", () => {
    renderWithProviders(
      <Field>
        <OptionalFieldContextConsumer />
      </Field>,
    );

    expect(
      screen.getByText("inside field"),
    ).toBeInTheDocument();
  });
});
