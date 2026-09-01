import * as THREE from 'three';
import { PANELS, STATE, paintPanel } from './panels.js';

const NIGHT = 0x0A0806;

/* Deterministic layout: the same shrine every visit, entered in a different order.
 * Randomness here is seeded, never Math.random, so a panel's place in the volume is a fact
 * about the shrine rather than an accident of the session. */
function seeded(seed){ let s=seed>>>0;
  return () => (s = (s*1664525 + 1013904223) >>> 0) / 4294967296; }

export function buildField(renderer){
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(NIGHT);
  // fog is what makes the volume unknowable: you can never see the whole shrine at once
  scene.fog = new THREE.FogExp2(NIGHT, 0.024);

  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 400);
  camera.position.set(0, 0, 6);

  // A very low ambient so an unlit panel is a shape, not a void. Everything else is carried.
  scene.add(new THREE.AmbientLight(0xB4C0C6, 0.32));

  /* THE CARRIED LIGHT. A point light that travels with the visitor and is the only real
   * source in the scene. Distance falloff does the work; there is no key and no fill. */
  const candle = new THREE.PointLight(0xFFD2A0, 118, 86, 1.40);
  scene.add(candle);
  const fc = document.createElement('canvas'); fc.width = fc.height = 128;
  const fx = fc.getContext('2d');
  const fg = fx.createRadialGradient(64, 64, 0, 64, 64, 64);
  fg.addColorStop(0.00, 'rgba(255,246,220,1)');
  fg.addColorStop(0.18, 'rgba(255,201,120,0.72)');
  fg.addColorStop(0.45, 'rgba(255,150,50,0.20)');
  fg.addColorStop(1.00, 'rgba(255,140,40,0)');
  fx.fillStyle = fg; fx.fillRect(0, 0, 128, 128);
  const flame = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(fc), blending: THREE.AdditiveBlending,
    depthWrite: false, transparent: true
  }));
  flame.scale.set(0.30, 0.30, 1);
  scene.add(flame);

  const rnd = seeded(20260719);
  const group = new THREE.Group();
  const meshes = [];

  PANELS.forEach((p, i) => {
    const tex = new THREE.CanvasTexture(paintPanel(p));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const brass = p.state === STATE.GRACIAS || p.rung === 3;
    /* MeshPhongMaterial, not Standard: brass needs a specular highlight and there is no
     * environment map in this scene. High metalness with no envMap renders black. */
    const mat = new THREE.MeshPhongMaterial({
      map: tex,
      specular: brass ? 0x6B5518 : 0x2A2925,
      shininess: brass ? 42 : 14,
      transparent: true
    });

    const s = (p.scale || 1) * 3.1;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(s * 0.75, s), mat);

    /* Distributed through a long volume the visitor flies into, never on a ring or a grid.
     * The first panel is placed deliberately, close to the axis and inside the candle's reach,
     * so the opening frame is one lit object in the dark rather than an empty black screen.
     * The five-second bar is real; the mechanic still has to be discovered by moving. */
    const first = i === 0;
    const ang = rnd() * Math.PI * 2;
    const rad = first ? 2.3 : 3.8 + rnd() * 8.2;
    mesh.position.set(
      Math.cos(ang) * rad * (first ? 0.5 : 1),
      Math.sin(ang) * rad * (first ? 0.4 : 0.56) + (first ? 0.4 : (rnd() - 0.5) * 2.6),
      first ? -6.5 : -2 - i * 6.4 - rnd() * 3.2
    );
    mesh.rotation.set((rnd() - 0.5) * 0.16, (rnd() - 0.5) * 0.42, (rnd() - 0.5) * 0.07);

    mesh.userData.panel = p;
    mesh.userData.lit = false;
    group.add(mesh);
    meshes.push(mesh);
  });

  scene.add(group);

  // red ribbons: the only colour in the volume that is not carried light
  const ribbons = new THREE.Group();
  for (let i = 0; i < 42; i++) {
    const h = 3 + rnd() * 11;
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(0.05 + rnd() * 0.06, h),
      new THREE.MeshBasicMaterial({
        color: 0xB01218, transparent: true, opacity: 0.10 + rnd() * 0.16, side: THREE.DoubleSide, depthWrite: false
      })
    );
    const a = rnd() * Math.PI * 2, r = 13 + rnd() * 17;
    m.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.5 + (rnd() - 0.5) * 8, 6 - rnd() * 90);
    m.rotation.z = (rnd() - 0.5) * 0.5;
    ribbons.add(m);
  }
  scene.add(ribbons);

  const depth = { near: 6, far: -PANELS.length * 6.4 - 16 };
  return { scene, camera, candle, flame, meshes, ribbons, depth };
}
