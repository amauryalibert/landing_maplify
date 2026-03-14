"use client";

import { useWaitlist } from "./WaitlistProvider";

type CTAProps = {
  label: string;
  heading: string;
  subheading: string;
  openEditor: string;
  joinWaitlist: string;
};

export default function CTA({
  label,
  heading,
  subheading,
  openEditor,
  joinWaitlist
}: CTAProps) {
  const { openModal } = useWaitlist();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="surface rounded-2xl border border-[var(--border)] p-10 md:p-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">{label}</p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {subheading}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 rtl:flex-row-reverse">
            <button onClick={openModal} className="btn-primary rounded-md px-5 py-3 text-sm font-semibold">
              {openEditor}
            </button>
            <button onClick={openModal} className="btn-secondary rounded-md px-5 py-3 text-sm font-semibold">
              {joinWaitlist}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
