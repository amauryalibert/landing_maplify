const links = [
  "Éditeur",
  "Documentation",
  "GitHub",
  "Contact"
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <span className="text-sm font-semibold tracking-[0.2em] text-[var(--text-secondary)]">MAPLIFY</span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-[var(--text-muted)]">
          {links.map((link) => (
            <span key={link} className="cursor-default transition hover:text-[var(--text-primary)]">
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
