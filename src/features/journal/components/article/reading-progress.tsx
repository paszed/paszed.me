"use client";

import { useReadingProgress } from "@/features/journal/hooks/use-reading-progress";

export function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-accent transition-[width] duration-100"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
