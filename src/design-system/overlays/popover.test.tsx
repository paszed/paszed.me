import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
  waitFor,
} from "@/design-system/testing";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";

describe("Popover", () => {
  it("is closed by default", () => {
    renderWithProviders(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>,
    );

    expect(
      screen.queryByText("Popover content"),
    ).not.toBeInTheDocument();
  });

  it("opens when the trigger is clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open",
      }),
    );

    expect(
      screen.getByText("Popover content"),
    ).toBeInTheDocument();
  });

  it("closes when the trigger is clicked again", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByRole("button", {
      name: "Open",
    });

    await user.click(trigger);

    expect(
      screen.getByText("Popover content"),
    ).toBeInTheDocument();

    await user.click(trigger);

    await waitFor(() =>
      expect(
        screen.queryByText("Popover content"),
      ).not.toBeInTheDocument(),
    );
  });

  it("closes when Escape is pressed", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>,
    );

    await user.click(screen.getByText("Open"));

    expect(
      screen.getByText("Popover content"),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() =>
      expect(
        screen.queryByText("Popover content"),
      ).not.toBeInTheDocument(),
    );
  });

  it("restores focus to the trigger after closing", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByRole("button", {
      name: "Open",
    });

    await user.click(trigger);
    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it("supports interactive content", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>

        <PopoverContent>
          <button type="button">
            Save
          </button>
        </PopoverContent>
      </Popover>,
    );

    await user.click(screen.getByText("Open"));

    expect(
      screen.getByRole("button", {
        name: "Save",
      }),
    ).toBeInTheDocument();
  });
});
