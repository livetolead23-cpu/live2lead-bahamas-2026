"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EVENT } from "@/lib/constants";

const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Hephzibahhrtrainganddevelopment/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hephzibahhr/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://bs.linkedin.com/in/hephzibah-human-capital-solutions-6ab1a21b9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0F2347 60%, #0A1628 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(244,123,32,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="container-site relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow">Get In Touch</span>
            <h2 className="text-[40px] md:text-[52px] font-black text-white leading-[1.05] tracking-tight">
              Let's Connect
            </h2>
            <p className="text-[16px] text-white/60 leading-[1.8] max-w-[480px]">
              Have questions about Live2Lead Bahamas 2026, sponsorship opportunities,
              or want to learn more about Hephzibah Human Capital Solutions?
              We would love to hear from you.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:info@hephtraining.com?subject=Live2Lead Bahamas 2026 Enquiry"
              className="
                self-start mt-2
                inline-flex items-center gap-3
                px-8 py-3.5 rounded-full
                text-[13px] font-semibold uppercase tracking-[0.07em]
                bg-orange text-white
                hover:bg-orange-light transition-all duration-200
                shadow-[0_0_28px_rgba(244,123,32,0.4)]
                hover:shadow-[0_0_40px_rgba(244,123,32,0.6)]
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Us a Message
            </a>

            {/* Register link */}
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-[14px] font-semibold text-orange hover:text-orange-light transition-colors duration-200 border-b border-orange/40 hover:border-orange-light pb-0.5"
            >
              Register for Live2Lead 2026 →
            </a>
          </motion.div>

          {/* Right — Social + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Social links */}
            <div className="flex flex-col gap-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 font-semibold">
                Follow Hephzibah
              </p>
              <div className="flex gap-4">
                {SOCIALS.map(({ name, url, icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="
                      w-12 h-12 rounded-xl flex items-center justify-center
                      text-white/60 hover:text-white
                      transition-all duration-200
                      hover:scale-110
                    "
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-orange font-semibold">
                  Event Date
                </p>
                <p className="text-[15px] font-bold text-white">{EVENT.date}</p>
                <p className="text-[13px] text-white/45">{EVENT.city}</p>
              </div>

              <div
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-orange font-semibold">
                  Venue
                </p>
                <p className="text-[15px] font-bold text-white">Baha Mar</p>
                <p className="text-[13px] text-white/45">Convention Center</p>
              </div>

              <div
                className="rounded-2xl p-5 flex flex-col gap-2 sm:col-span-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-orange font-semibold">
                  Hosted By
                </p>
                <a
                  href="https://hephtraining.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-black italic text-white hover:text-orange transition-colors duration-200"
                  style={{
                    textShadow: "0 0 16px rgba(255,255,255,0.3)",
                  }}
                >
                  Hephzibah Human Capital Solutions
                </a>
                <p className="text-[13px] text-white/45">hephtraining.com</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
