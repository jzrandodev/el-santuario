import { BeatGrid, quantize } from './beat';

const V = 'aeiouáéíóúüyAEIOUÁÉÍÓÚÜY';
// consonants* vowels+ (trailing consonants only if no vowel follows)
const SYLLABLE = new RegExp(`[^${V}]*[${V}]+(?:[^${V}]+(?![${V}]))?`, 'g');

/** Heuristic syllable split (Spanish-leaning). Users can fix it with tap-sync. */
export function splitSyllables(line: string): string[] {
  return line
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .flatMap((word) => {
      const parts = word.match(SYLLABLE);
      if (!parts) return [word];
      const joined = parts.join('');
      // keep any leftover characters (e.g. punctuation-only tails) attached
      return joined.length < word.length ? [...parts.slice(0, -1), parts[parts.length - 1] + word.slice(joined.length)] : parts;
    });
}

export type LyricLine = {
  text: string;
  syllables: string[];
  /** absolute grid slot for each syllable; same length as syllables */
  hits: number[];
};

export function makeLine(text: string): LyricLine {
  return { text, syllables: splitSyllables(text), hits: [] };
}

/**
 * Map tap timestamps (ms since playback start) onto syllables.
 * Extra taps are ignored; missing taps leave trailing syllables unassigned.
 * Two taps landing on the same slot are pushed to the next free slot.
 */
export function assignTaps(line: LyricLine, tapsMs: number[], g: BeatGrid): LyricLine {
  const hits: number[] = [];
  const n = Math.min(line.syllables.length, tapsMs.length);
  for (let i = 0; i < n; i++) {
    let slot = quantize(tapsMs[i], g);
    if (hits.length && slot <= hits[hits.length - 1]) slot = hits[hits.length - 1] + 1;
    hits.push(slot);
  }
  return { ...line, hits };
}

/** Index of the syllable that should be highlighted at a given slot, or -1. */
export function activeSyllable(line: LyricLine, slot: number): number {
  let active = -1;
  for (let i = 0; i < line.hits.length; i++) {
    if (line.hits[i] <= slot) active = i;
    else break;
  }
  return active;
}
