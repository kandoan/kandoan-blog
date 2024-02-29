import { defineCollection, z } from 'astro:content';

const post = defineCollection({
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
		excerpt: z.string().optional(),
	}),
});

export const collections = { post };
