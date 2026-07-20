"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GOLD_CORPORATE = [
  { name: "Sagoma Construction Ltd.", logo: "/images/sponsors/sagoma.png" },
];

const GOLD_HOSPITALITY = [
  { name: "Baha Mar", logo: "/images/sponsors/bahamar.png" },
];

function SponsorCard({ name, logo }: { name: string; logo: string | null }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ duration: 0.22 }}
      className="relative inline-flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        background: "#ffffff",
        padding: "12px 16px",
        boxShadow:
          "0 0 0 1px rgba(244,123,32,0.35), 0 8px 40px rgba(0,0,0,0.35), 0 0 60px rgba(244,123,32,0.12)",
      }}
    >
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={160}
          height={60}
          className="object-contain"
          style={{ display: "block" }}
        />
      ) : (
        <p className="text-[16px] font-bold text-navy tracking-wide text-center leading-snug px-4 py-2">
          {name}
        </p>
      )}
    </motion.div>
  );
}

function SponsorTier({
  label,
  sponsors,
  delay,
  inView,
}: {
  label: string;
  sponsors: { name: string; logo: string | null }[];
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col items-center gap-6"
    >
      <div className="flex items-center gap-4 w-full max-w-[500px]">
        <div className="h-px flex-1" style={{ background: "rgba(244,123,32,0.25)" }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange whitespace-nowrap">
          {label}
        </span>
        <div className="h-px flex-1" style={{ background: "rgba(244,123,32,0.25)" }} />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.map(({ name, logo }) => (
          <SponsorCard key={name} name={name} logo={logo} />
        ))}
      </div>
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

        {/* Sponsor Tiers */}
        <div className="flex flex-col gap-12">
          <SponsorTier
            label="Gold Corporate Partner"
            sponsors={GOLD_CORPORATE}
            delay={0.1}
            inView={inView}
          />
          <SponsorTier
            label="Gold Hospitality Partner"
            sponsors={GOLD_HOSPITALITY}
            delay={0.22}
            inView={inView}
          />
        </div>

        {/* Divider */}
        <div
          className="my-14 h-px w-full max-w-[600px] mx-auto"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center"
        >
          <p className="text-[15px] text-white/40 mb-4">
            Interested in sponsoring Live2Lead Bahamas 2026?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=livetolead23@gmail.com&su=Sponsorship%20Inquiry%20-%20Live2Lead%20Bahamas%202026"
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
