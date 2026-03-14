import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "es", "zh", "ar"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  // Désactiver la détection automatique via Accept-Language :
  // sans ça, cliquer sur "Français" depuis /en redirige le navigateur
  // anglophone vers /en au lieu de rester sur /.
  localeDetection: false
});

export type Locale = (typeof routing.locales)[number];
