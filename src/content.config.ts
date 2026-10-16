import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada artículo vive en src/content/blog/<idioma>/<slug>.md.
// `translationKey` une las versiones del mismo artículo en distintos idiomas.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    translationKey: z.string(),
  }),
});

export const collections = { blog };
