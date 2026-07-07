import {
  FileText,
  FolderGit2,
  LayoutGrid,
} from "lucide-react";

import { groupSearchResults } from "../lib/group-search-results";
import type {
  SearchCategory,
  SearchItem,
} from "../types/search";

import { SearchEmpty } from "./search-empty";
import { SearchResult } from "./search-result";

interface SearchResultsProps {
  results: readonly SearchItem[];
  selectedIndex: number;
  query: string;
}

function CategoryIcon({
  category,
}: {
  category: SearchCategory;
}) {
  switch (category) {
    case "Project":
      return <FolderGit2 className="h-4 w-4" />;

    case "Article":
      return <FileText className="h-4 w-4" />;

    case "Page":
      return <LayoutGrid className="h-4 w-4" />;
  }
}

export function SearchResults({
  results,
  selectedIndex,
  query,
}: SearchResultsProps) {
  if (results.length === 0) {
    return <SearchEmpty />;
  }

  const groups = groupSearchResults(results);

  let currentIndex = 0;

  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <section key={group.category}>
          <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-fg-muted">
            <CategoryIcon category={group.category} />

            <span>{group.category}</span>
          </div>

          <ul className="space-y-3">
            {group.items.map((item) => {
              const selected =
                currentIndex === selectedIndex;

              currentIndex++;

              return (
                <SearchResult
                  key={item.id}
                  item={item}
                  selected={selected}
                  query={query}
                />
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
