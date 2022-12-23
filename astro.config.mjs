import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import image from "@astrojs/image";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), compress(), image()],
  experimental: {
    contentCollections: true,
  },
});
