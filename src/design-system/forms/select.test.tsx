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
import { Select } from "./select";

describe("Select", () => {
  it("renders a native select", () => {
    renderWithProviders(
      <Select aria-label="Country">
        <option value="de">Germany</option>
        <option value="us">United States</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      }),
    ).toBeInTheDocument();
  });

  it("renders all options", () => {
    renderWithProviders(
      <Select aria-label="Country">
        <option value="de">Germany</option>
        <option value="us">United States</option>
      </Select>,
    );

    expect(
      screen.getByRole("option", {
        name: "Germany",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "United States",
      }),
    ).toBeInTheDocument();
  });

  it("supports defaultValue", () => {
    renderWithProviders(
      <Select
        aria-label="Country"
        defaultValue="us"
      >
        <option value="de">Germany</option>
        <option value="us">United States</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      }),
    ).toHaveValue("us");
  });

  it("supports controlled values", () => {
    renderWithProviders(
      <Select
        aria-label="Country"
        value="de"
        onChange={() => {}}
      >
        <option value="de">Germany</option>
        <option value="us">United States</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      }),
    ).toHaveValue("de");
  });

  it("calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithProviders(
      <Select
        aria-label="Country"
        onChange={onChange}
      >
        <option value="de">Germany</option>
        <option value="us">United States</option>
      </Select>,
    );

    await user.selectOptions(
      screen.getByRole("combobox", {
        name: "Country",
      }),
      "us",
    );

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    renderWithProviders(
      <Select
        aria-label="Country"
        disabled
      >
        <option value="de">Germany</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      }),
    ).toBeDisabled();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Select
        aria-label="Country"
        className="custom-class"
      >
        <option value="de">Germany</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      }),
    ).toHaveClass("custom-class");
  });

  it("integrates with Field", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Country</FieldLabel>
        <Select>
          <option value="de">Germany</option>
        </Select>
      </Field>,
    );

    expect(
      screen.getByLabelText("Country"),
    ).toBeInTheDocument();
  });

  it("uses its own id outside Field", () => {
    renderWithProviders(
      <Select
        id="country"
        aria-label="Country"
      >
        <option value="de">Germany</option>
      </Select>,
    );

    expect(
      screen.getByRole("combobox", {
        name: "Country",
      }),
    ).toHaveAttribute("id", "country");
  });

  it("connects a Field description", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Country</FieldLabel>
        <Select>
          <option value="de">Germany</option>
        </Select>
        <FieldDescription>
          Select your country of residence.
        </FieldDescription>
      </Field>,
    );

    const select = screen.getByLabelText("Country");
    const description = screen.getByText(
      "Select your country of residence.",
    );

    expect(select).toHaveAttribute(
      "aria-describedby",
      description.id,
    );
  });

  it("connects a Field error", () => {
    renderWithProviders(
      <Field>
        <FieldLabel>Country</FieldLabel>
        <Select aria-invalid>
          <option value="">Select a country</option>
          <option value="de">Germany</option>
        </Select>
        <FieldError>
          Country is required.
        </FieldError>
      </Field>,
    );

    const select = screen.getByLabelText("Country");
    const error = screen.getByText(
      "Country is required.",
    );

    expect(select).toHaveAttribute(
      "aria-describedby",
      error.id,
    );
    expect(select).toHaveAttribute(
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
          <FieldLabel>Country</FieldLabel>
          <Select
            aria-invalid
            aria-describedby="external-description"
          >
            <option value="de">Germany</option>
          </Select>
          <FieldDescription>
            Select your country of residence.
          </FieldDescription>
          <FieldError>
            Country is required.
          </FieldError>
        </Field>
      </>,
    );

    const select = screen.getByLabelText("Country");
    const description = screen.getByText(
      "Select your country of residence.",
    );
    const error = screen.getByText(
      "Country is required.",
    );

    expect(select).toHaveAttribute(
      "aria-describedby",
      `${description.id} ${error.id} external-description`,
    );
  });
});
