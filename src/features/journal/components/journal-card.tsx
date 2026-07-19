import {
  Badge,
  Card,
  Stack,
  Text,
  TextLink,
} from "@/design-system";
import {
  formatDate,
  formatReadingTime,
} from "@/lib";
import type { JournalEntry } from "@/types/journal";

interface JournalCardProps {
  article: JournalEntry;
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

          <span>
            {article.publishedAt
              ? formatDate(article.publishedAt)
              : "Draft"}
          </span>

          <span>•</span>

          <span>
            {formatReadingTime(
              article.readingTimeMinutes,
            )}
          </span>
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
            <Badge key={tag}>{tag}</Badge>
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
