import type { SearchItem } from "../types/search";

import { SearchEmpty } from "./search-empty";
import { SearchResult } from "./search-result";

interface SearchResultsProps {
  results: readonly SearchItem[];
}

export function SearchResults({
  results,
}: SearchResultsProps) {
  if (results.length === 0) {
    return <SearchEmpty />;
  }

  return (
    <ul className="space-y-3">
      {results.map((item) => (
        <SearchResult
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}
