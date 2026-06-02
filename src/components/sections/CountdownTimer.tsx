"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { EVENT } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────
type TimeUnit = {
  value: number;
  label: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────
function getTimeLeft(): TimeUnit[] {
  const target = new Date(EVENT.dateISO).getTime();
  const now    = Date.now();
  const diff   = Math.max(target - now, 0);

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return [
    { value: days,    label: "Days" },
    { value: hours,   label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];
}

// ─── Single digit block ───────────────────────────────────────────────
function DigitBlock({ value, label }: TimeUnit) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-1.5 min-w-[64px]">
      {/* Number */}
      <motion.span
        key={value}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-[40px] md:text-[48px] font-black leading-none text-white tabular-nums"
        style={{ textShadow: "0 0 20px rgba(244,123,32,0.5)" }}
      >
        {display}
      </motion.span>
      {/* Label */}
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
        {label}
      </span>
    </div>
  );
}

// ─── Divider dot ──────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="flex flex-col gap-2 pb-5 self-end">
      <span className="w-1 h-1 rounded-full bg-orange/70" />
      <span className="w-1 h-1 rounded-full bg-orange/70" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const isOver = timeLeft.every((t) => t.value === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <div
        className="
          glass-card rounded-2xl
          px-6 py-6 md:px-10 md:py-7
          flex flex-col md:flex-row md:items-center md:justify-between gap-6
        "
      >
        {/* Left: countdown units */}
        {isOver ? (
          <p className="text-xl font-bold text-orange-light">
            The event has begun! 🎉
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-2 w-full md:flex md:items-end md:gap-6">
            {timeLeft.map((unit, i) => (
              <span key={unit.label} className="flex items-end justify-center md:gap-6">
                <DigitBlock value={unit.value} label={unit.label} />
                {i < timeLeft.length - 1 && <span className="hidden md:flex"><Divider /></span>}
              </span>
            ))}
          </div>
        )}

        {/* Right divider (desktop) */}
        <div className="hidden md:block h-16 w-px bg-white/10" />

        {/* Right: event info */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-white/70">
            <Calendar size={14} className="text-orange flex-shrink-0" />
            <span className="text-[13px] font-medium">{EVENT.date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-white/70">
            <MapPin size={14} className="text-orange flex-shrink-0" />
            <span className="text-[13px] font-medium">
              {EVENT.venue}, {EVENT.city}
            </span>
          </div>
          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-1 inline-flex items-center justify-center
              px-5 py-2.5 rounded-full
              text-[12px] font-semibold uppercase tracking-[0.06em]
              bg-orange text-white
              hover:bg-orange-light transition-all duration-200
              shadow-[0_0_16px_rgba(244,123,32,0.4)]
              hover:shadow-[0_0_24px_rgba(244,123,32,0.6)]
            "
          >
            Secure Your Seat
          </a>
        </div>
      </div>
    </motion.div>
  );
}
