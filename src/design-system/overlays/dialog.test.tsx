import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
  waitFor,
} from "@/design-system/testing";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("Dialog", () => {
  it("is closed by default", () => {
    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>Settings</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    expect(
      screen.queryByRole("dialog"),
    ).not.toBeInTheDocument();
  });

  it("opens when the trigger is clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>Settings</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open",
      }),
    );

    expect(
      screen.getByRole("dialog"),
    ).toBeInTheDocument();
  });

  it("renders title and description", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>Settings</DialogTitle>

          <DialogDescription>
            Manage your account preferences.
          </DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open",
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: "Settings",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Manage your account preferences.",
      ),
    ).toBeInTheDocument();
  });

  it("closes when the close button is clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>Settings</DialogTitle>

          <DialogClose>Done</DialogClose>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open",
      }),
    );

    expect(
      screen.getByRole("dialog"),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: "Done",
      }),
    );

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog"),
      ).not.toBeInTheDocument();
    });
  });

  it("closes when Escape is pressed", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>Settings</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open",
      }),
    );

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog"),
      ).not.toBeInTheDocument();
    });
  });

  it("restores focus to the trigger after closing", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>Settings</DialogTitle>

          <DialogClose>Done</DialogClose>
        </DialogContent>
      </Dialog>,
    );

    const trigger = screen.getByRole("button", {
      name: "Open",
    });

    await user.click(trigger);

    await user.click(
      screen.getByRole("button", {
        name: "Done",
      }),
    );

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  it("sets the correct accessible name", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>

        <DialogContent>
          <DialogTitle>
            Account Settings
          </DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Open",
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: "Account Settings",
      }),
    ).toBeInTheDocument();
  });

  it("renders and styles the overlay", () => {
    renderWithProviders(
      <Dialog open>
        <DialogOverlay
          data-testid="overlay"
          className="custom-overlay"
        />
      </Dialog>,
    );

    expect(
      screen.getByTestId("overlay"),
    ).toHaveClass(
      "fixed",
      "inset-0",
      "z-50",
      "bg-black/50",
      "backdrop-blur-sm",
      "custom-overlay",
    );
  });

  it("merges custom classes into content", () => {
    renderWithProviders(
      <Dialog open>
        <DialogContent
          data-testid="content"
          className="custom-content"
        >
          <DialogTitle>Settings</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    expect(
      screen.getByTestId("content"),
    ).toHaveClass("custom-content");
  });

  it("renders and styles the header", () => {
    renderWithProviders(
      <DialogHeader
        data-testid="header"
        className="custom-header"
      >
        Header
      </DialogHeader>,
    );

    expect(
      screen.getByTestId("header"),
    ).toHaveClass(
      "flex",
      "flex-col",
      "space-y-2",
      "text-center",
      "sm:text-left",
      "custom-header",
    );
  });

  it("renders and styles the footer", () => {
    renderWithProviders(
      <DialogFooter
        data-testid="footer"
        className="custom-footer"
      >
        Footer
      </DialogFooter>,
    );

    expect(
      screen.getByTestId("footer"),
    ).toHaveClass(
      "mt-6",
      "flex",
      "flex-col-reverse",
      "gap-2",
      "sm:flex-row",
      "sm:justify-end",
      "custom-footer",
    );
  });

  it("merges custom classes into the title", () => {
    renderWithProviders(
      <Dialog open>
        <DialogContent>
          <DialogTitle
            data-testid="title"
            className="custom-title"
          >
            Settings
          </DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    expect(
      screen.getByTestId("title"),
    ).toHaveClass(
      "text-lg",
      "font-semibold",
      "custom-title",
    );
  });

  it("merges custom classes into the description", () => {
    renderWithProviders(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Settings</DialogTitle>

          <DialogDescription
            data-testid="description"
            className="custom-description"
          >
            Description
          </DialogDescription>
        </DialogContent>
      </Dialog>,
    );

    expect(
      screen.getByTestId("description"),
    ).toHaveClass(
      "text-sm",
      "text-muted-foreground",
      "custom-description",
    );
  });
});
