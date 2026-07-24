import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Prose } from "./prose";

describe("Prose", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Prose>
        <p>Hello world</p>
      </Prose>,
    );

    expect(
      screen.getByText("Hello world"),
    ).toBeInTheDocument();
  });

  it("renders a div element", () => {
    renderWithProviders(
      <Prose data-testid="prose" />,
    );

    expect(
      screen.getByTestId("prose").tagName,
    ).toBe("DIV");
  });

  it("applies the base typography classes", () => {
    renderWithProviders(
      <Prose data-testid="prose" />,
    );

    expect(
      screen.getByTestId("prose"),
    ).toHaveClass(
      "font-serif",
      "text-lg",
      "leading-9",
      "text-fg-secondary",
    );
  });

  it("includes prose styling for common elements", () => {
    renderWithProviders(
      <Prose data-testid="prose" />,
    );

    const prose = screen.getByTestId("prose");

    expect(prose).toHaveClass(
      "[&>*+*]:mt-8",
      "[&_p]:leading-9",
      "[&_h2]:text-3xl",
      "[&_h3]:text-2xl",
      "[&_a]:underline",
      "[&_ul]:list-disc",
      "[&_ol]:list-decimal",
      "[&_blockquote]:italic",
      "[&_pre]:rounded-2xl",
      "[&_table]:w-full",
      "[&_img]:rounded-2xl",
      "[&_strong]:font-semibold",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Prose
        data-testid="prose"
        className="max-w-none"
      />,
    );

    expect(
      screen.getByTestId("prose"),
    ).toHaveClass(
      "max-w-none",
      "font-serif",
      "text-lg",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Prose
        data-testid="prose"
        id="article"
        aria-label="Article content"
      />,
    );

    const prose = screen.getByTestId("prose");

    expect(prose).toHaveAttribute(
      "id",
      "article",
    );

    expect(prose).toHaveAttribute(
      "aria-label",
      "Article content",
    );
  });
});
