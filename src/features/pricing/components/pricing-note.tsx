import {
  Section,
  Stack,
  Text,
} from "@/design-system";

import type { PricingContent } from "@/types/pricing";

interface PricingNoteProps {
  content: PricingContent;
}

export function PricingNote({
  content,
}: PricingNoteProps) {
  return (
    <Section>
      <Stack
        gap="sm"
        className="max-w-2xl"
      >
        <Text as="h2" size="lg">
          {content.noteTitle}
        </Text>

        <Text
          muted
          className="leading-relaxed"
        >
          {content.note}
        </Text>
      </Stack>
    </Section>
  );
}
