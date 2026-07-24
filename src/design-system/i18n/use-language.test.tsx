import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/design-system/testing";

import { LanguageProvider } from "./language-provider";
import { useLanguage } from "./use-language";

function TestComponent() {
  const { locale } = useLanguage();

  return <span>{locale}</span>;
}

describe("useLanguage", () => {
  it("returns the current locale", () => {
    renderWithProviders(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(
      screen.getByText("en"),
    ).toBeInTheDocument();
  });

  it("throws when used outside LanguageProvider", () => {
    expect(() => {
      render(<TestComponent />);
    }).toThrow(
      "useLanguage must be used within a LanguageProvider.",
    );
  });
});
