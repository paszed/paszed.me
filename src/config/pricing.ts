export const pricingPlans = [
  {
    slug: "starter",
    name: "Starter Website",
    price: 900,
    features: [
      "Custom website design",
      "Mobile optimization",
      "Up to 5 website pages",
      "Essential business pages",
      "Contact forms",
      "Basic Google visibility setup",
      "Website launch",
    ],
    payments: [
      { months: 3, monthly: 309, total: 927 },
      { months: 6, monthly: 158, total: 945 },
      { months: 9, monthly: 107, total: 963 },
      { months: 12, monthly: 83, total: 990 },
    ],
  },
  {
    slug: "business",
    name: "Business Website",
    price: 1400,
    features: [
      "Everything from Starter",
      "Up to 10 website pages",
      "1 additional language included",
      "Service/product presentation sections",
      "Customer reviews section",
      "FAQ section",
      "Improved Google visibility setup",
      "Advanced contact forms",
      "Custom design adjustments",
      "Analytics setup",
      "Website launch support",
    ],
    payments: [
      { months: 3, monthly: 480, total: 1442 },
      { months: 6, monthly: 245, total: 1470 },
      { months: 9, monthly: 167, total: 1498 },
      { months: 12, monthly: 128, total: 1540 },
    ],
  },
  {
    slug: "premium",
    name: "Premium Website",
    price: 2000,
    features: [
      "Everything from Business",
      "Up to 15 website pages",
      "2 additional languages included",
      "Advanced page layouts",
      "Custom sections and interactions",
      "Advanced contact forms",
      "Customer reviews section",
      "Detailed Google visibility setup",
      "Analytics and performance tracking",
      "Priority support",
      "Website launch support",
    ],
    payments: [
      { months: 3, monthly: 687, total: 2060 },
      { months: 6, monthly: 350, total: 2100 },
      { months: 9, monthly: 238, total: 2140 },
      { months: 12, monthly: 183, total: 2200 },
    ],
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];

export type PaymentOption =
  PricingPlan["payments"][number];
