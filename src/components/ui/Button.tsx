// ─── Button ───────────────────────────────────────────────────────────────────
// Reusable orange CTA button. Replaces repeated inline <a> styling across sections.
// Usage:
//   <Button href={EVENT.registerUrl}>Register Now</Button>
//   <Button href="#about" external={false} size="lg">Learn More →</Button>

import { ReactNode } from "react";

interface ButtonProps {
  href:       string;
  children:   ReactNode;
  size?:      "sm" | "md" | "lg";
  external?:  boolean;
  className?: string;
}

const sizes = {
  sm: "px-6  py-2.5 text-[12px]",
  md: "px-8  py-3.5 text-[13px]",
  lg: "px-10 py-4   text-[14px]",
};

export default function Button({
  href,
  children,
  size      = "md",
  external  = true,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`
        inline-flex items-center gap-2
        ${sizes[size]}
        rounded-full font-semibold uppercase tracking-[0.07em]
        bg-orange text-white
        hover:bg-orange-light transition-all duration-200
        shadow-[0_0_28px_rgba(244,123,32,0.4)]
        hover:shadow-[0_0_40px_rgba(244,123,32,0.6)]
        hover:scale-[1.02] active:scale-[0.98]
        ${className}
      `}
    >
      {children}
    </a>
  );
}
