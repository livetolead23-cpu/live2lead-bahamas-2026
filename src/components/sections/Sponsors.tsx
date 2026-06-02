"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Placeholder sponsor tiers — replace logos with actual Image components ──
const TIERS = [
  {
    tier:  "Presenting Sponsor",
    color: "text-orange-light",
    sponsors: ["Sponsor Name"],
  },
  {
    tier:  "Gold Sponsors",
    color: "text-white/60",
    sponsors: ["Sponsor A", "Sponsor B", "Sponsor C"],
  },
  {
    tier:  "Supporting Sponsors",
    color: "text-white/40",
    sponsors: ["Sponsor D", "Sponsor E", "Sponsor F", "Sponsor G"],
  },
];

// Placeholder logo card — replace content with <Image /> once logos are provided
function SponsorPlaceholder({ name, size = "md" }: { name: string; size?: "lg" | "md" | "sm" }) {
  const heights = { lg: "h-16", md: "h-12", sm: "h-10" };
  const pads    = { lg: "px-10 py-6", md: "px-8 py-4", sm: "px-6 py-4" };
  return (
    <div
      className={`
        glass-card rounded-xl ${pads[size]}
        flex items-center justify-center
        hover:border-white/25 transition-all duration-300
        group cursor-default
      `}
    >
      <span
        className={`
          ${heights[size]}
          font-semibold text-white/25
          group-hover:text-white/50 transition-colors duration-300
          flex items-center text-[13px] uppercase tracking-[0.1em]
        `}
      >
        {name}
      </span>
    </div>
  );
}

export default function Sponsors() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sponsors" className="bg-navy-mid section-py">
      <div ref={ref} className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col gap-4 items-center"
        >
          <span className="eyebrow">Community Partners</span>
          <h2 className="text-[40px] md:text-[48px] font-black leading-[1.08] text-white tracking-tight">
            Our Sponsors
          </h2>
          <p className="text-[17px] text-white/50 max-w-[500px] leading-[1.65]">
            Proud partners who believe in empowering the next generation of Caribbean leaders.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="flex flex-col gap-14">
          {TIERS.map(({ tier, color, sponsors }, ti) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ti * 0.12 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/8" />
                <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${color}`}>
                  {tier}
                </span>
                <div className="h-px flex-1 bg-white/8" />
              </div>

              <div
                className={[
                  "flex flex-wrap justify-center gap-4",
                  ti === 0 ? "max-w-[360px] mx-auto" : "",
                ].join(" ")}
              >
                {sponsors.map((name) => (
                  <SponsorPlaceholder
                    key={name}
                    name={name}
                    size={ti === 0 ? "lg" : ti === 1 ? "md" : "sm"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 text-center"
        >
          <p className="text-[15px] text-white/40 mb-4">
            Interested in sponsoring Live2Lead Bahamas 2026?
          </p>
          <a
            href={`mailto:info@hephzibahbahamas.com?subject=Sponsorship Inquiry — Live2Lead Bahamas 2026`}
            className="
              inline-flex items-center gap-2
              text-[13px] font-semibold uppercase tracking-[0.07em]
              text-orange hover:text-orange-light
              border-b border-orange/40 hover:border-orange-light
              pb-0.5 transition-colors duration-200
            "
          >
            Get in Touch →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
