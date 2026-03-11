"use client";

import { useWaitlist } from "./WaitlistProvider";

export default function CTA() {
  const { openModal } = useWaitlist();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="surface rounded-2xl border border-[var(--border)] p-10 md:p-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Prêt à créer</p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
              Créer votre première vidéo de carte.
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              Composez un scénario, animez votre carte et exportez un rendu vertical en quelques minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={openModal} className="btn-primary rounded-md px-5 py-3 text-sm font-semibold">
              Ouvrir l’éditeur
            </button>
            <button onClick={openModal} className="btn-secondary rounded-md px-5 py-3 text-sm font-semibold">
              Rejoindre la waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
