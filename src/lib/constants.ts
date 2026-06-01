// ─── Event Info ──────────────────────────────────────────────────────
export const EVENT = {
  name:         "Live2Lead Bahamas 2026",
  theme:        "THE LEGACY CODE",
  tagline:      "LEADyourself. INFLUENCEothers.",
  date:         "October 2, 2026",
  dateISO:      "2026-10-02T08:00:00",   // Countdown target (Bahamas EST -5)
  venue:        "Baha Mar Convention Center",
  city:         "Nassau, Bahamas",
  registerUrl:  "https://form.jotform.com/261267975500057",
  hostedBy:     "Hephzibah Human Capital Solutions",
} as const;

// ─── Navigation Links ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Speakers",    href: "#speakers" },
  { label: "Why Attend",  href: "#why-attend" },
  { label: "Testimonials",href: "#testimonials" },
] as const;

// ─── Speakers ────────────────────────────────────────────────────────
export type Speaker = {
  name:     string;
  title:    string;
  org:      string;
  role:     "host" | "local" | "international";
  photo?:   string;   // path relative to /public/images/speakers/
  bio?:     string;
  topic?:   string;   // session title / script — add when available
};

export const SPEAKERS: Speaker[] = [
  // ── Host / Moderator
  {
    name:  "Patrice G. Taylor, M.Ed.",
    title: "Live2Lead Host & CEO",
    org:   "Hephzibah Human Capital Solutions",
    role:  "host",
    photo: "/images/speakers/patrice-taylor.jpg",
    bio:   "With over 30 years of experience in human capital development, Patrice G. Taylor is a certified Maxwell Leadership Coach, DISC Consultant, and best-selling author of The Leadership Renaissance. As founder of Hephzibah Human Capital Solutions, she has dedicated her career to developing transformational leaders across the Caribbean.",
  },

  // ── Local Speakers (7) — sorted by last name
  {
    name:  "Simmone L. Bowe",
    title: "Leadership & HR Strategist",
    org:   "Limitless Life",
    role:  "local",
    photo: "/images/speakers/simmone-bowe.jpg",
    bio:   "Simmone L. Bowe is a dynamic leadership strategist, speaker, and the author of 7 books dedicated to personal and professional transformation. Through her platform Limitless Life, she empowers individuals and organizations to break barriers, build resilience, and lead with purpose.",
  },
  {
    name:  "Keshala Knowles",
    title: "VP of Human Resources",
    org:   "Cable Bahamas Group of Companies Ltd.",
    role:  "local",
    photo: "/images/speakers/keshala-knowles.jpg",
    bio:   "A seasoned human resources executive, Keshala Knowles leads people strategy and organizational development at one of the Bahamas' largest telecommunications groups. She is a passionate advocate for workplace culture, leadership excellence, and employee empowerment.",
  },
  {
    name:  "Myles Munroe Jr.",
    title: "Global Speaker & Leadership Voice",
    org:   "",
    role:  "local",
    photo: "/images/speakers/myles-munroe-jr.jpg",
    bio:   "Carrying forward a legendary legacy, Myles Munroe Jr. is a global speaker and emerging leadership voice who speaks with authenticity, depth, and vision. He challenges the next generation of leaders to discover their purpose, embrace their identity, and step fully into their calling.",
  },
  {
    name:  "Charisa Munroe-Wilborn",
    title: "Leadership Expert, Speaker & Author",
    org:   "",
    role:  "local",
    photo: "/images/speakers/charisa-munroe-wilborn.jpg",
    bio:   "Charisa Munroe-Wilborn is a compelling voice in the leadership space — an expert, speaker, and author dedicated to equipping leaders with the tools they need to make a lasting impact. Her work inspires audiences to lead authentically and build legacies that endure.",
  },
  {
    name:  "Cherrylee Pinder",
    title: "Consultant, Speaker & Trainer",
    org:   "CP Training & Consulting Services",
    role:  "local",
    photo: "/images/speakers/cherrylee-pinder.jpg",
    bio:   "Cherrylee Pinder is a respected consultant, speaker, and trainer who brings practical wisdom and strategic clarity to leaders across industries. As founder of CP Training & Consulting Services, she specializes in leadership development, professional growth, and organizational effectiveness.",
  },
  {
    name:  "Toni Seymour",
    title: "Chief Executive Officer",
    org:   "Bahamas Power and Light Company Limited (BPL)",
    role:  "local",
    photo: "/images/speakers/toni-seymour.jpg",
    bio:   "As CEO of Bahamas Power and Light, Toni Seymour leads one of the nation's most critical infrastructure organizations. A trailblazing executive, she brings a powerful perspective on leading through complexity, driving transformation, and building resilient institutions in the Caribbean.",
  },
  {
    name:  "Amad Thompson",
    title: "Leadership Expert & Purpose Driven Speaker",
    org:   "Astute Talent Management",
    role:  "local",
    photo: "/images/speakers/amad-thompson.jpg",
    bio:   "Amad Thompson is a purpose-driven leadership expert who helps individuals and organizations unlock their full potential. Through Astute Talent Management, he partners with leaders to develop high-performing teams, sharpen vision, and drive results with intentionality.",
  },

  // ── International Speakers (2)
  {
    name:  "John C. Maxwell",
    title: "Best-Selling Author & Renowned Leadership Coach",
    org:   "The John Maxwell Company",
    role:  "international",
    photo: "/images/speakers/john-maxwell.jpg",
    bio:   "John C. Maxwell is a #1 New York Times best-selling author, coach, and speaker who has sold more than 35 million books. Recognized as the world's leading leadership expert by Inc. Magazine and Business Insider, his organizations have trained over 6 million leaders in 180 countries. He will address Live2Lead Bahamas 2026 via a virtual keynote experience.",
  },
  {
    name:  "Randy Fox, CSP",
    title: "Keynote Speaker, Leadership Coach & Author",
    org:   "",
    role:  "international",
    photo: "/images/speakers/randy-fox.jpg",
    bio:   "Randy Fox, CSP (Certified Speaking Professional), is an award-winning keynote speaker, leadership coach, and author known for his high-energy, story-driven presentations. With a rare ability to blend humor, insight, and practical application, Randy has inspired audiences across the globe to lead with greater courage, clarity, and impact.",
  },
];

