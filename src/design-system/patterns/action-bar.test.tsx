import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { ActionBar } from "./action-bar";

vi.mock("../layout", () => ({
  Inline: ({
    children,
    justify,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    justify?: string;
  }) => (
    <div
      data-testid="inline"
      data-justify={justify}
      className={className}
      {...props}
    >
      {children}
    </div>
  ),
}));

describe("ActionBar", () => {
  it("renders its children", () => {
    renderWithProviders(
      <ActionBar>
        <button>Save</button>
        <button>Cancel</button>
      </ActionBar>,
    );

    expect(
      screen.getByRole("button", {
        name: "Save",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Cancel",
      }),
    ).toBeInTheDocument();
  });

  it("uses Inline with justify='between'", () => {
    renderWithProviders(
      <ActionBar>
        Content
      </ActionBar>,
    );

    expect(
      screen.getByTestId("inline"),
    ).toHaveAttribute(
      "data-justify",
      "between",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ActionBar className="border-t">
        Content
      </ActionBar>,
    );

    expect(
      screen.getByTestId("inline"),
    ).toHaveClass("border-t");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <ActionBar
        id="actions"
        data-testid="actions"
      >
        Content
      </ActionBar>,
    );

    const actionBar =
      screen.getByTestId("actions");

    expect(actionBar).toHaveAttribute(
      "id",
      "actions",
    );
  });

  it("renders without children", () => {
    renderWithProviders(
      <ActionBar />,
    );

    expect(
      screen.getByTestId("inline"),
    ).toBeEmptyDOMElement();
  });
});
