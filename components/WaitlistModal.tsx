"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type WaitlistModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [usage, setUsage] = useState("");
  const [source, setSource] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const usages = [t("usage0"), t("usage1"), t("usage2"), t("usage3")];
  const sources = [t("source0"), t("source1"), t("source2"), t("source3")];

  useEffect(() => {
    if (!open) return;
    setEmail("");
    setUsage("");
    setSource("");
    setSubmitted(false);
    setAlreadyExists(false);
    setSubmitting(false);
    setError("");
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || submitted) return;
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, usage, source })
      });

      if (response.status === 409) {
        setAlreadyExists(true);
        setSubmitted(true);
        return;
      }

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || t("errorGeneric"));
      }

      setAlreadyExists(false);
      setSubmitted(true);
    } catch {
      setError(t("errorGeneric"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="modal-in relative z-10 h-full w-full max-w-2xl overflow-y-auto rounded-none border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-[var(--text-primary)] shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:h-auto md:rounded-lg md:p-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md border border-[var(--border)] px-2 py-1 text-xs text-[var(--text-secondary)] transition hover:border-[var(--border-light)]"
        >
          {t("close")}
        </button>

        <div className="text-xs font-semibold tracking-[0.3em] text-[var(--text-muted)]">MAPLIFY</div>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
          {t("title")}
        </h2>
        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          {t("subtitle")}
        </p>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              required
              disabled={submitting || submitted}
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(79,126,247,0.2)]"
            />
          </div>

          <fieldset className="space-y-3">
            <legend className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {t("usageLabel")}
            </legend>
            <div className="grid gap-2 text-sm text-[var(--text-secondary)]">
              {usages.map((usageOption) => (
                <label key={usageOption} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="usage"
                    value={usageOption}
                    disabled={submitting || submitted}
                    checked={usage === usageOption}
                    onChange={() => setUsage(usageOption)}
                    className="h-4 w-4 accent-[var(--accent)]"
                  />
                  {usageOption}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {t("sourceLabel")}
            </legend>
            <div className="grid gap-2 text-sm text-[var(--text-secondary)]">
              {sources.map((sourceOption) => (
                <label key={sourceOption} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="source"
                    value={sourceOption}
                    disabled={submitting || submitted}
                    checked={source === sourceOption}
                    onChange={() => setSource(sourceOption)}
                    className="h-4 w-4 accent-[var(--accent)]"
                  />
                  {sourceOption}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              className="btn-primary rounded-md px-5 py-3 text-sm font-semibold"
              disabled={submitting || submitted}
            >
              {submitted
                ? alreadyExists
                  ? t("submitAlreadyJoined")
                  : t("submitSaved")
                : submitting
                  ? t("submitSaving")
                  : t("submitJoin")}
            </button>
            <p className="text-xs text-[var(--text-muted)]">
              {t("earlyAccess")}
            </p>
          </div>

          {submitted && (
            <p className="text-xs text-[var(--accent)]">
              ✓ {alreadyExists ? t("successAlready") : t("successNew")}
            </p>
          )}
          {error && <p className="text-xs text-red-400">{error}</p>}
        </form>
      </div>
    </div>
  );
}
