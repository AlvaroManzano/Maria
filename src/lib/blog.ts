import { getCollection, type CollectionEntry } from 'astro:content';
import { blogPostPath, type Lang } from '../i18n';

export type Post = CollectionEntry<'blog'>;

export const postLang = (post: Post) => post.id.split('/')[0] as Lang;
export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const posts = await getCollection('blog', (p) => postLang(p) === lang);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingMinutes(post: Post) {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Ruta de cada versión traducida de un artículo, para hreflang y el selector de idioma. */
export async function postAlternates(post: Post) {
  const all = await getCollection('blog', (p) => p.data.translationKey === post.data.translationKey);
  return Object.fromEntries(all.map((p) => [postLang(p), blogPostPath(postLang(p), postSlug(p))])) as Partial<Record<Lang, string>>;
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}
