import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { LanguageProvider } from "./language-provider";
import { useTranslations } from "./use-translations";

function TestComponent() {
  const translations = useTranslations();

  return (
    <span>
      {translations.common.home}
    </span>
  );
}

describe("useTranslations", () => {
  it("returns the current translations", () => {
    renderWithProviders(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(
      screen.getByText("Home"),
    ).toBeInTheDocument();
  });
});
