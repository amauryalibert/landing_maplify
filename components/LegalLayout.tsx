type LegalLayoutProps = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Documents légaux</div>
          <h1 className="font-display text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
            {title}
          </h1>
          <p className="text-sm text-[var(--text-secondary)]">Dernière mise à jour : {updatedAt}</p>
        </div>
        <div className="mt-10 space-y-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-sm text-[var(--text-secondary)]">
          {children}
        </div>
      </div>
    </div>
  );
}
