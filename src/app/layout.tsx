import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live2Lead Bahamas 2026 — THE LEGACY CODE",
  description:
    "Join us October 2, 2026 at the Baha Mar Convention Center, Nassau, Bahamas for the premier leadership conference in the Caribbean. LEADyourself. INFLUENCEothers.",
  keywords: ["Live2Lead", "Bahamas", "leadership conference", "Nassau", "2026", "Hephzibah"],
  openGraph: {
    title: "Live2Lead Bahamas 2026 — THE LEGACY CODE",
    description: "The premier leadership conference experience in the Caribbean.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-navy text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
