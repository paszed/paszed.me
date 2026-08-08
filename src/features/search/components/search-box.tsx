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
  input: {
    placeholder: string;
    label: string;
  };

  empty: {
    title: string;
    description: string;
  };

  categories: {
    Project: string;
    Article: string;
    Page: string;
  };

  inputRef?: RefObject<HTMLInputElement | null>;
}

export function SearchBox({
  input,
  empty,
  categories,
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
      <Stack gap="lg">
        <SearchInput
          ref={inputRef}
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          ariaLabel={input.label}
          placeholder={input.placeholder}
        />

        <SearchResults
          results={results}
          selectedIndex={selectedIndex}
          query={query}
          empty={empty}
          categories={categories}
        />
      </Stack>
    </Panel>
  );
}
