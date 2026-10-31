"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Video, Check } from "lucide-react";
import { WEBINAR } from "@/lib/constants";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/Button";

export default function Webinar() {
  const { ref, inView } = useScrollAnimation();

  if (!WEBINAR.active) return null;

  const details = [
    { icon: Calendar, text: WEBINAR.date },
    { icon: Clock,    text: WEBINAR.time },
    { icon: Video,    text: `${WEBINAR.location} · ${WEBINAR.format}` },
  ];

  return (
    <section id="webinar" className="bg-navy overflow-hidden scroll-mt-20">
      <div ref={ref} className="container-site py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            {...fadeLeft()}
            animate={inView ? fadeLeft().animate : {}}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              {WEBINAR.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={WEBINAR.photo}
                  alt={WEBINAR.speaker}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shrink-0"
                  style={{ border: "3px solid #F47B20", boxShadow: "0 0 28px rgba(244,123,32,0.35)" }}
                />
              )}
              <span className="eyebrow">{WEBINAR.series}</span>
            </div>

            <h2 className="text-[34px] md:text-[48px] font-black text-white leading-[1.05] tracking-tight uppercase">
              {WEBINAR.title}<br />
              <span className="text-gradient-orange">with {WEBINAR.speaker}</span>
            </h2>

            <p className="text-[16px] text-white/65 leading-[1.85] max-w-[480px]">
              {WEBINAR.speakerBio}
            </p>

            <ul className="flex flex-col gap-3">
              {details.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[15px] text-white/80">
                  <Icon size={18} className="text-orange shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <Button href={WEBINAR.signupUrl} className="self-start">
                {WEBINAR.ctaLabel} →
              </Button>
              <span className="text-[14px] font-semibold text-white/70">{WEBINAR.price}</span>
            </div>

            <p className="text-[13px] text-white/40 max-w-[480px]">
              {WEBINAR.note}{" "}
              <a
                href={WEBINAR.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-2 hover:text-orange-light"
              >
                Already registered? Pay here.
              </a>
            </p>
          </motion.div>

          {/* Right — Flyer (falls back to the learning points) */}
          <motion.div
            {...fadeRight(0.15)}
            animate={inView ? fadeRight(0.15).animate : {}}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(244,123,32,0.14) 0%, rgba(10,22,40,0.92) 45%)",
              border: "1px solid rgba(244,123,32,0.3)",
              boxShadow: "0 16px 64px rgba(0,0,0,0.45)",
            }}
          >
            {WEBINAR.flyer ? (
              <a href={WEBINAR.signupUrl} target="_blank" rel="noopener noreferrer" aria-label={WEBINAR.ctaLabel}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={WEBINAR.flyer}
                  alt={`${WEBINAR.series} flyer: ${WEBINAR.title} with ${WEBINAR.speaker}, ${WEBINAR.date}, ${WEBINAR.time} on ${WEBINAR.location}`}
                  className="w-full h-auto block"
                />
              </a>
            ) : (
              <div className="p-8">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-orange mb-5">
                  What you&apos;ll learn
                </h3>
                <ul className="flex flex-col gap-4">
                  {WEBINAR.learn.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-white/80 leading-[1.6]">
                      <Check size={18} className="text-orange shrink-0 mt-[3px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
