import { Stack, Text } from "@/design-system";

import type { AddOn } from "@/config/add-ons";
import type { AddOnsContent } from "@/types/pricing";

interface PricingAddOnCardProps {
  addOn: AddOn;
  copy: AddOnsContent["items"][keyof AddOnsContent["items"]];
  startingFrom: string;
  forLabel: string;
  examplesLabel: string;
  addOnsAvailable: string;
}

function formatPrice(
  pricing: AddOn["pricing"],
  startingFrom: string,
) {
  if (pricing.type === "fixed") {
    return `€${pricing.amount.toLocaleString("de-DE")}${
      "suffix" in pricing ? pricing.suffix : ""
    }`;
  }

  if (pricing.type === "starting-from") {
    return `${startingFrom} €${pricing.amount.toLocaleString(
      "de-DE",
    )}${
      "suffix" in pricing ? pricing.suffix : ""
    }`;
  }

  return `€${pricing.min}–€${pricing.max}${
    "suffix" in pricing ? pricing.suffix : ""
  }`;
}

export function PricingAddOnCard({
  addOn,
  copy,
  startingFrom,
  forLabel,
  examplesLabel,
  addOnsAvailable,
}: PricingAddOnCardProps) {
  const price = formatPrice(
    addOn.pricing,
    startingFrom,
  );

  return (
    <article
      className="
        rounded-2xl
        border
        border-border
        p-6
        sm:p-8
      "
    >
      <Stack gap="lg">
        <Stack gap="sm">
          <Text as="h3" size="lg">
            {copy.name}
          </Text>

          <Text
            size="sm"
            muted
            className="uppercase tracking-[0.2em]"
          >
            {forLabel}
          </Text>

          <Text muted className="leading-relaxed">
            {copy.for}
          </Text>
        </Stack>

        <Text
          size="lead"
          className="font-semibold"
        >
          {price}
        </Text>

        {copy.features && (
          <ul className="space-y-3">
            {copy.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm"
              >
                <span
                  aria-hidden="true"
                  className="text-accent"
                >
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {copy.examples && (
          <Stack gap="sm">
            <Text size="sm" muted>
              {examplesLabel}
            </Text>

            <ul className="space-y-2">
              {copy.examples.map((example) => (
                <li
                  key={example}
                  className="text-sm text-fg-secondary"
                >
                  {example}
                </li>
              ))}
            </ul>
          </Stack>
        )}

        <Text size="xs" muted>
          {addOnsAvailable}
        </Text>
      </Stack>
    </article>
  );
}
