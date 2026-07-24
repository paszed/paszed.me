import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Table } from "./table";

describe("Table", () => {
  it("renders a table", () => {
    renderWithProviders(
      <Table>
        <tbody>
          <tr>
            <td>John</td>
          </tr>
        </tbody>
      </Table>,
    );

    expect(
      screen.getByRole("table"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("John"),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Table className="custom-class" />,
    );

    expect(
      screen.getByRole("table"),
    ).toHaveClass("custom-class");
  });

  it("accepts native table props", () => {
    renderWithProviders(
      <Table data-testid="table" />,
    );

    expect(
      screen.getByTestId("table"),
    ).toBeInTheDocument();
  });

  it("renders inside a scroll container", () => {
    renderWithProviders(<Table />);

    expect(
      screen.getByRole("table").parentElement,
    ).toHaveClass("overflow-x-auto");
  });
});
