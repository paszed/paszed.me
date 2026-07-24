"use client";

import type { ReactNode } from "react";

import {
  type HTMLMotionProps,
  type Variants,
  motion,
  useReducedMotion,
} from "motion/react";

import { cn } from "@/lib/utils";

export interface StaggerProps
  extends HTMLMotionProps<"div"> {
  /**
   * Delay before the parent animation begins.
   */
  delay?: number;

  /**
   * Delay between children (seconds).
   */
  stagger?: number;

  /**
   * Animate only once.
   */
  once?: boolean;
}

const container: Variants = {
  hidden: {},

  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const child: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
  viewport,
  ...props
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children as ReactNode}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
        ...viewport,
      }}
      transition={{
        delay,
      }}
      {...props}
    >
      {Array.isArray(children)
        ? children.map((childNode, index) => (
            <motion.div
              key={index}
              variants={child}
            >
              {childNode}
            </motion.div>
          ))
        : (
          <motion.div variants={child}>
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}
