import Link from "next/link";

import {
  Button,
  Container,
  Grid,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import type { HomeLatestWriting } from "@/features/home/types";
import { JournalCard } from "@/features/journal";
import { getPublishedArticles } from "@/lib/journal";

interface LatestWritingProps {
  content: HomeLatestWriting;
}

export function LatestWriting({
  content,
}: LatestWritingProps) {
  const articles =
    getPublishedArticles().slice(0, 2);

  return (
    <Section>
      <Container>
        <Stack gap="lg">
          <SectionHeader
            eyebrow="Journal"
            title={content.title}
            description={content.description}
            actions={
              <Link href="/journal">
                <Button variant="outline">
                  View Journal
                </Button>
              </Link>
            }
          />

          {articles.length > 0 ? (
            <Grid
              columns={2}
              gap="lg"
            >
              {articles.map((article) => (
                <JournalCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </Grid>
          ) : (
            <Text muted>
              Writing and engineering notes will be published here as projects and ideas develop.
            </Text>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
