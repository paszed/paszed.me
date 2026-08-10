export interface PricingPlanCopy {
  forLabel: string;
  for: string;
  addOns: string;
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

export interface PricingContent {
  title: string;
  description: string;

  paymentLabel: string;
  paymentDescription: string;

  plans: {
    starter: PricingPlanCopy;
    business: PricingPlanCopy;
    premium: PricingPlanCopy;
  };

  upfront: string;
  from: string;
  perMonth: string;
  total: string;
  months: string;

  calculator: PricingCalculatorContent;

  noteTitle: string;
  note: string;
}

export interface AddOnCopy {
  name: string;
  for: string;
  features?: readonly string[];
  examples?: readonly string[];
}

export interface AddOnsContent {
  title: string;
  description: string;
  forLabel: string;

  items: {
    "website-care": AddOnCopy;
    "google-visibility": AddOnCopy;
    "content-support": AddOnCopy;
    "additional-pages": AddOnCopy;
    "additional-languages": AddOnCopy;
  };

  startingFrom: string;
  perMonth: string;
  perPage: string;
  perLanguage: string;
  addOnsAvailable: string;
  examples: string;
}
