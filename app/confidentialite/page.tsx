import type { Metadata } from "next";
import LegalLayout from "../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "https://maplify.studio/confidentialite" }
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updatedAt="11 mars 2026">
      <div className="space-y-4">
        <p>
          Maplify collecte des informations strictement nécessaires pour gérer la waitlist et informer les
          utilisateurs de l’ouverture de l’éditeur.
        </p>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Données collectées</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>Adresse email</li>
            <li>Utilisation principale</li>
            <li>Source de découverte</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Finalités</h2>
          <p className="mt-2">
            Gestion de la waitlist, communication liée à l’accès à l’éditeur, amélioration de l’offre Maplify.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Base légale</h2>
          <p className="mt-2">Consentement de l’utilisateur.</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Conservation</h2>
          <p className="mt-2">
            Les données sont conservées jusqu’à l’ouverture de l’éditeur, puis pendant une durée maximale de 12
            mois, sauf demande de suppression.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Destinataires</h2>
          <p className="mt-2">
            Les données sont accessibles uniquement à l’équipe Maplify et hébergées par Supabase. Le site est
            hébergé par Vercel.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Vos droits</h2>
          <p className="mt-2">
            Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à
            contact@maplify.studio.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
