"use client";

import { useMemo, useState } from "react";

import { addOns } from "@/config/add-ons";
import { pricingPlans } from "@/config/pricing";

import type {
  PaymentOption,
  PricingPlanSlug,
} from "../types";

export function usePricingCalculator() {
  const [selectedPlanSlug, setSelectedPlanSlug] =
    useState<PricingPlanSlug>("starter");

  const [selectedMonths, setSelectedMonths] =
    useState<number | null>(null);

  const [websiteCare, setWebsiteCare] =
    useState(false);

  const [googleVisibility, setGoogleVisibility] =
    useState(false);

  const [contentSupport, setContentSupport] =
    useState(false);

  const [additionalPages, setAdditionalPages] =
    useState(0);

  const [additionalLanguages, setAdditionalLanguages] =
    useState(0);

  const selectedPlan = useMemo(
    () =>
      pricingPlans.find(
        (plan) => plan.slug === selectedPlanSlug,
      ),
    [selectedPlanSlug],
  );

  const paymentOptions =
    selectedPlan?.payments ?? [];

  const selectedPayment: PaymentOption | null =
    selectedMonths === null
      ? null
      : paymentOptions.find(
          (payment) =>
            payment.months === selectedMonths,
        ) ?? null;

  const addOnPrices = useMemo(() => {
    const websiteCareAddOn = addOns.find(
      (addOn) => addOn.slug === "website-care",
    );

    const googleVisibilityAddOn = addOns.find(
      (addOn) => addOn.slug === "google-visibility",
    );

    const contentSupportAddOn = addOns.find(
      (addOn) => addOn.slug === "content-support",
    );

    const additionalPagesAddOn = addOns.find(
      (addOn) => addOn.slug === "additional-pages",
    );

    const additionalLanguagesAddOn = addOns.find(
      (addOn) =>
        addOn.slug === "additional-languages",
    );

    return {
      websiteCare:
        websiteCareAddOn?.pricing.type ===
        "starting-from"
          ? websiteCareAddOn.pricing.amount
          : 0,

      googleVisibility:
        googleVisibilityAddOn?.pricing.type ===
        "fixed"
          ? googleVisibilityAddOn.pricing.amount
          : 0,

      contentSupport:
        contentSupportAddOn?.pricing.type ===
        "starting-from"
          ? contentSupportAddOn.pricing.amount
          : 0,

      additionalPage:
        additionalPagesAddOn?.pricing.type ===
        "range"
          ? additionalPagesAddOn.pricing.min
          : 0,

      additionalLanguage:
        additionalLanguagesAddOn?.pricing.type ===
        "fixed"
          ? additionalLanguagesAddOn.pricing.amount
          : 0,
    };
  }, []);

  const oneTimeAddOns =
    (googleVisibility
      ? addOnPrices.googleVisibility
      : 0) +
    (contentSupport
      ? addOnPrices.contentSupport
      : 0) +
    additionalPages *
      addOnPrices.additionalPage +
    additionalLanguages *
      addOnPrices.additionalLanguage;

  const recurringAddOns =
    websiteCare
      ? addOnPrices.websiteCare
      : 0;

  const upfrontTotal =
    (selectedPlan?.price ?? 0) +
    oneTimeAddOns;

  const monthlyTotal = selectedPayment
    ? selectedPayment.monthly +
      recurringAddOns
    : null;

  const financedTotal = selectedPayment
    ? selectedPayment.total +
      oneTimeAddOns +
      recurringAddOns *
        selectedPayment.months
    : null;

  function selectPlan(
    slug: PricingPlanSlug,
  ) {
    setSelectedPlanSlug(slug);
    setSelectedMonths(null);
  }

  function selectPayment(
    months: number | null,
  ) {
    setSelectedMonths(months);
  }

  function formatCurrency(value: number) {
    return `€${value.toLocaleString("de-DE")}`;
  }

  return {
    selectedPlanSlug,
    selectedPlan,
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
  };
}
