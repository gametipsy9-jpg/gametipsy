import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  output: "hybrid",
  adapter: cloudflare()
});