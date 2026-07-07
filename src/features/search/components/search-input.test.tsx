import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SearchInput } from "./search-input";

describe("SearchInput", () => {
  it("renders the search input", () => {
    render(
      <SearchInput
        value=""
        onChange={() => {}}
      />,
    );

    expect(
      screen.getByPlaceholderText(
        "Search articles, projects, and pages...",
      ),
    ).toBeInTheDocument();
  });

  it("displays the current value", () => {
    render(
      <SearchInput
        value="nextjs"
        onChange={() => {}}
      />,
    );

    expect(
      screen.getByDisplayValue("nextjs"),
    ).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const onChange = vi.fn();

    render(
      <SearchInput
        value=""
        onChange={onChange}
      />,
    );

    fireEvent.change(
      screen.getByRole("searchbox"),
      {
        target: {
          value: "react",
        },
      },
    );

    expect(onChange).toHaveBeenCalledWith(
      "react",
    );
  });

  it("calls onKeyDown", () => {
    const onKeyDown = vi.fn();

    render(
      <SearchInput
        value=""
        onChange={() => {}}
        onKeyDown={onKeyDown}
      />,
    );

    fireEvent.keyDown(
      screen.getByRole("searchbox"),
      {
        key: "ArrowDown",
      },
    );

    expect(onKeyDown).toHaveBeenCalledOnce();
  });

  it("forwards the ref", () => {
    const ref =
      { current: null } as React.RefObject<HTMLInputElement>;

    render(
      <SearchInput
        ref={ref}
        value=""
        onChange={() => {}}
      />,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLInputElement,
    );
  });
});
