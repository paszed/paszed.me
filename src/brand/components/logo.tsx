import Link from "next/link";

import { site } from "@/config/site";

export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name} homepage`}
      data-testid="brand-logo"
      className="group inline-flex items-center font-mono text-lg font-semibold tracking-tight"
    >
      {site.brand}

      <span
        aria-hidden="true"
        className="ml-0.5 text-accent transition-opacity duration-200 group-hover:opacity-80"
      >
        _
      </span>
    </Link>
  );
}
