import Link from "next/link";

import {
  Button,
  Grid,
  Container,
  Section,
  SectionHeader,
  Stack,
  Text,
} from "@/design-system";
import { JournalCard } from "@/features/journal";
import { home } from "@/content";
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
                <Button>View Journal</Button>
              </Link>
            }
          />

          {articles.length > 0 ? (
            <Grid gap="lg">
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
