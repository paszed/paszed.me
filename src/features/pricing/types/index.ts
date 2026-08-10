export type PricingPlanSlug =
  | "starter"
  | "business"
  | "premium";

export interface PaymentOption {
  months: number;
  monthly: number;
  total: number;
}

export interface PricingAddOnPrices {
  websiteCare: number;
  googleVisibility: number;
  contentSupport: number;
  additionalPage: number;
  additionalLanguage: number;
}

export interface PricingCalculatorContent {
  title: string;
  description: string;

  packageLabel: string;
  paymentLabel: string;
  addOnsLabel: string;

  monthly: string;
  upfront: string;
  total: string;
  perMonth: string;
  months: string;

  selected: string;
  pages: string;
  languages: string;

  estimatedInvestment: string;
  estimatedMonthlyPayment: string;
  estimatedTotal: string;

  websiteCare: string;
  googleVisibility: string;
  contentSupport: string;
  additionalPages: string;
  additionalLanguages: string;

  from: string;
  page: string;
  language: string;

  includes: string;
  removeLabel: string;
  addLabel: string;
}
