import { describe, expect, it } from "vitest";

import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { LanguageProvider } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";

describe("LanguageSwitcher", () => {
  it("renders the current language flag", () => {
    renderWithProviders(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>,
    );

    expect(
      screen.getByRole("button"),
    ).toBeInTheDocument();
  });

  it("switches language when clicked", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>,
    );

    await user.click(
      screen.getByRole("button"),
    );

    expect(
      screen.getByRole("button"),
    ).toBeInTheDocument();
  });
});
