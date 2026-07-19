"use client";

import type { RefObject } from "react";

import { Panel } from "@/design-system";
import { useSearchBox } from "@/features/search/hooks/use-search-box";

import { SearchInput } from "./search-input";
import { SearchResults } from "./search-results";

interface SearchBoxProps {
  inputRef?: RefObject<HTMLInputElement | null>;
}

export function SearchBox({
  inputRef,
}: SearchBoxProps) {
  const {
    query,
    results,
    selectedIndex,
    handleQueryChange,
    handleKeyDown,
  } = useSearchBox();

  return (
    <Panel className="p-6">
      <SearchInput
        ref={inputRef}
        value={query}
        onChange={handleQueryChange}
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
