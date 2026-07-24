import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Checkbox } from "./checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "./field";

describe("Checkbox", () => {
  it("renders a native checkbox", () => {
    renderWithProviders(
      <Checkbox aria-label="Accept terms" />,
    );

    expect(
      screen.getByRole("checkbox", {
        name: "Accept terms",
      }),
    ).toBeInTheDocument();
  });

  it("supports defaultChecked", () => {
    renderWithProviders(
      <Checkbox
        aria-label="Accept terms"
        defaultChecked
      />,
    );

    expect(
      screen.getByRole("checkbox", {
        name: "Accept terms",
      }),
    ).toBeChecked();
  });

  it("supports controlled checked state", () => {
    renderWithProviders(
      <Checkbox
        aria-label="Accept terms"
        checked
        readOnly
      />,
    );

    expect(
      screen.getByRole("checkbox", {
        name: "Accept terms",
      }),
    ).toBeChecked();
  });

  it("calls onChange when clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithProviders(
      <Checkbox
        aria-label="Accept terms"
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("checkbox", {
        name: "Accept terms",
      }),
    );

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("toggles with the keyboard", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Checkbox aria-label="Accept terms" />,
    );

    const checkbox = screen.getByRole("checkbox", {
      name: "Accept terms",
    });

    checkbox.focus();

    await user.keyboard("[Space]");

    expect(checkbox).toBeChecked();
  });

  it("supports disabled state", () => {
    renderWithProviders(
      <Checkbox
        aria-label="Accept terms"
        disabled
      />,
    );

    expect(
      screen.getByRole("checkbox", {
        name: "Accept terms",
      }),
    ).toBeDisabled();
  });

  it("integrates with Field", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Accept terms</FieldLabel>
        <Checkbox />
      </Field>,
    );

    expect(
      screen.getByLabelText("Accept terms"),
    ).toBeInTheDocument();
  });

  it("uses its own id outside Field", () => {
    renderWithProviders(
      <Checkbox
        id="terms"
        aria-label="Accept terms"
      />,
    );

    expect(
      screen.getByRole("checkbox", {
        name: "Accept terms",
      }),
    ).toHaveAttribute("id", "terms");
  });

  it("connects a Field description", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Accept terms</FieldLabel>
        <Checkbox />
        <FieldDescription>
          You must accept the terms.
        </FieldDescription>
      </Field>,
    );

    const checkbox =
      screen.getByLabelText("Accept terms");
    const description = screen.getByText(
      "You must accept the terms.",
    );

    expect(checkbox).toHaveAttribute(
      "aria-describedby",
      description.id,
    );
  });

  it("connects a Field error", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Accept terms</FieldLabel>
        <Checkbox aria-invalid />
        <FieldError>
          Acceptance is required.
        </FieldError>
      </Field>,
    );

    const checkbox =
      screen.getByLabelText("Accept terms");
    const error = screen.getByText(
      "Acceptance is required.",
    );

    expect(checkbox).toHaveAttribute(
      "aria-describedby",
      error.id,
    );
    expect(checkbox).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("combines description, error, and explicit aria-describedby", () => {
    renderWithProviders(
      <>
        <span id="external-description">
          Additional information.
        </span>

        <Field>
          <FieldLabel>Accept terms</FieldLabel>
          <Checkbox
            aria-invalid
            aria-describedby="external-description"
          />
          <FieldDescription>
            You must accept the terms.
          </FieldDescription>
          <FieldError>
            Acceptance is required.
          </FieldError>
        </Field>
      </>,
    );

    const checkbox =
      screen.getByLabelText("Accept terms");
    const description = screen.getByText(
      "You must accept the terms.",
    );
    const error = screen.getByText(
      "Acceptance is required.",
    );

    expect(checkbox).toHaveAttribute(
      "aria-describedby",
      `${description.id} ${error.id} external-description`,
    );
  });
});
