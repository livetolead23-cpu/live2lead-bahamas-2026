"use client";

import { motion } from "framer-motion";
import { EVENT } from "@/lib/constants";
import { fadeLeft, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/ui/Button";

export default function SpeakerSpotlight() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section className="bg-navy overflow-hidden">
      <div className="container-site">
        <div className="border-t border-white/8" />
      </div>

      <div ref={ref} className="container-site py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            {...fadeLeft()}
            animate={inView ? fadeLeft().animate : {}}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow">Featured Speaker</span>

            <h2 className="text-[38px] md:text-[52px] font-black text-white leading-[1.05] tracking-tight uppercase">
              Randy Fox<br />
              <span className="text-gradient-orange">in Action</span>
            </h2>

            <p className="text-[16px] text-white/65 leading-[1.85] max-w-[460px]">
              See why Randy Fox, CSP is one of the most sought-after keynote speakers
              in the world. High energy, story-driven, and packed with practical leadership
              insight — this is what you can expect on October 2nd.
            </p>

            <p className="text-[14px] text-white/40 leading-[1.75] max-w-[440px]">
              Randy brings over two decades of leadership experience to the stage,
              delivering sessions that are equal parts entertaining and transformational.
              His message will challenge you to lead with greater courage, clarity, and impact.
            </p>

            <Button href={EVENT.registerUrl} className="self-start mt-2">
              Secure Your Seat →
            </Button>
          </motion.div>

          {/* Right — YouTube embed */}
          <motion.div
            {...scaleIn(0.2)}
            animate={inView ? scaleIn(0.2).animate : {}}
            className="relative rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.55)]"
            style={{ border: "1px solid rgba(244,123,32,0.2)" }}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/bGLh_ae69Dg?rel=0&modestbranding=1&color=white"
                title="Randy Fox, CSP — Speaker Highlight Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>

            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{ background: "rgba(10,22,40,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: "#F47B20" }} />
                <span className="text-[12px] font-semibold text-white/60 uppercase tracking-[0.12em]">
                  Randy Fox, CSP · FoxPoint
                </span>
              </div>
              <span className="text-[11px] text-white/30 uppercase tracking-[0.1em]">
                Live2Lead Bahamas 2026
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
