"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EVENT } from "@/lib/constants";

const REASONS = [
  {
    num: "01",
    title: "World-Class Leadership Insights",
    body:  "Gain access to proven frameworks, strategies, and mindsets from the region's top executives and internationally recognized leadership authorities.",
  },
  {
    num: "02",
    title: "Actionable, Immediate Impact",
    body:  "Every session is built around practical application. You will leave with tools and playbooks you can implement in your organization the very next day.",
  },
  {
    num: "03",
    title: "Executive Networking",
    body:  "Connect with Caribbean CEOs, HR leaders, entrepreneurs, and changemakers in one room. The relationships you build here are career-defining.",
  },
  {
    num: "04",
    title: "Immersive Conference Experience",
    body:  "Live2Lead is not a lecture series — it is a full sensory leadership experience designed to challenge, inspire, and transform from the inside out.",
  },
  {
    num: "05",
    title: "Global Perspective, Local Relevance",
    body:  "International voices combined with local expertise give you a globally informed, regionally grounded view of what modern leadership demands.",
  },
  {
    num: "06",
    title: "Legacy-Driven Leadership",
    body:  "This event is built around one question: what kind of leader do you want to be remembered as? Leave with clarity, purpose, and a legacy blueprint.",
  },
  {
    num: "07",
    title: "Invest in Your Most Important Asset",
    body:  "You. One day of intentional development can redirect years of leadership. The ROI of Live2Lead is measured in the impact you create long after you leave.",
  },
  {
    num: "08",
    title: "A Premier Caribbean Event",
    body:  "Held at the world-class Baha Mar Convention Center in Nassau, Bahamas — Live2Lead Bahamas is the flagship leadership event of the Caribbean.",
  },
];

function ReasonCard({ num, title, body, delay }: { num: string; title: string; body: string; delay: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col"
    >
      {/* Header bar */}
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{ background: "linear-gradient(90deg, #F47B20 0%, #FF9A3C 100%)" }}
      >
        <span className="text-[13px] font-black text-white/60 leading-none">{num}.</span>
        <span className="text-[13px] font-black text-white uppercase tracking-[0.05em] leading-tight">
          {title}
        </span>
      </div>
      {/* Body */}
      <div className="px-5 py-5 border border-navy/10 border-t-0" style={{ background: "#F0F1F3" }}>
        <p className="text-[14px] leading-[1.75]" style={{ color: "#1e2d40" }}>{body}</p>
      </div>
    </motion.div>
  );
}

export default function WhyAttend() {
  const introRef    = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: "-60px" });

  const reasonsRef    = useRef<HTMLDivElement>(null);
  const reasonsInView = useInView(reasonsRef, { once: true, margin: "-60px" });

  return (
    <section id="why-attend" className="overflow-hidden bg-navy">

      {/* ── 1. Full-bleed conference photo strip ── */}
      <div className="relative h-[420px] md:h-[520px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery/photo-4.jpg"
          alt="Live2Lead Bahamas conference"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.55) 60%, #0A1628 100%)",
          }}
        />
      </div>

      {/* ── 2. Who Should Attend ── */}
      <div ref={introRef} className="container-site py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-[42px] md:text-[56px] font-black text-white leading-[1.0] tracking-tight uppercase">
              Who Should<br />Attend?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col gap-4 pt-2"
          >
            <p className="text-[16px] text-white/70 leading-[1.8]">
              Live2Lead Bahamas is built for visionary executives, emerging leaders, HR professionals,
              entrepreneurs, and anyone who is serious about elevating how they lead. If you are
              committed to growth, hungry for impact, and ready to invest in your leadership legacy —
              this conference was designed for you.
            </p>
            <p className="text-[16px] text-white/70 leading-[1.8]">
              Whether you lead a team of two or two thousand, Live2Lead will challenge your thinking,
              sharpen your skills, and connect you with the people and ideas that will shape your next
              season of leadership.
            </p>
          </motion.div>
        </div>

        {/* ── 3. Why Attend + past event photo ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-20 pt-16 border-t border-white/8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[42px] md:text-[56px] font-black text-white leading-[1.0] tracking-tight uppercase">
              Why<br />Attend?
            </h2>
            <p className="text-[16px] text-white/70 leading-[1.8]">
              Attend Live2Lead Bahamas 2026 to unlock powerful leadership insights, connect with
              the Caribbean's most influential executives, and walk away with strategies that will
              help you inspire change, drive innovation, and grow beyond your current limits.
            </p>
            <p className="text-[16px] text-white/70 leading-[1.8]">
              This is your opportunity to realign with your purpose, discover your legacy code, and
              take bold action toward personal and professional excellence. One day. Permanent impact.
            </p>
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                self-start mt-2
                px-8 py-3.5 rounded-full
                text-[13px] font-semibold uppercase tracking-[0.07em]
                bg-orange text-white
                hover:bg-orange-light transition-all duration-200
                shadow-[0_0_28px_rgba(244,123,32,0.4)]
              "
            >
              Secure Your Seat →
            </a>
          </motion.div>

          {/* Past event photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={introInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.5)]"
            style={{ aspectRatio: "16/10" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/photo-7.jpg"
              alt="Live2Lead Bahamas past event"
              className="w-full h-full object-cover"
            />
            {/* Play-style overlay badge */}
            <div className="absolute inset-0 flex items-end p-6"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(244,123,32,0.9)" }}
                >
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                    <path d="M1 1l10 6-10 6V1z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.08em]">
                  Live2Lead Bahamas — Past Event
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 4. 8 Reasons ── */}
      <div
        ref={reasonsRef}
        className="py-20"
        style={{ background: "linear-gradient(180deg, #0A1628 0%, #F8F8F6 120px)" }}
      >
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[52px] lg:text-[60px] font-black leading-[1.05] tracking-tight uppercase mb-14"
            style={{ color: "#0A1628" }}
          >
            8 Reasons You Cannot<br />Afford to Miss Live2Lead
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REASONS.map((r, i) => (
              <ReasonCard key={r.num} {...r} delay={i * 0.07} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 text-center"
          >
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-10 py-4 rounded-full
                text-[14px] font-semibold uppercase tracking-[0.07em]
                bg-orange text-white
                hover:bg-orange-light transition-all duration-200
                shadow-[0_0_36px_rgba(244,123,32,0.45)]
                hover:shadow-[0_0_52px_rgba(244,123,32,0.65)]
              "
            >
              Register for Live2Lead Bahamas 2026 →
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
