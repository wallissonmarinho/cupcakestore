'use strict';

import localeConfig from './src/i18n/config.json' assert { type: 'json' };

const availableLocales = localeConfig.filter((locale) => locale.enabled);

const availableLocaleCodes = availableLocales.map((locale) => locale.code);

/** @type {import('./types').LocaleConfig} */
const defaultLocale = availableLocales.find((locale) => locale.default);

const availableLocalesMap = Object.fromEntries(
  localeConfig.map((locale) => [locale.code, locale])
);

export {
  availableLocales,
  availableLocaleCodes,
  availableLocalesMap,
  defaultLocale
};
