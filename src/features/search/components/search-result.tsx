import Link from "next/link";

import { cn } from "@/lib/utils";

import type { SearchItem } from "../types/search";

interface SearchResultProps {
  item: SearchItem;
  selected: boolean;
}

export function SearchResult({
  item,
  selected,
}: SearchResultProps) {
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
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-fg-secondary">
          {item.description}
        </p>
      </Link>
    </li>
  );
}
