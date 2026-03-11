"use client";

import { useState } from "react";
import HeroVideo from "./HeroVideo";
import { useWaitlist } from "./WaitlistProvider";

export default function Hero() {
  const { openModal } = useWaitlist();
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => {
      openModal();
      setOpening(false);
    }, 220);
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-grid-soft opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-map-grid opacity-[0.05] animate-map-float" />
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(79,126,247,0.25),transparent_65%)]" />
      <div className="pointer-events-none absolute left-0 top-40 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,126,247,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
            <span className="font-display text-sm font-semibold tracking-[0.24em] text-[var(--text-secondary)]">
              MAPLIFY
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
            <span className="hidden md:inline">Éditeur</span>
            <span className="hidden md:inline">Documentation</span>
            <button
              onClick={openModal}
              className="rounded-md border border-[var(--border)] px-3 py-2 text-[var(--text-primary)] transition hover:border-[var(--border-light)]"
            >
              Rejoindre la waitlist
            </button>
          </div>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent-muted)] px-3 py-1 text-xs text-[var(--accent)]">
              Éditeur d&apos;animations cartographiques
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl">
              Maplify
            </h1>
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2 text-xs text-[var(--text-secondary)]">
              1080 × 1920 • 60 fps • Export MP4
            </div>
            <p className="text-xl text-[var(--text-secondary)]">Créer des vidéos de cartes animées.</p>
            <p className="max-w-xl text-base text-[var(--text-secondary)]">
              Maplify est un éditeur visuel pour créer des scénarios d’animations cartographiques et exporter des
              vidéos verticales.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleOpen}
                className="btn-primary rounded-md px-5 py-3 text-sm font-semibold"
              >
                {opening ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Ouverture…
                  </span>
                ) : (
                  "Ouvrir l’éditeur"
                )}
              </button>
              <button
                onClick={openModal}
                className="btn-secondary rounded-md px-5 py-3 text-sm font-semibold"
              >
                Rejoindre la waitlist
              </button>
            </div>
            <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
              <span>Export MP4 vertical</span>
              <span>Scénarios JSON réutilisables</span>
            </div>
            <div className="hidden items-center gap-3 text-xs text-[var(--text-secondary)] md:flex">
              <div className="h-px flex-1 bg-[var(--accent)] opacity-60" />
              <span className="uppercase tracking-[0.25em] text-[var(--text-muted)]">Preview</span>
              <span className="text-[var(--accent)]">→</span>
            </div>
          </div>

          <div>
            <HeroVideo isZoomed={opening} />
          </div>
        </div>
      </div>
    </section>
  );
}
