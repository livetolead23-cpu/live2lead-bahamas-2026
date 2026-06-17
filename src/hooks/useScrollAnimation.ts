"use client";

// ─── useScrollAnimation ───────────────────────────────────────────────────────
// Replaces the repeated useRef + useInView pattern in every section.
// Usage:
//   const { ref, inView } = useScrollAnimation();
//   <div ref={ref}> ... animate={inView ? { opacity: 1 } : {}} ...

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(margin: string = "-60px") {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  return { ref, inView };
}
