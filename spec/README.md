# merca.earth · style preset library — spec

A point-of-view-first preset library for the merca.earth map-painting tool.
Picking any preset should feel like choosing a lens, not rolling a dice.

## What's here

- **[PRESETS.md](./PRESETS.md)** — the 10 core presets, each end-to-end
  specified: name, description, references, palette, prompt, negatives,
  expected behaviour, picker group, and verification status. Plus the
  alternates list (queued candidates + demoted core presets).
- **[GROUPING.md](./GROUPING.md)** — picker IA proposal. Four intent-based
  groups (Atmospheres / Compositions / Documents / Pop Surfaces) instead of
  medium-based ones. Order-within-group rationale and edge-case handling.
- **[EXISTING-AUDIT.md](./EXISTING-AUDIT.md)** — a 5-criterion scoring rubric
  with three worked examples (Watercolor, Anime, Cyberpunk). Decision matrix:
  keep / rework / drop.
- **[presets.json](./presets.json)** — machine-readable export. Drop into a
  picker config, import into a CMS, render in another tool.

## What's done vs what's not

The split is honest and explicit. The Next.js app has a dedicated `/process`
page that walks through every stage and labels its current status.

| Stage | Status |
| --- | --- |
| Reference + lineage research | done |
| Palette + composition lock | done |
| Prompt v1.0 drafted (with inline negatives for model-agnostic use) | done |
| Picker IA + 4-group proposal | done |
| Audit framework + 3 worked examples | done |
| Geographic rebalance (drop Memphis, add Shan Shui, queue Mughal + Lotería) | done |
| **Prompt iteration against the production model** | **pending — needs team** |
| **Cross-archetype × zoom test sweep** | **pending — needs team** |
| **Audit pass on the team's actual current preset library** | **pending — needs list** |
| `bestZoomLevels` claims verified | provisional |

## Curation principles

Five rules every preset in this library follows. They're the operational form
of the brief's instruction *"every style is recognizable on sight"*.

1. **Anchor to a lineage, not a medium.** "Watercolor" is a category.
   "Anna Atkins's 1843 algae cyanotypes" is a lens. Every preset names
   specific artists, eras, or movements — three deep beats six shallow.
2. **Constrain the palette explicitly.** Each preset names 2–6 colours as hex
   values. "Mineral palette: indigo, ochre, sumi-black, single touch of
   vermilion" beats "muted colors".
3. **Compose deliberately.** Every prompt declares its framing, light
   direction, and depth model. Without this the model defaults to centered
   hero composition.
4. **Use negatives sparingly, name them — and inline the load-bearing ones.**
   One or two specific exclusions per preset ("No text", "No people"), never
   a generic "low quality, blurry" tail. The most important negatives are
   folded into the positive prompt as "no X" so they survive on models
   without a separate negative-prompt input.
5. **Test against the same six archetypes.** Ocean, urban, mountain, suburban,
   desert, polar — at three zoom levels. A preset is *fully tested* only when
   80%+ of those 18 generations read as the same lens. The `SampleGrid`
   component on every detail page surfaces what's been tested.

## What the merca.earth team needs to do next

To move from `verification: 'curation-only'` → `'fully-tested'`:

1. **Wire prompts into the model harness.** Use `lib/presets.ts` as the
   source of truth. For the model call: replace `{location}` in
   `preset.prompt` with the user's selection. If the model accepts a
   negative input, also pass `preset.negativeHints.join(', ')`. If not,
   the inline negatives carry the load.
2. **Run a 9-tile sample sweep per preset** — three locations × three zooms.
   Drop outputs into `public/samples/<preset-id>/<archetype>-<zoom>.png`.
   The detail page auto-populates.
3. **Score each tile against the audit rubric.** Anything below 20/25 on
   cross-archetype or cross-zoom triggers a v1.1 prompt revision.
4. **Share the team's existing in-product preset list** so I can run the
   keep / rework / drop pass that the brief asked for.

## Format

Everything here is plain Markdown + JSON. No build step. Re-use any of it as
the source for a Figma board, a Notion page, a Linear scope doc, or a slide
deck. The JSON is shaped to drop straight into a `presets.config.ts` import.
