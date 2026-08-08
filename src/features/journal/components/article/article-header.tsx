import {
  Badge,
  Cluster,
  Eyebrow,
  Heading,
  Stack,
  Text,
} from "@/design-system";
import {
  formatDate,
  formatReadingTime,
} from "@/lib";
import type { JournalEntry } from "@/types/journal";

interface ArticleHeaderProps {
  article: JournalEntry;
  draftLabel: string;
}

export function ArticleHeader({
  article,
  draftLabel,
}: ArticleHeaderProps) {
  return (
    <Stack>
      <Eyebrow>
        {article.category}
      </Eyebrow>

      <Stack gap="md">
        <Heading as="h1">
          {article.title}
        </Heading>

        <Text
          size="lead"
          muted
          className="max-w-3xl"
        >
          {article.description}
        </Text>
      </Stack>

      <Cluster
        gap="sm"
        className="text-sm text-fg-muted"
      >
        <Text as="span" size="sm">
          {article.author}
        </Text>

        <span aria-hidden>
          ·
        </span>

        <Text as="span" size="sm">
          {article.publishedAt
            ? formatDate(article.publishedAt)
            : draftLabel}
        </Text>

        <span aria-hidden>
          ·
        </span>

        <Text as="span" size="sm">
          {formatReadingTime(
            article.readingTimeMinutes,
          )}
        </Text>
      </Cluster>

      {article.tags.length > 0 && (
        <Cluster gap="sm">
          {article.tags.map((tag) => (
            <Badge key={tag}>
              {tag}
            </Badge>
          ))}
        </Cluster>
      )}
    </Stack>
  );
}
