import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Cluster } from "./cluster";

describe("Cluster", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Cluster>
        <button>One</button>
        <button>Two</button>
      </Cluster>,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("uses the default layout", () => {
    renderWithProviders(
      <Cluster data-testid="cluster" />,
    );

    expect(screen.getByTestId("cluster")).toHaveClass(
      "flex",
      "flex-wrap",
      "items-center",
      "gap-4",
    );
  });

  it.each([
    ["sm", "gap-2"],
    ["md", "gap-4"],
    ["lg", "gap-6"],
  ] as const)(
    "applies the %s gap",
    (gap, expectedClass) => {
      renderWithProviders(
        <Cluster
          data-testid="cluster"
          gap={gap}
        />,
      );

      expect(
        screen.getByTestId("cluster"),
      ).toHaveClass(expectedClass);
    },
  );

  it("merges custom class names", () => {
    renderWithProviders(
      <Cluster
        data-testid="cluster"
        className="justify-between"
      />,
    );

    expect(
      screen.getByTestId("cluster"),
    ).toHaveClass(
      "justify-between",
      "flex",
      "flex-wrap",
      "items-center",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Cluster
        data-testid="cluster"
        id="actions"
        aria-label="Action buttons"
      />,
    );

    const cluster = screen.getByTestId("cluster");

    expect(cluster).toHaveAttribute("id", "actions");
    expect(cluster).toHaveAttribute(
      "aria-label",
      "Action buttons",
    );
  });
});
