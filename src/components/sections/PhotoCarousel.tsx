"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Add your past Live2Lead photos here ─────────────────────────────────────
// Drop images into public/images/gallery/ and list the filenames below.
const GALLERY_IMAGES = [
  { src: "/images/gallery/photo-1.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-2.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-3.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-4.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-5.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-6.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-7.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-8.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-9.jpg",  alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-10.jpg", alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-11.jpg", alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-12.jpg", alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-13.jpg", alt: "Live2Lead Bahamas past event" },
  { src: "/images/gallery/photo-14.jpg", alt: "Live2Lead Bahamas past event" },
];

// Duplicate for seamless infinite loop
const LOOPED = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

function PlaceholderTile() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0F2347, #162D55)",
      }}
    >
      <span
        style={{
          color: "rgba(255,255,255,0.12)",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontWeight: 600,
        }}
      >
        Live2Lead
      </span>
    </div>
  );
}

export default function PhotoCarousel() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-navy overflow-hidden py-20">
      <div ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
        >
          <span className="eyebrow mb-3 block">In The Room</span>
          <h2 className="text-[32px] md:text-[42px] font-black text-white leading-tight tracking-tight">
            Past Live2Lead Moments
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Left fade edge */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0A1628 0%, transparent 100%)" }}
          />
          {/* Right fade edge */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0A1628 0%, transparent 100%)" }}
          />

          {/* Scrolling strip — animation defined in globals.css */}
          <div className="flex gap-4 carousel-track">
            {LOOPED.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl overflow-hidden border border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                style={{ width: "320px", height: "210px" }}
              >
                <ImageTile src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const sibling = el.nextElementSibling as HTMLElement | null;
          if (sibling) sibling.style.display = "flex";
        }}
      />
      <div
        className="absolute inset-0 items-center justify-center hidden"
        style={{ background: "linear-gradient(135deg, #0F2347, #162D55)" }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.12)",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 600,
          }}
        >
          Live2Lead
        </span>
      </div>
    </div>
  );
}
