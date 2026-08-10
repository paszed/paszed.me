import { Stack, Text } from "@/design-system";

import type { PricingPlan } from "@/config/pricing";
import type { PricingContent } from "@/types/pricing";

type PricingPlanCopy =
  PricingContent["plans"][keyof PricingContent["plans"]];

type PricingPlanLabels = Pick<
  PricingContent,
  | "from"
  | "perMonth"
  | "paymentLabel"
  | "upfront"
  | "months"
  | "total"
>;

interface PricingPlanCardProps {
  plan: PricingPlan;
  copy: PricingPlanCopy;
  labels: PricingPlanLabels;
}

export function PricingPlanCard({
  plan,
  copy,
  labels,
}: PricingPlanCardProps) {
  const longestPlan = plan.payments.find(
    (payment) => payment.months === 12,
  );

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
      <Stack gap="xl" className="h-full">
        <Stack gap="sm">
          <Text
            as="h2"
            size="lg"
            className="font-semibold tracking-tight"
          >
            {plan.name}
          </Text>

          <Text
            size="sm"
            muted
            className="uppercase tracking-[0.2em]"
          >
            {copy.forLabel}
          </Text>

          <Text muted className="leading-relaxed">
            {copy.for}
          </Text>
        </Stack>

        <Stack gap="sm">
          <Text
            size="lead"
            className="font-semibold tracking-tight"
          >
            €{plan.price.toLocaleString("de-DE")}
          </Text>

          {longestPlan && (
            <Text size="sm" muted>
              {labels.from}{" "}
              <span className="font-medium text-fg">
                €{longestPlan.monthly}
                {labels.perMonth}
              </span>
            </Text>
          )}
        </Stack>

        <ul className="space-y-3">
          {plan.features.map((feature) => (
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

        <Stack
          gap="sm"
          className="mt-auto border-t border-border pt-6"
        >
          <Text size="sm" className="font-medium">
            {labels.paymentLabel}
          </Text>

          <Text size="sm">
            {labels.upfront}:{" "}
            <span className="font-medium">
              €{plan.price.toLocaleString("de-DE")}
            </span>
          </Text>

          {plan.payments.map((payment) => (
            <div
              key={payment.months}
              className="flex items-baseline justify-between gap-4 text-sm"
            >
              <Text size="sm" muted>
                {payment.months} {labels.months}
              </Text>

              <Text
                size="sm"
                className="font-medium"
              >
                €{payment.monthly}
                {labels.perMonth}

                <span className="ml-1 font-normal text-fg-secondary">
                  · €{payment.total} {labels.total}
                </span>
              </Text>
            </div>
          ))}

          <Text size="xs" muted className="pt-2">
            {copy.addOns}
          </Text>
        </Stack>
      </Stack>
    </article>
  );
}
