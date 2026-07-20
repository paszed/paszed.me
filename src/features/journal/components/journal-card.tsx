import {
  Badge,
  Card,
  Cluster,
  Heading,
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
        <Cluster
          gap="sm"
          className="text-xs font-medium uppercase tracking-[0.3em] text-fg-muted"
        >
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
        </Cluster>

        <Stack gap="sm">
          <Heading as="h2">
            {article.title}
          </Heading>

          <Text
            size="lg"
            muted
          >
            {article.description}
          </Text>
        </Stack>

        <Cluster gap="sm">
          {article.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Cluster>

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
