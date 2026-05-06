# merca-presets

Visual deliverable for the [merca.earth](https://merca.earth) AI Style Preset Curation
brief — a Next.js app that catalogues 10 curated presets, grouped by intent, with the
full spec for each (lineage references, palette, prompt template, test plan).

## Run it

```bash
pnpm i
pnpm dev          # http://localhost:3000
```

## What's inside

```
merca-presets/
├── app/
│   ├── page.tsx                     # home — all presets, grouped
│   ├── presets/[id]/page.tsx        # detail — palette, references, prompt
│   ├── grouping/page.tsx            # picker IA proposal
│   ├── audit/page.tsx               # rubric for existing presets
│   └── globals.css                  # design tokens, type stack
├── components/
│   ├── Header.tsx
│   ├── PresetCard.tsx
│   ├── PaletteStrip.tsx
│   ├── PromptBlock.tsx              # client — copy-to-clipboard
│   ├── CopyButton.tsx               # client
│   └── ReferenceList.tsx
├── lib/
│   ├── types.ts                     # Preset, Group, Alternate
│   └── presets.ts                   # the 10 + 2 alternates, fully typed
└── spec/                            # raw deliverable docs (Markdown + JSON)
    ├── README.md
    ├── PRESETS.md                   # the 10 presets, written long
    ├── GROUPING.md                  # picker grouping rationale
    ├── EXISTING-AUDIT.md            # audit framework
    └── presets.json                 # machine-readable export
```

## The deliverable

Same content reaches you in three forms:

1. **The Next.js app** at `app/` — visual, link-shareable, same design language as the
   merca.earth integration demo.
2. **`lib/presets.ts`** — typed export. Drop straight into your picker config.
3. **`spec/` Markdown + JSON** — long-form docs for review or porting into Notion / a
   PDF / a Figma annotation layer.

## What's still pending

- v0.1 prompts written against the documented model assumptions; they need to be
  iterated against the **actual model** before lock-in.
- Test outputs across the six location archetypes × zoom levels — to be added as
  `public/samples/<preset-id>/<archetype>-<zoom>.png` once iteration completes.
- Final keep / rework / drop calls on the existing preset library — pending access to
  the current set.

## Design tokens

Same stack as the merca.earth integration demo: Inter (with Google Sans fallback),
Instrument Serif for display, JetBrains Mono for code. Auto dark-mode. One accent
color, no gradients, no shadows.

## License

MIT.
