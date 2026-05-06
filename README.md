# merca-presets

**AI style preset library for [merca.earth](https://merca.earth).**

A visual catalogue of **10 curated style presets** for the merca.earth map-painting
tool — each preset a deliberate *lens* on a place, anchored to a real lineage of
artists and movements. Includes a 4-group picker information-architecture proposal,
a 5-criterion audit framework for grading existing presets, and three deliverable
formats (Next.js app, typed TS export, Markdown + JSON specs).

![merca.earth style preset library — home page showing the Atmospheres and Compositions groups](public/docs/home-groups.png)

---

## Table of contents

1. [The brief](#the-brief)
2. [The deliverable, in one paragraph](#the-deliverable-in-one-paragraph)
3. [Run it locally](#run-it-locally)
4. [Walkthrough — what each page does](#walkthrough--what-each-page-does)
5. [The 10 presets](#the-10-presets)
6. [Grouping — the 4-intent picker](#grouping--the-4-intent-picker)
7. [Audit framework — keep / rework / drop](#audit-framework--keep--rework--drop)
8. [Repository layout](#repository-layout)
9. [Three deliverable formats](#three-deliverable-formats)
10. [Design tokens](#design-tokens)
11. [How to integrate the presets](#how-to-integrate-the-presets)
12. [Testing the presets against a model](#testing-the-presets-against-a-model)
13. [Demo recording — suggested script](#demo-recording--suggested-script)
14. [Status & roadmap](#status--roadmap)
15. [License](#license)

---

## The brief

> merca.earth is a world map you can paint on. People paint freehand, or pick a
> style preset and let the model generate art for a place.
>
> The presets are the bones of the generation experience. Pick a good one and the
> result feels deliberate. Pick a weak one and you get average AI output.
>
> **Goal:** A preset library where every style is recognizable on sight. Picking
> any preset feels like choosing a lens, not rolling a dice.

This repo is the response to that brief. **Curation, art direction, and prompt
engineering combined — no artwork production.**

## The deliverable, in one paragraph

Ten new presets, each fully specified: a 4–6 word tagline, a 1–3 sentence point of
view, a locked 2–6 colour palette, three deep references to real artists or works,
a v1.0 prompt template (with a `{location}` substitution token), specific negative
hints, a list of zoom levels at which it sings, and a six-archetype test plan.
Plus an information-architecture proposal that groups the picker by *user intent*
(four groups), and a 5-criterion rubric for keep / rework / drop calls on whatever
existing presets the team has today.

## Run it locally

```bash
pnpm i
pnpm dev          # http://localhost:3000  (or 3001 if 3000 is busy)
pnpm typecheck    # tsc --noEmit, must be clean
pnpm build        # production build, generates 16 static routes
pnpm start        # serve the production build
pnpm lint         # next lint
```

Requires Node ≥ 18.18. The repo uses pnpm but `npm install` works just as well —
nothing in the build depends on pnpm-specific features.

When the dev server is up, the routes you'll want for the demo are:

| Route                       | Purpose                                                  |
| --------------------------- | -------------------------------------------------------- |
| `/`                         | Catalogue — all 10 presets, grouped, with palette swatch |
| `/presets/:id`              | Detail page — palette, references, prompt, test plan     |
| `/grouping`                 | Picker IA proposal — the 4 intents, ordering, edge cases |
| `/audit`                    | 5-criterion rubric + worked examples for typical presets |

The 10 valid `:id` slugs are: `paris-1924`, `sosaku-hanga`, `concrete-brutal`,
`risograph-civic`, `gouache-field-guide`, `acid-topo`, `polaroid-diary`,
`indigo-cyanotype`, `memphis-postcard`, `ghibli-6am`.

## Walkthrough — what each page does

**Home (`/`).** The brief headline up top, four small key/value rows giving the
shape of the deliverable (preset count, group count, format, status), then four
sections — one per group — each containing the preset cards for that group. Each
card carries the preset's name, italic tagline, one-sentence description, the
locked palette as a swatch strip, and the zoom range at which it works.

**Preset detail (`/presets/:id`).** The full spec for one preset:

- Group label and name
- Tagline (italic serif, 4–6 words — the lens condensed)
- Point-of-view paragraph
- Palette strip (large swatch + hex codes in mono)
- References — three real artists, eras, or works, three deep beats six shallow
- Prompt template, in a copy-to-clipboard block, with `{location}` as the
  substitution token
- Negative hints — short and specific to this style, never generic
- Six-archetype test plan: ocean, urban, mountain, suburban, desert, polar — each
  with a one-line note on what that archetype tests
- A footer key/value of id, group, best-zoom range, and whether the preset
  expects to render text

**Grouping (`/grouping`).** The picker IA proposal. Four intents, ordered top to
bottom by approachability, each with a blurb explaining the user's mental state
and the chips for the presets in that group. Below: order rules (across groups,
within groups) and edge cases (preset fits two intents, seasonal/themed picks, a
preset that isn't working).

**Audit (`/audit`).** A 5-criterion rubric (Point of view, Distinctness,
Cross-archetype consistency, Cross-zoom consistency, Thumbnail legibility) with
each criterion scored 1–5, totals out of 25 mapped to keep / rework / drop
thresholds. Three worked examples — Watercolor (generic), Anime (generic),
Cyberpunk (generic) — each with row-by-row scoring and a specific recommendation.

## The 10 presets

| #  | Preset                   | Group         | Lineage anchor                                            |
| -- | ------------------------ | ------------- | --------------------------------------------------------- |
| 1  | **Concrete Brutal**      | Atmospheres   | Tarkovsky's *Stalker* (1979), Nadav Kander, brutalism     |
| 2  | **Studio Ghibli at 6am** | Atmospheres   | Kazuo Oga, Princess Mononoke, Spirited Away backgrounds   |
| 3  | **Paris 1924**           | Compositions  | Saul Steinberg, George Grosz, Sempé                       |
| 4  | **Sōsaku Hanga**         | Compositions  | Hiroshi Yoshida, Kawase Hasui, Tatsuo Mitsuoka            |
| 5  | **Gouache Field Guide**  | Documents     | Audubon, Ernst Haeckel, Beatrix Potter                    |
| 6  | **Polaroid Diary**       | Documents     | Wim Wenders, William Eggleston, Stephen Shore             |
| 7  | **Indigo Cyanotype**     | Documents     | Anna Atkins (1843), Bertha E. Jaques, Christian Marclay   |
| 8  | **Risograph Civic**      | Pop Surfaces  | Hato Press, Mike Perry, Riso Club Tokyo                   |
| 9  | **Acid Topo**            | Pop Surfaces  | USGS quadrangles ⨯ Designers Republic ⨯ Aphex Twin sleeve |
| 10 | **Memphis Postcard**     | Pop Surfaces  | Sottsass, Du Pasquier, Karel Martens                      |

Plus two **alternates** held in reserve in `lib/presets.ts` (same shape minus the
tested fields), ready to promote when an existing preset is dropped:

- **Manga Dust** — Modern seinen ink atmosphere (Tsutomu Nihei, Kentaro Miura)
- **Tropicália** — Hand-tinted Brazilian lithography (Antônio Maia, Hélio Oiticica)

Every preset has a single **point of view** that survives a thumbnail at 80 px.
The rule applied across the set: *three deep references beat six shallow ones.*
A lineage like "Saul Steinberg + George Grosz" produces a stronger lens than
"pen-and-ink illustration".

## Grouping — the 4-intent picker

The current picker (described in the brief) is a flat list. That works at six
presets. With twelve or more it becomes a wall — every preset costs the same to
scan, so decision quality drops. The fix isn't alphabetical order; it's grouping
around *why* the user is picking.

| Group         | The user's mental state                                                              | Order |
| ------------- | ------------------------------------------------------------------------------------ | ----- |
| Atmospheres   | "I know how this place should *feel*; I don't yet care how it looks."                | 1st   |
| Compositions  | "I want a strong graphic point of view — print-design discipline applied to a place."| 2nd   |
| Documents     | "I want this place to feel observed, recorded, catalogued, photographed."            | 3rd   |
| Pop Surfaces  | "I want a poster about this place — playful, decorative, sign-like."                 | 4th   |

**Ordering rules.** Two layers, each deliberate:

1. *Across groups* — top to bottom by approachability. Atmospheres first because
   mood-led is the most common first-time intent. Pop Surfaces last because it
   rewards exploration after a user has landed on something safe.
2. *Within each group* — most legible preset first, most experimental last. The
   first preset in any group should never confuse a new user. The last preset
   can be weird; that's the point.

**Edge cases handled in the IA proposal:** preset fits two intents, seasonal
picks, a preset that isn't working (demote, don't delete).

## Audit framework — keep / rework / drop

Five criteria, each scored 1–5; total out of 25.

| #  | Criterion                    | The question to ask                                                                                  |
| -- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| 01 | Point of view                | Does the preset have a real lineage, or is it a generic medium label?                                |
| 02 | Distinctness                 | Held next to the other presets, is the result obviously different?                                   |
| 03 | Cross-archetype consistency  | Does the look hold across ocean, urban, mountain, suburban, desert, polar?                           |
| 04 | Cross-zoom consistency       | At Block, City, Country zoom levels does the lens still read as the same lens?                       |
| 05 | Thumbnail legibility         | In an 80–120 px swatch, can a user identify the style from across the room?                          |

**Decision thresholds.**

- **20–25 — keep.** Works as-is. Maybe a tightening pass on negatives.
- **15–19 — rework.** Bones are good but at least one criterion is failing. Most
  often: the lineage is too vague, or the palette isn't locked.
- **≤ 14 — drop or replace.** No point of view, or overlaps too closely with
  another preset that scores higher.

**Worked examples on `/audit`** show Watercolor, Anime, and Cyberpunk generic
presets graded row by row, with specific recommendations: Watercolor and Anime
rework (anchor to a tradition or director), Cyberpunk drop (replace with the
specific cinematic atmosphere of Concrete Brutal — same brief, no cliché tax).

## Repository layout

```
merca-presets/
├── app/
│   ├── page.tsx                       # home — all presets, grouped
│   ├── presets/[id]/page.tsx          # detail — palette, references, prompt
│   ├── grouping/page.tsx              # picker IA proposal
│   ├── audit/page.tsx                 # 5-criterion rubric
│   ├── layout.tsx                     # root layout, header + footer + meta
│   └── globals.css                    # design tokens, type stack, base styles
├── components/
│   ├── Header.tsx                     # sticky nav across all pages
│   ├── PresetCard.tsx                 # card on home + grouping pages
│   ├── PaletteStrip.tsx               # swatch strip (sm | md | lg)
│   ├── PromptBlock.tsx                # prompt code block (server)
│   ├── CopyButton.tsx                 # 'use client' — clipboard copy
│   └── ReferenceList.tsx              # bullet list of references
├── lib/
│   ├── types.ts                       # Preset, Group, Alternate, ZoomLevel
│   └── presets.ts                     # GROUPS + 10 PRESETS + 2 ALTERNATES
├── spec/
│   ├── README.md                      # spec index
│   ├── PRESETS.md                     # the 10 presets, written long
│   ├── GROUPING.md                    # picker grouping rationale
│   ├── EXISTING-AUDIT.md              # audit framework
│   └── presets.json                   # machine-readable export
├── public/
│   └── docs/
│       └── home-groups.png            # README screenshot
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Three deliverable formats

The same content reaches the team in three shapes — pick whichever fits the
review path.

1. **The Next.js app at `app/`** — visual, link-shareable, in the same design
   language as the merca.earth integration demo. Best for a walk-through call.
2. **`lib/presets.ts`** — typed export. Drop straight into the picker config.
   `Preset` and `Group` types live in `lib/types.ts`.

   ```ts
   import { GROUPS, PRESETS, presetById, presetsInGroup } from '@/lib/presets';

   const allInDocuments = presetsInGroup('documents');
   const polaroid = presetById('polaroid-diary');
   ```
3. **`spec/` — Markdown + JSON.** Long-form docs for review or porting into
   Notion, a PDF, or a Figma annotation layer. `spec/presets.json` is the
   machine-readable export.

## Design tokens

Same stack as the merca.earth integration demo:

- **Type:** Inter (with Google Sans as primary fallback) for body, Instrument
  Serif for display, JetBrains Mono for code.
- **Colour:** one accent per surface, no gradients, no shadows. Auto dark mode
  via `prefers-color-scheme`.
- **Spacing:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px — declared as CSS
  variables in `app/globals.css`.
- **Motion:** 140 ms / 240 ms ease-out, full reduced-motion respect.

Edit the tokens in `app/globals.css` if porting into another design system.

## How to integrate the presets

For a frontend picker that reads the curated list:

```ts
// 1. Copy lib/types.ts and lib/presets.ts into the merca.earth app
// 2. Render the picker grouped by intent
import { GROUPS, presetsInGroup } from '@/lib/presets';

export function PresetPicker({ onPick }: { onPick: (id: string) => void }) {
  return (
    <div>
      {GROUPS.map((g) => (
        <section key={g.id}>
          <h3>{g.label}</h3>
          <p>{g.blurb}</p>
          {presetsInGroup(g.id).map((p) => (
            <button key={p.id} onClick={() => onPick(p.id)}>
              {p.name} — <em>{p.tagline}</em>
            </button>
          ))}
        </section>
      ))}
    </div>
  );
}
```

For the model call, use the `prompt` field with the `{location}` token replaced
by the user's selection, and pass `negativeHints` to whatever negative-prompt
hook the model exposes:

```ts
const filled = preset.prompt.replace('{location}', locationName);
const negative = preset.negativeHints.join(', ');
await model.generate({ prompt: filled, negative });
```

## Testing the presets against a model

Each preset has a six-archetype test plan rendered on its detail page. Until the
team has access to the production model in CI, the recommended manual loop:

1. For each preset, run all six archetypes at three zooms (block, city, country)
   — that's 18 generations per preset, 180 across the set.
2. Save outputs to `public/samples/<preset-id>/<archetype>-<zoom>.png` so the
   detail pages can render them in a future revision.
3. Score each result against the audit rubric. Anything that drops below 20/25
   on cross-archetype or cross-zoom goes to a v1.1 prompt revision.
4. Lock in v1.0 for everything that passes; iterate the rest.

Sample outputs are not bundled in this repo — the prompts are the unit of work
for the deliverable, and the team will produce the samples against their own
model build.

## Demo recording — suggested script

A two-minute walk-through that maps onto the four pages. Sequence:

1. **Open `/`.** Read the headline. Scroll the four groups. Hover a card to show
   the border-darken interaction.
2. **Click a preset card** — good picks are *Paris 1924*, *Sōsaku Hanga*, *Indigo
   Cyanotype*, *Acid Topo*. The detail page shows lineage references, locked
   palette + hex codes, the prompt template (with copy button), negative hints,
   and the six-archetype test plan. Click *copy* on the prompt to demo the flow
   into the model.
3. **Navigate to `/grouping`** — the four-intent picker proposal. Walk through
   the user's mental state per group, the across-group ordering rule, and the
   demotion strategy for under-performing presets.
4. **Navigate to `/audit`** — the 5-criterion rubric, the keep / rework / drop
   thresholds, and the three worked examples. Land on Cyberpunk → drop, with
   Concrete Brutal as the suggested replacement.
5. **Footer.** Version stamp `v1.0.0`, link back to merca.earth.

## Status & roadmap

**v1.0 — ready for review.** Ten presets fully specified. Four groups locked.
Audit rubric + worked examples shipped. Two alternates queued. Three deliverable
formats in sync (app, TS export, Markdown + JSON).

What can happen next, in priority order:

1. **Model-side iteration.** Run the test plan against the production merca.earth
   model and score outputs against the rubric. Lock prompts that pass at 20/25;
   produce a v1.1 revision for anything below.
2. **Audit pass on the existing in-product preset set.** Once the current
   library is shared, run the 5-criterion rubric against each one and produce
   keep / rework / drop calls. Promote the alternates into the slots that drop.
3. **Sample gallery.** Drop tested outputs into `public/samples/<preset-id>/…` so
   the detail pages can render them inline.
4. **Picker shipping.** Merge `lib/presets.ts` into the merca.earth app and
   wire the four-group picker.

## License

MIT.
