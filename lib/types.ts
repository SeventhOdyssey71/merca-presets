/**
 * Shape of a single AI style preset for the merca.earth map-painting tool.
 *
 * Every preset is a *lens* on a place — the brief's word — anchored to a
 * lineage of real artists or movements with a defined point of view. The
 * fields below are the contract every entry meets.
 */

export type GroupId = 'atmospheres' | 'compositions' | 'documents' | 'pop-surfaces';

export type ZoomLevel = 'block' | 'district' | 'city' | 'region' | 'country' | 'continent';

export interface Group {
  id: GroupId;
  label: string;
  blurb: string;
  /** Notes for the picker designer about ordering / approachability. */
  pickerOrder: number;
}

export interface Preset {
  id: string;
  name: string;
  /** One short italic phrase shown under the name. The lens, in 4–6 words. */
  tagline: string;
  group: GroupId;
  /** One sentence — what makes this style distinct, in plain English. */
  description: string;
  /** 3–6 hex colors. Goes straight into a swatch strip. */
  palette: string[];
  /** Real artists, eras, or works. Three deep beats six shallow. */
  references: string[];
  /** The v0.1 prompt template. `{location}` is the substitution token. */
  prompt: string;
  /** 1–3 short negatives. Specific to this style, never generic. */
  negativeHints: string[];
  /** Cadastral levels from the merca.earth Index hierarchy. */
  bestZoomLevels: ZoomLevel[];
  /** True if the preset deliberately emits hand-lettered or typographic detail. */
  expectsText: boolean;
}

/**
 * Held-in-reserve picks. Same shape minus the tested fields. Promote by
 * filling out `prompt`, `negativeHints`, `bestZoomLevels` and moving to
 * `presets`.
 */
export interface Alternate {
  id: string;
  name: string;
  tagline: string;
  group: GroupId;
  description: string;
  references: string[];
}
