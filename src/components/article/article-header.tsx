import {
  Eyebrow,
  H1,
  Text,
} from "@/components/ui";
import {
  formatDate,
  formatReadingTime,
} from "@/lib";
import type { JournalEntry } from "@/types/journal";

interface ArticleHeaderProps {
  article: JournalEntry;
}

export function ArticleHeader({
  article,
}: ArticleHeaderProps) {
  return (
    <header className="mb-20 space-y-6">
      <Eyebrow>{article.category}</Eyebrow>

      <H1>{article.title}</H1>

      <Text
        size="lg"
        muted
        className="max-w-2xl"
      >
        {article.description}
      </Text>

      <div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
        <span>{article.author}</span>

        <span>•</span>

        <span>{formatDate(article.publishedAt)}</span>

        <span>•</span>

        <span>
          {formatReadingTime(article.readingTimeMinutes)}
        </span>
      </div>
    </header>
  );
}
