import Link from "next/link";

import {
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
} from "@/design-system";
import {
  formatDate,
  formatReadingTime,
} from "@/lib";
import type { JournalEntry } from "@/types/journal";

interface JournalCardProps {
  article: JournalEntry;
  draftLabel: string;
  readLabel: string;
}

export function JournalCard({
  article,
  draftLabel,
  readLabel,
}: JournalCardProps) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block h-full"
    >
      <Card>
        <Stack>
          <Cluster>
            <Badge>
              {article.category}
            </Badge>

            <span aria-hidden>
              ·
            </span>

            <Text as="span" size="xs">
              {article.publishedAt
                ? formatDate(article.publishedAt)
                : draftLabel}
            </Text>

            <span aria-hidden>
              ·
            </span>

            <Text as="span" size="xs">
              {formatReadingTime(
                article.readingTimeMinutes,
              )}
            </Text>
          </Cluster>

          <Stack gap="sm">
            <Heading
              as="h3"
              className="
                transition-colors
                duration-200
                group-hover:text-accent
              "
            >
              {article.title}
            </Heading>

            <Text
              muted
              className="
                line-clamp-3
                leading-relaxed
              "
            >
              {article.description}
            </Text>
          </Stack>

          {article.tags.length > 0 && (
            <Cluster gap="sm">
              {article.tags
                .slice(0, 4)
                .map((tag) => (
                  <Badge key={tag}>
                    {tag}
                  </Badge>
                ))}
            </Cluster>
          )}

          <Text
            as="span"
            size="sm"
            className="
              mt-auto
              pt-4
              font-medium
              text-accent
            "
          >
            {readLabel} →
          </Text>
        </Stack>
      </Card>
    </Link>
  );
}
