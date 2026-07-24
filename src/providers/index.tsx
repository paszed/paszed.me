"use client";

import type { ReactNode } from "react";

import { CommandPaletteProvider } from "@/features/search";

import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({
  children,
}: ProvidersProps) {
  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        {children}
      </CommandPaletteProvider>
    </ThemeProvider>
  );
}
