import { defineCollection, z } from "astro:content";

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
      link: z.string(),
      developerName: z.string(),
      monetization: z.enum(monetizationMethods),
      isOpenSource: z.boolean(),
      isFree: z.boolean(),
      isOneTimePurchase: z.boolean(),
      isSubscription: z.boolean(),
    }),
});

export const collections = { apps: appsCollection };
