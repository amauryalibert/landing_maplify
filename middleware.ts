import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclure : API, assets Next.js, fichiers statiques, et les pages légales FR-only
  matcher: ["/((?!api|_next|_vercel|mentions-legales|confidentialite|cgu|.*\\..*).*)"]
};
