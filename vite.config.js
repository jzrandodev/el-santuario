import { defineConfig } from 'vite';
import { resolve } from 'node:path';

/* BASE_PATH lets the same build serve from a domain root (Vercel: "/") and from a
 * GitHub Pages project subpath ("/el-santuario/"). Set it in the deploy environment;
 * it defaults to root so `npm run build` locally is always correct. */
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  build: {
    outDir: 'dist', assetsDir: 'assets', sourcemap: false,
    // the letter room is its own page; panel 11 in the field opens it
    rollupOptions: { input: {
      main: resolve(import.meta.dirname, 'index.html'),
      carta: resolve(import.meta.dirname, 'drafts/la-carta.html'),
      numeros: resolve(import.meta.dirname, 'numeros.html')
    } }
  }
});
