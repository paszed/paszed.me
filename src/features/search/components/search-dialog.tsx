"use client";

import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
} from "@/design-system";

interface SearchDialogProps {
  open: boolean;
  onClose(): void;
  children: ReactNode;
}

export function SearchDialog({
  open,
  onClose,
  children,
}: SearchDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onClose();
        }
      }}
    >
      <DialogContent className="top-24 max-w-2xl translate-y-0">
        {children}
      </DialogContent>
    </Dialog>
  );
}
