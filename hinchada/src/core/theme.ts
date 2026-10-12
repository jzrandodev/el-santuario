export type Rgb = { r: number; g: number; b: number };

export type ThemeTokens = {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  glow: string;
};

const DARK_INK = '#0b0b0f';
const LIGHT_INK = '#ffffff';

export function hexToRgb(hex: string): Rgb {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) throw new Error(`Invalid hex color: ${hex}`);
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex({ r, g, b }: Rgb): string {
  const to = (v: number) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

export function mix(a: string, b: string, t: number): string {
  const x = hexToRgb(a);
  const y = hexToRgb(b);
  return rgbToHex({
    r: x.r + (y.r - x.r) * t,
    g: x.g + (y.g - x.g) * t,
    b: x.b + (y.b - x.b) * t,
  });
}

export function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const lin = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (hi + 0.05) / (lo + 0.05);
}

/** Readable text color for a given background. */
export function onColor(bg: string): string {
  return contrastRatio(bg, LIGHT_INK) >= contrastRatio(bg, DARK_INK) ? LIGHT_INK : DARK_INK;
}

/** Derive a full UI + visualizer palette from two user-chosen team colors. */
export function deriveTheme(primary: string, secondary: string): ThemeTokens {
  const background = mix(DARK_INK, primary, 0.1);
  const surface = mix(DARK_INK, primary, 0.22);
  let text = LIGHT_INK;
  if (contrastRatio(background, text) < 7) text = mix(text, primary, 0.1);
  return {
    primary,
    onPrimary: onColor(primary),
    secondary,
    onSecondary: onColor(secondary),
    background,
    surface,
    text,
    muted: mix(text, background, 0.45),
    glow: mix(primary, secondary, 0.5),
  };
}
