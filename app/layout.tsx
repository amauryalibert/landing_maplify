import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Maplify — Éditeur d'animations cartographiques",
    template: "%s — Maplify"
  },
  description:
    "Maplify est un éditeur visuel en ligne pour créer des vidéos de cartes animées. Timeline, prévisualisation en direct, export MP4 vertical (TikTok, Shorts, Reels) et JSON. Pour créateurs, journalistes, enseignants.",
  keywords: [
    "animation cartographique",
    "carte animée",
    "vidéo carte",
    "export vidéo vertical",
    "TikTok",
    "Reels",
    "Shorts",
    "éditeur carte",
    "scénario carte",
    "Maplify"
  ],
  metadataBase: new URL("https://maplify.studio"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large"
  },
  openGraph: {
    title: "Maplify — Éditeur d'animations cartographiques",
    description:
      "Créez des scénarios d'animations cartographiques et exportez des vidéos verticales en quelques minutes. Pour créateurs, journalistes, enseignants.",
    url: "https://maplify.studio",
    siteName: "Maplify",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Maplify — Éditeur d'animations cartographiques",
    description:
      "Créez des scénarios d'animations cartographiques et exportez des vidéos verticales en quelques minutes."
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
