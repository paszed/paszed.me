import type { SearchItem } from "../types/search";

import { SearchEmpty } from "./search-empty";
import { SearchResult } from "./search-result";

interface SearchResultsProps {
  results: readonly SearchItem[];
  selectedIndex: number;
}

export function SearchResults({
  results,
  selectedIndex,
}: SearchResultsProps) {
  if (results.length === 0) {
    return <SearchEmpty />;
  }

  return (
    <ul className="space-y-3">
      {results.map((item, index) => (
        <SearchResult
          key={item.id}
          item={item}
          selected={index === selectedIndex}
        />
      ))}
    </ul>
  );
}
