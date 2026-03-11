import TimelinePreview from "./TimelinePreview";

export default function EditorPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-[55px] pb-[55px]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Aperçu</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            L’éditeur Maplify en action.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-secondary)]">
            Préparez vos scènes, ajustez la caméra, placez vos labels et suivez la timeline comme dans un outil de
            montage.
          </p>
        </div>
        <div className="hidden h-px flex-1 bg-[var(--border)] md:block" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface rounded-xl border border-[var(--border)] p-4 shadow-panel">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span className="font-medium tracking-[0.2em]">EDITOR</span>
            <span className="rounded-md border border-[var(--border)] px-2 py-1">Capture · 16:9</span>
          </div>
          <div className="mt-4 overflow-hidden rounded-lg border border-[var(--border-light)] bg-[var(--bg-tertiary)]">
            <div className="aspect-video w-full bg-black">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/editor-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="mt-4 text-xs text-[var(--text-secondary)]">
            Interface complète avec panneau d’actions, timeline et prévisualisation.
          </div>
        </div>

        <div>
          <TimelinePreview />
          <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Agent IA intégré</h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              Un chat agent IA vous aide à structurer un scénario, générer des idées de séquences et accélérer la
              production de vos vidéos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
