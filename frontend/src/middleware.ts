import createMiddleware from 'next-intl/middleware';

import { availableLocaleCodes, defaultLocale } from '../next.locales.mjs';

export default createMiddleware({
  locales: availableLocaleCodes,
  defaultLocale: defaultLocale.code,
  localePrefix: 'never'
});

export const config = {
  matcher: [`/((?!api|_next|.*\\..*).*)`]
};
