import { createRef } from "react";
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
} from "./field";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders a native textarea", () => {
    renderWithProviders(
      <Textarea aria-label="Bio" />,
    );

    expect(
      screen.getByRole("textbox", {
        name: "Bio",
      }),
    ).toBeInTheDocument();
  });

  it("forwards refs", () => {
    const ref = createRef<HTMLTextAreaElement>();

    renderWithProviders(
      <Textarea ref={ref} />,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLTextAreaElement,
    );
  });

  it("accepts native textarea props", () => {
    renderWithProviders(
      <Textarea
        aria-label="Description"
        placeholder="Tell us about yourself"
        rows={6}
        required
      />,
    );

    const textarea = screen.getByRole("textbox", {
      name: "Description",
    });

    expect(textarea).toHaveAttribute(
      "rows",
      "6",
    );
    expect(textarea).toHaveAttribute(
      "placeholder",
      "Tell us about yourself",
    );
    expect(textarea).toBeRequired();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Textarea
        aria-label="Notes"
        className="custom-class"
      />,
    );

    expect(
      screen.getByRole("textbox", {
        name: "Notes",
      }),
    ).toHaveClass("custom-class");
  });

  it("integrates with Field", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Message</FieldLabel>
        <Textarea />
      </Field>,
    );

    expect(
      screen.getByLabelText("Message"),
    ).toBeInTheDocument();
  });

  it("supports controlled values", () => {
    renderWithProviders(
      <Textarea
        aria-label="Comment"
        value="Hello world"
        readOnly
      />,
    );

    expect(
      screen.getByDisplayValue("Hello world"),
    ).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    renderWithProviders(
      <Textarea
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

  it("uses its own id outside Field", () => {
    renderWithProviders(
      <Textarea
        id="message"
        aria-label="Message"
      />,
    );

    expect(
      screen.getByRole("textbox", {
        name: "Message",
      }),
    ).toHaveAttribute("id", "message");
  });

  it("connects a Field description", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Message</FieldLabel>
        <Textarea />
        <FieldDescription>
          Include any relevant details.
        </FieldDescription>
      </Field>,
    );

    const textarea =
      screen.getByLabelText("Message");
    const description = screen.getByText(
      "Include any relevant details.",
    );

    expect(textarea).toHaveAttribute(
      "aria-describedby",
      description.id,
    );
  });

  it("connects a Field error", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Message</FieldLabel>
        <Textarea aria-invalid />
        <FieldError>
          Message is required.
        </FieldError>
      </Field>,
    );

    const textarea =
      screen.getByLabelText("Message");
    const error = screen.getByText(
      "Message is required.",
    );

    expect(textarea).toHaveAttribute(
      "aria-describedby",
      error.id,
    );
    expect(textarea).toHaveAttribute(
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
          <FieldLabel>Message</FieldLabel>
          <Textarea
            aria-invalid
            aria-describedby="external-description"
          />
          <FieldDescription>
            Include any relevant details.
          </FieldDescription>
          <FieldError>
            Message is required.
          </FieldError>
        </Field>
      </>,
    );

    const textarea =
      screen.getByLabelText("Message");
    const description = screen.getByText(
      "Include any relevant details.",
    );
    const error = screen.getByText(
      "Message is required.",
    );

    expect(textarea).toHaveAttribute(
      "aria-describedby",
      `${description.id} ${error.id} external-description`,
    );
  });
});
