const audiences = [
  {
    title: "Créateurs de contenu",
    description: "Storytelling géographique et vidéos explicatives."
  },
  {
    title: "Journalistes",
    description: "Cartes pour expliquer l’actualité."
  },
  {
    title: "Enseignants",
    description: "Supports visuels pour expliquer des territoires."
  },
  {
    title: "Communication territoriale",
    description: "Présenter une région ou un projet."
  }
];

export default function Audience() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,126,247,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-[55px] pb-[55px]">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Cibles</p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Pour qui ?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{audience.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