// ─── Why Attend — Pillars ────────────────────────────────────────────
export const PILLARS = [
  {
    icon:  "🎤",
    title: "Dynamic Keynotes",
    body:  "World-class speakers delivering high-impact leadership insights you can apply immediately.",
  },
  {
    icon:  "🤝",
    title: "Executive Networking",
    body:  "Connect with the region's top leaders, executives, and changemakers in one room.",
  },
  {
    icon:  "🧠",
    title: "Practical Tools",
    body:  "Walk away with frameworks, strategies, and playbooks — not just inspiration.",
  },
  {
    icon:  "🌍",
    title: "Global Perspective",
    body:  "International voices bringing fresh ideas and proven systems from beyond our borders.",
  },
  {
    icon:  "🏆",
    title: "Legacy Building",
    body:  "Learn how to lead with intention and create impact that outlasts your tenure.",
  },
  {
    icon:  "✨",
    title: "Premium Experience",
    body:  "A world-class venue, curated atmosphere, and an unforgettable conference environment.",
  },
] as const;

// ─── Testimonials ────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:   "Live2Lead was an incredible experience. The speakers were dynamic, knowledgeable, and incredibly motivating. I walked away with practical tools and strategies that I am already applying in my role. This conference is a must-attend for any professional looking to grow.",
    name:    "Henrika Burnside",
    title:   "Professional",
    company: "Live2Lead Bahamas 2025",
  },
  {
    quote:   "This is my second year attending and it just keeps getting better. Mrs. Taylor curates an experience that is both impactful and inspiring. I always leave feeling recharged and ready to lead at a higher level.",
    name:    "Toneika S. Russell",
    title:   "Returning Attendee",
    company: "Live2Lead Bahamas 2025",
  },
  {
    quote:   "I would encourage every professional in the Bahamas to attend Live2Lead. The content is world-class and the energy in the room is contagious. You will not leave the same person you came in as.",
    name:    "Rochelle Wells",
    title:   "Professional",
    company: "Commonwealth Bank",
  },
  {
    quote:   "Live2Lead has made me rethink and repurpose. There is more within me.",
    name:    "Kenyetta DeanPugh",
    title:   "Attendee",
    company: "Live2Lead Bahamas 2025",
  },
  {
    quote:   "Today's conference has been transformative. I am encouraged and inspired to lead more passionately.",
    name:    "Natasha M. Dean",
    title:   "Attendee",
    company: "Live2Lead Bahamas 2025",
  },
] as const;
