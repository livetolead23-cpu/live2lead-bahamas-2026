"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BICAAccreditation() {
  const { ref, inView } = useScrollAnimation("-80px");

  return (
    <section className="w-full" style={{ background: "#F97316" }}>
      <div ref={ref} className="container-site py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left — Badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-center md:items-start gap-1 flex-shrink-0"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-navy/60">
              Officially Accredited By
            </span>
            <span className="text-[42px] md:text-[56px] font-black text-navy leading-none tracking-tight">
              BICA
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-navy/70">
              Bahamas Institute of Chartered Accountants
            </span>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-navy/20 flex-shrink-0" />
          <div className="block md:hidden h-px w-24 bg-navy/20 flex-shrink-0" />

          {/* Center — Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[72px] md:text-[88px] font-black text-navy leading-none">6.60</span>
            <span className="text-[13px] font-black uppercase tracking-[0.18em] text-navy/70">
              Approved CPD Hours
            </span>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-navy/20 flex-shrink-0" />
          <div className="block md:hidden h-px w-24 bg-navy/20 flex-shrink-0" />

          {/* Right — Copy */}
          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[15px] text-navy/80 leading-[1.7] max-w-[340px] text-center md:text-left"
          >
            Live2Lead Bahamas 2026 has been officially accredited by the Bahamas Institute of
            Chartered Accountants. <strong className="text-navy">BICA members who attend will receive
            approved CPD credit</strong> toward their annual requirement.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
