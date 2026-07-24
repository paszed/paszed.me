import type { PropsWithChildren, ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";

import { ThemeProvider } from "@/design-system/providers/theme-provider";

function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

/**
 * Renders a component wrapped in the design system providers.
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
}

export * from "@testing-library/react";
