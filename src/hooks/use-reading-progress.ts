"use client";

import { useEffect, useState } from "react";

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.min(
          100,
          (scrollTop / scrollHeight) * 100,
        ),
      );
    }

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      {
        passive: true,
      },
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress,
      );
  }, []);

  return progress;
}
