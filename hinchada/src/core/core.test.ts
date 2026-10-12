import { describe, expect, it } from 'vitest';
import { beatAt, quantize, slotMs } from './beat';
import { activeSyllable, assignTaps, makeLine, splitSyllables } from './lyrics';
import { PATTERNS, clampBpm } from './patterns';
import { contrastRatio, deriveTheme, mix, onColor } from './theme';

const grid = { bpm: 120, beatsPerBar: 4, subdivisions: 4 };

describe('beat grid', () => {
  it('computes slot length', () => expect(slotMs(grid)).toBe(125));
  it('locates bar/beat/phase', () => {
    const p = beatAt(2750, grid); // 5.5 beats
    expect(p.bar).toBe(1);
    expect(p.beat).toBe(1);
    expect(p.phase).toBeCloseTo(0.5);
  });
  it('quantizes to nearest slot', () => {
    expect(quantize(190, grid)).toBe(2);
    expect(quantize(-50, grid)).toBe(0);
  });
});

describe('lyrics', () => {
  it('splits syllables', () => {
    expect(splitSyllables('dale boca')).toEqual(['da', 'le', 'bo', 'ca']);
    expect(splitSyllables('campeón')).toEqual(['cam', 'peón']);
  });
  it('assigns taps and keeps hits strictly increasing', () => {
    const line = assignTaps(makeLine('dale boca'), [0, 10, 260, 500], grid);
    expect(line.hits).toEqual([0, 1, 2, 4]);
  });
  it('finds the active syllable', () => {
    const line = assignTaps(makeLine('dale boca'), [0, 125, 250, 500], grid);
    expect(activeSyllable(line, -1)).toBe(-1);
    expect(activeSyllable(line, 2)).toBe(2);
    expect(activeSyllable(line, 99)).toBe(3);
  });
});

describe('patterns', () => {
  it('every step array matches bar length', () => {
    for (const p of PATTERNS)
      for (const s of Object.values(p.steps)) expect(s).toHaveLength(p.beatsPerBar * p.subdivisions);
  });
  it('clamps bpm', () => expect(clampBpm(PATTERNS[0], 300)).toBe(130));
});

describe('theme', () => {
  it('picks readable text colors', () => {
    expect(onColor('#ffffff')).toBe('#0b0b0f');
    expect(onColor('#000000')).toBe('#ffffff');
  });
  it('derived text passes AAA on background for any team colors', () => {
    for (const [a, b] of [['#75aadb', '#ffffff'], ['#ffd400', '#0033a0'], ['#e30613', '#000000']]) {
      const t = deriveTheme(a, b);
      expect(contrastRatio(t.text, t.background)).toBeGreaterThan(7);
      expect(contrastRatio(t.onPrimary, t.primary)).toBeGreaterThan(4.5);
    }
  });
  it('mixes endpoints', () => expect(mix('#000000', '#ffffff', 0.5)).toBe('#808080'));
});
