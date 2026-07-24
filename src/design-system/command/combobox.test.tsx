import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Combobox } from "./combobox";

const options = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "banana",
    label: "Banana",
  },
  {
    value: "orange",
    label: "Orange",
  },
];

describe("Combobox", () => {
  it("renders the default placeholder", () => {
    renderWithProviders(
      <Combobox options={options} />,
    );

    expect(
      screen.getByRole("combobox"),
    ).toHaveTextContent("Select...");
  });

  it("renders the selected option", () => {
    renderWithProviders(
      <Combobox
        options={options}
        value="banana"
      />,
    );

    expect(
      screen.getByRole("combobox"),
    ).toHaveTextContent("Banana");
  });

  it("supports a custom placeholder", () => {
    renderWithProviders(
      <Combobox
        options={options}
        placeholder="Choose a fruit"
      />,
    );

    expect(
      screen.getByRole("combobox"),
    ).toHaveTextContent("Choose a fruit");
  });

  it("opens when clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox options={options} />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    expect(
      screen.getByPlaceholderText("Search..."),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "Apple",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "Banana",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "Orange",
      }),
    ).toBeInTheDocument();
  });

  it("supports a custom search placeholder", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox
        options={options}
        searchPlaceholder="Find fruit..."
      />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    expect(
      screen.getByPlaceholderText("Find fruit..."),
    ).toBeInTheDocument();
  });

  it("supports a custom empty message", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox
        options={options}
        emptyMessage="Nothing here."
      />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    const search =
      screen.getByPlaceholderText("Search...");

    await user.type(
      search,
      "does-not-exist",
    );

    expect(
      screen.getByText("Nothing here."),
    ).toBeInTheDocument();
  });

  it("calls onValueChange when selecting an option", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    renderWithProviders(
      <Combobox
        options={options}
        onValueChange={onValueChange}
      />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    await user.click(
      screen.getByRole("option", {
        name: "Banana",
      }),
    );

    expect(
      onValueChange,
    ).toHaveBeenCalledWith("banana");
  });

  it("clears the value when selecting the current option", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    renderWithProviders(
      <Combobox
        options={options}
        value="banana"
        onValueChange={onValueChange}
      />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    await user.click(
      screen.getByRole("option", {
        name: "Banana",
      }),
    );

    expect(
      onValueChange,
    ).toHaveBeenCalledWith("");
  });

  it("handles selection without an onValueChange callback", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox options={options} />,
    );

    const trigger =
      screen.getByRole("combobox");

    await user.click(trigger);

    await user.click(
      screen.getByRole("option", {
        name: "Apple",
      }),
    );

    expect(trigger).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("closes after selecting an option", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox options={options} />,
    );

    const trigger =
      screen.getByRole("combobox");

    await user.click(trigger);

    expect(trigger).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await user.click(
      screen.getByRole("option", {
        name: "Orange",
      }),
    );

    expect(trigger).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("shows the selected option as active", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox
        options={options}
        value="banana"
      />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    const banana = screen.getByRole(
      "option",
      {
        name: "Banana",
      },
    );

    const bananaIcon =
      banana.querySelector("svg");

    expect(bananaIcon).toHaveClass(
      "opacity-100",
    );
  });

  it("shows unselected options as inactive", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Combobox
        options={options}
        value="banana"
      />,
    );

    await user.click(
      screen.getByRole("combobox"),
    );

    const apple = screen.getByRole(
      "option",
      {
        name: "Apple",
      },
    );

    const appleIcon =
      apple.querySelector("svg");

    expect(appleIcon).toHaveClass(
      "opacity-0",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Combobox
        options={options}
        className="custom-class"
      />,
    );

    expect(
      screen.getByRole("combobox"),
    ).toHaveClass("custom-class");
  });
});
