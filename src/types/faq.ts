export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  description: string;
  items: readonly FAQItem[];
}
