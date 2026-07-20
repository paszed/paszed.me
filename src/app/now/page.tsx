import type { Metadata } from "next";

import {
  Page,
  Stack,
} from "@/design-system";
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
      <Stack gap="2xl">
        <NowHero />

        {now.map((section) => (
          <NowSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </Stack>
    </Page>
  );
}
