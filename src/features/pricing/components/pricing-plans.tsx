import { pricingPlans } from "@/config/pricing";
import { Section, Stack, Text } from "@/design-system";

import type { PricingContent } from "@/types/pricing";

import { PricingPlanCard } from "./pricing-plan-card";

const planCopy = {
  starter: "starter",
  business: "business",
  premium: "premium",
} as const;

interface PricingPlansProps {
  content: PricingContent;
}

export function PricingPlans({
  content,
}: PricingPlansProps) {
  const labels = {
    from: content.from,
    perMonth: content.perMonth,
    paymentLabel: content.paymentLabel,
    upfront: content.upfront,
    months: content.months,
    total: content.total,
  };

  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Text
            size="lg"
            className="font-semibold"
          >
            {content.paymentLabel}
          </Text>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.paymentDescription}
          </Text>
        </Stack>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingPlanCard
              key={plan.slug}
              plan={plan}
              copy={
                content.plans[
                  planCopy[plan.slug]
                ]
              }
              labels={labels}
            />
          ))}
        </div>
      </Stack>
    </Section>
  );
}
