/**
 * The studio's channels. Locale-independent — the labels live in i18n, the
 * numbers and handles live here, once.
 */
export interface Channel {
  key: 'phone' | 'email' | 'telegram' | 'whatsapp';
  href: string;
  /** what the reader sees; kept in the mono stack, so tabular */
  value: string;
  /** external channels open in a new tab */
  external?: boolean;
}

export const EMAIL = 'info@exclamationdev.com';

export const channels: Channel[] = [
  { key: 'phone', href: 'tel:+994706565909', value: '+994 70 656 59 09' },
  { key: 'email', href: `mailto:${EMAIL}`, value: EMAIL },
  { key: 'telegram', href: 'https://t.me/exclamationdev', value: '@exclamationdev', external: true },
  { key: 'whatsapp', href: 'https://wa.me/994702054171', value: '+994 70 205 41 71', external: true },
];
