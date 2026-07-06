"use client";

import { useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

import { Panel } from "@/components/ui";
import {
  createSearchIndex,
  search,
} from "@/features/search";

import { SearchInput } from "./search-input";
import { SearchResults } from "./search-results";

export function SearchBox() {
  const router = useRouter();

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
          router.push(selected.href);
        }

        break;
      }
    }
  }

  return (
    <Panel className="p-6">
      <SearchInput
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
        />
      </div>
    </Panel>
  );
}
