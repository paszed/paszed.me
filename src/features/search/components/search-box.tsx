"use client";

import { useMemo, useState } from "react";

import { Panel } from "@/components/ui";
import {
  createSearchIndex,
  search,
} from "@/features/search";

import { SearchInput } from "./search-input";
import { SearchResults } from "./search-results";

export function SearchBox() {
  const [query, setQuery] = useState("");

  const index = useMemo(
    () => createSearchIndex(),
    [],
  );

  const results = useMemo(
    () => search(index, query),
    [index, query],
  );

  return (
    <Panel className="p-6">
      <SearchInput
        value={query}
        onChange={setQuery}
      />

      <div className="mt-6">
        <SearchResults results={results} />
      </div>
    </Panel>
  );
}
