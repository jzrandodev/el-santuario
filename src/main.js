import * as THREE from 'three';
import { buildField } from './field.js';
import { PANELS, STATE, TOTAL } from './panels.js';
import { T, getLang, setLang, panelText } from './i18n.js';
import { STORY, ERAS, ERA_OF } from './stories.js';
import { CLIPS, embedOf, hostLabel } from './clips.js';

const canvas = document.getElementById('scene');
const ui = document.getElementById('ui');
const readout = document.getElementById('readout');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = getLang();
const tt = k => T[lang][k];
const ROOM = { 'la-carta': import.meta.env.BASE_URL + 'drafts/la-carta.html' };

/* THE LEDGER — what this visitor has lit, and where they stood, survives a trip into the
 * letter room and back. Session only: a new visit is a new path. */
const LEDGER = 'santuario:ledger';
function readLedger(){
  try { return JSON.parse(sessionStorage.getItem(LEDGER)) || null; } catch (_) { return null; }
}
function writeLedger(v){ try { sessionStorage.setItem(LEDGER, JSON.stringify(v)); } catch (_) {} }

/* ---- the floor: if WebGL is unavailable, or motion is refused, the shrine is a document ----
 * This is not a degraded version. It is the same thirty objects, the same three states and
 * the same facts, held still and readable. A volumetric field has no natural linear fallback,
 * so one is authored rather than pretended. */
let floorOn = false, floorWhy = '';
function documentFloor(reasonClass){
  floorOn = true; floorWhy = reasonClass;
  readout.hidden = false;
  readout.classList.add(reasonClass);
  document.getElementById('howto').hidden = true;  // the floor needs no movement instructions
  const li = PANELS.map(p => { const x = panelText(p, lang); return `
    <li class="${p.state}">
      <div class="st">${p.state === STATE.PIDO ? tt('stPido')
        : p.state === STATE.GRACIAS ? tt('stGracias') : tt('stFin')}${
        ERAS[ERA_OF[p.id]] ? `<span class="era"> · ${ERAS[ERA_OF[p.id]][lang]}</span>` : ''}</div>
      <div class="nm">${p.room ? `<a href="${ROOM[p.room]}">${x.name}</a>` : x.name}</div>
      <div class="fx">${[p.place, p.date].filter(Boolean).join(' · ')}${
        (p.place || p.date) && !STORY[p.id] ? '<br>' : ''}${STORY[p.id] ? '' : x.fact}</div>
      ${STORY[p.id] ? `<p class="story">${STORY[p.id][lang]}</p>` : ''}
    </li>`; }).join('');
  readout.innerHTML = `
    <h1>${tt('h1')}</h1>
    <p class="lede">${tt('lede')}</p>
    <a class="nums" href="${import.meta.env.BASE_URL}numeros.html">${tt('numbers')}</a>
    ${reasonClass === 'chosen' ? `<button class="nums backfield" id="backField" type="button">${tt('backField')}</button>` : ''}
    <ol>${li}</ol>`;
  // the document is a choice, not a trap: going back reloads the field, and the ledger
  // (written on pagehide) puts the visitor where they stood
  document.getElementById('backField')?.addEventListener('click', () => location.reload());
  canvas.style.display = 'none';
  ui.hidden = true;
}

/* ---- language: Spanish is the default; English is a toggle that sticks for the browser ---- */
const langBtn = document.getElementById('lang');
function applyLang(){
  document.documentElement.lang = lang;
  document.title = tt('title');
  for (const el of document.querySelectorAll('[data-i]')) {
    el[el.hasAttribute('data-html') ? 'innerHTML' : 'textContent'] = tt(el.dataset.i);
  }
  canvas.setAttribute('aria-label', tt('canvas'));
  document.getElementById('fichaClose').setAttribute('aria-label', tt('close'));
  langBtn.textContent = tt('toggle'); langBtn.setAttribute('aria-label', tt('toggleLabel'));
  langBtn.lang = lang === 'es' ? 'en' : 'es';
  const door = document.getElementById('door');
  door.textContent = matchMedia('(hover: none)').matches ? tt('doorTouch') : tt('doorKey');
  if (floorOn) documentFloor(floorWhy);
}
langBtn.addEventListener('click', () => { lang = lang === 'es' ? 'en' : 'es'; setLang(lang); applyLang(); });

