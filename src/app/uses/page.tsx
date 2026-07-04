import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The hardware, software, terminal tools, AI, and development workflow I use every day.",
};

import { Page } from "@/components/layout/page";
import { uses } from "@/content/uses";
import {
  UsesHero,
  UsesSection,
} from "@/features/uses";

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
