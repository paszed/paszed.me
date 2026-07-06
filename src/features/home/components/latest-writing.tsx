import Link from "next/link";

import { Container } from "@/components/layout/container";
import { JournalCard } from "@/components/journal";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
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
        <div className="space-y-10">
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
        </div>
      </Container>
    </Section>
  );
}
