"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, EVENT } from "@/lib/constants";

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy/95 backdrop-blur-md border-b border-white/8 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-site flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link href="/" aria-label="Live2Lead Bahamas 2026 home">
            <Image
              src="/images/logo-live2lead.png"
              alt="Live2Lead Bahamas"
              width={400}
              height={100}
              className="h-[76px] w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const id       = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={[
                    "text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-200 relative pb-0.5",
                    isActive ? "text-orange" : "text-white/75 hover:text-white",
                  ].join(" ")}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#register")}
              className="
                px-6 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.06em]
                bg-orange text-white
                hover:bg-orange-light transition-all duration-200
                shadow-[0_0_24px_rgba(244,123,32,0.35)]
                hover:shadow-[0_0_32px_rgba(244,123,32,0.55)]
              "
            >
              Register Now
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="
                fixed top-0 right-0 bottom-0 z-50 w-[300px]
                bg-navy-mid flex flex-col pt-[72px]
                border-l border-white/10 lg:hidden
              "
            >
              <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ label, href }) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="
                      text-left py-4 px-4 rounded-xl
                      text-[15px] font-medium text-white/80 hover:text-white
                      hover:bg-white/5 transition-all duration-200
                      border-b border-white/5 last:border-0
                    "
                  >
                    {label}
                  </button>
                ))}
              </nav>

              <div className="px-6 pb-8 mt-auto">
                <button
                  onClick={() => { setMobileOpen(false); handleNavClick("#register"); }}
                  className="
                    block w-full py-4 text-center rounded-full
                    text-[14px] font-semibold uppercase tracking-[0.06em]
                    bg-orange text-white
                    hover:bg-orange-light transition-colors duration-200
                    shadow-[0_0_24px_rgba(244,123,32,0.35)]
                  "
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
