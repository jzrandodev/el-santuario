import * as THREE from 'three';
import { buildField } from './field.js';
import { PANELS, STATE, TOTAL } from './panels.js';

const canvas = document.getElementById('scene');
const ui = document.getElementById('ui');
const readout = document.getElementById('readout');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ROOM = { 'la-carta': import.meta.env.BASE_URL + 'drafts/la-carta.html' };

/* THE LEDGER — what this visitor has lit, and where they stood, survives a trip into the
 * letter room and back. Session only: a new visit is a new path. */
const LEDGER = 'santuario:ledger';
function readLedger(){
  try { return JSON.parse(sessionStorage.getItem(LEDGER)) || null; } catch (_) { return null; }
}
function writeLedger(v){ try { sessionStorage.setItem(LEDGER, JSON.stringify(v)); } catch (_) {} }

/* ---- the floor: if WebGL is unavailable, or motion is refused, the shrine is a document ----
 * This is not a degraded version. It is the same thirteen objects, the same three states and
 * the same facts, held still and readable. A volumetric field has no natural linear fallback,
 * so one is authored rather than pretended. */
function documentFloor(reasonClass){
  readout.hidden = false;
  readout.classList.add(reasonClass);
  document.getElementById('howto').hidden = true;  // the floor needs no movement instructions
  const li = PANELS.map(p => `
    <li class="${p.state}">
      <div class="st">${p.state === STATE.PIDO ? 'TE PIDO'
        : p.state === STATE.GRACIAS ? 'GRACIAS POR EL FAVOR CONCEDIDO' : 'SIN NOMBRE TODAVÍA'}</div>
      <div class="nm">${p.room ? `<a href="${ROOM[p.room]}">${p.name}</a>` : p.name}</div>
      <div class="fx">${[p.place, p.date].filter(Boolean).join(' · ')}${
        (p.place || p.date) ? '<br>' : ''}${p.fact}</div>
    </li>`).join('');
  readout.innerHTML = `
    <h1>El Santuario · Messi y la camiseta</h1>
    <p class="lede">No es una línea de tiempo. Son trece objetos en un santuario, y el orden lo
    elegís vos. Acá están todos, quietos.</p>
    <ol>${li}</ol>`;
  canvas.style.display = 'none';
}

let gl = null;
try { gl = canvas.getContext('webgl2') || canvas.getContext('webgl'); } catch (_) { gl = null; }
if (!gl) { documentFloor('no-webgl'); }
else if (reduce) { documentFloor('reduced'); }
else { start(); }

function start(){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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
  door.textContent = matchMedia('(hover: none)').matches
    ? 'tocá la carta para abrirla' : 'click o enter · abrí la carta';
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
  function light(m){
    m.userData.lit = true;
    const c = m.userData.panel.celeste;
    if (c && c > releaseAim) { releaseAim = c; document.body.classList.add('released'); }
    const P = m.userData.panel;
    said.textContent = [P.name, [P.place, P.date].filter(Boolean).join(', '), P.fact,
      P.room ? 'Enter para abrirla.' : ''].filter(Boolean).join('. ');
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
   * the wheel travels through depth (down goes deeper, as a page would), and a click flies to whatever was clicked. Keyboard does
   * all of it so the shrine is navigable without a pointer at all. */
  const aim = { x: 0, y: 0, z: F.camera.position.z };
  const cur = { x: 0, y: 0, z: F.camera.position.z };
  let px = 0.5, py = 0.5, moved = false;

  const back = readLedger();
  if (back) {
    for (const m of F.meshes) if (back.lit.includes(m.userData.panel.id)) light(m);
    Object.assign(aim, back.at); Object.assign(cur, back.at);
    moved = true; hint.style.opacity = '0';
  }
  function enter(m){
    writeLedger({ lit: F.meshes.filter(x => x.userData.lit).map(x => x.userData.panel.id),
                  at: { x: aim.x, y: aim.y, z: aim.z } });
    location.href = ROOM[m.userData.panel.room];
  }
  // a room opens only once you have reached its panel; from afar a click just travels there
  const near = m => m.userData.lit && Math.abs(cur.z - m.position.z) < 11;

  addEventListener('pointermove', e => {
    px = e.clientX / innerWidth; py = e.clientY / innerHeight;
    aim.x = (px - 0.5) * 22; aim.y = -(py - 0.5) * 13;
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  }, { passive: true });

  addEventListener('wheel', e => {
    aim.z = THREE.MathUtils.clamp(aim.z - e.deltaY * 0.035, F.depth.far, F.depth.near);
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  }, { passive: true });

  addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowUp' || k === 'w') aim.z -= 4;
    else if (k === 'ArrowDown' || k === 's') aim.z += 4;
    else if (k === 'ArrowLeft' || k === 'a') aim.x -= 3;
    else if (k === 'ArrowRight' || k === 'd') aim.x += 3;
    else if (k === 'Enter') {
      const m = F.meshes.find(x => x.userData.panel.room && near(x));
      if (m) enter(m);
      return;
    }
    else return;
    e.preventDefault();
    aim.z = THREE.MathUtils.clamp(aim.z, F.depth.far, F.depth.near);
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  });

  // touch: drag to travel. Swiping up goes deeper, the same gesture as reading down a page.
  let tLast = null;
  addEventListener('touchstart', e => { tLast = e.touches[0]; }, { passive: true });
  addEventListener('touchmove', e => {
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
    const p = new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(p, F.camera);
    const hit = ray.intersectObjects(F.meshes)[0];
    if (!hit) return;
    if (hit.object.userData.panel.room && near(hit.object)) enter(hit.object);
    else aim.z = hit.object.position.z + 7.4;
  });

  /* ONE CLOCK — every motion in the piece runs off this loop and nothing free-runs. */
  const clock = new THREE.Clock();
  function frame(){
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
    canvas.style.cursor = hover && hover.userData.panel.room && near(hover) ? 'pointer' : '';
    const atDoor = F.meshes.some(m => m.userData.panel.room && near(m));
    door.classList.toggle('on', atDoor);
    if (atDoor) hint.style.opacity = '0';

    renderer.render(F.scene, F.camera);
    requestAnimationFrame(frame);
  }
  frame();

  // lost context must not leave a black rectangle: fall back to the document floor
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault(); ui.hidden = true; documentFloor('context-lost');
  });

  window.__santuario = { F, aim, cur, renderer, frame };
}
