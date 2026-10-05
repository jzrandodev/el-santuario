import { geoEqualEarth, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import land110 from 'world-atlas/land-110m.json';
import { NUMS, SEDES, COPY } from './numeros-data.js';
import { getLang, setLang } from './i18n.js';

let lang = getLang();
const $ = id => document.getElementById(id);

function render(){
  const c = COPY[lang];
  document.documentElement.lang = lang;
  document.title = c.title;
  $('mark').textContent = c.mark;
  $('back').title = c.back; $('back').setAttribute('aria-label', 'El Santuario: ' + c.back);
  $('lede').textContent = c.lede;
  $('mapK').textContent = c.mapK; $('mapH').textContent = c.mapH; $('mapT').textContent = c.mapT;
  $('listH').textContent = c.listH; $('src').textContent = c.src;
  $('lang').textContent = c.toggle; $('lang').setAttribute('aria-label', c.toggleLabel);
  $('lang').lang = lang === 'es' ? 'en' : 'es';

  // the ten plates, stamped tin; each one a number, a word, and what it holds
  $('plates').innerHTML = NUMS.map(x => `
    <li class="plate">
      <div class="n">${x.n}</div>
      <div class="pk">${x.k[lang]}</div>
      <p class="pt">${x.t[lang]}</p>
    </li>`).join('');

  const word = n => n === 1 ? c.partido : c.partidos;
  $('sedes').innerHTML = SEDES.map(s => `
    <li><span>${lang === 'es' ? s[0] : s[1]}</span><b>${s[2]}</b></li>`).join('');

  for (const g of document.querySelectorAll('.vela')) {
    const s = SEDES[g.dataset.i];
    g.setAttribute('aria-label', `${lang === 'es' ? s[0] : s[1]}: ${s[2]} ${word(s[2])}`);
  }
  hideTip();
}

/* ---- the map: dark land, and a candle for each place, sized by the matches played there ---- */
const W = 960, H = 470;
const proj = geoEqualEarth().fitExtent([[10, 10], [W - 10, H - 10]], { type: 'Sphere' });
const path = geoPath(proj);
const land = feature(land110, land110.objects.land);
const max = Math.max(...SEDES.map(s => s[2]));
const r = n => 3 + Math.sqrt(n / max) * 22;   // area, not radius, carries the count

const svgNS = 'http://www.w3.org/2000/svg';
const svg = document.createElementNS(svgNS, 'svg');
svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
svg.setAttribute('role', 'group');
svg.innerHTML = `
  <defs>
    <radialGradient id="glow"><stop offset="0" stop-color="#FFF1D2" stop-opacity="1"/>
      <stop offset=".25" stop-color="#FFC163" stop-opacity=".85"/>
      <stop offset="1" stop-color="#FF8C28" stop-opacity="0"/></radialGradient>
  </defs>
  <path class="sphere" d="${path({ type: 'Sphere' })}"/>
  <path class="land" d="${path(land)}"/>`;
// smallest last, so a one-match candle is never buried under a bigger neighbour's glow
const order = SEDES.map((s, i) => i).sort((a, b) => SEDES[b][2] - SEDES[a][2]);
for (const i of order) {
  const s = SEDES[i], [x, y] = proj([s[3], s[4]]);
  const g = document.createElementNS(svgNS, 'g');
  g.setAttribute('class', 'vela' + (i === 0 ? ' home' : ''));
  g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.dataset.i = i;
  g.innerHTML = `<circle class="halo" cx="${x}" cy="${y}" r="${r(s[2]) * 1.9}" fill="url(#glow)"/>
    <circle class="core" cx="${x}" cy="${y}" r="${Math.max(1.6, r(s[2]) * 0.28)}"/>
`;
  g.style.setProperty('--d', `${(i * 0.37) % 3}s`);
  svg.appendChild(g);
}
$('map').prepend(svg);

const tip = $('tip');
function showTip(g){
  const s = SEDES[g.dataset.i], c = COPY[lang];
  const [x, y] = proj([s[3], s[4]]);
  const box = svg.getBoundingClientRect(), k = box.width / W;
  tip.innerHTML = `${lang === 'es' ? s[0] : s[1]} <b>${s[2]}</b> ${s[2] === 1 ? c.partido : c.partidos}`;
  tip.style.left = `${x * k}px`; tip.style.top = `${y * k}px`;
  tip.hidden = false;
  for (const o of svg.querySelectorAll('.vela.on')) o.classList.remove('on');
  g.classList.add('on');
}
function hideTip(){ tip.hidden = true; for (const o of svg.querySelectorAll('.vela.on')) o.classList.remove('on'); }
/* the pointer picks the nearest candle, not whichever glow happens to be on top: Buenos Aires,
 * Montevideo and Santiago sit close enough that overlapping hit areas chose the wrong one */
const pts = SEDES.map(s => proj([s[3], s[4]]));
function pick(e){
  const box = svg.getBoundingClientRect(), k = W / box.width;
  const x = (e.clientX - box.left) * k, y = (e.clientY - box.top) * k;
  let best = -1, bd = 30;  // within 30 map units, or nothing
  pts.forEach(([px, py], i) => { const d = Math.hypot(px - x, py - y); if (d < bd) { bd = d; best = i; } });
  return best < 0 ? null : svg.querySelector(`.vela[data-i="${best}"]`);
}
svg.addEventListener('pointermove', e => { const g = pick(e); g ? showTip(g) : hideTip(); });
svg.addEventListener('click', e => { const g = pick(e); g ? showTip(g) : hideTip(); });
svg.addEventListener('focusin', e => { const g = e.target.closest('.vela'); if (g) showTip(g); });
svg.addEventListener('pointerleave', hideTip);
addEventListener('keydown', e => { if (e.key === 'Escape') hideTip(); });

$('lang').addEventListener('click', () => { lang = lang === 'es' ? 'en' : 'es'; setLang(lang); render(); });
render();
