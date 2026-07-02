import { Page } from "@/components/layout/page";
import { uses } from "@/content/uses";
import {
  UsesHero,
  UsesSection,
} from "@/features/uses";

export default function UsesPage() {
  return (
    <Page
      title="Uses"
      description="The hardware, software, and tools I use to build software."
    >
      <div className="space-y-20">
        <UsesHero />

        {uses.map((section) => (
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
