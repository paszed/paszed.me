import {
  EmptyState,
} from "@/design-system";

interface SearchEmptyProps {
  title: string;
  description: string;
}

export function SearchEmpty({
  title,
  description,
}: SearchEmptyProps) {
  return (
    <EmptyState
      title={title}
      description={description}
    />
  );
}
