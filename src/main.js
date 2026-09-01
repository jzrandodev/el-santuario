import * as THREE from 'three';
import { buildField } from './field.js';
import { PANELS, STATE, TOTAL } from './panels.js';

const canvas = document.getElementById('scene');
const ui = document.getElementById('ui');
const readout = document.getElementById('readout');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- the floor: if WebGL is unavailable, or motion is refused, the shrine is a document ----
 * This is not a degraded version. It is the same thirteen objects, the same three states and
 * the same facts, held still and readable. A volumetric field has no natural linear fallback,
 * so one is authored rather than pretended. */
function documentFloor(reasonClass){
  readout.hidden = false;
  readout.classList.add(reasonClass);
  const li = PANELS.map(p => `
    <li class="${p.state}">
      <div class="st">${p.state === STATE.PIDO ? 'TE PIDO'
        : p.state === STATE.GRACIAS ? 'GRACIAS POR EL FAVOR CONCEDIDO' : 'SIN NOMBRE TODAVÍA'}</div>
      <div class="nm">${p.name}</div>
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
  nTotal.textContent = TOTAL;

  const found = { pido: 0, gracias: 0, fin: 0 };
  let total = 0;

  function resize(){
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    F.camera.aspect = w / h;
    F.camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  /* MOVEMENT — free, and never a scroll. Pointer drifts the camera laterally and vertically,
   * the wheel travels through depth, and a click flies to whatever was clicked. Keyboard does
   * all of it so the shrine is navigable without a pointer at all. */
  const aim = { x: 0, y: 0, z: F.camera.position.z };
  const cur = { x: 0, y: 0, z: F.camera.position.z };
  let px = 0.5, py = 0.5, moved = false;

  addEventListener('pointermove', e => {
    px = e.clientX / innerWidth; py = e.clientY / innerHeight;
    aim.x = (px - 0.5) * 22; aim.y = -(py - 0.5) * 13;
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  }, { passive: true });

  addEventListener('wheel', e => {
    aim.z = THREE.MathUtils.clamp(aim.z + e.deltaY * 0.035, F.depth.far, F.depth.near);
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  }, { passive: true });

  addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowUp' || k === 'w') aim.z -= 4;
    else if (k === 'ArrowDown' || k === 's') aim.z += 4;
    else if (k === 'ArrowLeft' || k === 'a') aim.x -= 3;
    else if (k === 'ArrowRight' || k === 'd') aim.x += 3;
    else return;
    e.preventDefault();
    aim.z = THREE.MathUtils.clamp(aim.z, F.depth.far, F.depth.near);
    if (!moved) { moved = true; hint.style.opacity = '0'; }
  });

  // touch: drag to travel
  let tLast = null;
  addEventListener('touchstart', e => { tLast = e.touches[0]; }, { passive: true });
  addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (tLast) {
      aim.x = THREE.MathUtils.clamp(aim.x - (t.clientX - tLast.clientX) * 0.05, -14, 14);
      aim.z = THREE.MathUtils.clamp(aim.z - (t.clientY - tLast.clientY) * 0.09, F.depth.far, F.depth.near);
      if (!moved) { moved = true; hint.style.opacity = '0'; }
    }
    tLast = t;
  }, { passive: true });

  const ray = new THREE.Raycaster();
  addEventListener('click', e => {
    const p = new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(p, F.camera);
    const hit = ray.intersectObjects(F.meshes)[0];
    if (hit) aim.z = hit.object.position.z + 7.4;
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
    F.candle.position.set(cur.x + (px - 0.5) * 5.0, cur.y - (py - 0.5) * 3.0, cur.z - 5.2);
    F.candle.intensity = 118 * flick;
    F.flame.position.copy(F.candle.position);
    F.flame.material.opacity = 0.72 + 0.28 * flick;
    F.flame.scale.setScalar(0.28 + 0.05 * flick);

    // a panel the light has reached stays found, permanently
    for (const m of F.meshes) {
      if (m.userData.lit) continue;
      if (m.position.distanceTo(F.candle.position) < 8.0) {
        m.userData.lit = true;
        found[m.userData.panel.state]++; total++;
        counts[m.userData.panel.state].textContent = found[m.userData.panel.state];
        nFound.textContent = total;
      }
    }

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
