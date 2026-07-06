import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { JournalEntry } from "@/types/journal";

interface JournalCardProps {
  article: JournalEntry;
}

function formatPublishedDate(
  date: Date | null,
): string {
  if (!date) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function JournalCard({
  article,
}: JournalCardProps) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-fg-muted">
          <span>{article.category}</span>

          <span>•</span>

          <span>{formatPublishedDate(article.publishedAt)}</span>

          <span>•</span>

          <span>{article.readingTime}</span>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-fg">
            {article.title}
          </h2>

          <p className="text-lg leading-8 text-fg-secondary">
            {article.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {article.published ? (
          <Link
            href={`/journal/${article.slug}`}
            className="inline-flex items-center font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read article →
          </Link>
        ) : (
          <span className="text-sm text-fg-muted">
            Draft
          </span>
        )}
      </div>
    </Card>
  );
}
