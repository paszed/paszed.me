import type { ReactNode } from "react";

import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";

function ToastHarness({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ToastProvider>
      {children}
      <ToastViewport />
    </ToastProvider>
  );
}

describe("ToastViewport", () => {
  it("applies the default classes", () => {
    renderWithProviders(
      <ToastProvider>
        <ToastViewport data-testid="viewport" />
      </ToastProvider>,
    );

    expect(
      screen.getByTestId("viewport"),
    ).toHaveClass(
      "fixed",
      "bottom-0",
      "right-0",
      "z-50",
      "flex",
      "max-h-screen",
      "w-full",
      "flex-col",
      "gap-2",
      "p-4",
      "sm:max-w-sm",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ToastProvider>
        <ToastViewport
          data-testid="viewport"
          className="left-0"
        />
      </ToastProvider>,
    );

    expect(
      screen.getByTestId("viewport"),
    ).toHaveClass("left-0");
  });
});

describe("Toast", () => {
  it("renders its children", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast open>
          <ToastTitle>Success</ToastTitle>
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByText("Success"),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast
          open
          data-testid="toast"
        >
          Toast
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByTestId("toast"),
    ).toHaveClass(
      "group",
      "relative",
      "flex",
      "w-full",
      "items-center",
      "justify-between",
      "gap-4",
      "overflow-hidden",
      "rounded-lg",
      "border",
      "border-border",
      "bg-background",
      "p-4",
      "shadow-lg",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast
          open
          data-testid="toast"
          className="ring-2"
        >
          Toast
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByTestId("toast"),
    ).toHaveClass("ring-2");
  });
});

describe("ToastTitle", () => {
  it("renders its children", () => {
    renderWithProviders(
      <ToastTitle>
        Saved successfully
      </ToastTitle>,
    );

    expect(
      screen.getByText(
        "Saved successfully",
      ),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <ToastTitle data-testid="title">
        Title
      </ToastTitle>,
    );

    expect(
      screen.getByTestId("title"),
    ).toHaveClass("font-semibold");
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ToastTitle
        data-testid="title"
        className="text-primary"
      >
        Title
      </ToastTitle>,
    );

    expect(
      screen.getByTestId("title"),
    ).toHaveClass("text-primary");
  });
});

describe("ToastDescription", () => {
  it("renders its children", () => {
    renderWithProviders(
      <ToastDescription>
        Your changes have been saved.
      </ToastDescription>,
    );

    expect(
      screen.getByText(
        "Your changes have been saved.",
      ),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <ToastDescription data-testid="description">
        Description
      </ToastDescription>,
    );

    expect(
      screen.getByTestId("description"),
    ).toHaveClass(
      "text-sm",
      "text-muted-foreground",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ToastDescription
        data-testid="description"
        className="italic"
      >
        Description
      </ToastDescription>,
    );

    expect(
      screen.getByTestId("description"),
    ).toHaveClass("italic");
  });
});

describe("ToastClose", () => {
  it("renders an accessible close button", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast open>
          <ToastClose />
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByRole("button", {
        name: "Close",
      }),
    ).toBeInTheDocument();
  });

  it("applies the default classes", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast open>
          <ToastClose data-testid="close" />
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByTestId("close"),
    ).toHaveClass(
      "rounded-md",
      "p-1",
      "opacity-70",
    );
  });

  it("renders the toast-close attribute", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast open>
          <ToastClose data-testid="close" />
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByTestId("close"),
    ).toHaveAttribute(
      "toast-close",
      "",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <ToastHarness>
        <Toast open>
          <ToastClose
            data-testid="close"
            className="bg-muted"
          />
        </Toast>
      </ToastHarness>,
    );

    expect(
      screen.getByTestId("close"),
    ).toHaveClass("bg-muted");
  });
});
