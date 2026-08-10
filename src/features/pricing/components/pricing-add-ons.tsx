import { addOns } from "@/config/add-ons";
import { Section, Stack, Text } from "@/design-system";

import type { AddOnsContent } from "@/types/pricing";

import { PricingAddOnCard } from "./pricing-add-on-card";

interface PricingAddOnsProps {
  content: AddOnsContent;
}

export function PricingAddOns({
  content,
}: PricingAddOnsProps) {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Text
            size="sm"
            muted
            className="uppercase tracking-[0.3em]"
          >
            {content.title}
          </Text>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <div className="grid gap-6 lg:grid-cols-2">
          {addOns.map((addOn) => (
            <PricingAddOnCard
              key={addOn.slug}
              addOn={addOn}
              copy={content.items[addOn.slug]}
              startingFrom={content.startingFrom}
              forLabel={content.forLabel}
              examplesLabel={content.examples}
              addOnsAvailable={
                content.addOnsAvailable
              }
            />
          ))}
        </div>
      </Stack>
    </Section>
  );
}
