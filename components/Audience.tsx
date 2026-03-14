type AudienceProps = {
  label: string;
  heading: string;
  items: Array<{ title: string; desc: string }>;
};

export default function Audience({ label, heading, items }: AudienceProps) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,126,247,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-[55px] pb-[55px]">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{label}</p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">{heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
