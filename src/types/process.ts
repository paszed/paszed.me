export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  title: string;
  description: string;
  steps: readonly ProcessStep[];
}
