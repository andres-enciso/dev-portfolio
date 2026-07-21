import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://andresenciso.dev",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
