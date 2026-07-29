"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EXHIBITORS = [
  { name: "BTC",                logo: "/images/exhibitors/btc.png",               w: 160, h: 72 },
  { name: "Keller Williams",    logo: "/images/exhibitors/kellerwilliams.png",    w: 160, h: 72 },
  { name: "ScotiaBank",         logo: "/images/exhibitors/scotiabank.png",         w: 160, h: 72 },
  { name: "Colina",             logo: "/images/exhibitors/colina.png",             w: 160, h: 72 },
  { name: "Bold Pineapple",     logo: "/images/exhibitors/boldpineapple.png",      w: 188, h: 92 },
  { name: "Registrar General",  logo: "/images/exhibitors/registrargeneral.png",   w: 160, h: 72 },
  { name: "SBDC Bahamas",       logo: "/images/exhibitors/SBDC.png",               w: 160, h: 72 },
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
          {EXHIBITORS.map(({ name, logo, w, h }, i) => (
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
              <div className="relative" style={{ width: `${w}px`, height: `${h}px` }}>
                <Image src={logo} alt={name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="my-14 h-px w-full max-w-[600px] mx-auto"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Exhibitor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center"
        >
          <p className="text-[15px] text-white/40 mb-4">
            Interested in exhibiting at Live2Lead Bahamas 2026?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=livetolead23@gmail.com&su=Exhibitor%20Inquiry%20-%20Live2Lead%20Bahamas%202026"
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
