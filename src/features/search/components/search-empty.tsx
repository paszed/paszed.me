import {
  EmptyState,
} from "@/design-system";

export function SearchEmpty() {
  return (
    <EmptyState
      title="No results found"
      description="Try searching for a different term, project, article, or page."
    />
  );
}
