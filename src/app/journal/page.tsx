import Link from "next/link";

import { Page } from "@/components/layout/page";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { journal } from "@/content/journal";

export default function JournalPage() {
  return (
    <Page className="space-y-16">
      <SectionHeader
        centered
        eyebrow="Engineering Journal"
        title="Journal"
        description="Notes on software engineering, developer tools, software architecture, AI, and building things that last."
      />

      <section className="mx-auto grid max-w-4xl gap-6">
        {journal.map((entry) => (
          <Card key={entry.slug}>
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
                <span>{entry.category}</span>
                <span>•</span>
                <span>{entry.publishedAt}</span>
                <span>•</span>
                <span>{entry.readingTime}</span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-fg">
                {entry.title}
              </h2>

              <p className="font-serif text-lg leading-8 text-fg-secondary">
                {entry.description}
              </p>

              {entry.published ? (
                <Link
                  href={`/journal/${entry.slug}`}
                  className="inline-flex font-sans text-sm font-medium text-accent hover:text-accent-hover"
                >
                  Read article →
                </Link>
              ) : (
                <span className="font-sans text-sm text-fg-muted">
                  Coming soon
                </span>
              )}
            </div>
          </Card>
        ))}
      </section>
    </Page>
  );
}
