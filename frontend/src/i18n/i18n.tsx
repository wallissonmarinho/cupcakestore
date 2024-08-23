import { getRequestConfig } from 'next-intl/server';

import { availableLocaleCodes } from '../../next.locales.mjs';

const loadLocaleDictionary = async (locale: string) => {

  const messages = {
    ...(await import(`./locales/${locale}/emptyState.json`)).default,
    ...(await import(`./locales/${locale}/form.json`)).default,
    ...(await import(`./locales/${locale}/general.json`)).default,
    ...(await import(`./locales/${locale}/help.json`)).default,
    ...(await import(`./locales/${locale}/notification/error.json`)).default,
    ...(await import(`./locales/${locale}/notification/success.json`)).default,
  };

  if (availableLocaleCodes.includes(locale)) {
    return messages;
  }

  throw new Error(`Unsupported locale: ${locale}`);
};

export default getRequestConfig(async ({ locale }) => ({
  messages: await loadLocaleDictionary(locale),
}));