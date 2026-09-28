"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SHRMAccreditation() {
  const { ref, inView } = useScrollAnimation("-80px");

  return (
    <section className="w-full" style={{ background: "#1B3A6B" }}>
      <div ref={ref} className="container-site py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left — Badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-center md:items-start gap-1 flex-shrink-0"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white/50">
              Recertification Credits
            </span>
            <span className="text-[42px] md:text-[56px] font-black text-white leading-none tracking-tight">
              SHRM
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
              Society for Human Resource Management
            </span>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-white/15 flex-shrink-0" />
          <div className="block md:hidden h-px w-24 bg-white/15 flex-shrink-0" />

          {/* Center — PDCs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[72px] md:text-[88px] font-black text-orange leading-none">PDCs</span>
            <span className="text-[13px] font-black uppercase tracking-[0.18em] text-white/60">
              Professional Development Credits
            </span>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-white/15 flex-shrink-0" />
          <div className="block md:hidden h-px w-24 bg-white/15 flex-shrink-0" />

          {/* Right — Copy */}
          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[15px] text-white/70 leading-[1.7] max-w-[340px] text-center md:text-left"
          >
            Live2Lead Bahamas 2026 has been approved for{" "}
            <strong className="text-white">SHRM recertification credits</strong>. HR professionals
            who attend can apply this event toward their SHRM-CP or SHRM-SCP credential renewal.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
