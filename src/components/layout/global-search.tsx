"use client";

import { useEffect, useRef } from "react";

import {
  SearchBox,
  SearchDialog,
  useCommandPalette,
} from "@/features/search";

export function GlobalSearch() {
  const {
    open,
    setOpen,
  } = useCommandPalette();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
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
