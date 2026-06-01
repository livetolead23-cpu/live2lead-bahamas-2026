"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  const current = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="bg-surface-gray section-py">
      <div ref={ref} className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col gap-4 items-center"
        >
          <span className="eyebrow text-orange">Social Proof</span>
          <h2 className="text-[40px] md:text-[48px] font-black leading-[1.08] text-navy tracking-tight">
            What Attendees Say
          </h2>
          <p className="text-[17px] text-navy/50 max-w-[500px] leading-[1.65]">
            Hear from leaders who have been transformed by the Live2Lead experience.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[780px] mx-auto"
        >
          {/* Card */}
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-14"
            style={{
              background:
                "linear-gradient(135deg, #0A1628 0%, #0F2347 70%, #162D55 100%)",
            }}
          >
            {/* Orange glow */}
            <div
              className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top left, rgba(244,123,32,0.1) 0%, transparent 65%)",
              }}
            />

            {/* Large quote mark */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={72} className="text-orange" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex flex-col gap-8"
              >
                {/* Quote */}
                <p className="text-[18px] md:text-[20px] text-white/85 leading-[1.7] font-light italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  {/* Monogram avatar */}
                  <div
                    className="
                      w-11 h-11 rounded-full flex-shrink-0
                      flex items-center justify-center
                      text-[15px] font-black text-white
                    "
                    style={{ background: "linear-gradient(135deg, #F47B20, #FF9A3C)" }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-white">
                      {current.name}
                    </p>
                    <p className="text-[13px] text-orange-light font-medium">
                      {current.title}
                    </p>
                    <p className="text-[12px] text-white/40">
                      {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-navy/10 border border-navy/15
                text-navy/60 hover:text-navy hover:border-navy/30
                transition-all duration-200
              "
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={[
                    "h-2 rounded-full transition-all duration-300",
                    i === active
                      ? "w-6 bg-orange"
                      : "w-2 bg-navy/20 hover:bg-navy/40",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-navy/10 border border-navy/15
                text-navy/60 hover:text-navy hover:border-navy/30
                transition-all duration-200
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
