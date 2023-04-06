import { z, defineCollection } from 'astro:content'

export const collections = {
    posts: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            date: z.string(),
            og_image: z.string(),
        }),
    }),
}
