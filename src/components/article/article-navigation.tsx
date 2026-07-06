import Link from "next/link";

import type { JournalEntry } from "@/types/journal";

interface ArticleNavigationProps {
  previous?: JournalEntry;
  next?: JournalEntry;
}

export function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="mt-24 border-t border-border pt-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          {previous && (
            <Link
              href={`/journal/${previous.slug}`}
              className="group block rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-fg-muted">
                Previous
              </p>

              <h3 className="font-serif text-xl font-semibold text-fg group-hover:text-accent">
                {previous.title}
              </h3>
            </Link>
          )}
        </div>

        <div className="text-left md:text-right">
          {next && (
            <Link
              href={`/journal/${next.slug}`}
              className="group block rounded-2xl border border-border p-6 transition-colors hover:border-accent"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-fg-muted">
                Next
              </p>

              <h3 className="font-serif text-xl font-semibold text-fg group-hover:text-accent">
                {next.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
