"use client";

import type { ReactNode } from "react";

import {
  type HTMLMotionProps,
  motion,
  useReducedMotion,
} from "motion/react";

import { cn } from "@/lib/utils";

export interface RevealProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Content to reveal.
   */
  children?: ReactNode;

  /**
   * Delay before the animation starts (seconds).
   */
  delay?: number;

  /**
   * Vertical offset in pixels.
   */
  y?: number;

  /**
   * Horizontal offset in pixels.
   */
  x?: number;

  /**
   * Scale applied before revealing.
   */
  scale?: number;

  /**
   * Animate only once.
   */
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 16,
  scale = 1,
  once = true,
  transition,
  viewport,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        x,
        y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount: 0.2,
        ...viewport,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
