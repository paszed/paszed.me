import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { useLanguage } from "./use-language";
import { LanguageProvider } from "./language-provider";

function TestComponent() {
  const { locale } = useLanguage();

  return <span>{locale}</span>;
}

describe("LanguageProvider", () => {
  it("uses the default locale", () => {
    renderWithProviders(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(
      screen.getByText("en"),
    ).toBeInTheDocument();
  });

  it("accepts a custom default language", () => {
    renderWithProviders(
      <LanguageProvider defaultLanguage="de">
        <TestComponent />
      </LanguageProvider>,
    );

    expect(
      screen.getByText("de"),
    ).toBeInTheDocument();
  });
});
