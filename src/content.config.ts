import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  lastVerified: z.coerce.date(),
  primarySources: z.string(),
  corrections: z.number().default(0),
  funding: z.string().default('None. Self-funded, independent.'),
  tags: z.array(z.string()).default([]),
  ogImage: z.string().optional(),
  draft: z.boolean().default(false),
});

const foodSecurity = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/food-security' }),
  schema: articleSchema,
});

const footpath = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/footpath' }),
  schema: articleSchema,
});

const intersectionalJustice = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/intersectional-justice' }),
  schema: articleSchema,
});

export const collections = {
  'food-security': foodSecurity,
  'footpath': footpath,
  'intersectional-justice': intersectionalJustice,
};


