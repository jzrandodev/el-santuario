import * as THREE from 'three';

/* THE ROOM AROUND THE OBJECTS. A roadside shrine is never only its plaques: other people's
 * candles burn in it, dust hangs in whatever light there is, and ribbons move in the draught.
 * Everything here is warm — candle, wax and Gauchito red. Celeste is never used; it belongs
 * to the release alone. All motion reads one time value from the shared clock in main.js. */

const VERT = /* glsl */`
  attribute float seed;
  uniform float uTime, uScale, uSize, uDrift;
  uniform vec3 uCandle;
  uniform float uReach;      // > 0: only visible inside the carried light (dust)
  varying float vA;
  void main(){
    vec3 p = position;
    // slow drift, different for every point, so nothing moves in step
    p.x += sin(uTime * 0.11 + seed * 31.0) * uDrift;
    p.y += sin(uTime * 0.07 + seed * 17.0) * uDrift * 1.6;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = max(-mv.z, 0.1);
    float flick = 0.62 + 0.38 * sin(uTime * (2.3 + seed * 3.1) + seed * 40.0)
                              * sin(uTime * (4.1 + seed * 2.3) + seed * 13.0);
    float fog = exp(-d * 0.028);
    float lit = uReach > 0.0 ? smoothstep(uReach, 0.0, distance(p, uCandle)) : 1.0;
    vA = flick * fog * lit;
    gl_PointSize = uSize * (0.7 + 0.3 * flick) * uScale / d;
    gl_Position = projectionMatrix * mv;
  }`;

const FRAG = /* glsl */`
  uniform vec3 uColor;
  uniform float uAlpha;
  varying float vA;
  void main(){
    // a hot core inside a soft halo, the way a candle reads through smoke
    float r = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.16, 0.0, r);
    float halo = smoothstep(0.5, 0.0, r);
    float a = (core + halo * halo * 0.45) * vA * uAlpha;
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor * a, a);
  }`;

function points(count, place, opts){
  const pos = new Float32Array(count * 3), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) { place(pos, i * 3); seed[i] = opts.rnd(); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const m = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 }, uScale: { value: 400 }, uSize: { value: opts.size },
      uDrift: { value: opts.drift }, uCandle: { value: new THREE.Vector3() },
      uReach: { value: opts.reach || 0 }, uColor: { value: new THREE.Color(opts.color) },
      uAlpha: { value: opts.alpha }
    }
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return pts;
}

export function buildAtmosphere(scene, rnd, depth){
  const len = depth.near - depth.far + 20;

  /* Other people's candles: small warm points out in the fog, on a loose shell around the
   * walk. Never near the axis, so they never compete with a panel. Clustered, not even:
   * people light candles where others already have. */
  const clusters = Array.from({ length: 40 }, () => ({
    a: rnd() * Math.PI * 2, z: depth.near - 6 - rnd() * len, r: 15 + rnd() * 16
  }));
  const votive = points(340, (p, k) => {
    const c = clusters[Math.floor(rnd() * clusters.length)];
    const a = c.a + (rnd() - 0.5) * 0.5;
    const r = c.r + (rnd() - 0.5) * 4;
    p[k] = Math.cos(a) * r;
    p[k + 1] = Math.sin(a) * r * 0.45 - 2 + (rnd() - 0.5) * 3;
    p[k + 2] = c.z + (rnd() - 0.5) * 9;
  }, { rnd, size: 1.6, drift: 0.0, color: 0xFFB45A, alpha: 1.0 });

  /* Dust, seen only where the carried candle is. Fine and slow. */
  const dust = points(1400, (p, k) => {
    p[k] = (rnd() - 0.5) * 26;
    p[k + 1] = (rnd() - 0.5) * 15;
    p[k + 2] = depth.near + 4 - rnd() * (len + 4);
  }, { rnd, size: 0.11, drift: 0.35, color: 0xE8DCC0, alpha: 0.8, reach: 7.5 });

  /* Ribbons, now through the whole depth. They sway a little, each at its own pace. */
  const ribbons = new THREE.Group();
  for (let i = 0; i < 90; i++) {
    const h = 3 + rnd() * 11;
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(0.05 + rnd() * 0.06, h),
      new THREE.MeshBasicMaterial({
        color: 0xB01218, transparent: true, opacity: 0.10 + rnd() * 0.16,
        side: THREE.DoubleSide, depthWrite: false
      })
    );
    const a = rnd() * Math.PI * 2, r = 13 + rnd() * 17;
    // never right beside the visitor's starting point, where one would read as a red bar
    m.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.5 + (rnd() - 0.5) * 8, depth.near - 10 - rnd() * len);
    m.rotation.z = (rnd() - 0.5) * 0.5;
    m.userData.base = m.rotation.z;
    m.userData.phase = rnd() * 6.283;
    ribbons.add(m);
  }

  scene.add(votive, dust, ribbons);

  const size = new THREE.Vector2();
  return {
    ribbons,
    update(t, candle, renderer, camera){
      renderer.getDrawingBufferSize(size);
      const scale = size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
      for (const o of [votive, dust]) {
        const u = o.material.uniforms;
        u.uTime.value = t; u.uScale.value = scale; u.uCandle.value.copy(candle);
      }
      for (const m of ribbons.children) {
        m.rotation.z = m.userData.base + Math.sin(t * 0.35 + m.userData.phase) * 0.04;
      }
    }
  };
}
