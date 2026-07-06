import { Page } from "@/components/layout/page";
import { JournalCard } from "@/components/journal";
import { SectionHeader } from "@/components/ui/section-header";
import { journal } from "@/content";

export default function JournalPage() {
  return (
    <Page className="space-y-20">
      <SectionHeader
        centered
        eyebrow="Engineering Journal"
        title="Journal"
        description="Essays, notes, and long-form writing on software engineering, architecture, developer tools, AI, and building software intended to last."
      />

      <section className="mx-auto grid max-w-4xl gap-8">
        {journal.map((article) => (
          <JournalCard
            key={article.slug}
            article={article}
          />
        ))}
      </section>
    </Page>
  );
}
