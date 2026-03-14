import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type LangLabels = {
  label: string;
  fr: string;
  en: string;
  es: string;
  zh: string;
  ar: string;
};

type FooterProps = {
  copyright: string;
  links: { editor: string; docs: string; github: string; contact: string };
  legal: { legal: string; privacy: string; terms: string };
  locale: string;
  langLabels: LangLabels;
};

export default function Footer({
  copyright,
  links,
  legal,
  locale,
  langLabels
}: FooterProps) {
  const primaryLinks = [
    { label: links.editor, href: "#" },
    { label: links.docs, href: "#" },
    { label: links.github, href: "#" },
    { label: links.contact, href: "mailto:contact@maplify.studio" }
  ];

  const legalLinks = [
    { label: legal.legal, href: "/mentions-legales" },
    { label: legal.privacy, href: "/confidentialite" },
    { label: legal.terms, href: "/cgu" }
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--text-secondary)]">MAPLIFY</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--text-muted)]">
            {primaryLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-[var(--text-primary)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-[var(--text-muted)]">
          {legalLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-[var(--text-primary)]">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-[var(--text-muted)]">{copyright}</div>
          <LanguageSwitcher locale={locale} labels={langLabels} dropUp />
        </div>
      </div>
    </footer>
  );
}
