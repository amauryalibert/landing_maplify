"use client";

import { useEffect, useRef, useState } from "react";

type LangLabels = {
  label: string;
  fr: string;
  en: string;
  es: string;
  zh: string;
  ar: string;
};

const LOCALES = ["fr", "en", "es", "zh", "ar"] as const;
type LocaleKey = (typeof LOCALES)[number];

const HREFLANG: Record<LocaleKey, string> = {
  fr: "fr",
  en: "en",
  es: "es",
  zh: "zh-CN",
  ar: "ar"
};

// Drapeaux emoji pour chaque locale
const FLAGS: Record<LocaleKey, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  zh: "🇨🇳",
  ar: "🇸🇦"
};

function localeHref(locale: LocaleKey): string {
  return locale === "fr" ? "/" : `/${locale}`;
}

export default function LanguageSwitcher({
  locale,
  labels,
  dropUp = false
}: {
  locale: string;
  labels: LangLabels;
  dropUp?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = (LOCALES.includes(locale as LocaleKey) ? locale : "fr") as LocaleKey;

  // Fermer sur clic extérieur ou Escape
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" aria-label={labels.label}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 rounded-md border border-[var(--border)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] transition hover:border-[var(--border-light)] hover:text-[var(--text-primary)]"
      >
        <span aria-hidden="true">{FLAGS[currentLocale]}</span>
        <span className="uppercase tracking-wide">{currentLocale}</span>
        <svg
          aria-hidden="true"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none"
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={labels.label}
          className={`absolute right-0 z-50 min-w-[140px] overflow-hidden rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] py-1 shadow-soft ${dropUp ? "bottom-full mb-1.5" : "top-full mt-1.5"}`}
        >
          {LOCALES.map((loc) => (
            <li key={loc} role="option" aria-selected={locale === loc}>
              <a
                href={localeHref(loc)}
                hrefLang={HREFLANG[loc]}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 text-sm transition ${
                  locale === loc
                    ? "bg-[var(--accent-muted)] text-[var(--accent)] font-medium"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span aria-hidden="true" className="text-base leading-none">{FLAGS[loc]}</span>
                <span>{labels[loc]}</span>
                {locale === loc && (
                  <svg aria-hidden="true" className="ms-auto h-3 w-3 text-[var(--accent)]" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
