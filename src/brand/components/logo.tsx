import Link from "next/link";

import { brand } from "@/brand/config/brand";

export interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({
  className,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${brand.name} homepage`}
      data-testid="brand-logo"
      className={className}
    >
      <span className="font-mono text-lg font-semibold tracking-tight">
        {brand.wordmark}
      </span>
    </Link>
  );
}
