"use client";

import { useEffect, useRef } from "react";

import { SearchBox } from "@/features/search";
import { SearchDialog } from "@/features/search";
import { useCommandPalette } from "@/features/search/context";

export function GlobalSearch() {
  const {
    open,
    setOpen,
  } = useCommandPalette();

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
