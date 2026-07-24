import type { ReactNode } from "react";

import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

function MenuHarness({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DropdownMenu open>
      <DropdownMenuTrigger>
        Open
      </DropdownMenuTrigger>

      <DropdownMenuContent forceMount>
        {children}
      </DropdownMenuContent>
[118;1:3u    </DropdownMenu>
  );
}

describe("DropdownMenuContent", () => {
  it("renders with default classes", () => {
    renderWithProviders(
      <DropdownMenu open>
        <DropdownMenuTrigger>
          Open
        </DropdownMenuTrigger>

        <DropdownMenuContent
          data-testid="content"
          forceMount
        />
      </DropdownMenu>,
    );

    expect(
      screen.getByTestId("content"),
    ).toHaveClass(
      "z-50",
      "min-w-[8rem]",
      "overflow-hidden",
      "rounded-xl",
      "border",
      "bg-background",
      "p-1",
      "text-foreground",
      "shadow-lg",
    );
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <DropdownMenu open>
        <DropdownMenuTrigger>
          Open
        </DropdownMenuTrigger>

        <DropdownMenuContent
          data-testid="content"
          className="custom-content"
          forceMount
        />
      </DropdownMenu>,
    );

    expect(
      screen.getByTestId("content"),
    ).toHaveClass("custom-content");
  });

  it("accepts a custom side offset", () => {
    renderWithProviders(
      <DropdownMenu open>
        <DropdownMenuTrigger>
          Open
        </DropdownMenuTrigger>

        <DropdownMenuContent
          data-testid="content"
          sideOffset={12}
          forceMount
        />
      </DropdownMenu>,
    );

    expect(
      screen.getByTestId("content"),
    ).toBeInTheDocument();
  });
});

describe("DropdownMenuItem", () => {
  it("renders children", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>
      </MenuHarness>,
    );

    expect(
      screen.getByText("Profile"),
    ).toBeInTheDocument();
  });

  it("applies default classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuItem data-testid="item">
          Profile
        </DropdownMenuItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("item"),
    ).toHaveClass(
      "relative",
      "flex",
      "cursor-default",
      "select-none",
      "items-center",
      "rounded-md",
      "px-2",
      "py-2",
      "text-sm",
      "outline-none",
      "transition-colors",
    );
  });

  it("supports inset", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuItem
          data-testid="item"
          inset
        >
          Profile
        </DropdownMenuItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("item"),
    ).toHaveClass("pl-8");
  });

  it("covers the non-inset branch", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuItem
          data-testid="item"
          inset={false}
        >
          Profile
        </DropdownMenuItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("item"),
    ).not.toHaveClass("pl-8");
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuItem
          data-testid="item"
          className="custom-item"
        >
          Profile
        </DropdownMenuItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("item"),
    ).toHaveClass("custom-item");
  });
});

describe("DropdownMenuCheckboxItem", () => {
  it("renders a checked item", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuCheckboxItem
          data-testid="checkbox"
          checked
        >
          Notifications
        </DropdownMenuCheckboxItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("checkbox"),
    ).toHaveAttribute(
      "data-state",
      "checked",
    );

    expect(
      screen.getByText("Notifications"),
    ).toBeInTheDocument();
  });

  it("renders an unchecked item", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuCheckboxItem
          data-testid="checkbox"
          checked={false}
        >
          Notifications
        </DropdownMenuCheckboxItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("checkbox"),
    ).toHaveAttribute(
      "data-state",
      "unchecked",
    );
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuCheckboxItem
          data-testid="checkbox"
          className="custom-checkbox"
        >
          Notifications
        </DropdownMenuCheckboxItem>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("checkbox"),
    ).toHaveClass("custom-checkbox");
  });
});

