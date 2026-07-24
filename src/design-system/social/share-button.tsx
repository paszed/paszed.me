import type { ButtonHTMLAttributes } from "react";

import { Share2 } from "lucide-react";

import { Button } from "../primitives";

export type ShareButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ShareButton({
  children = "Share",
  ...props
}: ShareButtonProps) {
  return (
    <Button {...props}>
      <Share2 className="mr-2 size-4" />
      {children}
    </Button>
  );
}
