import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://interstatecupcakes.com',
  server: { port: 4321 },
  output: 'static'
});
