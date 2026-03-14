import type { Metadata } from "next";
import LegalLayout from "../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "https://maplify.studio/mentions-legales" }
};

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updatedAt="11 mars 2026">
      <div className="space-y-4">
        <p>
          Ce site présente Maplify, un éditeur d’animations cartographiques et une liste d’attente pour l’accès à
          l’éditeur.
        </p>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Éditeur du site</h2>
          <p className="mt-2">
            Maplify — Informations légales à compléter (raison sociale, forme juridique, adresse du siège).
          </p>
          <p className="mt-2">Contact : contact@maplify.studio</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Responsable de publication</h2>
          <p className="mt-2">Informations à compléter.</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Hébergement</h2>
          <p className="mt-2">
            Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
          <p className="mt-2">Données de la waitlist hébergées par Supabase Inc.</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Propriété intellectuelle</h2>
          <p className="mt-2">
            L’ensemble des contenus (textes, visuels, marques, éléments graphiques) est la propriété de Maplify ou
            de ses partenaires, sauf mention contraire. Toute reproduction est interdite sans autorisation.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
