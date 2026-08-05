import { Prose } from "@/design-system";
import type { JournalEntry } from "@/types/journal";

interface ArticleContentProps {
  article: JournalEntry;
}

export function ArticleContent({
  article,
}: ArticleContentProps) {
  return (
    <Prose>
      {article.sections.map((section) => (
        <section
          key={section.title}
          className="scroll-mt-24"
        >
          <h2>
            {section.title}
          </h2>

          {section.content
            .trim()
            .split(/\n\s*\n/)
            .map((paragraph) => (
              <p
                key={paragraph}
                className="leading-8"
              >
                {paragraph}
              </p>
            ))}
        </section>
      ))}
    </Prose>
  );
}
