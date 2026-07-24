"use client";

import { useEffect } from "react";

import { useCommandPalette } from "../context";

export function useCommandPaletteShortcuts() {
  const {
    open,
    setOpen,
    toggle,
  } = useCommandPalette();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        toggle();

        return;
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
  }, [setOpen, toggle]);

  return {
    open,
    setOpen,
    toggle,
  };
}
