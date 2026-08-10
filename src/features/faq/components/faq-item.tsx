import { Stack, Text } from "@/design-system";

import type { FAQItem as FAQItemContent } from "@/types/faq";

interface FAQItemProps {
  item: FAQItemContent;
}

export function FAQItem({
  item,
}: FAQItemProps) {
  return (
    <article className="border-t border-border py-7 last:border-b">
      <Stack gap="sm">
        <Text
          as="h3"
          size="lg"
          className="font-semibold tracking-tight"
        >
          {item.question}
        </Text>

        <Text
          muted
          className="max-w-3xl leading-relaxed"
        >
          {item.answer}
        </Text>
      </Stack>
    </article>
  );
}
