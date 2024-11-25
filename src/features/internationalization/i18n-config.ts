export const i18n = {
  defaultLocale: 'fr-FR',
  locales: ['fr-FR'],
} as const;

export type Locale = (typeof i18n)['locales'][number];