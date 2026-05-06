# merca.earth · style preset library

A point-of-view-first preset library for the merca.earth map-painting tool. Picking any
preset should feel like choosing a lens, not rolling a dice.

## What's here

- **[PRESETS.md](./PRESETS.md)** — 10 new presets, each end-to-end specified: name,
  description, references, prompt, expected output, edge-case behavior, and
  cross-location test plan.
- **[GROUPING.md](./GROUPING.md)** — picker IA proposal. Four intent-based groups
  ("Atmospheres", "Documents", "Compositions", "Pop Surfaces") instead of medium-based
  ones ("Watercolor / Oil / Digital"). Plus order-within-group rationale.
- **[EXISTING-AUDIT.md](./EXISTING-AUDIT.md)** — a 5-criteria scoring rubric for the
  current set, applied as a worked example. Decision matrix: keep / rework / drop.
- **[presets.json](./presets.json)** — machine-readable export of every preset, ready
  to import into the app.
- **[preview/index.html](./preview/index.html)** — a single self-contained HTML page
  rendering each preset as a card with palette swatches, references, and the live
  prompt. Open it in a browser; no build step.

## Curation principles

Five rules every preset in this library follows. They're the operational form of the
brief's instruction *"every style is recognizable on sight"*.

1. **Anchor to a lineage, not a medium.** "Watercolor" is a category. "Edward Hopper's
   watercolors of New England in the 1930s" is a lens. Every preset names specific
   artists, eras, or movements.
2. **Constrain the palette explicitly.** Each preset names 3–6 colors. "Mineral
   palette: indigo, ochre, sumi-black, single touch of vermilion" beats "muted colors".
3. **Compose deliberately.** Every prompt declares its framing, light direction, and
   depth model. Without this the model defaults to centered hero composition.
4. **Use negatives sparingly, name them.** One or two specific exclusions per preset
   ("No text", "No people") — never a generic "low quality, blurry" tail.
5. **Test against the same six archetypes.** Tokyo block, prairie town, mountain
   wilderness, coastline, desert, dense forest, at three zoom levels. A preset is
   shipped only when 80%+ of those 18 generations read as the same lens.

## How the deliverable was built

1. Drafted ten preset directions across four intent buckets, biased toward styles with
   strong silhouette behavior (recognizable as 64×64 thumbnails on the map picker).
2. Wrote v0.1 prompts following the five rules above. Each prompt is structured
   identically: subject template → medium → lineage references → palette → composition
   → restraint.
3. Specified expected behavior across the six location archetypes and three zoom
   levels — what the preset should produce, where it might fail, and what to do about
   it.
4. Drafted a grouping proposal that organizes presets by *intent* rather than medium,
   because users come to the picker with a feeling ("I want this place to feel
   monumental"), not a craft ("I want a watercolor").
5. Wrote a 5-criterion audit rubric for the existing presets, scaled 1–5, with
   a worked example. Once you share the existing set I can apply it directly.

## What I need from you

To finalize iteration on the prompts I need:

- **Model identity.** Flux 1.1 Pro? Imagen 3? SDXL? Midjourney v7? Each weights prompt
  components differently. Prompts here are written portably; iterating on the actual
  model is where the last 20% of look comes from.
- **Existing preset list.** Names, descriptions, prompts (if exposed), and 3–5 sample
  generations per preset. I'll score them against the rubric and recommend
  keep / rework / drop.
- **Test access.** Either a brief access window to the generation pipeline, or a
  simple flow where you run the prompts on my behalf and share back 5–10 outputs per
  preset. Iteration cycle target: ≤ 2 days per preset.

## Timeline

- **Day 1–2** — share existing presets + model. I score and propose drops/reworks.
- **Day 3–8** — first-pass generation tests. Iterate prompts toward target.
- **Day 9–11** — cross-zoom + cross-location consistency pass.
- **Day 12** — short call: walk through the final library, picker grouping, and
  remaining open questions.

Two weeks end-to-end, fits comfortably inside the brief's window.

## Format

Everything here is plain Markdown + JSON + one HTML file. No build step. Re-use any of
it as the source for a Figma board, a Notion page, a Linear scope doc, or a slide
deck. The JSON is shaped to drop straight into a `presets.config.ts` import.
