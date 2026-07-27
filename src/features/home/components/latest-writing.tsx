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
import { home } from "@/content";
import { JournalCard } from "@/features/journal";
import { getPublishedArticles } from "@/lib/journal";

export function LatestWriting() {
  const articles = getPublishedArticles().slice(0, 2);

  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            eyebrow="Journal"
            title={home.latestWriting.title}
            description={home.latestWriting.description}
            actions={
              <Link href="/journal">
                <Button>
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
              I&apos;m currently writing new engineering notes. Check back soon
              for articles on software architecture, developer tooling, AI, and
              the lessons I learn while building.
            </Text>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
