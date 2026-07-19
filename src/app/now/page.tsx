import type { Metadata } from "next";

import { Page } from "@/design-system";
import { now } from "@/content";
import {
  NowHero,
  NowSection,
} from "@/features/now";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I'm currently building, learning, exploring, and working on.",
};

export default function NowPage() {
  return (
    <Page>
      <div className="space-y-20">
        <NowHero />

        {now.map((section) => (
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
