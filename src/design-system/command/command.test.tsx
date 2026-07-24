import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

describe("Command", () => {
  it("renders command items", () => {
    renderWithProviders(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>Profile</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    expect(
      screen.getByText("Profile"),
    ).toBeInTheDocument();
  });

  it("renders the input", () => {
    renderWithProviders(
      <Command>
        <CommandInput placeholder="Search..." />
      </Command>,
    );

    expect(
      screen.getByPlaceholderText("Search..."),
    ).toBeInTheDocument();
  });

  it("renders an empty state", () => {
    renderWithProviders(
      <Command>
        <CommandEmpty>No results</CommandEmpty>
      </Command>,
    );

    expect(
      screen.getByText("No results"),
    ).toBeInTheDocument();
  });

  it("renders a separator", () => {
    const { container } = renderWithProviders(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>First</CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandItem>Second</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    expect(
      container.querySelector("[cmdk-separator]"),
    ).toBeInTheDocument();
  });

  it("merges custom classes into the separator", () => {
    const { container } = renderWithProviders(
      <Command>
        <CommandSeparator className="custom-separator" />
      </Command>,
    );

    expect(
      container.querySelector("[cmdk-separator]"),
    ).toHaveClass("custom-separator");
  });

  it("renders shortcuts", () => {
    renderWithProviders(
      <CommandShortcut>⌘K</CommandShortcut>,
    );

    expect(
      screen.getByText("⌘K"),
    ).toBeInTheDocument();
  });

  it("merges custom classes into shortcuts", () => {
    renderWithProviders(
      <CommandShortcut className="custom-shortcut">
        ⌘K
      </CommandShortcut>,
    );

    expect(
      screen.getByText("⌘K"),
    ).toHaveClass("custom-shortcut");
  });

  it("merges custom classes into command", () => {
    const { container } = renderWithProviders(
      <Command className="custom-command" />,
    );

    expect(
      container.querySelector("[cmdk-root]"),
    ).toHaveClass("custom-command");
  });

  it("merges custom classes into input", () => {
    renderWithProviders(
      <Command>
        <CommandInput
          className="custom-input"
          placeholder="Search..."
        />
      </Command>,
    );

    expect(
      screen.getByPlaceholderText("Search..."),
    ).toHaveClass("custom-input");
  });

  it("merges custom classes into list", () => {
    const { container } = renderWithProviders(
      <Command>
        <CommandList className="custom-list" />
      </Command>,
    );

    expect(
      container.querySelector("[cmdk-list]"),
    ).toHaveClass("custom-list");
  });

  it("merges custom classes into group", () => {
    const { container } = renderWithProviders(
      <Command>
        <CommandList>
          <CommandGroup className="custom-group">
            <CommandItem>Profile</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    expect(
      container.querySelector("[cmdk-group]"),
    ).toHaveClass("custom-group");
  });

  it("merges custom classes into item", () => {
    renderWithProviders(
      <Command>
        <CommandList>
          <CommandItem className="custom-item">
            Profile
          </CommandItem>
        </CommandList>
      </Command>,
    );

    expect(
      screen.getByText("Profile"),
    ).toHaveClass("custom-item");
  });
});
