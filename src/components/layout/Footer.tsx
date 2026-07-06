"use client";

import Image from "next/image";
import { NAV_LINKS, EVENT } from "@/lib/constants";

// ─── Visa logo (inline SVG) ───────────────────────────────────────
function VisaLogo() {
  return (
    <div
      className="flex items-center justify-center rounded-md px-2.5 py-1.5"
      style={{ background: "#1A1F71", width: 52, height: 32 }}
    >
      <svg viewBox="0 0 48 16" width="38" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text
          x="24" y="13"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontStyle="italic"
          fontSize="14"
          fill="white"
          letterSpacing="1"
        >
          VISA
        </text>
      </svg>
    </div>
  );
}

// ─── Mastercard logo (inline SVG) ────────────────────────────────
function MastercardLogo() {
  return (
    <div
      className="flex items-center justify-center rounded-md px-2"
      style={{ background: "#252525", width: 52, height: 32 }}
    >
      <svg viewBox="0 0 38 24" width="38" height="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="12" r="10" fill="#EB001B" />
        <circle cx="24" cy="12" r="10" fill="#F79E1B" />
        <path d="M19 4.8a10 10 0 0 1 0 14.4A10 10 0 0 1 19 4.8z" fill="#FF5F00" />
      </svg>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/8">
      <div className="container-site py-16">

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1 - Brand */}
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

          {/* Col 2 - Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={href} href={href} className="text-[14px] text-white/50 hover:text-white transition-colors duration-200">
                  {label}
                </a>
              ))}
              <a href="#register" className="text-[14px] text-orange hover:text-orange-light transition-colors duration-200">
                Register
              </a>
            </nav>
          </div>

          {/* Col 3 - Hosted by */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Hosted By
            </h3>
            <a
              href="https://hephtraining.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] font-black italic text-white hover:text-orange transition-colors duration-300 leading-tight"
              style={{ textShadow: "0 0 18px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.15)" }}
            >
              Hephzibah Human Capital Solutions
            </a>
            <p className="text-[13px] text-white/45 leading-[1.65] max-w-[220px]">
              Developing transformational leaders across the Caribbean.
            </p>
            <a
              href="#register"
              className="inline-flex w-fit px-6 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.07em] bg-orange text-white hover:bg-orange-light transition-colors duration-200"
            >
              Register Now
            </a>
          </div>

          {/* Col 4 - Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2.5">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=livetolead23@gmail.com&su=Live2Lead%20Bahamas%202026%20Enquiry" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/50 hover:text-white transition-colors duration-200">
                livetolead23@gmail.com
              </a>
              <a href="https://hephtraining.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/50 hover:text-white transition-colors duration-200">
                hephtraining.com
              </a>
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/25 font-semibold">Location</p>
              <p className="text-[13px] text-white/45 leading-[1.6]">
                Nassau, New Providence<br />
                Commonwealth of The Bahamas
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/25 font-semibold">Transaction Currency</p>
              <p className="text-[13px] text-white/45">Bahamian Dollar (BSD / B$)</p>
            </div>
          </div>

        </div>

        {/* Policies section */}
        <div className="border-t border-white/8 pt-10 mb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-semibold mb-6">Policies &amp; Legal</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col gap-2">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/40">Refund &amp; Cancellation Policy</h4>
              <p className="text-[12px] text-white/30 leading-[1.8]">
                All ticket sales are final. No refunds will be issued after purchase. Tickets may be transferred to another attendee with 48-hour advance written notice to the organizer. In the event of cancellation by the organizer, a full refund will be issued to the original payment method.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/40">Privacy &amp; Data Security</h4>
              <p className="text-[12px] text-white/30 leading-[1.8]">
                Personal information collected during registration is used solely for event communication and access management. We do not sell or share your data with third parties. All card data is processed securely through our PCI-DSS certified payment gateway. Cardholder data is never stored on our servers.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/40">Delivery &amp; Fulfillment Policy</h4>
              <p className="text-[12px] text-white/30 leading-[1.8]">
                Tickets are delivered electronically via email confirmation within 24 hours of purchase. Entry to the event requires a valid QR code and matching government-issued photo ID. No physical tickets are issued. This is a digital goods / event access product with no physical shipping.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[12px] text-white/25">&copy; {year} Live2Lead Bahamas. All rights reserved.</p>
            <p className="text-[11px] text-white/20">
              Organized by Hephzibah Human Capital Solutions &middot; Nassau, Commonwealth of The Bahamas
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-semibold">We Accept</p>
            <div className="flex items-center gap-2">
              <VisaLogo />
              <MastercardLogo />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