let gl = null;
try { gl = canvas.getContext('webgl2') || canvas.getContext('webgl'); } catch (_) { gl = null; }
if (!gl) { documentFloor('no-webgl'); }
else if (reduce) { documentFloor('reduced'); }
else { start(); }
applyLang();

function start(){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  /* the ratio is a ceiling, not a promise: if frames run long it steps down, once the
   * slow stretch has been sustained, and never climbs back (no flicker between sizes) */
  let dpr = Math.min(devicePixelRatio, 2), slow = 0;
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const F = buildField(renderer);
  ui.hidden = false;

  const nFound = document.getElementById('nFound');
  const nTotal = document.getElementById('nTotal');
  const counts = { pido: document.getElementById('nPido'),
                   gracias: document.getElementById('nGrac'), fin: document.getElementById('nFin') };
  const hint = document.getElementById('hint');
  const said = document.getElementById('said');
  // a door says it is a door, but only once you are standing at it
  const door = document.getElementById('door');
  nTotal.textContent = TOTAL;

  const found = { pido: 0, gracias: 0, fin: 0 };
  let total = 0;
  /* THE RELEASE — celeste is withheld from the whole palette until a thanks panel is lit.
   * 2021 lets a trace into the light the visitor carries; Lusail lets it in fully. Once
   * earned it stays for the rest of the visit, and it is computed from what is lit, so
   * it survives a trip into the letter room. */
  let release = 0, releaseAim = 0;
  const WARM = new THREE.Color(0xFFD2A0), WHITE = new THREE.Color(0xFFFFFF),
        CELESTE = new THREE.Color(0x75AADB);
  function light(m, quiet){
    m.userData.lit = true;
    const c = m.userData.panel.celeste;
    if (c && c > releaseAim) { releaseAim = c; document.body.classList.add('released'); }
    const P = m.userData.panel;
    if (!quiet) { const x = panelText(P, lang);
      // each piece loses its own full stop, so the join never reads '..'
      said.textContent = [x.name, [P.place, P.date].filter(Boolean).join(', '), x.fact,
        tt('openIt')].filter(Boolean).map(s => s.replace(/\.+$/, '')).join('. ') + '.'; }
    found[m.userData.panel.state]++; total++;
    counts[m.userData.panel.state].textContent = found[m.userData.panel.state];
    nFound.textContent = total;
  }

  function resize(){
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    F.camera.aspect = w / h;
    F.camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  /* MOVEMENT — free, and never a scroll. Pointer drifts the camera laterally and vertically,
   * the wheel travels through depth (down goes deeper, as a page would), and a click flies
   * to whatever was clicked. Keyboard does all of it so the shrine is navigable without a
   * pointer at all. */
  const aim = { x: 0, y: 0, z: F.camera.position.z };
  const cur = { x: 0, y: 0, z: F.camera.position.z };
  let px = 0.5, py = 0.5, moved = false;

  const back = readLedger();
  if (back && Array.isArray(back.lit)) {
    // restored quietly: a screen reader already heard these on the way in
    for (const m of F.meshes) if (back.lit.includes(m.userData.panel.id)) light(m, true);
    if (back.at && [back.at.x, back.at.y, back.at.z].every(Number.isFinite)) {
      Object.assign(aim, back.at); Object.assign(cur, back.at);
    }
    moved = true; hint.style.opacity = '0';
  }
  const saveLedger = () => writeLedger({
    lit: F.meshes.filter(x => x.userData.lit).map(x => x.userData.panel.id),
    at: { x: aim.x, y: aim.y, z: aim.z } });
  // any way out of the field keeps the path: the letter, Los números, a reload, the back button
  addEventListener('pagehide', saveLedger);
  function enter(m){
    saveLedger();
    location.href = ROOM[m.userData.panel.room];
  }
  // a panel opens only once you have reached it; from afar a click just travels there
  const near = m => m.userData.lit && Math.abs(cur.z - m.position.z) < 11;
  /* Enter opens what the light is on: of the reached panels, the one whose centre sits closest
   * on screen to the candle. Nearest in 3D picked a neighbour hanging beside the one in view. */
  const _a = new THREE.Vector3(), _b = new THREE.Vector3();
  const nearest = () => {
    _b.copy(F.candle.position).project(F.camera);
    let best = null, bd = Infinity;
    for (const m of F.meshes) if (near(m)) {
      _a.copy(m.position).project(F.camera);
      if (_a.z > 1) continue;  // behind the camera
      const d = Math.hypot((_a.x - _b.x) * F.camera.aspect, _a.y - _b.y);
      if (d < bd) { bd = d; best = m; }
    }
    return best;
  };

  /* THE FICHA — a reached panel opens to the longer story of its moment. Movement holds
   * still while it is open; Escape, the ×, or a click outside closes it. */
  const ficha = document.getElementById('ficha'), fichaCard = ficha.querySelector('.ficha-card');
  const fichaGo = document.getElementById('fichaGo');
  let fichaOpen = false, fichaMesh = null, fichaFrom = null;
  function openFicha(m){
    const P = m.userData.panel, x = panelText(P, lang);
    fichaMesh = m;
    fichaCard.className = 'ficha-card ' + P.state;
    document.getElementById('fichaEra').textContent = ERAS[ERA_OF[P.id]]?.[lang] || '';
    document.getElementById('fichaSt').textContent =
      P.state === STATE.PIDO ? tt('stPido') : P.state === STATE.GRACIAS ? tt('stGracias') : tt('stFin');
    document.getElementById('fichaName').textContent = x.name;
    document.getElementById('fichaPd').textContent = [P.place, P.date].filter(Boolean).join(' · ');
    document.getElementById('fichaStory').textContent = STORY[P.id]?.[lang] || x.fact;
    // a panel hung before its match keeps time: how long until kick-off, then live, then played
    const ko = document.getElementById('fichaKo');
    ko.hidden = !P.kickoff;
    if (P.kickoff) {
      const ms = Date.parse(P.kickoff) - Date.now();
      if (ms > 0) {
        const h = Math.floor(ms / 3.6e6), m = Math.floor(ms % 3.6e6 / 6e4);
        ko.textContent = `${tt('koIn')} ${h ? h + ' ' + tt('koH') + ' ' : ''}${m} ${tt('koM')}.`;
      } else ko.textContent = ms > -2.5 * 3.6e6 ? tt('koLive') : tt('koDone');
    }
    fichaGo.hidden = !P.room;
    showClip(P, x.name);
    fichaFrom = document.activeElement;
    ficha.hidden = false; fichaOpen = true;
    document.getElementById('fichaClose').focus();
  }
  /* the moment's real footage, if one has been linked: the platform's own player, credited,
   * and loaded only on a tap (see clips.js) */
  const fichaClip = document.getElementById('fichaClip'), fichaPlay = document.getElementById('fichaPlay');
  const fichaFrame = document.getElementById('fichaFrame'), fichaSrc = document.getElementById('fichaSrc');
  let clipNow = null;
  function showClip(P, name){
    const c = CLIPS[P.id];
    fichaFrame.replaceChildren(); fichaFrame.hidden = true;
    fichaClip.hidden = !c; clipNow = null;
    if (!c) return;
    const em = embedOf(c.url);
    clipNow = em && { ...em, title: `${tt('clipTitle')} ${name}` };
    fichaPlay.hidden = !em;
    if (em) fichaPlay.textContent = `${tt('clipPlay')} · ${tt('clipOn')} ${em.label}`;
    fichaSrc.href = c.url;
    fichaSrc.textContent = [c.credit && `${tt('clipBy')} ${c.credit}`,
      `${tt('clipOpen')} (${em ? em.label : hostLabel(c.url)}) ↗`].filter(Boolean).join(' · ');
  }
  fichaPlay.addEventListener('click', () => {
    if (!clipNow) return;
    const f = document.createElement('iframe');
    f.src = clipNow.embed; f.title = clipNow.title;
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true; f.referrerPolicy = 'strict-origin-when-cross-origin';
    fichaFrame.className = 'ficha-frame' + (clipNow.tall ? ' tall' : '');
    fichaFrame.replaceChildren(f); fichaFrame.hidden = false;
    fichaPlay.hidden = true;
    fichaSrc.focus();  // the button is gone; keep focus on something real inside the card
  });
  function closeFicha(){
    if (!fichaOpen) return;
    ficha.hidden = true; fichaOpen = false; fichaMesh = null;
    fichaFrame.replaceChildren(); fichaFrame.hidden = true;  // closing the card stops the clip
    // give focus back to wherever it was before the card opened
    if (fichaFrom && fichaFrom !== document.body && document.contains(fichaFrom)) fichaFrom.focus();
    fichaFrom = null;
  }
  document.getElementById('fichaClose').addEventListener('click', closeFicha);
  ficha.addEventListener('click', e => { if (e.target === ficha) closeFicha(); });
  fichaGo.addEventListener('click', () => { if (fichaMesh) enter(fichaMesh); });

  addEventListener('pointermove', e => {
    if (fichaOpen) return;
    px = e.clientX / innerWidth; py = e.clientY / innerHeight;
    aim.x = (px - 0.5) * 22; aim.y = -(py - 0.5) * 13;
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  }, { passive: true });

  addEventListener('wheel', e => {
    if (fichaOpen) return;
    aim.z = THREE.MathUtils.clamp(aim.z - e.deltaY * 0.035, F.depth.far, F.depth.near);
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  }, { passive: true });

  addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;  // browser shortcuts stay the browser's
    if (fichaOpen) {
      if (e.key === 'Escape') { e.preventDefault(); closeFicha(); }
      else if (e.key === 'Tab') {
        // a modal keeps focus inside it: cycle between its own controls
        const f = [...ficha.querySelectorAll('button, a[href], iframe')].filter(b => !b.closest('[hidden]'));
        const i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
      return;
    }
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;  // Caps Lock still walks
    if (k === 'ArrowUp' || k === 'w') aim.z -= 4;
    else if (k === 'ArrowDown' || k === 's') aim.z += 4;
    else if (k === 'ArrowLeft' || k === 'a') aim.x -= 3;
    else if (k === 'ArrowRight' || k === 'd') aim.x += 3;
    else if (k === 'Enter') {
      if (e.target !== document.body && e.target !== canvas) return;  // a focused button handles its own Enter
      const m = nearest();
      if (m) { e.preventDefault(); openFicha(m); }
      return;
    }
    else return;
    e.preventDefault();
    aim.z = THREE.MathUtils.clamp(aim.z, F.depth.far, F.depth.near);
    aim.x = THREE.MathUtils.clamp(aim.x, -14, 14);  // the same walls touch has
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  });

  // touch: drag to travel. Swiping up goes deeper, the same gesture as reading down a page.
  let tLast = null;
  addEventListener('touchstart', e => { tLast = e.touches[0]; }, { passive: true });
  addEventListener('touchmove', e => {
    if (fichaOpen) return;
    const t = e.touches[0];
    if (tLast) {
      aim.x = THREE.MathUtils.clamp(aim.x - (t.clientX - tLast.clientX) * 0.05, -14, 14);
      aim.z = THREE.MathUtils.clamp(aim.z + (t.clientY - tLast.clientY) * 0.05, F.depth.far, F.depth.near);
      if (!moved) { moved = true; hint.style.opacity = '0'; }
    }
    tLast = t;
  }, { passive: true });
  // when the finger lifts, the candle goes back to the middle of the view instead of
  // staying parked wherever the touch ended
  addEventListener('touchend', () => { tLast = null; px = 0.5; py = 0.5; }, { passive: true });

  const ray = new THREE.Raycaster();
  let hover = null;
  addEventListener('pointermove', e => {
    ray.setFromCamera(new THREE.Vector2((e.clientX / innerWidth) * 2 - 1,
      -(e.clientY / innerHeight) * 2 + 1), F.camera);
    hover = ray.intersectObjects(F.meshes)[0]?.object || null;
  }, { passive: true });
  addEventListener('click', e => {
    if (fichaOpen || e.target !== canvas) return;  // buttons and the open ficha are not the field
    const p = new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(p, F.camera);
    const hit = ray.intersectObjects(F.meshes)[0];
    if (!hit) return;
    if (near(hit.object)) openFicha(hit.object);
    else aim.z = hit.object.position.z + 7.4;
  });

  /* ONE CLOCK — every motion in the piece runs off this loop and nothing free-runs. */
  const clock = new THREE.Clock();
  let last = performance.now();
  function frame(){
    if (floorOn) return;
    const now = performance.now(), dt = now - last; last = now;
    // a hidden tab pauses rAF, so a huge dt is a return, not a slow frame
    if (dt > 34 && dt < 250) slow++; else slow = Math.max(0, slow - 1);
    if (slow > 45 && dpr > 1) {
      dpr = Math.max(1, dpr - 0.5); slow = 0;
      renderer.setPixelRatio(dpr); resize();
    }
    const t = clock.getElapsedTime();
    cur.x += (aim.x - cur.x) * 0.055;
    cur.y += (aim.y - cur.y) * 0.055;
    cur.z += (aim.z - cur.z) * 0.055;
    F.camera.position.set(cur.x, cur.y, cur.z);
    F.camera.lookAt(cur.x * 0.34, cur.y * 0.34, cur.z - 12);

    // the candle sits just ahead of the visitor, offset toward where they are looking
    const flick = 0.86 + 0.14 * Math.sin(t * 6.1) * Math.sin(t * 10.7);
    release += (releaseAim - release) * 0.012;
    F.candle.color.copy(WARM).lerp(CELESTE, release * 0.28);
    F.flame.material.color.copy(WHITE).lerp(CELESTE, release * 0.55);
    F.candle.position.set(cur.x + (px - 0.5) * 5.0, cur.y - (py - 0.5) * 3.0, cur.z - 5.2);
    // the light falls off with distance squared, so up close it would burn a panel to flat
    // colour and its lettering would vanish. Hold the brightness steady inside reach.
    let dMin = Infinity;
    for (const m of F.meshes) dMin = Math.min(dMin, m.position.distanceTo(F.candle.position));
    F.candle.intensity = 118 * flick * Math.min(1, Math.pow(dMin / 4.2, 1.4));
    F.flame.position.copy(F.candle.position);
    F.flame.material.opacity = 0.72 + 0.28 * flick;
    F.flame.scale.setScalar(0.28 + 0.05 * flick);

    // a panel the light has reached stays found, permanently
    for (const m of F.meshes) {
      if (m.userData.lit) continue;
      if (m.position.distanceTo(F.candle.position) < 8.0) light(m);
    }

    // the cursor says when a panel is a door
    canvas.style.cursor = hover && near(hover) ? 'pointer' : '';
    const atDoor = !fichaOpen && F.meshes.some(near);
    door.classList.toggle('on', atDoor);
    if (atDoor) hint.style.opacity = '0';

    F.atmos.update(t, F.candle.position, renderer, F.camera);
    renderer.render(F.scene, F.camera);
    requestAnimationFrame(frame);
  }
  frame();

  // lost context must not leave a black rectangle: fall back to the document floor
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault(); documentFloor('context-lost');
  });
  document.getElementById('asDoc').addEventListener('click', () => documentFloor('chosen'));

  window.__santuario = { F, aim, cur, renderer, frame };
}
