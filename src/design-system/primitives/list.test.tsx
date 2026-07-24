import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  List,
  ListItem,
} from "./list";

describe("List", () => {
  it("renders a list", () => {
    renderWithProviders(
      <List aria-label="Items">
        <ListItem>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("list", {
        name: "Items",
      }),
    ).toBeInTheDocument();
  });

  it("uses the default medium gap", () => {
    renderWithProviders(
      <List aria-label="Items">
        <ListItem>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("list", {
        name: "Items",
      }),
    ).toHaveClass("space-y-3");
  });

  it("supports gap variants", () => {
    const { rerender } = renderWithProviders(
      <List aria-label="Items" gap="sm">
        <ListItem>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("list", {
        name: "Items",
      }),
    ).toHaveClass("space-y-2");

    rerender(
      <List aria-label="Items" gap="lg">
        <ListItem>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("list", {
        name: "Items",
      }),
    ).toHaveClass("space-y-4");
  });

  it("merges custom list class names", () => {
    renderWithProviders(
      <List
        aria-label="Items"
        className="custom-class"
      >
        <ListItem>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("list", {
        name: "Items",
      }),
    ).toHaveClass("custom-class");
  });

  it("uses the default foreground color", () => {
    renderWithProviders(
      <List>
        <ListItem>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("listitem"),
    ).toHaveClass("text-fg");
  });

  it("supports muted items", () => {
    renderWithProviders(
      <List>
        <ListItem muted>First</ListItem>
      </List>,
    );

    expect(
      screen.getByRole("listitem"),
    ).toHaveClass("text-fg-secondary");
  });

  it("merges custom item class names", () => {
    renderWithProviders(
      <List>
        <ListItem className="custom-class">
          First
        </ListItem>
      </List>,
    );

    expect(
      screen.getByRole("listitem"),
    ).toHaveClass("custom-class");
  });
});
