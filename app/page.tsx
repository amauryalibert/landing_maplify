import Audience from "../components/Audience";
import CTA from "../components/CTA";
import EditorPreview from "../components/EditorPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WaitlistProvider from "../components/WaitlistProvider";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Maplify",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    description:
      "Éditeur visuel pour créer des scénarios d’animations cartographiques et exporter des vidéos verticales.",
    url: "https://maplify.studio"
  };

  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
        <Features />
        <EditorPreview />
        <Audience />
        <CTA />
        <Footer />
      </div>
    </WaitlistProvider>
  );
}
