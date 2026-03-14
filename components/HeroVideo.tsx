"use client";

type HeroVideoProps = {
  isZoomed?: boolean;
  scenario: string;
  loopPlayback: string;
};

export default function HeroVideo({ isZoomed, scenario, loopPlayback }: HeroVideoProps) {
  return (
    <div className="surface relative rounded-xl border border-[var(--border)] p-4 shadow-panel">
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span className="font-medium tracking-[0.2em]">PREVIEW</span>
        <span className="rounded-md border border-[var(--border)] px-2 py-1">1080 × 1080 · 60 fps</span>
      </div>
      <div
        className={`relative mt-4 overflow-hidden rounded-lg border border-[var(--border-light)] bg-[var(--bg-tertiary)] transition-transform duration-200 ${
          isZoomed ? "scale-[1.015]" : "scale-100"
        }`}
      >
        <div className="map-glow pointer-events-none absolute -left-10 -top-10 h-[140%] w-[140%]" />
        <div className="relative aspect-square w-full bg-black">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/map-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-[var(--text-secondary)]">
        <span>{scenario}</span>
        <span>{loopPlayback}</span>
      </div>
    </div>
  );
}
