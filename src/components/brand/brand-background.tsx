"use client";

import { ThemedLion } from "@/components/theme/themed-lion";

export function BrandBackground() {
  return (
    <>
      {/* Lion */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="relative h-[900px] w-[900px]">
            <ThemedLion />
          </div>
        </div>
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      {/* Radial glow */}
      <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-400/10" />
    </>
  );
}
