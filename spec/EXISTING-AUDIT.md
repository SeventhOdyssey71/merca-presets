# Existing preset audit — rubric and decision matrix

The brief: *"decide what to keep, drop, or rework in the existing presets."*

I haven't seen the existing list yet, so this doc is the **framework** I'll use
once you share it. It's also a worked example so you can see the shape.

---

## The 5-criterion scoring rubric

Each existing preset gets scored 1–5 on five criteria. Total score 5–25.

| Criterion | What I'm checking | 1 (poor) | 5 (excellent) |
| --- | --- | --- | --- |
| **POV** | Does the preset have a recognizable point of view? | "Watercolor" | "Edward Hopper's New England watercolors" |
| **Distinctness** | Is it different from every other preset in the library? | Reads same as another preset at thumbnail size | Instantly distinguishable |
| **Cross-archetype consistency** | Does it look like the same lens on Tokyo block, prairie town, mountain, coast, desert, forest? | Mood breaks between subjects | Same mood across 6/6 archetypes |
| **Cross-zoom behavior** | Does it work at Block, City, and Region zooms? | Only one zoom works | All three zooms render meaningfully |
| **Thumbnail readability** | Recognizable at 64×64? | Reads as noise / mush | Instantly identifiable |

---

## Decision thresholds

| Total score | Decision |
| --- | --- |
| **20–25** | Keep as-is. |
| **15–19** | Rework. The intent is right; tighten the prompt with anchored references and palette discipline. |
| **10–14** | Rework or drop. Reframe with a strong lineage, or replace with one of the new presets. |
| **5–9** | Drop. Replace with a new preset from PRESETS.md. |

---

## Worked example — how I'll apply this

Below are five plausible "default" preset names you might already have, with
an honest rubric pass on what each *probably* scores in current form. This is
a hypothetical until you share the actual set.

### Hypothetical: "Watercolor"

| Criterion | Score | Note |
| --- | --- | --- |
| POV | 1 | Medium category, no lineage |
| Distinctness | 2 | Models default-render watercolor as same look |
| Cross-archetype | 3 | Renders most subjects acceptably |
| Cross-zoom | 4 | Works across zooms |
| Thumbnail | 2 | Soft, mushy at 64×64 |
| **Total** | **12** | **Rework or drop.** Reframe as e.g. "Edward Hopper New England" or "Turner Storm" — pick a lineage. |

### Hypothetical: "Anime"

| Criterion | Score | Note |
| --- | --- | --- |
| POV | 2 | Genre, not specific era/studio |
| Distinctness | 2 | Bleeds into half the model's training |
| Cross-archetype | 3 | OK for cities, less for landscapes |
| Cross-zoom | 3 | Variable |
| Thumbnail | 3 | Color saturation helps |
| **Total** | **13** | **Rework.** Anchor to specific era (Studio Ghibli at 6am, Akira 1988, Shinkai 2010s). |

### Hypothetical: "Pixel Art"

| Criterion | Score | Note |
| --- | --- | --- |
| POV | 3 | Has identity at thumbnail |
| Distinctness | 4 | Hard to confuse |
| Cross-archetype | 4 | Pixel logic scales to anything |
| Cross-zoom | 3 | Loses pixel grid at high zooms |
| Thumbnail | 5 | Native to small sizes |
| **Total** | **19** | **Keep, light rework.** Anchor era (PC-98, Game Boy Color, MS-DOS) to give it a POV. |

### Hypothetical: "Sketch"

| Criterion | Score | Note |
| --- | --- | --- |
| POV | 1 | Medium, no lineage |
| Distinctness | 2 | Bleeds with line-drawing baseline |
| Cross-archetype | 3 | Works for solid subjects |
| Cross-zoom | 3 | OK |
| Thumbnail | 3 | Linework reads small |
| **Total** | **12** | **Rework or drop.** "Paris 1924" in this library replaces it with a lineage-anchored sketch. |

### Hypothetical: "Photo"

| Criterion | Score | Note |
| --- | --- | --- |
| POV | 1 | "Photo" isn't a lens |
| Distinctness | 1 | Indistinguishable from base model output |
| Cross-archetype | 5 | Photos always work |
| Cross-zoom | 5 | Photos always work |
| Thumbnail | 3 | Generic photos read as generic |
| **Total** | **15** | **Rework.** "Polaroid Diary" replaces it; or pick a photographer (Eggleston / Kander / Ghirri). |

---

## My default recommendation pattern

Across most teams' "v1" preset sets, the audit lands roughly at:

- **Keep:** 0–1 of the existing presets. The pixel-art-style one usually
  survives because it has built-in POV from the format.
- **Rework:** 1–2 of the existing presets. Always the ones where the *intent*
  is right but the *anchor* is missing.
- **Drop:** 3–5 of the existing presets. The medium-category ones
  (Watercolor / Oil / Sketch / Photo) are typically dead weight.

If your audit lands close to that pattern, the new library replaces the dropped
slots cleanly. If it lands very differently, that's interesting — happy to
re-tune.

---

## Process when you share the set

1. You drop me the list of existing presets, ideally with sample outputs (5
   per preset, varied locations).
2. I score each preset against the rubric above and write a one-paragraph
   verdict per preset.
3. We meet for 30 minutes — agreed final list (existing keeps + reworks +
   new), agreed picker grouping.
4. I write the rework prompts for the kept-and-revised presets. Same
   spec format as the new presets in PRESETS.md.

Turnaround: 2 days from getting the list to a written audit.
