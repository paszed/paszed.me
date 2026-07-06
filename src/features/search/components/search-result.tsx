import Link from "next/link";

import type { SearchItem } from "../types/search";

interface SearchResultProps {
  item: SearchItem;
}

export function SearchResult({
  item,
}: SearchResultProps) {
  return (
    <li>
      <Link
        href={item.href}
        className="block rounded-lg border border-border p-4 transition-colors hover:border-accent"
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
