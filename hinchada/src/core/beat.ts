export type BeatGrid = {
  bpm: number;
  beatsPerBar: number;
  /** slots per beat, e.g. 4 = sixteenth notes */
  subdivisions: number;
};

export const slotsPerBar = (g: BeatGrid) => g.beatsPerBar * g.subdivisions;
export const beatMs = (g: BeatGrid) => 60000 / g.bpm;
export const slotMs = (g: BeatGrid) => beatMs(g) / g.subdivisions;

export type BeatPosition = { bar: number; beat: number; phase: number };

export function beatAt(timeMs: number, g: BeatGrid): BeatPosition {
  const totalBeats = timeMs / beatMs(g);
  const whole = Math.floor(totalBeats);
  return {
    bar: Math.floor(whole / g.beatsPerBar),
    beat: ((whole % g.beatsPerBar) + g.beatsPerBar) % g.beatsPerBar,
    phase: totalBeats - whole,
  };
}

/** Nearest grid slot (absolute index from t=0) for a tap time. */
export function quantize(timeMs: number, g: BeatGrid): number {
  return Math.max(0, Math.round(timeMs / slotMs(g)));
}

export const slotTimeMs = (slot: number, g: BeatGrid) => slot * slotMs(g);
