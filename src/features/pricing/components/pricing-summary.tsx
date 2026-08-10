import { Stack, Text } from "@/design-system";

interface PricingSummaryProps {
  upfrontTotal: number;
  monthlyTotal: number | null;
  financedTotal: number | null;

  selectedPayment: {
    months: number;
  } | null;

  oneTimeAddOns: number;
  recurringAddOns: number;

  websiteCare: boolean;
  googleVisibility: boolean;
  contentSupport: boolean;
  additionalPages: number;
  additionalLanguages: number;

  addOnPrices: {
    websiteCare: number;
    googleVisibility: number;
    contentSupport: number;
    additionalPage: number;
    additionalLanguage: number;
  };

  formatCurrency: (value: number) => string;

  estimatedInvestment: string;
  estimatedMonthly: string;
  estimatedTotal: string;
  upfront: string;
  perMonth: string;
  addOnsLabel: string;

  websiteCareLabel: string;
  googleVisibilityLabel: string;
  contentSupportLabel: string;
  additionalPagesLabel: string;
  additionalLanguagesLabel: string;

  from: string;
  page: string;
  language: string;
}

export function PricingSummary({
  upfrontTotal,
  monthlyTotal,
  financedTotal,
  selectedPayment,
  oneTimeAddOns,
  recurringAddOns,
  websiteCare,
  googleVisibility,
  contentSupport,
  additionalPages,
  additionalLanguages,
  addOnPrices,
  formatCurrency,
  estimatedInvestment,
  estimatedMonthly,
  estimatedTotal,
  upfront,
  perMonth,
  addOnsLabel,
  websiteCareLabel,
  googleVisibilityLabel,
  contentSupportLabel,
  additionalPagesLabel,
  additionalLanguagesLabel,
  from,
  page,
}: PricingSummaryProps) {
  return (
    <aside
      className="
        h-fit
        rounded-2xl
        border
        border-border
        bg-background
        p-6
        sm:p-8
        lg:sticky
        lg:top-24
      "
    >
      <Stack gap="xl">
        <Stack gap="sm">
          <Text
            size="sm"
            muted
            className="uppercase tracking-[0.2em]"
          >
            {estimatedInvestment}
          </Text>

          <Text
            size="lead"
            className="font-semibold tracking-tight"
          >
            {formatCurrency(upfrontTotal)}
          </Text>

          <Text size="sm" muted>
            {upfront}
          </Text>
        </Stack>

        {selectedPayment && (
          <Stack gap="sm">
            <div className="flex items-baseline justify-between gap-4">
              <Text size="sm" muted>
                {estimatedMonthly}
              </Text>

              <Text
                size="lg"
                className="font-semibold"
              >
                {formatCurrency(
                  monthlyTotal ?? 0,
                )}
                {perMonth}
              </Text>
            </div>

            <div className="flex items-baseline justify-between gap-4">
              <Text size="sm" muted>
                {estimatedTotal}
              </Text>

              <Text
                size="sm"
                className="font-medium"
              >
                {formatCurrency(
                  financedTotal ?? 0,
                )}
              </Text>
            </div>
          </Stack>
        )}

        {(oneTimeAddOns > 0 ||
          recurringAddOns > 0) && (
          <Stack
            gap="sm"
            className="border-t border-border pt-5"
          >
            <Text
              size="sm"
              className="font-medium"
            >
              {addOnsLabel}
            </Text>

            {googleVisibility && (
              <SummaryRow
                label={googleVisibilityLabel}
                value={formatCurrency(
                  addOnPrices.googleVisibility,
                )}
              />
            )}

            {contentSupport && (
              <SummaryRow
                label={contentSupportLabel}
                value={`${from} ${formatCurrency(
                  addOnPrices.contentSupport,
                )}`}
              />
            )}

            {additionalPages > 0 && (
              <SummaryRow
                label={`${additionalPagesLabel} × ${additionalPages}`}
                value={`${formatCurrency(
                  additionalPages *
                    addOnPrices.additionalPage,
                )}+`}
              />
            )}

            {additionalLanguages > 0 && (
              <SummaryRow
                label={`${additionalLanguagesLabel} × ${additionalLanguages}`}
                value={formatCurrency(
                  additionalLanguages *
                    addOnPrices.additionalLanguage,
                )}
              />
            )}

            {websiteCare && (
              <SummaryRow
                label={websiteCareLabel}
                value={`${formatCurrency(
                  addOnPrices.websiteCare,
                )}${perMonth}`}
              />
            )}

            {additionalPages > 0 && (
              <Text size="xs" muted>
                * {additionalPagesLabel}{" "}
                {from.toLowerCase()}{" "}
                {formatCurrency(
                  addOnPrices.additionalPage,
                )}{" "}
                {page}.
              </Text>
            )}
          </Stack>
        )}
      </Stack>
    </aside>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
}

function SummaryRow({
  label,
  value,
}: SummaryRowProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-sm">
      <span className="text-fg-secondary">
        {label}
      </span>

      <span>{value}</span>
    </div>
  );
}
