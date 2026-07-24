"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Drawer = DialogPrimitive.Root;

export const DrawerTrigger = DialogPrimitive.Trigger;

export const DrawerPortal = DialogPrimitive.Portal;

export const DrawerClose = DialogPrimitive.Close;

export const DrawerTitle = DialogPrimitive.Title;

export const DrawerDescription = DialogPrimitive.Description;

export const DrawerOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
      className,
    )}
    {...props}
  />
));

DrawerOverlay.displayName =
  DialogPrimitive.Overlay.displayName;

export interface DrawerContentProps
  extends ComponentPropsWithoutRef<
    typeof DialogPrimitive.Content
  > {
  side?: "left" | "right" | "top" | "bottom";
}

export const DrawerContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(
  (
    {
      className,
      side = "right",
      children,
      ...props
    },
    ref,
  ) => {
    const sideClasses = {
      right:
        "right-0 top-0 h-full w-full max-w-md border-l",
      left:
        "left-0 top-0 h-full w-full max-w-md border-r",
      top:
        "left-0 top-0 w-full border-b",
      bottom:
        "bottom-0 left-0 w-full border-t",
    };

    return (
      <DrawerPortal>
        <DrawerOverlay />

        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 bg-background shadow-2xl",
            "focus:outline-none",
            sideClasses[side],
            className,
          )}
          {...props}
        >
          {children}

          <DrawerClose
            className={cn(
              "absolute right-4 top-4 rounded-md p-2",
              "opacity-70 transition-opacity hover:opacity-100",
              "focus:outline-none focus:ring-2 focus:ring-ring",
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">
              Close
            </span>
          </DrawerClose>
        </DialogPrimitive.Content>
      </DrawerPortal>
    );
  },
);

DrawerContent.displayName =
  DialogPrimitive.Content.displayName;

export function DrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 p-6",
        className,
      )}
      {...props}
    />
  );
}

export function DrawerBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex-1 overflow-y-auto p-6",
        className,
      )}
      {...props}
    />
  );
}

export function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t p-6",
        className,
      )}
      {...props}
    />
  );
}
