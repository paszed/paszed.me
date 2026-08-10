import { Stack, Text } from "@/design-system";

import type {
  PaymentOption,
} from "../types";

interface PricingPaymentSelectorProps {
  paymentOptions: readonly PaymentOption[];
  selectedMonths: number | null;
  planPrice: number;
  onSelect: (months: number | null) => void;
  formatCurrency: (value: number) => string;
  label: string;
  upfront: string;
  months: string;
  perMonth: string;
  total: string;
}

export function PricingPaymentSelector({
  paymentOptions,
  selectedMonths,
  planPrice,
  onSelect,
  formatCurrency,
  label,
  upfront,
  months,
  perMonth,
  total,
}: PricingPaymentSelectorProps) {
  return (
    <Stack gap="sm">
      <Text
        size="sm"
        muted
        className="uppercase tracking-[0.2em]"
      >
        {label}
      </Text>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelect(null)}
          aria-pressed={selectedMonths === null}
          className={`
            rounded-2xl
            border
            p-4
            text-left
            transition-colors
            ${
              selectedMonths === null
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
              {upfront}
            </Text>

            <Text size="sm" muted>
              {formatCurrency(planPrice)}
            </Text>
          </Stack>
        </button>

        {paymentOptions.map((payment) => {
          const active =
            selectedMonths === payment.months;

          return (
            <button
              key={payment.months}
              type="button"
              onClick={() =>
                onSelect(payment.months)
              }
              aria-pressed={active}
              className={`
                rounded-2xl
                border
                p-4
                text-left
                transition-colors
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
                  {payment.months} {months}
                </Text>

                <Text size="sm" muted>
                  {formatCurrency(payment.monthly)}
                  {perMonth}
                </Text>

                <Text size="xs" muted>
                  {total}:{" "}
                  {formatCurrency(payment.total)}
                </Text>
              </Stack>
            </button>
          );
        })}
      </div>
    </Stack>
  );
}
