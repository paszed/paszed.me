import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Panel } from "./panel";

describe("Panel", () => {
  it("renders its children", () => {
    render(
      <Panel>
        <p>Panel content</p>
      </Panel>,
    );

    expect(
      screen.getByText("Panel content"),
    ).toBeInTheDocument();
  });

  it("renders as a section", () => {
    render(
      <Panel data-testid="panel">
        Content
      </Panel>,
    );

    expect(
      screen.getByTestId("panel").tagName,
    ).toBe("SECTION");
  });

  it("merges custom class names", () => {
    render(
      <Panel
        data-testid="panel"
        className="custom-panel"
      >
        Content
      </Panel>,
    );

    expect(
      screen.getByTestId("panel"),
    ).toHaveClass("custom-panel");
  });

  it("forwards HTML attributes", () => {
    render(
      <Panel
        data-testid="panel"
        aria-label="Example panel"
      >
        Content
      </Panel>,
    );

    expect(
      screen.getByTestId("panel"),
    ).toHaveAttribute(
      "aria-label",
      "Example panel",
    );
  });

  it("includes its base styling", () => {
    render(
      <Panel data-testid="panel">
        Content
      </Panel>,
    );

    expect(
      screen.getByTestId("panel"),
    ).toHaveClass(
      "rounded-xl",
      "border",
      "bg-card",
    );
  });
});
