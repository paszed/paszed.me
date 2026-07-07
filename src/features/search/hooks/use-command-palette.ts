"use client";

import { useEffect } from "react";

import { useCommandPalette as useCommandPaletteContext } from "@/features/search/context";

export function useCommandPalette() {
  const {
    open,
    setOpen,
    toggle,
  } = useCommandPaletteContext();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      console.log("keydown", {
        key: event.key,
        metaKey: event.metaKey,
        ctrlKey: event.ctrlKey,
      });

      const isShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (isShortcut) {
        console.log("Search shortcut detected");

        event.preventDefault();
        toggle();

        return;
      }

      if (event.key === "Escape") {
        console.log("Escape pressed");
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
