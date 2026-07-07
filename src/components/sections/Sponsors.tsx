"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Sponsor data — set logo to null until asset is provided
const PRESENTING_SPONSORS = [
  { name: "Sagoma Construction Ltd.", logo: "/images/sponsors/sagoma.png" },
];

// SponsorCard handles both real logo and name-only fallback
function SponsorCard({
  name,
  logo,
  size = "lg",
}: {
  name: string;
  logo: string | null;
  size?: "lg" | "md" | "sm";
}) {
  const cardH    = { lg: "h-36",  md: "h-28",  sm: "h-20" };
  const imgH     = { lg: 80,      md: 56,      sm: 40 };
  const textSize = { lg: "text-[18px]", md: "text-[15px]", sm: "text-[13px]" };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`relative flex flex-col items-center justify-center gap-3 ${cardH[size]} w-full max-w-[420px] rounded-2xl px-10 cursor-default`}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(244,123,32,0.30)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 0 48px rgba(244,123,32,0.10), inset 0 1px 0 rgba(244,123,32,0.10)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
        style={{ background: "radial-gradient(circle at top left, rgba(244,123,32,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom right, rgba(244,123,32,0.12) 0%, transparent 70%)" }}
      />

      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={imgH[size] * 3}
          height={imgH[size]}
          className="object-contain relative z-10"
          style={{ maxHeight: imgH[size] }}
        />
      ) : (
        <div className="flex flex-col items-center gap-2 relative z-10">
          <div className="w-10 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(244,123,32,0.6), transparent)" }} />
          <p className={`${textSize[size]} font-bold text-white/90 text-center tracking-wide leading-snug`}>
            {name}
          </p>
          <div className="w-10 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(244,123,32,0.6), transparent)" }} />
        </div>
      )}
    </motion.div>
  );
}

export default function Sponsors() {
  const { ref, inView } = useScrollAnimation("-80px");

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

        {/* Presenting Sponsor Tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-4 w-full max-w-[500px]">
            <div className="h-px flex-1" style={{ background: "rgba(244,123,32,0.25)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange">
              Presenting Sponsor
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(244,123,32,0.25)" }} />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {PRESENTING_SPONSORS.map(({ name, logo }) => (
              <SponsorCard key={name} name={name} logo={logo} size="lg" />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-14 h-px w-full max-w-[600px] mx-auto" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[15px] text-white/40 mb-4">
            Interested in sponsoring Live2Lead Bahamas 2026?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=livetolead23@gmail.com&su=Sponsorship%20Inquiry%20%E2%80%94%20Live2Lead%20Bahamas%202026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.07em] text-orange hover:text-orange-light border-b border-orange/40 hover:border-orange-light pb-0.5 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
