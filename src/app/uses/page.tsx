import type { Metadata } from "next";

import { Page } from "@/components/layout/page";
import { uses } from "@/content";
import {
  UsesHero,
  UsesSection,
} from "@/features/uses";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The hardware, software, terminal tools, AI, and development workflow I use every day.",
};

export default function UsesPage() {
  return (
    <Page>
      <div className="space-y-20">
        <UsesHero />

        {uses.sections.map((section) => (
          <UsesSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </Page>
  );
}
