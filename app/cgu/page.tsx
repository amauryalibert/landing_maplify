import LegalLayout from "../../components/LegalLayout";

export default function CGU() {
  return (
    <LegalLayout title="Conditions générales d’utilisation" updatedAt="11 mars 2026">
      <div className="space-y-4">
        <p>
          Les présentes conditions générales encadrent l’accès au site Maplify et l’inscription à la waitlist de
          l’éditeur.
        </p>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Accès au site</h2>
          <p className="mt-2">
            L’accès au site est gratuit. L’inscription à la waitlist permet d’être informé de l’ouverture de
            l’éditeur.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Exactitude des informations</h2>
          <p className="mt-2">
            Vous vous engagez à fournir des informations exactes lors de l’inscription. Maplify peut supprimer une
            inscription manifestement abusive.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Responsabilité</h2>
          <p className="mt-2">
            Maplify ne peut être tenu responsable d’éventuelles indisponibilités du site ou de retards liés à
            l’ouverture de l’éditeur.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[var(--text-primary)]">Modification des CGU</h2>
          <p className="mt-2">
            Maplify se réserve le droit de modifier ces conditions. La date de mise à jour est indiquée en haut de
            page.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
