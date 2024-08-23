type ENEmptyStateMessage = typeof import('@/i18n/locales/en/emptyState.json');
type ENFormMessage = typeof import('@/i18n/locales/en/form.json');
type ENGeneralMessage = typeof import('@/i18n/locales/en/general.json');
type ENHelpMessage = typeof import('@/i18n/locales/en/help.json');
type ENNotificationErrorMessage =
  typeof import('@/i18n/locales/en/notification/error.json');
type ENNotificationSuccessMessage =
  typeof import('@/i18n/locales/en/notification/success.json');

type PTBREmptyStateMessage =
  typeof import('@/i18n/locales/pt-BR/emptyState.json');
type PTBRFormMessage = typeof import('@/i18n/locales/pt-BR/form.json');
type PTBRGeneralMessage = typeof import('@/i18n/locales/pt-BR/general.json');
type PTBRHelpMessage = typeof import('@/i18n/locales/pt-BR/help.json');
type PTBRNotificationErrorMessage =
  typeof import('@/i18n/locales/pt-BR/notification/error.json');
type PTBRNotificationSuccessMessage =
  typeof import('@/i18n/locales/pt-BR/notification/success.json');

declare interface IntlMessages
  extends ENEmptyStateMessage,
    ENFormMessage,
    ENGeneralMessage,
    ENHelpMessage,
    ENNotificationErrorMessage,
    ENNotificationSuccessMessage,
    PTBREmptyStateMessage,
    PTBRFormMessage,
    PTBRGeneralMessage,
    PTBRHelpMessage,
    PTBRNotificationErrorMessage,
    PTBRNotificationSuccessMessage {}
