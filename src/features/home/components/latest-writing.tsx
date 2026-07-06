import Link from "next/link";

import { Container } from "@/components/layout/container";
import { JournalCard } from "@/components/journal";
import {
  Button,
  Section,
  SectionHeader,
  Stack,
} from "@/components/ui";
import { home } from "@/content";
import { getPublishedArticles } from "@/lib/journal";

export function LatestWriting() {
  const articles = getPublishedArticles().slice(0, 2);

  if (articles.length === 0) {
    return null;
  }

  return (
    <Section>
      <Container>
        <Stack gap="xl">
          <SectionHeader
            title={home.latestWriting.title}
            description={home.latestWriting.description}
            actions={
              <Link href="/journal">
                <Button>View Journal</Button>
              </Link>
            }
          />

          <div className="grid gap-8">
            {articles.map((article) => (
              <JournalCard
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
