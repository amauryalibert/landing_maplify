import Audience from "../components/Audience";
import CTA from "../components/CTA";
import EditorPreview from "../components/EditorPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WaitlistProvider from "../components/WaitlistProvider";

const SITE_URL = "https://maplify.studio";

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maplify",
    url: SITE_URL,
    description:
      "Éditeur visuel pour créer des scénarios d'animations cartographiques et exporter des vidéos verticales (TikTok, Shorts, Reels).",
    email: "contact@maplify.studio"
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maplify",
    url: SITE_URL,
    description:
      "Maplify est un éditeur d'animations cartographiques en ligne. Créez des vidéos de cartes animées, exportez en MP4 vertical, réutilisez vos scénarios en JSON.",
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "fr-FR"
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Maplify",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    description:
      "Éditeur visuel pour créer des scénarios d'animations cartographiques et exporter des vidéos verticales. Timeline visuelle, prévisualisation en direct, export MP4 et JSON, agent IA.",
    url: SITE_URL,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que Maplify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maplify est un éditeur visuel en ligne pour créer des scénarios d'animations cartographiques et exporter des vidéos verticales (format TikTok, Shorts, Reels). Il propose une timeline, une prévisualisation en direct, l'export MP4 et JSON, et un agent IA pour aider à structurer les scénarios."
        }
      },
      {
        "@type": "Question",
        name: "Pour qui est Maplify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maplify s'adresse aux créateurs de contenu, journalistes, enseignants et équipes de communication territoriale qui veulent créer des vidéos de cartes animées pour le storytelling géographique, l'actualité, l'enseignement ou la présentation de territoires."
        }
      },
      {
        "@type": "Question",
        name: "Quelles sont les fonctionnalités de Maplify ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeline visuelle pour composer des scénarios (caméra, zones, frontières, texte, images), prévisualisation en direct pendant l'édition, export vidéo MP4 vertical, export JSON pour réutiliser les scénarios, et un agent IA intégré pour guider la création."
        }
      }
    ]
  };

  const jsonLdArray = [
    { ...organization, "@id": `${SITE_URL}#organization` },
    website,
    software,
    faq
  ];

  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
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
