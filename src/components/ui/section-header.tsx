import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { H2 } from "./heading";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  actions,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        !centered &&
          "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className,
      )}
    >
      <div
        className={cn(
          "space-y-3",
          centered ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {eyebrow && (
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
        )}

        <H2>{title}</H2>

        {description && (
          <p className="text-lg leading-8 text-fg-secondary">
            {description}
          </p>
        )}
      </div>

      {!centered && actions && <div>{actions}</div>}
    </div>
  );
}
