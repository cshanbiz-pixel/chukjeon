import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  // Development preview only; the production output remains static HTML.
  vite: { server: { allowedHosts: ['terminal.local'] } },
});
