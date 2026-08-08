import {
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

  empty: {
    title: string;
    description: string;
  };

  categories: {
    Project: string;
    Article: string;
    Page: string;
  };
}

function getCategoryLabel(
  category: SearchCategory,
  labels: SearchResultsProps["categories"],
) {
  return labels[category];
}

export function SearchResults({
  results,
  selectedIndex,
  query,
  empty,
  categories,
}: SearchResultsProps) {
  if (results.length === 0 && query) {
    return (
      <SearchEmpty
        title={empty.title}
        description={
          empty.description
        }
      />
    );
  }

  if (results.length === 0) {
    return null;
  }

  const groups = groupSearchResults(results);

  let currentIndex = 0;

  return (
    <Stack gap="xl">
      {groups.map((group) => (
        <Stack
          key={group.category}
          gap="md"
        >
          <Eyebrow>
            {getCategoryLabel(
              group.category,
              categories,
            )}
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
