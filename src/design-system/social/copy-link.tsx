import type { ButtonHTMLAttributes } from "react";

import { Link } from "lucide-react";

import { Button } from "../primitives";

export interface CopyLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
}

export function CopyLink({
  url,
  onClick,
  ...props
}: CopyLinkProps) {
  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    await navigator.clipboard.writeText(url);

    onClick?.(event);
  }

  return (
    <Button
      onClick={handleClick}
      {...props}
    >
      <Link className="mr-2 size-4" />
      Copy link
    </Button>
  );
}
