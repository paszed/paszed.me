

import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "./table";

describe("Table", () => {
  it("renders the complete table composition", () => {
    renderWithProviders(
      <Table data-testid="table">
        <thead>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </thead>

        <TableBody data-testid="body">
          <TableRow data-testid="row">
            <TableCell data-testid="cell">
              Edvard
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(
      screen.getByTestId("table"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("body"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("row"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", {
        name: "Name",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("cell"),
    ).toHaveTextContent("Edvard");
  });

  it("renders inside a scroll container", () => {
    renderWithProviders(<Table />);

    expect(
      screen.getByRole("table").parentElement,
    ).toHaveClass("overflow-x-auto");
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Table className="table-class">
        <TableBody>
          <TableRow className="row-class">
            <TableCell className="cell-class">
              Value
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(
      screen.getByRole("table"),
    ).toHaveClass("table-class");

    expect(
      screen.getByRole("row"),
    ).toHaveClass("row-class");

    expect(
      screen.getByRole("cell"),
    ).toHaveClass("cell-class");
  });

  it("merges custom class names on table heads", () => {
    renderWithProviders(
      <Table>
        <thead>
          <TableRow>
            <TableHead className="head-class">
              Name
            </TableHead>
          </TableRow>
        </thead>
      </Table>,
    );

    expect(
      screen.getByRole("columnheader"),
    ).toHaveClass("head-class");
  });

  it("forwards native props", () => {
    renderWithProviders(
      <Table aria-label="People">
        <TableBody data-testid="body">
          <TableRow data-testid="row">
            <TableCell data-testid="cell">
              Edvard
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(
      screen.getByRole("table", {
        name: "People",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("body"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("row"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("cell"),
    ).toBeInTheDocument();
  });
});
