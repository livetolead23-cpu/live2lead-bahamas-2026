"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { EVENT } from "@/lib/constants";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.8, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background + overlays ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Dark center-heavy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.72) 50%, rgba(10,22,40,0.92) 100%)",
          }}
        />
        {/* Subtle orange glow top-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 20% 0%, rgba(244,123,32,0.10) 0%, transparent 65%)",
          }}
        />
        {/* Bottom fade to navy */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(10,22,40,0.95) 80%, #0A1628 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 pt-[80px]">
        <div className="container-site flex-1 flex flex-col justify-center items-center text-center pt-[80px]">

          {/* Date + location badge */}
          <motion.div {...fadeIn(0.1)} className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-orange" />
            <span className="eyebrow">October 2, 2026 · Nassau, Bahamas</span>
            <span className="h-px w-6 bg-orange" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="
              text-[38px] sm:text-[58px] lg:text-[88px] xl:text-[100px]
              font-black leading-[1.0] tracking-tight
              max-w-[900px]
            "
          >
            <span style={{ color: "#4FC8E8" }}>Live</span>
            <span style={{ color: "#E8392A" }}>2</span>
            <span style={{ color: "#4FC8E8" }}>Lead</span>
            {" "}
            <span className="text-gradient-orange">Bahamas 2026</span>
          </motion.h1>

          {/* Theme + tagline */}
          <motion.div {...fadeUp(0.3)} className="mt-6 flex flex-col gap-2 items-center">
            <p className="text-[20px] md:text-[24px] font-bold text-white tracking-tight">
              {EVENT.theme}
            </p>
            <p className="text-[15px] md:text-[17px] font-medium text-white/55 italic">
              {EVENT.tagline}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-9 py-4 rounded-full
                text-[14px] font-semibold uppercase tracking-[0.07em]
                bg-orange text-white
                hover:bg-orange-light transition-all duration-200
                shadow-[0_0_36px_rgba(244,123,32,0.50)]
                hover:shadow-[0_0_48px_rgba(244,123,32,0.70)]
                hover:scale-[1.02] active:scale-[0.98]
              "
            >
              Register Now
              <ArrowRight size={16} />
            </a>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                inline-flex items-center gap-2
                text-[14px] font-medium text-white/65
                hover:text-white transition-colors duration-200
                border-b border-white/20 hover:border-white/50 pb-0.5
              "
            >
              Learn More
            </button>
          </motion.div>

          {/* Countdown — full width */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-14 w-full max-w-[780px]"
          >
            <CountdownTimer />
          </motion.div>

          {/* Hosted by badge */}
          <motion.div
            {...fadeIn(0.9)}
            className="mt-10 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left"
          >
            <span className="text-[12px] uppercase tracking-[0.18em] text-white/60 font-semibold">
              Hosted by
            </span>
            <a
              href="https://hephtraining.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] sm:text-[24px] font-black italic text-white transition-all duration-300 hover:text-orange"
              style={{
                textShadow: "0 0 18px rgba(255,255,255,0.45), 0 0 40px rgba(255,255,255,0.2)",
              }}
            >
              Hephzibah Capital Solutions
            </a>
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col items-center gap-2 pb-8 text-white/30 text-[11px] uppercase tracking-[0.15em]"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
