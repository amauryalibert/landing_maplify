const blocks = [
  { label: "Caméra", color: "rgba(79, 126, 247, 0.95)", width: "18%", delay: "0s" },
  { label: "Zone", color: "rgba(79, 126, 247, 0.8)", width: "14%", delay: "0.4s" },
  { label: "Route", color: "rgba(79, 126, 247, 0.65)", width: "22%", delay: "0.8s" },
  { label: "Label", color: "rgba(79, 126, 247, 0.5)", width: "12%", delay: "1.2s" },
  { label: "Caméra", color: "rgba(79, 126, 247, 0.9)", width: "20%", delay: "1.6s" }
];

export default function TimelinePreview() {
  return (
    <div className="surface mt-6 rounded-xl border border-[var(--border)] p-4">
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span className="uppercase tracking-[0.18em]">Timeline</span>
        <span className="rounded-md border border-[var(--border)] px-2 py-1">Scénario</span>
      </div>
      <div className="mt-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-tertiary)] p-4">
        <div className="timeline-track relative h-20 rounded-md border border-[var(--border)] bg-[var(--bg-primary)] p-3">
          <div className="absolute inset-x-3 top-3 h-px bg-[var(--border)]" />
          <div className="absolute inset-x-3 top-[calc(50%-0.5px)] h-px bg-[var(--border)]" />
          <div className="absolute inset-x-3 bottom-3 h-px bg-[var(--border)]" />
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />
          <div className="flex h-full items-center gap-2">
            {blocks.map((block, index) => (
              <div
                key={`${block.label}-${index}`}
                className="timeline-block flex h-6 items-center justify-center rounded-md text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--bg-primary)]"
                style={{
                  backgroundColor: block.color,
                  width: block.width,
                  animationDelay: block.delay
                }}
              >
                {block.label}
              </div>
            ))}
          </div>
          <div className="timeline-scan absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-[var(--accent-muted)] to-transparent" />
        </div>
      </div>
      <p className="mt-3 text-xs text-[var(--text-secondary)]">
        Chaque bloc représente une action sur la timeline : caméra, zones, routes, labels.
      </p>
    </div>
  );
}
