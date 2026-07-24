"use client";

import {
  useMemo,
  useState,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";

import { useCommandPalette } from "@/features/search/context";


import { createSearchIndex } from "@/services/search-index";

import { search } from "../lib/search";

export function useSearchBox() {
  const router = useRouter();
  const { setOpen } = useCommandPalette();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const index = useMemo(
    () => createSearchIndex(),
    [],
  );

  const results = useMemo(
    () => search(index, query),
    [index, query],
  );

  function handleQueryChange(value: string) {
    setQuery(value);
    setSelectedIndex(0);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>,
  ) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        if (results.length === 0) {
          return;
        }

        setSelectedIndex((index) =>
          Math.min(index + 1, results.length - 1),
        );

        break;

      case "ArrowUp":
        event.preventDefault();

        if (results.length === 0) {
          return;
        }

        setSelectedIndex((index) =>
          Math.max(index - 1, 0),
        );

        break;

      case "Enter": {
        event.preventDefault();

        const selected = results[selectedIndex];

        if (selected) {
          setOpen(false);
          router.push(selected.href);
        }

        break;
      }
    }
  }

  return {
    query,
    results,
    selectedIndex,
    handleQueryChange,
    handleKeyDown,
  };
}
