import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const blog = defineCollection({ loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }), schema: z.object({ title: z.string(), description: z.string(), pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(), tags: z.array(z.string()).default([]), draft: z.boolean().default(false) }) });
const projects = defineCollection({ loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }), schema: z.object({ title: z.string(), summary: z.string(), year: z.string(), technologies: z.array(z.string()).default([]), repository: z.string().url().optional(), featured: z.boolean().default(false) }) });
export const collections = { blog, projects };
