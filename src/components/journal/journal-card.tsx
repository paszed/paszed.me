import {
  Card,
  Stack,
  Text,
  TextLink,
} from "@/components/ui";
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
    <Card variant="interactive">
      <Stack gap="lg">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-fg-muted">
          <span>{article.category}</span>

          <span>•</span>

          <span>{formatPublishedDate(article.publishedAt)}</span>

          <span>•</span>

          <span>{article.readingTime}</span>
        </div>

        <Stack gap="sm">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-fg">
            {article.title}
          </h2>

          <Text
            size="lg"
            muted
          >
            {article.description}
          </Text>
        </Stack>

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
          <TextLink href={`/journal/${article.slug}`}>
            Read article →
          </TextLink>
        ) : (
          <Text
            size="sm"
            muted
          >
            Draft
          </Text>
        )}
      </Stack>
    </Card>
  );
}
