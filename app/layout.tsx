import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Maplify — Éditeur d'animations cartographiques",
  description:
    "Créez des scénarios d'animations cartographiques et exportez des vidéos verticales en quelques minutes.",
  metadataBase: new URL("https://maplify.studio")
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
      </body>
    </html>
  );
}
