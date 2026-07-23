"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EXHIBITORS = [
  { name: "BTC",            logo: "/images/exhibitors/btc.png" },
  { name: "Keller Williams", logo: "/images/exhibitors/kellerwilliams.png" },
  { name: "ScotiaBank",     logo: "/images/exhibitors/scotiabank.png" },
  { name: "Colina",         logo: "/images/exhibitors/colina.png" },
];

export default function Exhibitors() {
  const { ref, inView } = useScrollAnimation("-80px");

  return (
    <section id="exhibitors" className="bg-navy section-py">
      <div ref={ref} className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 flex flex-col gap-4 items-center"
        >
          <span className="eyebrow">On the Floor</span>
          <h2 className="text-[40px] md:text-[48px] font-black leading-[1.08] text-white tracking-tight">
            Exhibitors
          </h2>
          <p className="text-[17px] text-white/50 max-w-[500px] leading-[1.65]">
            Leading organisations showcasing their products and services at Live2Lead Bahamas 2026.
          </p>
        </motion.div>

        {/* Exhibitor Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {EXHIBITORS.map(({ name, logo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="flex items-center justify-center rounded-2xl overflow-hidden"
              style={{
                background: "#ffffff",
                width: "200px",
                height: "100px",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.28)",
              }}
            >
              <div className="relative w-[160px] h-[72px]">
                <Image src={logo} alt={name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
