const features = [
  {
    title: "Timeline visuelle",
    description: "Créez un scénario d’actions : caméra, zones, frontières, texte, images."
  },
  {
    title: "Export vidéo",
    description: "Générez un rendu vidéo prêt pour TikTok, Shorts ou Reels."
  },
  {
    title: "Export JSON",
    description: "Sauvegardez et réutilisez vos scénarios."
  },
  {
    title: "Agent IA",
    description: "Un chat agent IA pour guider la création et accélérer vos vidéos."
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-[55px] pb-[55px]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Fonctionnalités</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Créer des scénarios d’animations cartographiques.
          </h2>
        </div>
        <div className="hidden h-px flex-1 bg-[var(--border)] md:block" />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="surface rounded-lg border border-[var(--border)] p-6"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-[var(--accent)]" />
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">{feature.title}</h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
