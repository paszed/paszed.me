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
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders a switch", () => {
    renderWithProviders(
      <Switch aria-label="Enable notifications" />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    renderWithProviders(
      <Switch aria-label="Enable notifications" />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).not.toBeChecked();
  });

  it("supports defaultChecked", () => {
    renderWithProviders(
      <Switch
        aria-label="Enable notifications"
        defaultChecked
      />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).toBeChecked();
  });

  it("supports controlled checked state", () => {
    renderWithProviders(
      <Switch
        aria-label="Enable notifications"
        checked
        readOnly
      />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).toBeChecked();
  });

  it("supports controlled unchecked state", () => {
    renderWithProviders(
      <Switch
        aria-label="Enable notifications"
        checked={false}
        readOnly
      />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).not.toBeChecked();
  });

  it("calls onChange when toggled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithProviders(
      <Switch
        aria-label="Enable notifications"
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    );

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("does not change controlled state when toggled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithProviders(
      <Switch
        aria-label="Enable notifications"
        checked={false}
        onChange={onChange}
      />,
    );

    const toggle = screen.getByRole("switch", {
      name: "Enable notifications",
    });

    await user.click(toggle);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(toggle).not.toBeChecked();
    expect(toggle).toHaveAttribute(
      "aria-checked",
      "false",
    );
  });

  it("toggles using the keyboard", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Switch aria-label="Enable notifications" />,
    );

    const toggle = screen.getByRole("switch", {
      name: "Enable notifications",
    });

    toggle.focus();

    await user.keyboard("[Space]");

    expect(toggle).toBeChecked();
  });

  it("supports disabled state", () => {
    renderWithProviders(
      <Switch
        aria-label="Enable notifications"
        disabled
      />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).toBeDisabled();
  });

  it("integrates with Field", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>
          Enable notifications
        </FieldLabel>
        <Switch />
      </Field>,
    );

    expect(
      screen.getByLabelText(
        "Enable notifications",
      ),
    ).toBeInTheDocument();
  });

  it("updates aria-checked when toggled", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Switch aria-label="Dark mode" />,
    );

    const toggle = screen.getByRole("switch", {
      name: "Dark mode",
    });

    expect(toggle).toHaveAttribute(
      "aria-checked",
      "false",
    );

    await user.click(toggle);

    expect(toggle).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("uses its own id outside Field", () => {
    renderWithProviders(
      <Switch
        id="notifications"
        aria-label="Enable notifications"
      />,
    );

    expect(
      screen.getByRole("switch", {
        name: "Enable notifications",
      }),
    ).toHaveAttribute(
      "id",
      "notifications",
    );
  });

  it("connects a Field description", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>
          Enable notifications
        </FieldLabel>
        <Switch />
        <FieldDescription>
          Receive important updates.
        </FieldDescription>
      </Field>,
    );

    const toggle = screen.getByLabelText(
      "Enable notifications",
    );
    const description = screen.getByText(
      "Receive important updates.",
    );

    expect(toggle).toHaveAttribute(
      "aria-describedby",
      description.id,
    );
  });

  it("connects a Field error", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>
          Enable notifications
        </FieldLabel>
        <Switch aria-invalid />
        <FieldError>
          This setting is required.
        </FieldError>
      </Field>,
    );

    const toggle = screen.getByLabelText(
      "Enable notifications",
    );
    const error = screen.getByText(
      "This setting is required.",
    );

    expect(toggle).toHaveAttribute(
      "aria-describedby",
      error.id,
    );
    expect(toggle).toHaveAttribute(
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
          <FieldLabel>
            Enable notifications
          </FieldLabel>
          <Switch
            aria-invalid
            aria-describedby="external-description"
          />
          <FieldDescription>
            Receive important updates.
          </FieldDescription>
          <FieldError>
            This setting is required.
          </FieldError>
        </Field>
      </>,
    );

    const toggle = screen.getByLabelText(
      "Enable notifications",
    );
    const description = screen.getByText(
      "Receive important updates.",
    );
    const error = screen.getByText(
      "This setting is required.",
    );

    expect(toggle).toHaveAttribute(
      "aria-describedby",
      `${description.id} ${error.id} external-description`,
    );
  });
});
