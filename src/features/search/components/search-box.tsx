"use client";

import {
  useMemo,
  useState,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { useRouter } from "next/navigation";

import { Panel } from "@/components/ui";
import { useCommandPalette } from "@/features/search/context";
import {
  createSearchIndex,
  search,
} from "@/features/search";

import { SearchInput } from "./search-input";
import { SearchResults } from "./search-results";

interface SearchBoxProps {
  inputRef?: RefObject<HTMLInputElement | null>;
}

export function SearchBox({
  inputRef,
}: SearchBoxProps) {
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

  return (
    <Panel className="p-6">
      <SearchInput
        ref={inputRef}
        value={query}
        onChange={(value) => {
          setQuery(value);
          setSelectedIndex(0);
        }}
        onKeyDown={handleKeyDown}
      />

      <div className="mt-6">
        <SearchResults
          results={results}
          selectedIndex={selectedIndex}
          query={query}
        />
      </div>
    </Panel>
  );
}
