"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { EVENT, PRICING } from "@/lib/constants";
import { fadeUp, fadeIn } from "@/lib/animations";
import Button from "@/components/ui/Button";

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

          {/* Main headline — each part animates independently */}
          <h1 className="
            text-[38px] sm:text-[58px] lg:text-[88px] xl:text-[100px]
            font-black leading-[1.0] tracking-tight
            max-w-[900px]
          ">
            <motion.span
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#4FC8E8", display: "inline-block" }}
            >Live</motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#E8392A", display: "inline-block" }}
            >2</motion.span>
            <motion.span
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: "#4FC8E8", display: "inline-block" }}
            >Lead</motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="text-gradient-orange"
              style={{ display: "block" }}
            >Bahamas 2026</motion.span>
          </h1>

          {/* Theme + tagline */}
          <div className="mt-8 flex flex-col gap-3 items-center">

            {/* THIS YEAR'S THEME label */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.28em" }}
              transition={{ duration: 0.9, delay: 0.62 }}
              className="text-[12px] uppercase text-white/55 font-bold"
              style={{ display: "block" }}
            >
              This Year&apos;s Theme
            </motion.span>

            {/* THE LEGACY CODE */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-[32px] sm:text-[42px] md:text-[52px] font-black tracking-tight uppercase leading-none"
              style={{
                color: "#E8392A",
                textShadow: "0 0 40px rgba(232,57,42,0.45), 0 0 80px rgba(232,57,42,0.18)",
              }}
            >
              {EVENT.theme}
            </motion.p>

            {/* LEADyourself. INFLUENCEothers. */}
            <motion.p
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] md:text-[20px] font-black text-white tracking-wide italic"
              style={{ textShadow: "0 0 24px rgba(255,255,255,0.25)" }}
            >
              {EVENT.tagline}
            </motion.p>

          </div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="#register" external={false} size="lg">
                Register Now — {PRICING.phase} <ArrowRight size={16} />
              </Button>
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
            </div>
            <div
              className="flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: "rgba(244,123,32,0.15)",
                border: "1.5px solid rgba(244,123,32,0.55)",
                boxShadow: "0 0 24px rgba(244,123,32,0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse flex-shrink-0" />
              <p className="text-[15px] sm:text-[17px] font-bold text-orange uppercase tracking-[0.08em]">
                {PRICING.phase} Ends {PRICING.deadline} — Register Before Rates Increase
              </p>
            </div>
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
              Hephzibah Human Capital Solutions
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
