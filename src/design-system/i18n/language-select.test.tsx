import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { LanguageProvider } from "./language-provider";
import { LanguageSelect } from "./language-select";

describe("LanguageSelect", () => {
  it("renders the current language", () => {
    renderWithProviders(
      <LanguageProvider>
        <LanguageSelect />
      </LanguageProvider>,
    );

    expect(
      screen.getByRole("button"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("combobox"),
    ).toHaveValue("en");
  });

  it("cycles through languages", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <LanguageProvider>
        <LanguageSelect />
      </LanguageProvider>,
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(
      screen.getByRole("combobox"),
    ).not.toHaveValue("en");
  });

  it("changes language through the native select", async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <LanguageProvider>
        <LanguageSelect />
      </LanguageProvider>,
    );

    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "de");

    expect(select).toHaveValue("de");
  });
});
