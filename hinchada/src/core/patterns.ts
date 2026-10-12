export type Track = 'kick' | 'snare' | 'clap' | 'perc' | 'brass';

export type Pattern = {
  id: string;
  name: string;
  bpmRange: [number, number];
  defaultBpm: number;
  beatsPerBar: number;
  subdivisions: number;
  /** one entry per slot in the bar; 1 = hit */
  steps: Partial<Record<Track, number[]>>;
};

export const KEYS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'] as const;
export type Key = (typeof KEYS)[number];

const bar16 = (hits: number[]) => Array.from({ length: 16 }, (_, i) => (hits.includes(i) ? 1 : 0));

// Starter grooves. Placeholders to tune by ear, not transcriptions of anything.
export const PATTERNS: Pattern[] = [
  {
    id: 'murga',
    name: 'Murga',
    bpmRange: [100, 130],
    defaultBpm: 112,
    beatsPerBar: 4,
    subdivisions: 4,
    steps: { kick: bar16([0, 3, 8, 11]), snare: bar16([4, 12]), perc: bar16([2, 6, 10, 14]) },
  },
  {
    id: 'cumbia',
    name: 'Cumbia',
    bpmRange: [85, 110],
    defaultBpm: 96,
    beatsPerBar: 4,
    subdivisions: 4,
    steps: { kick: bar16([0, 8]), snare: bar16([4, 12]), perc: bar16([0, 3, 6, 8, 11, 14]) },
  },
  {
    id: 'clap-stomp',
    name: 'Clap & Stomp',
    bpmRange: [110, 140],
    defaultBpm: 124,
    beatsPerBar: 4,
    subdivisions: 4,
    steps: { kick: bar16([0, 8]), clap: bar16([4, 12]) },
  },
  {
    id: 'brass-push',
    name: 'Brass Push',
    bpmRange: [100, 135],
    defaultBpm: 118,
    beatsPerBar: 4,
    subdivisions: 4,
    steps: { kick: bar16([0, 6, 8]), snare: bar16([4, 12]), brass: bar16([0, 10, 14]) },
  },
];

export const getPattern = (id: string) => PATTERNS.find((p) => p.id === id);

export const clampBpm = (p: Pattern, bpm: number) => Math.min(p.bpmRange[1], Math.max(p.bpmRange[0], bpm));
