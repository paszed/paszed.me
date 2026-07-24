import {
  Page,
  SectionHeader,
  Stack,
} from "@/design-system";
import { JournalCard } from "@/features/journal";
import { getPublishedArticles } from "@/lib/journal";

export default function JournalPage() {
  const articles = getPublishedArticles();

  return (
    <Page className="space-y-20">
      <SectionHeader
        level={1}
        centered
        eyebrow="Engineering Journal"
        title="Journal"
        description="Essays, notes, and long-form writing on software engineering, architecture, developer tools, AI, and building software intended to last."
      />

      <Stack
        as="section"
        gap="lg"
      >
        {articles.map((article) => (
          <JournalCard
            key={article.slug}
            article={article}
          />
        ))}
      </Stack>
    </Page>
  );
}
