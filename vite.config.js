import { defineConfig } from 'vite';

/* BASE_PATH lets the same build serve from a domain root (Vercel: "/") and from a
 * GitHub Pages project subpath ("/el-santuario/"). Set it in the deploy environment;
 * it defaults to root so `npm run build` locally is always correct. */
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false }
});
