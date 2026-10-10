import { defineConfig } from 'vite';
import { resolve } from 'node:path';

/* BASE_PATH lets the same build serve from a domain root (Vercel: "/") and from a
 * GitHub Pages project subpath ("/el-santuario/"). Set it in the deploy environment;
 * it defaults to root so `npm run build` locally is always correct. */
/* The no-JavaScript page is written at build time from the same data the field uses, so
 * a visitor without scripts (and a crawler, and some link previewers) gets all thirty
 * moments as text instead of a title and an apology. Spanish, the piece's own language. */
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function noscriptShrine(){
  return {
    name: 'noscript-shrine',
    async transformIndexHtml(html, ctx){
      // Los números: prerender the Spanish plates and venue list into the markup; the script
      // re-renders over them, and without scripts they are simply there. Only the map needs JS.
      if (ctx.filename.endsWith('/numeros.html')) {
        const { NUMS, SEDES, COPY } = await import('./src/numeros-data.js');
        const c = COPY.es;
        return html
          .replace('<p class="lede" id="lede"></p>', `<p class="lede" id="lede">${esc(c.lede)}</p>`)
          .replace('<ol class="plates" id="plates"></ol>', `<ol class="plates" id="plates">${NUMS.map(x => `
    <li class="plate"><div class="n">${esc(x.n)}</div><div class="pk">${esc(x.k.es)}</div><p class="pt">${esc(x.t.es)}</p></li>`).join('')}
  </ol>`)
          .replace('<h3 id="listH"></h3>', `<h3 id="listH">${esc(c.listH)}</h3>`)
          .replace('<ol class="sedes" id="sedes"></ol>', `<ol class="sedes" id="sedes">${SEDES.map(x => `
      <li><span>${esc(x[0])}</span><b>${x[2]}</b></li>`).join('')}
    </ol>`)
          .replace('<p class="src" id="src"></p>', `<p class="src" id="src">${esc(c.src)}</p>`)
          .replace('</head>', '<noscript><style>.lang,.world .map,.world .t{display:none}</style></noscript>\n</head>');
      }
      if (!ctx.filename.endsWith('/index.html') || ctx.filename.includes('/drafts/')) return html;
      const { PANELS, STATE } = await import('./src/panels.js');
      const { STORY, ERAS, ERA_OF } = await import('./src/stories.js');
      const st = { [STATE.PIDO]: 'TE PIDO', [STATE.GRACIAS]: 'GRACIAS POR EL FAVOR CONCEDIDO',
                   [STATE.FIN]: 'DOLOR MUY GRANDE' };
      const li = PANELS.map(p => `
    <li class="${p.state}">
      <div class="st">${st[p.state]}${ERAS[ERA_OF[p.id]] ? ` · ${esc(ERAS[ERA_OF[p.id]].es)}` : ''}</div>
      <div class="nm">${esc(p.name)}</div>
      <div class="fx">${esc([p.place, p.date].filter(Boolean).join(' · '))}</div>
      <p class="story">${esc(STORY[p.id]?.es || p.fact)}</p>
    </li>`).join('');
      return html.replace(/<noscript class="fallback">[\s\S]*?<\/noscript>/, `<noscript class="fallback">
  <h1>El Santuario · Messi y la camiseta</h1>
  <p>No es una línea de tiempo. Son ${PANELS.length} objetos en un santuario. Sin JavaScript, acá están todos, quietos.</p>
  <ol>${li}
  </ol>
</noscript>`);
    }
  };
}

export default defineConfig({
  plugins: [noscriptShrine()],
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
