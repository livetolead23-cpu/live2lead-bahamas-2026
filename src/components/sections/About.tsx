"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { EVENT } from "@/lib/constants";

const stats = [
  { number: "11+",  label: "Speakers" },
  { number: "1",    label: "Unforgettable Day" },
  { number: "500+", label: "Expected Attendees" },
  { number: "2",    label: "International Voices" },
];

export default function About() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-surface-gray section-py">
      <div ref={ref} className="container-site">

        {/* ── Stats strip ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                flex flex-col items-center text-center gap-2
                p-8 rounded-2xl
                bg-white border border-navy/8
                shadow-[0_2px_16px_rgba(10,22,40,0.06)]
              "
            >
              <span className="text-[48px] font-black leading-none text-gradient-orange">
                {number}
              </span>
              <span className="text-[13px] font-medium text-navy/60 uppercase tracking-[0.1em]">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Body content ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="eyebrow text-orange mb-3 block">About the Event</span>
              <h2 className="text-[40px] md:text-[48px] font-black leading-[1.08] text-navy tracking-tight">
                The Conference That{" "}
                <span className="text-gradient-orange">Changes Everything</span>
              </h2>
            </div>

            <p className="text-[16px] leading-[1.75] text-navy/65">
              Live2Lead Bahamas 2026 is the Caribbean's most anticipated leadership event —
              a full-day immersive experience bringing together Bahamas' most dynamic
              executives, entrepreneurs, and emerging leaders under one roof.
            </p>
            <p className="text-[16px] leading-[1.75] text-navy/65">
              Hosted by <strong className="text-navy font-semibold">Hephzibah Human Capital Solutions</strong>,
              this year's conference centres on a single powerful theme:{" "}
              <em className="font-semibold text-orange not-italic">THE LEGACY CODE</em> —
              what kind of leader will you be remembered as?
            </p>
            <p className="text-[16px] leading-[1.75] text-navy/65">
              Whether you are leading a company, managing a team, building a business, or
              discovering your leadership voice, Live2Lead Bahamas 2026 is the environment
              that will challenge you, equip you, and inspire you to lead at your absolute best.
            </p>

            <div className="flex flex-col gap-3 pt-2 pl-4 border-l-2 border-orange">
              <p className="text-[15px] font-semibold text-navy">
                📅 {EVENT.date}
              </p>
              <p className="text-[15px] font-medium text-navy/60">
                📍 {EVENT.venue}, {EVENT.city}
              </p>
            </div>
          </motion.div>

          {/* Right: split card — photo top, theme text bottom */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.35 }}
          >
            <div className="rounded-3xl overflow-hidden flex flex-col shadow-[0_8px_48px_rgba(10,22,40,0.18)]">

              {/* ── Top: Patrice graphic asset — zoomed in ─────────── */}
              <div className="relative w-full overflow-hidden" style={{ height: "380px" }}>
                <Image
                  src="/images/gallery/photo-15.jpg"
                  alt="Patrice G. Taylor — Live2Lead Host"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 40%", transform: "scale(1.65)", transformOrigin: "center 40%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* ── Bottom: theme text panel ───────────────────────── */}
              <div
                className="flex flex-col gap-5 px-8 py-7"
                style={{
                  background: "linear-gradient(135deg, #0F2347 0%, #162D55 100%)",
                }}
              >
                <div>
                  <span className="eyebrow text-orange block mb-3">This Year's Theme</span>
                  <h3 className="text-[34px] md:text-[40px] font-black text-white leading-[1.05] tracking-tight">
                    {EVENT.theme}
                  </h3>
                </div>

                <p className="text-[16px] text-orange font-semibold italic leading-snug border-l-2 border-orange pl-4">
                  "{EVENT.tagline}"
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {["Lead Yourself", "Influence Others",
                    "Build Culture",  "Leave a Legacy"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] font-medium text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
