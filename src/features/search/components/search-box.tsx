"use client";

import type { RefObject } from "react";

import {
  Panel,
  Stack,
} from "@/design-system";

import { useSearchBox } from "../hooks/use-search-box";

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
    <Panel>
      <Stack gap="md">
        <SearchInput
          ref={inputRef}
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
        />

        <SearchResults
          results={results}
          selectedIndex={selectedIndex}
          query={query}
        />
      </Stack>
    </Panel>
  );
}
