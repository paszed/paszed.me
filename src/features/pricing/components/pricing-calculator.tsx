"use client";

import { Stack, Text } from "@/design-system";

import { usePricingCalculator } from "../hooks/use-pricing-calculator";
import type { PricingCalculatorContent } from "../types";
import { PricingCalculatorAddOns } from "./pricing-calculator-add-ons";
import { PricingPackageSelector } from "./pricing-package-selector";
import { PricingPaymentSelector } from "./pricing-payment-selector";
import { PricingSummary } from "./pricing-summary";

interface PricingCalculatorProps {
  content: PricingCalculatorContent;
}

export function PricingCalculator({
  content,
}: PricingCalculatorProps) {
  const calculator = usePricingCalculator();

  const {
    selectedPlan,
    selectedPlanSlug,
    selectedMonths,
    selectedPayment,
    paymentOptions,

    websiteCare,
    setWebsiteCare,

    googleVisibility,
    setGoogleVisibility,

    contentSupport,
    setContentSupport,

    additionalPages,
    setAdditionalPages,

    additionalLanguages,
    setAdditionalLanguages,

    addOnPrices,
    oneTimeAddOns,
    recurringAddOns,
    upfrontTotal,
    monthlyTotal,
    financedTotal,

    selectPlan,
    selectPayment,
    formatCurrency,
  } = calculator;

  return (
    <section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Text as="h2" size="lg">
            {content.title}
          </Text>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <Stack gap="xl">
            <PricingPackageSelector
              selectedPlanSlug={selectedPlanSlug}
              onSelect={selectPlan}
              formatCurrency={formatCurrency}
              label={content.packageLabel}
            />

            {selectedPlan && (
              <PricingPaymentSelector
                paymentOptions={paymentOptions}
                selectedMonths={selectedMonths}
                planPrice={selectedPlan.price}
                onSelect={selectPayment}
                formatCurrency={formatCurrency}
                label={content.paymentLabel}
                upfront={content.upfront}
                months={content.months}
                perMonth={content.perMonth}
                total={content.total}
              />
            )}

            <PricingCalculatorAddOns
              websiteCare={websiteCare}
              googleVisibility={googleVisibility}
              contentSupport={contentSupport}
              additionalPages={additionalPages}
              additionalLanguages={additionalLanguages}
              onWebsiteCareChange={setWebsiteCare}
              onGoogleVisibilityChange={
                setGoogleVisibility
              }
              onContentSupportChange={
                setContentSupport
              }
              onAdditionalPagesChange={
                setAdditionalPages
              }
              onAdditionalLanguagesChange={
                setAdditionalLanguages
              }
              label={content.addOnsLabel}
              websiteCareLabel={content.websiteCare}
              googleVisibilityLabel={
                content.googleVisibility
              }
              contentSupportLabel={
                content.contentSupport
              }
              additionalPagesLabel={
                content.additionalPages
              }
              additionalLanguagesLabel={
                content.additionalLanguages
              }
              from={content.from}
              perMonth={content.perMonth}
              page={content.page}
              language={content.language}
              removeLabel={content.removeLabel}
              addLabel={content.addLabel}
            />
          </Stack>

          <PricingSummary
            upfrontTotal={upfrontTotal}
            monthlyTotal={monthlyTotal}
            financedTotal={financedTotal}
            selectedPayment={selectedPayment}
            oneTimeAddOns={oneTimeAddOns}
            recurringAddOns={recurringAddOns}
            websiteCare={websiteCare}
            googleVisibility={googleVisibility}
            contentSupport={contentSupport}
            additionalPages={additionalPages}
            additionalLanguages={additionalLanguages}
            addOnPrices={addOnPrices}
            formatCurrency={formatCurrency}
            estimatedInvestment={
              content.estimatedInvestment
            }
            estimatedMonthly={
              content.estimatedMonthlyPayment
            }
            estimatedTotal={content.estimatedTotal}
            upfront={content.upfront}
            perMonth={content.perMonth}
            addOnsLabel={content.addOnsLabel}
            websiteCareLabel={content.websiteCare}
            googleVisibilityLabel={
              content.googleVisibility
            }
            contentSupportLabel={
              content.contentSupport
            }
            additionalPagesLabel={
              content.additionalPages
            }
            additionalLanguagesLabel={
              content.additionalLanguages
            }
            from={content.from}
            page={content.page}
            language={content.language}
          />
        </div>
      </Stack>
    </section>
  );
}
