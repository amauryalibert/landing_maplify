type FeaturesProps = {
  label: string;
  heading: string;
  items: Array<{ title: string; desc: string }>;
};

export default function Features({ label, heading, items }: FeaturesProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-[55px] pb-[55px]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{label}</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            {heading}
          </h2>
        </div>
        <div className="hidden h-px flex-1 bg-[var(--border)] md:block" />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="surface rounded-lg border border-[var(--border)] p-6"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[var(--accent)]" />
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
