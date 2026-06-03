"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Check, Users, User } from "lucide-react";
import { EVENT } from "@/lib/constants";

// ─── Ticket data ──────────────────────────────────────────────────────
const TICKETS = [
  {
    id:          "individual",
    label:       "VIP Individual",
    badge:       "Most Popular",
    price:       "BSD $225",
    per:         "per person",
    icon:        User,
    description: "Your personal seat at the Caribbean's premier leadership conference.",
    perks: [
      "Full-day conference access",
      "All keynote & breakout sessions",
      "Executive networking experience",
      "Conference materials included",
      "Baha Mar Convention Center",
    ],
    featured: true,
  },
  {
    id:          "group",
    label:       "VIP Group",
    badge:       "Best Value",
    price:       "BSD $199",
    per:         "per person · min 10",
    icon:        Users,
    description: "Bring your team and invest in your organization's leadership legacy.",
    perks: [
      "Full-day conference access",
      "All keynote & breakout sessions",
      "Executive networking experience",
      "Conference materials included",
      "Minimum 10 persons per group",
    ],
    featured: false,
  },
] as const;

// ─── Ticket Card ──────────────────────────────────────────────────────
function TicketCard({
  ticket,
  delay,
}: {
  ticket: (typeof TICKETS)[number];
  delay: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon   = ticket.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative flex flex-col rounded-2xl overflow-hidden flex-1 min-w-0"
      style={{
        background: ticket.featured
          ? "linear-gradient(145deg, rgba(244,123,32,0.18) 0%, rgba(10,22,40,0.92) 40%)"
          : "rgba(255,255,255,0.04)",
        border: ticket.featured
          ? "1px solid rgba(244,123,32,0.45)"
          : "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(16px)",
        boxShadow: ticket.featured
          ? "0 0 48px rgba(244,123,32,0.20), inset 0 1px 0 rgba(244,123,32,0.15)"
          : "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Badge */}
      <div className="px-6 pt-6 pb-0 flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
          style={{
            background: ticket.featured ? "rgba(244,123,32,0.2)" : "rgba(255,255,255,0.08)",
            color:      ticket.featured ? "#F47B20" : "rgba(255,255,255,0.45)",
            border:     ticket.featured ? "1px solid rgba(244,123,32,0.35)" : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {ticket.badge}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: ticket.featured ? "rgba(244,123,32,0.15)" : "rgba(255,255,255,0.06)",
          }}
        >
          <Icon size={16} className={ticket.featured ? "text-orange" : "text-white/40"} />
        </div>
      </div>

      {/* Price block */}
      <div className="px-6 pt-5 pb-4 border-b" style={{ borderColor: ticket.featured ? "rgba(244,123,32,0.2)" : "rgba(255,255,255,0.07)" }}>
        <p className="text-[13px] font-semibold text-white/60 mb-1">{ticket.label}</p>
        <div className="flex items-baseline gap-2">
          <span
            className="text-[44px] font-black leading-none"
            style={{ color: ticket.featured ? "#F47B20" : "#ffffff" }}
          >
            {ticket.price}
          </span>
        </div>
        <p className="text-[12px] text-white/40 mt-1 uppercase tracking-[0.1em]">{ticket.per}</p>
        <p className="text-[13px] text-white/55 mt-3 leading-[1.6]">{ticket.description}</p>
      </div>

      {/* Perks */}
      <div className="px-6 py-5 flex flex-col gap-3 flex-1">
        {ticket.perks.map((perk) => (
          <div key={perk} className="flex items-start gap-2.5">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: ticket.featured ? "rgba(244,123,32,0.2)" : "rgba(255,255,255,0.06)" }}
            >
              <Check size={9} className={ticket.featured ? "text-orange" : "text-white/40"} />
            </div>
            <span className="text-[13px] text-white/65 leading-snug">{perk}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 pt-2">
        <a
          href={EVENT.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full inline-flex items-center justify-center gap-2
            px-6 py-3.5 rounded-xl
            text-[13px] font-semibold uppercase tracking-[0.07em]
            transition-all duration-200
            hover:scale-[1.02] active:scale-[0.98]
          "
          style={
            ticket.featured
              ? {
                  background: "linear-gradient(135deg, #F47B20, #FF9A3C)",
                  color: "#fff",
                  boxShadow: "0 0 28px rgba(244,123,32,0.45)",
                }
              : {
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }
          }
        >
          Secure Your Seat
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────
export default function RegisterCTA() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="register" className="section-py relative overflow-hidden">

      {/* Background photo */}
      <Image
        src="/images/gallery/photo-16.jpg"
        alt="Live2Lead Bahamas — Conference"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.78) 50%, rgba(10,22,40,0.92) 100%)",
        }}
      />

      {/* Orange centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(244,123,32,0.10) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="container-site relative z-10">
        <div className="max-w-[960px] mx-auto flex flex-col items-center gap-10">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <span className="eyebrow">VIP Early Access — June 2026 Only</span>
            <h2
              className="text-[40px] sm:text-[52px] md:text-[60px] font-black leading-[1.04] text-white tracking-tight"
            >
              Your Legacy{" "}
              <span className="text-gradient-orange">Starts Here</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-[520px] leading-[1.7]">
              Secure your seat at the Caribbean&apos;s most anticipated leadership conference.
              VIP pricing is available this month only.
            </p>
          </motion.div>

          {/* Ticket Cards */}
          <div className="w-full flex flex-col sm:flex-row gap-5">
            {TICKETS.map((ticket, i) => (
              <TicketCard key={ticket.id} ticket={ticket} delay={0.15 + i * 0.12} />
            ))}
          </div>

          {/* Event details chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2">
              <Calendar size={14} className="text-orange" />
              <span className="text-[13px] font-medium text-white/75">{EVENT.date}</span>
            </div>
            <div className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2">
              <MapPin size={14} className="text-orange" />
              <span className="text-[13px] font-medium text-white/75">
                {EVENT.venue}, {EVENT.city}
              </span>
            </div>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-[12px] text-white/25 uppercase tracking-[0.12em]"
          >
            Hosted by {EVENT.hostedBy}
          </motion.p>

        </div>
      </div>
    </section>
  );
}
