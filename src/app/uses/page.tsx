import { Page } from "@/components/layout/page";
import { UsesHero } from "@/features/uses";

export default function UsesPage() {
  return (
    <Page
      title="Uses"
      description="The hardware, software, and tools I use to build software."
    >
      <div className="space-y-20">
        <UsesHero />
      </div>
    </Page>
  );
}
