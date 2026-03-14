import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Audience from "../../components/Audience";
import CTA from "../../components/CTA";
import EditorPreview from "../../components/EditorPreview";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import WaitlistProvider from "../../components/WaitlistProvider";
import { routing } from "../../i18n/routing";

const SITE_URL = "https://maplify.studio";

const LOCALE_TO_OG: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  zh: "zh_CN",
  ar: "ar"
};

const LOCALE_TO_HREFLANG: Record<string, string> = {
  fr: "fr",
  en: "en",
  es: "es",
  zh: "zh-CN",
  ar: "ar"
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const localeUrl = locale === "fr" ? SITE_URL : `${SITE_URL}/${locale}`;

  // hreflang complets + x-default pointant sur la version FR canonique
  const altLanguages: Record<string, string> = { "x-default": "/" };
  for (const loc of routing.locales) {
    altLanguages[LOCALE_TO_HREFLANG[loc]] =
      loc === "fr" ? "/" : `/${loc}`;
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      locale === "fr"
        ? ["animation cartographique", "carte animée", "vidéo carte", "export vidéo vertical", "TikTok", "Reels", "Shorts", "éditeur carte", "Maplify"]
        : locale === "en"
          ? ["animated map", "map video", "vertical video export", "TikTok", "Reels", "Shorts", "map editor", "Maplify"]
          : locale === "es"
            ? ["mapa animado", "vídeo de mapa", "exportación vídeo vertical", "TikTok", "Reels", "editor de mapas", "Maplify"]
            : locale === "zh"
              ? ["动态地图", "地图视频", "竖版视频", "TikTok", "地图编辑器", "Maplify"]
              : ["خريطة متحركة", "فيديو خريطة", "تصدير فيديو عمودي", "TikTok", "Maplify"],
    alternates: {
      canonical: localeUrl,
      languages: altLanguages
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: localeUrl,
      siteName: "Maplify",
      locale: LOCALE_TO_OG[locale] ?? locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription")
    }
  };
}

export default async function LocalePage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  // Rejeter silencieusement les locales non gérées (ex: /xyz)
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const tHero = await getTranslations({ locale, namespace: "hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tFeatures = await getTranslations({ locale, namespace: "features" });
  const tPreview = await getTranslations({ locale, namespace: "preview" });
  const tAudience = await getTranslations({ locale, namespace: "audience" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const tLang = await getTranslations({ locale, namespace: "langSwitcher" });

  // JSON-LD localisé
  const localeUrl = locale === "fr" ? SITE_URL : `${SITE_URL}/${locale}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Maplify",
    url: SITE_URL,
    description: tHero("description"),
    email: "contact@maplify.studio"
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maplify",
    url: localeUrl,
    description: tHero("description"),
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: LOCALE_TO_HREFLANG[locale] ?? locale
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Maplify",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    description: tHero("description"),
    url: SITE_URL,
    inLanguage: LOCALE_TO_HREFLANG[locale] ?? locale,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_TO_HREFLANG[locale] ?? locale,
    mainEntity: [
      {
        "@type": "Question",
        name: tFaq("q1"),
        acceptedAnswer: { "@type": "Answer", text: tFaq("a1") }
      },
      {
        "@type": "Question",
        name: tFaq("q2"),
        acceptedAnswer: { "@type": "Answer", text: tFaq("a2") }
      },
      {
        "@type": "Question",
        name: tFaq("q3"),
        acceptedAnswer: { "@type": "Answer", text: tFaq("a3") }
      }
    ]
  };

  // Une <script> par item JSON-LD évite les erreurs de parsing
  // liées aux arrays dans certains validators et moteurs React.
  const jsonLdItems = [organization, website, software, faq];

  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {jsonLdItems.map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <Hero
          nav={{
            editor: tNav("editor"),
            docs: tNav("docs"),
            joinWaitlist: tNav("joinWaitlist")
          }}
          badge={tHero("badge")}
          subtitle={tHero("subtitle")}
          description={tHero("description")}
          openEditor={tHero("openEditor")}
          opening={tHero("opening")}
          joinWaitlist={tHero("joinWaitlist")}
          tagExport={tHero("tagExport")}
          tagScenarios={tHero("tagScenarios")}
          scenario={tHero("scenario")}
          loopPlayback={tHero("loopPlayback")}
          locale={locale}
          langLabels={{
            label: tLang("label"),
            fr: tLang("fr"),
            en: tLang("en"),
            es: tLang("es"),
            zh: tLang("zh"),
            ar: tLang("ar")
          }}
        />
        <Features
          label={tFeatures("label")}
          heading={tFeatures("heading")}
          items={[
            { title: tFeatures("timelineTitle"), desc: tFeatures("timelineDesc") },
            { title: tFeatures("exportTitle"), desc: tFeatures("exportDesc") },
            { title: tFeatures("jsonTitle"), desc: tFeatures("jsonDesc") },
            { title: tFeatures("aiTitle"), desc: tFeatures("aiDesc") }
          ]}
        />
        <EditorPreview
          label={tPreview("label")}
          heading={tPreview("heading")}
          subheading={tPreview("subheading")}
          caption={tPreview("caption")}
          aiTitle={tPreview("aiTitle")}
          aiDesc={tPreview("aiDesc")}
          timelineScenario={tPreview("timelineScenario")}
          blockCamera={tPreview("blockCamera")}
          blockZone={tPreview("blockZone")}
          blockRoute={tPreview("blockRoute")}
          blockLabel={tPreview("blockLabel")}
          timelineBlockDesc={tPreview("timelineBlockDesc")}
        />
        <Audience
          label={tAudience("label")}
          heading={tAudience("heading")}
          items={[
            { title: tAudience("creatorsTitle"), desc: tAudience("creatorsDesc") },
            { title: tAudience("journalistsTitle"), desc: tAudience("journalistsDesc") },
            { title: tAudience("teachersTitle"), desc: tAudience("teachersDesc") },
            { title: tAudience("territorialTitle"), desc: tAudience("territorialDesc") }
          ]}
        />
        <CTA
          label={tCta("label")}
          heading={tCta("heading")}
          subheading={tCta("subheading")}
          openEditor={tCta("openEditor")}
          joinWaitlist={tCta("joinWaitlist")}
        />
        <Footer
          copyright={tFooter("copyright")}
          links={{
            editor: tFooter("editor"),
            docs: tFooter("docs"),
            github: tFooter("github"),
            contact: tFooter("contact")
          }}
          legal={{
            legal: tFooter("legal"),
            privacy: tFooter("privacy"),
            terms: tFooter("terms")
          }}
          locale={locale}
          langLabels={{
            label: tLang("label"),
            fr: tLang("fr"),
            en: tLang("en"),
            es: tLang("es"),
            zh: tLang("zh"),
            ar: tLang("ar")
          }}
        />
      </div>
    </WaitlistProvider>
  );
}
