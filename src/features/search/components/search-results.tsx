import {
  ContentIcon,
  Eyebrow,
  List,
  Stack,
} from "@/design-system";

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

function getCategoryIcon(
  category: SearchCategory,
): "article" | "page" | "project" {
  switch (category) {
    case "Project":
      return "project";

    case "Article":
      return "article";

    case "Page":
      return "page";
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
    <Stack gap="lg">
      {groups.map((group) => (
        <Stack
          key={group.category}
          gap="sm"
        >
          <Eyebrow className="flex items-center gap-2 text-fg-muted">
            <ContentIcon
              name={getCategoryIcon(group.category)}
            />

            {group.category}
          </Eyebrow>

          <List gap="md">
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
          </List>
        </Stack>
      ))}
    </Stack>
  );
}
