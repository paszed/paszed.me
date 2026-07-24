import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

describe("Tooltip", () => {
  it("does not render the tooltip initially", () => {
    renderWithProviders(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>

          <TooltipContent>
            Helpful information
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(
      screen.queryByRole("tooltip"),
    ).not.toBeInTheDocument();
  });

  it("shows the tooltip on hover", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>

          <TooltipContent>
            Helpful information
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    await user.hover(
      screen.getByRole("button", {
        name: "Hover me",
      }),
    );

    expect(
      screen.getByRole("tooltip"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Helpful information"),
    ).toBeInTheDocument();
  });

  it("hides the tooltip when closed", () => {
    const { rerender } = renderWithProviders(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Hover me</TooltipTrigger>

          <TooltipContent>
            Helpful information
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(
      screen.getByRole("tooltip"),
    ).toBeInTheDocument();

    rerender(
      <TooltipProvider>
        <Tooltip open={false}>
          <TooltipTrigger>Hover me</TooltipTrigger>

          <TooltipContent>
            Helpful information
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(
      screen.queryByRole("tooltip"),
    ).not.toBeInTheDocument();
  });

  it("shows the tooltip when the trigger receives focus", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>

          <TooltipContent>
            Helpful information
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    await user.tab();

    expect(
      screen.getByRole("tooltip"),
    ).toBeInTheDocument();
  });
});
