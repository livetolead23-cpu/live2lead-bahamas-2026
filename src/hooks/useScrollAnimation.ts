"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(margin = "-60px") {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as any }); // eslint-disable-line @typescript-eslint/no-explicit-any
  return { ref, inView };
}
