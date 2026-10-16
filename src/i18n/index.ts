import es from './es';
import en from './en';
import it from './it';

export const langs = ['es', 'en', 'it'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'es';

const dictionaries = { es, en, it } satisfies Record<Lang, typeof es>;

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

/** Rutas de cada página en cada idioma (sin la base). */
export const routes = {
  home: { es: '/', en: '/en/', it: '/it/' },
  blog: { es: '/blog/', en: '/en/blog/', it: '/it/blog/' },
  book: { es: '/reservar/', en: '/en/book/', it: '/it/prenota/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/', it: '/it/privacy/' },
  legal: { es: '/aviso-legal/', en: '/en/legal-notice/', it: '/it/note-legali/' },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Antepone la base configurada en astro.config (útil si se publica en usuario.github.io/repo). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export function href(key: RouteKey, lang: Lang, hash = '') {
  return withBase(routes[key][lang]) + hash;
}

export function alternatesFor(key: RouteKey): Record<Lang, string> {
  return routes[key];
}

export function blogPostPath(lang: Lang, slug: string) {
  return `${routes.blog[lang]}${slug}/`;
}
