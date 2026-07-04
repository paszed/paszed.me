import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I'm currently building, learning, exploring, and working on.",
};

import { Page } from "@/components/layout/page";
import { status } from "@/content/status";
import {
  NowHero,
  NowSection,
} from "@/features/now";

export default function NowPage() {
  return (
    <Page>
      <div className="space-y-20">
        <NowHero />

        {status.map((section) => (
          <NowSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </Page>
  );
}
