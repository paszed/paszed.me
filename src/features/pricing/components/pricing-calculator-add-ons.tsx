"use client";

import { addOns } from "@/config/add-ons";
import { Stack, Text } from "@/design-system";

interface PricingCalculatorAddOnsProps {
  websiteCare: boolean;
  googleVisibility: boolean;
  contentSupport: boolean;
  additionalPages: number;
  additionalLanguages: number;

  onWebsiteCareChange: (value: boolean) => void;
  onGoogleVisibilityChange: (value: boolean) => void;
  onContentSupportChange: (value: boolean) => void;
  onAdditionalPagesChange: (value: number) => void;
  onAdditionalLanguagesChange: (value: number) => void;

  label: string;

  websiteCareLabel: string;
  googleVisibilityLabel: string;
  contentSupportLabel: string;
  additionalPagesLabel: string;
  additionalLanguagesLabel: string;

  from: string;
  perMonth: string;
  page: string;
  language: string;

  removeLabel: string;
  addLabel: string;
}

export function PricingCalculatorAddOns({
  websiteCare,
  googleVisibility,
  contentSupport,
  additionalPages,
  additionalLanguages,
  onWebsiteCareChange,
  onGoogleVisibilityChange,
  onContentSupportChange,
  onAdditionalPagesChange,
  onAdditionalLanguagesChange,
  label,
  websiteCareLabel,
  googleVisibilityLabel,
  contentSupportLabel,
  additionalPagesLabel,
  additionalLanguagesLabel,
  from,
  perMonth,
  page,
  language,
  removeLabel,
  addLabel,
}: PricingCalculatorAddOnsProps) {
  const websiteCarePrice = addOns.find(
    (addOn) => addOn.slug === "website-care",
  )?.pricing;

  const googleVisibilityPrice = addOns.find(
    (addOn) =>
      addOn.slug === "google-visibility",
  )?.pricing;

  const contentSupportPrice = addOns.find(
    (addOn) =>
      addOn.slug === "content-support",
  )?.pricing;

  const additionalPagesPrice = addOns.find(
    (addOn) =>
      addOn.slug === "additional-pages",
  )?.pricing;

  const additionalLanguagesPrice =
    addOns.find(
      (addOn) =>
        addOn.slug === "additional-languages",
    )?.pricing;

  return (
    <Stack gap="sm">
      <Text size="sm" className="font-medium">
        {label}
      </Text>

      <div className="space-y-3">
        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-border bg-background/40 p-4">
          <span className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={websiteCare}
              onChange={(event) =>
                onWebsiteCareChange(
                  event.target.checked,
                )
              }
              className="size-4 accent-current"
            />

            <span className="text-sm font-medium">
              {websiteCareLabel}
            </span>
          </span>

          <span className="text-sm text-fg-secondary">
            {websiteCarePrice?.type ===
              "starting-from" &&
              `${from} €${websiteCarePrice.amount}${perMonth}`}
          </span>
        </label>

        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-border bg-background/40 p-4">
          <span className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={googleVisibility}
              onChange={(event) =>
                onGoogleVisibilityChange(
                  event.target.checked,
                )
              }
              className="size-4 accent-current"
            />

            <span className="text-sm font-medium">
              {googleVisibilityLabel}
            </span>
          </span>

          <span className="text-sm text-fg-secondary">
            {googleVisibilityPrice?.type ===
              "fixed" &&
              `€${googleVisibilityPrice.amount}`}
          </span>
        </label>

        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-border bg-background/40 p-4">
          <span className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={contentSupport}
              onChange={(event) =>
                onContentSupportChange(
                  event.target.checked,
                )
              }
              className="size-4 accent-current"
            />

            <span className="text-sm font-medium">
              {contentSupportLabel}
            </span>
          </span>

          <span className="text-sm text-fg-secondary">
            {contentSupportPrice?.type ===
              "starting-from" &&
              `${from} €${contentSupportPrice.amount}`}
          </span>
        </label>

        <Counter
          label={additionalPagesLabel}
          value={additionalPages}
          suffix={page}
          price={
            additionalPagesPrice?.type ===
            "range"
              ? `€${additionalPagesPrice.min}–€${additionalPagesPrice.max}`
              : ""
          }
          onDecrease={() =>
            onAdditionalPagesChange(
              Math.max(
                0,
                additionalPages - 1,
              ),
            )
          }
          onIncrease={() =>
            onAdditionalPagesChange(
              additionalPages + 1,
            )
          }
          decreaseLabel={`${removeLabel} ${page}`}
          increaseLabel={`${addLabel} ${page}`}
        />

        <Counter
          label={additionalLanguagesLabel}
          value={additionalLanguages}
          suffix={language}
          price={
            additionalLanguagesPrice?.type ===
            "fixed"
              ? `€${additionalLanguagesPrice.amount}`
              : ""
          }
          onDecrease={() =>
            onAdditionalLanguagesChange(
              Math.max(
                0,
                additionalLanguages - 1,
              ),
            )
          }
          onIncrease={() =>
            onAdditionalLanguagesChange(
              additionalLanguages + 1,
            )
          }
          decreaseLabel={`${removeLabel} ${language}`}
          increaseLabel={`${addLabel} ${language}`}
        />
      </div>
    </Stack>
  );
}

interface CounterProps {
  label: string;
  value: number;
  suffix: string;
  price: string;
  onDecrease: () => void;
  onIncrease: () => void;
  decreaseLabel: string;
  increaseLabel: string;
}

function Counter({
  label,
  value,
  suffix,
  price,
  onDecrease,
  onIncrease,
  decreaseLabel,
  increaseLabel,
}: CounterProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">
          {label}
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onDecrease}
            aria-label={decreaseLabel}
            className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-fg"
          >
            −
          </button>

          <span
            className="min-w-6 text-center text-sm font-medium"
            aria-live="polite"
          >
            {value}
          </span>

          <button
            type="button"
            onClick={onIncrease}
            aria-label={increaseLabel}
            className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-fg"
          >
            +
          </button>

          <span className="text-sm text-fg-secondary">
            {price} {suffix}
          </span>
        </div>
      </div>
    </div>
  );
}
