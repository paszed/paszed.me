import Link from "next/link";

import { cn } from "@/lib/utils";

import { highlightMatch } from "../lib/highlight-match";
import type { SearchItem } from "../types/search";

interface SearchResultProps {
  item: SearchItem;
  selected: boolean;
  query: string;
}

export function SearchResult({
  item,
  selected,
  query,
}: SearchResultProps) {
  const title = highlightMatch(
    item.title,
    query,
  );

  const description = highlightMatch(
    item.description,
    query,
  );

  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "block rounded-lg border border-border p-4 transition-colors",
          selected
            ? "border-accent bg-surface"
            : "hover:border-accent",
        )}
      >
        <div className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {item.category}
        </div>

        <h3 className="font-semibold text-fg">
          {title.map((part, index) => (
            <span
              key={index}
              className={
                part.highlighted
                  ? "rounded bg-accent/15 text-accent"
                  : undefined
              }
            >
              {part.text}
            </span>
          ))}
        </h3>

        <p className="mt-1 text-sm text-fg-secondary">
          {description.map((part, index) => (
            <span
              key={index}
              className={
                part.highlighted
                  ? "rounded bg-accent/15 text-accent"
                  : undefined
              }
            >
              {part.text}
            </span>
          ))}
        </p>
      </Link>
    </li>
  );
}
