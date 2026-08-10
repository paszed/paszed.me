import { Stack, Text } from "@/design-system";

import type { FAQContent } from "@/types/faq";

import { FAQItem } from "./faq-item";

interface FAQSectionProps {
  content: FAQContent;
}

export function FAQSection({
  content,
}: FAQSectionProps) {
  return (
    <section>
      <Stack gap="xl">
        <Stack
          gap="sm"
          className="max-w-2xl"
        >
          <Text
            as="h2"
            size="lead"
            className="font-semibold tracking-tight"
          >
            {content.title}
          </Text>

          <Text
            muted
            className="leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <div>
          {content.items.map((item) => (
            <FAQItem
              key={item.question}
              item={item}
            />
          ))}
        </div>
      </Stack>
    </section>
  );
}
