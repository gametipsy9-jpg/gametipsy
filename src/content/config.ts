import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(["Random Finds", "Hidden Gems"]),
    label: z.enum(["Worth Trying", "Recommended"]).optional(),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
