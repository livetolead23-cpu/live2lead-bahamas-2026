"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { EVENT } from "@/lib/constants";

export default function RegisterCTA() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="register"
      className="section-py relative overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/gallery/photo-16.jpg"
        alt="Live2Lead Bahamas — Conference"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.72) 50%, rgba(10,22,40,0.88) 100%)",
        }}
      />

      {/* Orange centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,123,32,0.12) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="container-site relative z-10">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Limited Seats Available
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="
              text-[44px] sm:text-[56px] md:text-[64px]
              font-black leading-[1.04] text-white tracking-tight
            "
          >
            Your Legacy{" "}
            <span className="text-gradient-orange">Starts Here</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-white/55 max-w-[560px] leading-[1.7]"
          >
            Join hundreds of Caribbean leaders on October 2, 2026 for the most
            transformational leadership experience in the region. Seats are going fast —
            don&apos;t miss your moment.
          </motion.p>

          {/* Event details chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-32"
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                px-10 py-4 rounded-full
                text-[15px] font-semibold uppercase tracking-[0.07em]
                bg-orange text-white
                hover:bg-orange-light transition-all duration-200
                shadow-[0_0_48px_rgba(244,123,32,0.5)]
                hover:shadow-[0_0_64px_rgba(244,123,32,0.7)]
                hover:scale-[1.03] active:scale-[0.97]
              "
            >
              Register Now
              <ArrowRight size={18} />
            </a>
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
