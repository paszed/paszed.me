import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "./field";
import { Radio } from "./radio";

describe("Radio", () => {
  it("renders a native radio input", () => {
    renderWithProviders(
      <Radio aria-label="Option A" />,
    );

    expect(
      screen.getByRole("radio", {
        name: "Option A",
      }),
    ).toBeInTheDocument();
  });

  it("supports defaultChecked", () => {
    renderWithProviders(
      <Radio
        aria-label="Option A"
        defaultChecked
      />,
    );

    expect(
      screen.getByRole("radio", {
        name: "Option A",
      }),
    ).toBeChecked();
  });

  it("supports controlled checked state", () => {
    renderWithProviders(
      <Radio
        aria-label="Option A"
        checked
        readOnly
      />,
    );

    expect(
      screen.getByRole("radio", {
        name: "Option A",
      }),
    ).toBeChecked();
  });

  it("calls onChange when selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithProviders(
      <Radio
        aria-label="Option A"
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("radio", {
        name: "Option A",
      }),
    );

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("supports keyboard interaction", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Radio aria-label="Option A" />,
    );

    const radio = screen.getByRole("radio", {
      name: "Option A",
    });

    radio.focus();

    await user.keyboard("[Space]");

    expect(radio).toBeChecked();
  });

  it("supports native radio group behavior", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <Radio
          aria-label="Option A"
          name="options"
        />
        <Radio
          aria-label="Option B"
          name="options"
        />
      </>,
    );

    const optionA = screen.getByRole("radio", {
      name: "Option A",
    });

    const optionB = screen.getByRole("radio", {
      name: "Option B",
    });

    await user.click(optionA);

    expect(optionA).toBeChecked();
    expect(optionB).not.toBeChecked();

    await user.click(optionB);

    expect(optionA).not.toBeChecked();
    expect(optionB).toBeChecked();
  });

  it("supports disabled state", () => {
    renderWithProviders(
      <Radio
        aria-label="Disabled"
        disabled
      />,
    );

    expect(
      screen.getByRole("radio", {
        name: "Disabled",
      }),
    ).toBeDisabled();
  });

  it("integrates with Field", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Newsletter</FieldLabel>
        <Radio />
      </Field>,
    );

    expect(
      screen.getByLabelText("Newsletter"),
    ).toBeInTheDocument();
  });

  it("uses its own id outside Field", () => {
    renderWithProviders(
      <Radio
        id="newsletter"
        aria-label="Newsletter"
      />,
    );

    expect(
      screen.getByRole("radio", {
        name: "Newsletter",
      }),
    ).toHaveAttribute("id", "newsletter");
  });

  it("connects a Field description", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Newsletter</FieldLabel>
        <Radio />
        <FieldDescription>
          Receive product updates.
        </FieldDescription>
      </Field>,
    );

    const radio =
      screen.getByLabelText("Newsletter");
    const description = screen.getByText(
      "Receive product updates.",
    );

    expect(radio).toHaveAttribute(
      "aria-describedby",
      description.id,
    );
  });

  it("connects a Field error", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Newsletter</FieldLabel>
        <Radio aria-invalid />
        <FieldError>
          Select an option.
        </FieldError>
      </Field>,
    );

    const radio =
      screen.getByLabelText("Newsletter");
    const error = screen.getByText(
      "Select an option.",
    );

    expect(radio).toHaveAttribute(
      "aria-describedby",
      error.id,
    );
    expect(radio).toHaveAttribute(
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
          <FieldLabel>Newsletter</FieldLabel>
          <Radio
            aria-invalid
            aria-describedby="external-description"
          />
          <FieldDescription>
            Receive product updates.
          </FieldDescription>
          <FieldError>
            Select an option.
          </FieldError>
        </Field>
      </>,
    );

    const radio =
      screen.getByLabelText("Newsletter");
    const description = screen.getByText(
      "Receive product updates.",
    );
    const error = screen.getByText(
      "Select an option.",
    );

    expect(radio).toHaveAttribute(
      "aria-describedby",
      `${description.id} ${error.id} external-description`,
    );
  });
});
