import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Avatar>
        <span>EP</span>
      </Avatar>,
    );

    expect(screen.getByText("EP")).toBeInTheDocument();
  });

  it("applies the default avatar classes", () => {
    renderWithProviders(
      <Avatar data-testid="avatar" />,
    );

    expect(
      screen.getByTestId("avatar"),
    ).toHaveClass(
      "flex",
      "size-10",
      "items-center",
      "justify-center",
      "rounded-full",
      "border",
      "border-border",
      "bg-card",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Avatar
        data-testid="avatar"
        className="ring-2"
      />,
    );

    expect(
      screen.getByTestId("avatar"),
    ).toHaveClass(
      "ring-2",
      "rounded-full",
      "bg-card",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Avatar
        data-testid="avatar"
        id="profile-avatar"
        aria-label="User avatar"
      />,
    );

    const avatar = screen.getByTestId("avatar");

    expect(avatar).toHaveAttribute(
      "id",
      "profile-avatar",
    );
    expect(avatar).toHaveAttribute(
      "aria-label",
      "User avatar",
    );
  });

  it("renders a div element", () => {
    renderWithProviders(
      <Avatar data-testid="avatar" />,
    );

    expect(
      screen.getByTestId("avatar").tagName,
    ).toBe("DIV");
  });
});
