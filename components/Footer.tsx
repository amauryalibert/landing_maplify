import Link from "next/link";

const primaryLinks = [
  { label: "Éditeur", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Contact", href: "mailto:contact@maplify.studio" }
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGU", href: "/cgu" }
];

export default function Footer() {
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
        <div className="text-xs text-[var(--text-muted)]">© 2026 Maplify. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