describe("DropdownMenuRadioItem", () => {
  it("renders a checked radio item", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuRadioGroup value="system">
          <DropdownMenuRadioItem
            data-testid="radio"
            value="system"
          >
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("radio"),
    ).toHaveAttribute(
      "data-state",
      "checked",
    );

    expect(
      screen.getByText("System"),
    ).toBeInTheDocument();
  });

  it("renders an unchecked radio item", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuRadioGroup value="light">
          <DropdownMenuRadioItem
            data-testid="radio"
            value="dark"
          >
            Dark
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("radio"),
    ).toHaveAttribute(
      "data-state",
      "unchecked",
    );
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuRadioGroup value="system">
          <DropdownMenuRadioItem
            data-testid="radio"
            value="system"
            className="custom-radio"
          >
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("radio"),
    ).toHaveClass("custom-radio");
  });
});

describe("DropdownMenuLabel", () => {
  it("renders its children", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuLabel>
          Account
        </DropdownMenuLabel>
      </MenuHarness>,
    );

    expect(
      screen.getByText("Account"),
    ).toBeInTheDocument();
  });

  it("applies default classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuLabel data-testid="label">
          Account
        </DropdownMenuLabel>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("label"),
    ).toHaveClass(
      "px-2",
      "py-1.5",
      "text-sm",
      "font-semibold",
    );
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuLabel
          data-testid="label"
          className="custom-label"
        >
          Account
        </DropdownMenuLabel>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("label"),
    ).toHaveClass("custom-label");
  });
});

describe("DropdownMenuSeparator", () => {
  it("renders the separator", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSeparator
          data-testid="separator"
        />
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("separator"),
    ).toBeInTheDocument();
  });

  it("applies default classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSeparator
          data-testid="separator"
        />
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("separator"),
    ).toHaveClass(
      "-mx-1",
      "my-1",
      "h-px",
      "bg-border",
    );
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSeparator
          data-testid="separator"
          className="custom-separator"
        />
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("separator"),
    ).toHaveClass("custom-separator");
  });
});

describe("DropdownMenuGroup", () => {
  it("renders grouped items", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </MenuHarness>,
    );

    expect(
      screen.getByText("Profile"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Settings"),
    ).toBeInTheDocument();
  });
});

describe("DropdownMenuSubTrigger", () => {
  it("renders its children", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            More
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen.getByText("More"),
    ).toBeInTheDocument();
  });

  it("supports inset", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            data-testid="trigger"
            inset
          >
            More
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("trigger"),
    ).toHaveClass("pl-8");
  });

  it("covers the non-inset branch", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            data-testid="trigger"
            inset={false}
          >
            More
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("trigger"),
    ).not.toHaveClass("pl-8");
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            data-testid="trigger"
            className="custom-trigger"
          >
            More
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("trigger"),
    ).toHaveClass("custom-trigger");
  });

  it("renders the chevron", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            data-testid="trigger"
          >
            More
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen
        .getByTestId("trigger")
        .querySelector("svg"),
    ).toBeInTheDocument();
  });
});

describe("DropdownMenuSubContent", () => {
  it("renders with default classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub open>
          <DropdownMenuSubTrigger>
            More
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent
            data-testid="sub-content"
            forceMount
          >
            <DropdownMenuItem>
              Nested item
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("sub-content"),
    ).toHaveClass(
      "z-50",
      "min-w-[8rem]",
      "overflow-hidden",
      "rounded-xl",
      "border",
      "bg-background",
      "p-1",
      "shadow-lg",
    );

    expect(
      screen.getByText("Nested item"),
    ).toBeInTheDocument();
  });

  it("merges custom classes", () => {
    renderWithProviders(
      <MenuHarness>
        <DropdownMenuSub open>
          <DropdownMenuSubTrigger>
            More
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent
            data-testid="sub-content"
            className="custom-sub-content"
            forceMount
          >
            Nested
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </MenuHarness>,
    );

    expect(
      screen.getByTestId("sub-content"),
    ).toHaveClass("custom-sub-content");
  });
});
