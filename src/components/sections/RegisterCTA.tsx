"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Check, Users, User, Clock } from "lucide-react";
import { EVENT, PRICING } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ─── Ticket Card ──────────────────────────────────────────────────────
interface TicketCardProps {
  id:          "individual" | "group";
  label:       string;
  badge:       string;
  priceDisplay: string;
  per:         string;
  icon:        React.ElementType;
  url:         string;
  description: string;
  perks:       string[];
  featured:    boolean;
  delay:       number;
}

function TicketCard({
  id,
  label,
  badge,
  priceDisplay,
  per,
  icon: Icon,
  url,
  description,
  perks,
  featured,
  delay,
}: TicketCardProps) {
  const { ref, inView } = useScrollAnimation("-60px");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative flex flex-col rounded-2xl overflow-hidden flex-1 min-w-0"
      style={{
        background: featured
          ? "linear-gradient(145deg, rgba(244,123,32,0.18) 0%, rgba(10,22,40,0.92) 40%)"
          : "rgba(255,255,255,0.04)",
        border: featured
          ? "1px solid rgba(244,123,32,0.45)"
          : "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(16px)",
        boxShadow: featured
          ? "0 0 48px rgba(244,123,32,0.20), inset 0 1px 0 rgba(244,123,32,0.15)"
          : "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Badge */}
      <div className="px-6 pt-6 pb-0 flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
          style={{
            background: featured ? "rgba(244,123,32,0.2)" : "rgba(255,255,255,0.08)",
            color:      featured ? "#F47B20" : "rgba(255,255,255,0.45)",
            border:     featured ? "1px solid rgba(244,123,32,0.35)" : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {badge}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: featured ? "rgba(244,123,32,0.15)" : "rgba(255,255,255,0.06)",
          }}
        >
          <Icon size={16} className={featured ? "text-orange" : "text-white/40"} />
        </div>
      </div>

      {/* Price block */}
      <div
        className="px-6 pt-5 pb-4 border-b"
        style={{ borderColor: featured ? "rgba(244,123,32,0.2)" : "rgba(255,255,255,0.07)" }}
      >
        <p className="text-[13px] font-semibold text-white/60 mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <span
            className="text-[44px] font-black leading-none"
            style={{ color: featured ? "#F47B20" : "#ffffff" }}
          >
            BSD {priceDisplay}
          </span>
        </div>
        <p className="text-[12px] text-white/40 mt-1 uppercase tracking-[0.1em]">{per}</p>
        <p className="text-[13px] text-white/55 mt-3 leading-[1.6]">{description}</p>
      </div>

      {/* Perks */}
      <div className="px-6 py-5 flex flex-col gap-3 flex-1">
        {perks.map((perk) => (
          <div key={perk} className="flex items-start gap-2.5">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: featured ? "rgba(244,123,32,0.2)" : "rgba(255,255,255,0.06)" }}
            >
              <Check size={9} className={featured ? "text-orange" : "text-white/40"} />
            </div>
            <span className="text-[13px] text-white/65 leading-snug">{perk}</span>
          </div>
        ))}
      </div>

      {/* Group disclaimer */}
      {id === "group" && (
        <div className="px-6 pb-4">
          <p className="text-[13px] text-orange/80 leading-[1.65]">
            <strong className="font-bold text-orange">Note:</strong> The group rate of BSD $225 per person is only valid when registering a minimum of {PRICING.group.minimum} people in a single transaction.
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 pb-6 pt-2">
        <a
          href={url}
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
            featured
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
  const { ref, inView } = useScrollAnimation("-80px");

  const tickets = [
    {
      id:          "individual" as const,
      label:       PRICING.individual.label,
      badge:       "Most Popular",
      priceDisplay: PRICING.individual.priceDisplay,
      per:         "per person",
      icon:        User,
      url:         PRICING.individual.url,
      description: PRICING.individual.description,
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
      id:          "group" as const,
      label:       PRICING.group.label,
      badge:       "Best Value",
      priceDisplay: PRICING.group.priceDisplay,
      per:         `per person · min ${PRICING.group.minimum}`,
      icon:        Users,
      url:         PRICING.group.url,
      description: PRICING.group.description,
      perks: [
        "Full-day conference access",
        "All keynote & breakout sessions",
        "Executive networking experience",
        "Conference materials included",
        `Minimum ${PRICING.group.minimum} persons per group`,
      ],
      featured: false,
    },
  ];

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

          {/* Eyebrow + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <span className="eyebrow">{PRICING.phase} Pricing — Ends {PRICING.deadline}</span>
            <h2
              className="text-[40px] sm:text-[52px] md:text-[60px] font-black leading-[1.04] text-white tracking-tight"
            >
              Your Legacy{" "}
              <span className="text-gradient-orange">Starts Here</span>
            </h2>
            <p className="text-[16px] text-white/50 max-w-[520px] leading-[1.7]">
              Secure your seat at the Caribbean&apos;s most anticipated leadership conference.
              Early Bird rates are locked in through {PRICING.deadline} — don&apos;t miss your window.
            </p>
          </motion.div>

          {/* Early Bird Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex items-center gap-3 px-5 py-3 rounded-full"
            style={{
              background: "rgba(244,123,32,0.12)",
              border: "1px solid rgba(244,123,32,0.30)",
            }}
          >
            <Clock size={14} className="text-orange flex-shrink-0" />
            <span className="text-[13px] font-semibold text-orange/90 uppercase tracking-[0.1em]">
              Early Bird ends {PRICING.deadline} — Save before rates increase
            </span>
          </motion.div>

          {/* Ticket Cards */}
          <div className="w-full flex flex-col sm:flex-row gap-5">
            {tickets.map((ticket, i) => (
              <TicketCard key={ticket.id} {...ticket} delay={0.15 + i * 0.12} />
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
