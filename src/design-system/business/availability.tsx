import type { HTMLAttributes } from "react";

import { Badge } from "../primitives";
import { Cluster } from "../layout";

interface AvailabilityProps
  extends HTMLAttributes<HTMLDivElement> {
  available?: boolean;
  label?: string;
}

export function Availability({
  available = true,
  label,
  ...props
}: AvailabilityProps) {
  return (
    <Cluster
      gap="sm"
      {...props}
    >
      <Badge>
        {available ? "Available" : "Unavailable"}
      </Badge>

      {label && <span>{label}</span>}
    </Cluster>
  );
}
