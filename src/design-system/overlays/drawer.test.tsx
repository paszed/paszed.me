import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "./drawer";

describe("DrawerHeader", () => {
  it("renders its children", () => {
    renderWithProviders(
      <DrawerHeader>
        <h2>Settings</h2>
      </DrawerHeader>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Settings",
      }),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <DrawerHeader data-testid="header" />,
    );

    expect(
      screen.getByTestId("header"),
    ).toHaveClass(
      "flex",
      "flex-col",
      "space-y-2",
      "p-6",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <DrawerHeader
        data-testid="header"
        className="border-b"
      />,
    );

    expect(
      screen.getByTestId("header"),
    ).toHaveClass("border-b");
  });
});

describe("DrawerBody", () => {
  it("renders its children", () => {
    renderWithProviders(
      <DrawerBody>
        <p>Drawer content</p>
      </DrawerBody>,
    );

    expect(
      screen.getByText("Drawer content"),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <DrawerBody data-testid="body" />,
    );

    expect(
      screen.getByTestId("body"),
    ).toHaveClass(
      "flex-1",
      "overflow-y-auto",
      "p-6",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <DrawerBody
        data-testid="body"
        className="bg-muted"
      />,
    );

    expect(
      screen.getByTestId("body"),
    ).toHaveClass("bg-muted");
  });
});

describe("DrawerFooter", () => {
  it("renders its children", () => {
    renderWithProviders(
      <DrawerFooter>
        <button>Save</button>
      </DrawerFooter>,
    );

    expect(
      screen.getByRole("button", {
        name: "Save",
      }),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <DrawerFooter data-testid="footer" />,
    );

    expect(
      screen.getByTestId("footer"),
    ).toHaveClass(
      "flex",
      "items-center",
      "justify-end",
      "gap-2",
      "border-t",
      "p-6",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <DrawerFooter
        data-testid="footer"
        className="bg-card"
      />,
    );

    expect(
      screen.getByTestId("footer"),
    ).toHaveClass("bg-card");
  });
});

describe("DrawerContent", () => {
  it.each([
    [
      "right",
      "right-0",
      "border-l",
    ],
    [
      "left",
      "left-0",
      "border-r",
    ],
    [
      "top",
      "top-0",
      "border-b",
    ],
    [
      "bottom",
      "bottom-0",
      "border-t",
    ],
  ] as const)(
    "applies the %s side classes",
    (side, ...expectedClasses) => {
      renderWithProviders(
        <Drawer open>
          <DrawerContent side={side}>
            Content
          </DrawerContent>
        </Drawer>,
      );

      const dialog = screen.getByRole("dialog");

      expect(dialog).toHaveClass(...expectedClasses);
    },
  );

  it("renders a close button", () => {
    renderWithProviders(
      <Drawer open>
        <DrawerContent>
          Content
        </DrawerContent>
      </Drawer>,
    );

    expect(
      screen.getByRole("button", {
        name: "Close",
      }),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Drawer open>
        <DrawerContent className="rounded-l-xl">
          Content
        </DrawerContent>
      </Drawer>,
    );

    expect(
      screen.getByRole("dialog"),
    ).toHaveClass("rounded-l-xl");
  });
});
