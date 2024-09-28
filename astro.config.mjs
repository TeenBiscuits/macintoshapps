import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://macintoshapps.vercel.app",
  integrations: [tailwind(), sitemap(), icon()],
  redirects: {
    "/apps": "/",
  },
});
