import Link from "next/link";

import { site } from "@/config/site";
import { Text } from "@/design-system";

export function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name} homepage`}
      className="group inline-flex items-center font-mono text-lg font-semibold tracking-tight"
    >
      <Text
        as="span"
        className="transition-colors duration-200 group-hover:text-accent"
      >
        {site.brand}
      </Text>

      <span
        aria-hidden="true"
        className="ml-0.5 text-accent transition-opacity duration-200 group-hover:opacity-80"
      >
        _
      </span>
    </Link>
  );
}
