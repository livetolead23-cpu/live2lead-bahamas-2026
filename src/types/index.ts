// ─── Global TypeScript interfaces ─────────────────────────────────────────────
// Single source of truth for all data shapes used across the site.
// Import from "@/types" in any component that needs type safety.

export interface Speaker {
  name:     string;
  title:    string;
  org:      string;
  role:     "local" | "international";
  virtual?: boolean;
  photo:    string;
  bio:      string;
}

export interface NavLink {
  label: string;
  href:  string;
}

export interface EventConfig {
  name:        string;
  date:        string;
  venue:       string;
  city:        string;
  theme:       string;
  tagline:     string;
  registerUrl: string;
  hostedBy:    string;
  targetDate:  string;
}

export interface Testimonial {
  quote:   string;
  name:    string;
  title:   string;
  company: string;
}

export interface Pillar {
  num:  string;
  icon: string;
  head: string;
  body: string;
}

export interface Reason {
  num:   string;
  title: string;
  body:  string;
}
