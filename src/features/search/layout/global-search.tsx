"use client";

import { useEffect, useRef } from "react";

import {
  SearchBox,
  SearchDialog,
} from "../components";
import { useCommandPaletteShortcuts } from "../hooks";

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
