# Live2Lead Bahamas 2026 — Website

Premium conference landing page built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your images (see below)

# 3. Run dev server
npm run dev
# → open http://localhost:3000
```

---

## Images You Need to Place in `/public/images/`

| File | Description |
|---|---|
| `hero-bg.jpg` | Cinematic background for the hero (stage photo, audience, etc.) |
| `logo-live2lead-white.png` | Live2Lead Bahamas logo — white/transparent variant |
| `logo-hephzibah.png` | Hephzibah Human Capital Solutions logo |
| `speakers/patrice-taylor.jpg` | Host headshot |
| `speakers/speaker-[name].jpg` | One file per speaker (see constants.ts for photo paths) |

---

## Updating Speaker Data

All speaker info lives in `src/lib/constants.ts` — the `SPEAKERS` array.

Fill in the name, title, org, and photo path for each speaker:

```ts
{
  name:  "Dr. Jane Smith",
  title: "CEO & Executive Coach",
  org:   "Smith Leadership Group",
  role:  "local",
  photo: "/images/speakers/jane-smith.jpg",
  bio:   "Optional bio shown on the featured/host card only.",
},
```

---

## Updating Sponsor Logos

In `src/components/sections/Sponsors.tsx`, replace the `SponsorPlaceholder` components
with `<Image />` tags pointing to real logos once you have them.

---

## Build for Production

```bash
npm run build
npm run start
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx       ← HTML shell + metadata
│   ├── page.tsx         ← Page composition
│   └── globals.css      ← Design tokens + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   ← Sticky nav, mobile drawer
│   │   └── Footer.tsx   ← Footer with logos + links
│   └── sections/
│       ├── Hero.tsx           ← Cinematic hero
│       ├── CountdownTimer.tsx ← Live countdown to Oct 2 2026
│       ├── About.tsx          ← Stats + theme card
│       ├── Speakers.tsx       ← Host + local + international grid
│       ├── WhyAttend.tsx      ← 6-pillar grid
│       ├── Sponsors.tsx       ← Tiered sponsor layout
│       ├── Testimonials.tsx   ← Carousel
│       └── RegisterCTA.tsx    ← Final CTA section
└── lib/
    └── constants.ts     ← ALL editable data lives here
```
