import { defineCollection, z } from "astro:content";

const appCategories = [
  "business",
  "developer tools",
  "education",
  "entertainment",
  "finance",
  "games",
  "graphics & design",
  "health & fitness",
  "lifestyle",
  "medical",
  "music",
  "news",
  "photo & video",
  "productivity",
  "reference",
  "safari extensions",
  "social networking",
  "sports",
  "travel",
  "utilities",
  "weather",
] as const;

const monetizationMethods = ["free", "freemium", "paid"] as const;

const appsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().max(40),
      icon: image().refine((icon) => icon.width >= 256, {
        message: "App icon should be at least 256px wide.",
      }),
      developerName: z.string(),
      developerLink: z.string().optional(),
      category: z.enum(appCategories),
      monetization: z.enum(monetizationMethods),
      isOpenSource: z.boolean(),
      isRecommended: z.boolean(),
    }),
});

export const collections = { apps: appsCollection };
