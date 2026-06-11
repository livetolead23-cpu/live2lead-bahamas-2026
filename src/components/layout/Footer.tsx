"use client";

import Image from "next/image";
import { NAV_LINKS, EVENT } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/8">
      <div className="container-site py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image
              src="/images/logo-live2lead.png"
              alt="Live2Lead Bahamas"
              width={220}
              height={60}
              className="h-[60px] w-auto object-contain"
            />
            <p className="text-[14px] text-white/55 leading-[1.7] max-w-[240px] text-center md:text-left">
              The premier leadership conference experience in the Caribbean.
            </p>
            <div className="flex flex-col gap-1.5 items-center md:items-start">
              <p className="text-[13px] text-white/45">{EVENT.date}</p>
              <p className="text-[13px] text-white/45">{EVENT.venue}</p>
              <p className="text-[13px] text-white/45">{EVENT.city}</p>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[14px] text-white/50 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Hosted by */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Hosted By
            </h3>
            <a
              href="https://hephtraining.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] font-black italic text-white hover:text-orange transition-colors duration-300"
              style={{
                textShadow: "0 0 18px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.15)",
              }}
            >
              Hephzibah Human Capital Solutions
            </a>
            <p className="text-[13px] text-white/55 leading-[1.65] max-w-[240px]">
              Hephzibah Human Capital Solutions is dedicated to developing
              transformational leaders across the Caribbean.
            </p>
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit px-6 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.07em] bg-orange text-white hover:bg-orange-light transition-colors duration-200"
            >
              Register Now
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25">
            &copy; {year} Live2Lead Bahamas. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20">
            Hosted by Hephzibah Human Capital Solutions
          </p>
        </div>

      </div>
    </footer>
  );
}
