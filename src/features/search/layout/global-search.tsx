"use client";

import {
  useEffect,
  useRef,
} from "react";

import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/routing";

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

  const content = getDictionary(
    getLocale(),
  );

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
      <SearchBox
        inputRef={inputRef}
        input={content.search.input}
        empty={content.search.empty}
        categories={content.search.categories}
      />
    </SearchDialog>
  );
}
