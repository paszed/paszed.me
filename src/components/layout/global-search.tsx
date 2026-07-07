"use client";

import { useEffect, useRef } from "react";

import { SearchBox } from "@/features/search";
import { SearchDialog } from "@/features/search";
import { useCommandPaletteShortcuts } from "@/features/search/hooks/use-command-palette-shortcuts";

export function GlobalSearch() {
  const {
    open,
    setOpen,
  } = useCommandPaletteShortcuts();

  const inputRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [open]);

  return (
    <SearchDialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <SearchBox inputRef={inputRef} />
    </SearchDialog>
  );
}
