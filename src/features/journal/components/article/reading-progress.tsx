"use client";

import { ReadingProgressBar } from "@/design-system";

import { useReadingProgress } from "../../hooks";

export function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <ReadingProgressBar
      value={progress}
      aria-label="Reading progress"
      className="fixed inset-x-0 top-0 z-50"
    />
  );
}
