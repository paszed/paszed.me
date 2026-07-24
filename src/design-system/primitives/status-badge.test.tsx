import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { StatusBadge } from "./status-badge";

describe("StatusBadge", () => {
  it.each([
    ["info", "bg-info"],
    ["warning", "bg-warning"],
    ["success", "bg-success"],
    ["neutral", "bg-fg-muted"],
  ] as const)(
    "renders the %s tone",
    (tone, className) => {
      const { container } = renderWithProviders(
        <StatusBadge tone={tone}>
          Status
        </StatusBadge>,
      );

      expect(
        container.querySelector(
          '[aria-hidden="true"]',
        ),
      ).toHaveClass(className);
    },
  );

  it("uses neutral as the default tone", () => {
    const { container } = renderWithProviders(
      <StatusBadge>Status</StatusBadge>,
    );

    expect(
      container.querySelector(
        '[aria-hidden="true"]',
      ),
    ).toHaveClass("bg-fg-muted");
  });

  it("renders children and forwards props", () => {
    renderWithProviders(
      <StatusBadge
        className="custom-class"
        data-testid="status"
      >
        Production
      </StatusBadge>,
    );

    expect(
      screen.getByTestId("status"),
    )
      .toHaveClass("custom-class");

    expect(
      screen.getByText("Production"),
    ).toBeInTheDocument();
  });
});
