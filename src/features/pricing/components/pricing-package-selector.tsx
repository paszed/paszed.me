import { pricingPlans } from "@/config/pricing";
import { Stack, Text } from "@/design-system";

import type { PricingPlanSlug } from "../types";

interface PricingPackageSelectorProps {
  selectedPlanSlug: PricingPlanSlug;
  onSelect: (slug: PricingPlanSlug) => void;
  formatCurrency: (value: number) => string;
  label: string;
}

export function PricingPackageSelector({
  selectedPlanSlug,
  onSelect,
  formatCurrency,
  label,
}: PricingPackageSelectorProps) {
  return (
    <Stack gap="sm">
      <Text
        size="sm"
        muted
        className="uppercase tracking-[0.2em]"
      >
        {label}
      </Text>

      <div className="grid gap-3 sm:grid-cols-3">
        {pricingPlans.map((plan) => {
          const slug = plan.slug as PricingPlanSlug;
          const active =
            selectedPlanSlug === slug;

          return (
            <button
              key={plan.slug}
              type="button"
              onClick={() => onSelect(slug)}
              aria-pressed={active}
              className={`
                rounded-2xl
                border
                p-4
                text-left
                transition-[border-color,background-color,transform]
                duration-200
                hover:-translate-y-0.5
                ${
                  active
                    ? "border-fg bg-background"
                    : "border-border bg-background/40 hover:border-fg-muted"
                }
              `}
            >
              <Stack gap="sm">
                <Text
                  size="sm"
                  className="font-semibold"
                >
                  {plan.name}
                </Text>

                <Text size="sm" muted>
                  {formatCurrency(plan.price)}
                </Text>
              </Stack>
            </button>
          );
        })}
      </div>
    </Stack>
  );
}
