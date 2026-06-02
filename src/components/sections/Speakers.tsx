"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SPEAKERS, type Speaker } from "@/lib/constants";

// ─── Speaker Card ─────────────────────────────────────────────────────
function SpeakerCard({
  speaker,
  delay,
  featured = false,
}: {
  speaker: Speaker;
  delay: number;
  featured?: boolean;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const roleLabel =
    speaker.role === "host"          ? "Live2Lead Host"       :
    speaker.role === "moderator"     ? "Event Moderator"      :
    speaker.role === "international" ? "International Speaker" :
                                       "Local Speaker";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={[
        "group relative rounded-2xl overflow-hidden",
        featured
          ? "col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2"
          : "",
      ].join(" ")}
    >
      {/* Photo */}
      <div
        className={[
          "relative w-full overflow-hidden bg-navy-mid",
          featured ? "h-[420px]" : "h-[280px]",
        ].join(" ")}
      >
        {speaker.photo ? (
          <Image
            src={speaker.photo}
            alt={speaker.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder gradient when no photo yet */
          <div
            className="absolute inset-0 flex items-end justify-center pb-8"
            style={{
              background:
                "linear-gradient(135deg, #0F2347 0%, #162D55 100%)",
            }}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-3xl font-black text-white/30">
                {speaker.name.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-navy via-navy/20 to-transparent
            opacity-70 group-hover:opacity-80 transition-opacity duration-300
          "
        />
      </div>

      {/* Info panel */}
      <div className="bg-navy-mid p-5 flex flex-col gap-1.5">

        {/* Role label + Virtual badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange/70">
            {roleLabel}
          </span>
          {speaker.virtual && (
            <span
              className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full"
              style={{ background: "rgba(79,200,232,0.15)", color: "#4FC8E8", border: "1px solid rgba(79,200,232,0.35)" }}
            >
              Virtual Speaker
            </span>
          )}
        </div>

        <h3 className="text-[18px] font-bold text-white leading-tight">
          {speaker.name}
        </h3>
        <p className="text-[13px] font-medium text-orange">
          {speaker.title}
        </p>
        {speaker.org && (
          <p className="text-[12px] text-white/45 font-medium">
            {speaker.org}
          </p>
        )}

        {/* Session topic — only render when topic is confirmed */}
        {speaker.role !== "host" && speaker.topic && (
          <div className="mt-3 pt-3 border-t border-white/8">
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/30 font-semibold mb-1">
              Session Topic
            </p>
            <p className="text-[13px] text-white/50 italic">
              {speaker.topic}
            </p>
          </div>
        )}

        {speaker.bio && featured && (
          <p className="text-[13px] text-white/55 leading-[1.65] mt-2 border-t border-white/8 pt-3">
            {speaker.bio}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────
export default function Speakers() {
  const headerRef    = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const host          = SPEAKERS.filter((s) => s.role === "host");
  const moderators    = SPEAKERS.filter((s) => s.role === "moderator");
  const localSpeakers = SPEAKERS.filter((s) => s.role === "local");
  const international = SPEAKERS.filter((s) => s.role === "international");

  return (
    <section id="speakers" className="bg-navy section-py">
      <div className="container-site">

        {/* ── Header ──────────────────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col gap-4 items-center"
        >
          <span className="eyebrow">Meet the Voices</span>
          <h2 className="text-[40px] md:text-[52px] font-black leading-[1.07] text-white tracking-tight">
            Featured Speakers
          </h2>
          <p className="text-[17px] text-white/55 max-w-[560px] leading-[1.65]">
            Distinguished leaders, executives, and transformational voices joining us
            for Live2Lead Bahamas 2026.
          </p>
        </motion.div>

        {/* ── Host (featured full-width card) ─────────────────────── */}
        {host.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/8" />
              <span className="eyebrow text-white/35">Your Host</span>
              <div className="h-px flex-1 bg-white/8" />
            </div>
            <div className="max-w-[480px] mx-auto">
              <SpeakerCard speaker={host[0]} delay={0} featured />
            </div>
          </div>
        )}

        {/* ── Local Speakers ───────────────────────────────────────── */}
        {localSpeakers.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/8" />
              <span className="eyebrow text-white/35">Local Speakers</span>
              <div className="h-px flex-1 bg-white/8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {localSpeakers.map((speaker, i) => (
                <SpeakerCard key={speaker.name + i} speaker={speaker} delay={i * 0.07} />
              ))}
            </div>
          </div>
        )}

        {/* ── International Speakers ───────────────────────────────── */}
        {international.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/8" />
              <span className="eyebrow text-white/35">International Speakers</span>
              <div className="h-px flex-1 bg-white/8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[640px] mx-auto">
              {international.map((speaker, i) => (
                <SpeakerCard key={speaker.name + i} speaker={speaker} delay={i * 0.1} />
              ))}
            </div>
          </div>
        )}

        {/* ── Moderator ────────────────────────────────────────────── */}
        {moderators.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/8" />
              <span className="eyebrow text-white/35">Your Moderator</span>
              <div className="h-px flex-1 bg-white/8" />
            </div>
            <div className="max-w-[480px] mx-auto">
              <SpeakerCard speaker={moderators[0]} delay={0} featured />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
