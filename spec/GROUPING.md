# Picker IA — grouping proposal

## The recommendation in one sentence

**Group by intent, not by medium.** Users come to the picker with a feeling ("I
want this place to feel monumental") not a craft ("I want a watercolor"). Four
groups, ordered by frequency-of-use.

---

## The four groups

### 1 · Atmospheres — *set a mood*

When the user knows how the place should *feel* and doesn't yet care how it
looks. These presets bend any subject into a single emotional register.

- Concrete Brutal *(monumental, threatening)*
- Studio Ghibli at 6am *(held, pre-dawn)*
- Polaroid Diary *(intimate, low-light)*
- *future:* a sunlit summer-noon preset, a winter-grey preset

### 2 · Documents — *make a place feel observed and recorded*

When the user wants the place to feel *witnessed* — catalogued, photographed,
specimen-ized.

- Gouache Field Guide *(catalogued)*
- Indigo Cyanotype *(specimen-pressed)*
- Polaroid Diary *(travel-journaled)* — also lives here secondarily

### 3 · Compositions — *strong graphic point of view*

When the user wants a styled illustration with a recognizable hand. Print-design
discipline applied to a place.

- Paris 1924 *(observed, witty)*
- Sōsaku Hanga *(distilled, atmospheric)*
- *future alt:* Manga Dust *(ink-heavy, menacing)*

### 4 · Pop Surfaces — *playful, decorative, sign-like*

When the user wants the place to feel like a *poster* about itself — printed,
graphic, joyful.

- Memphis Postcard *(geometric, exuberant)*
- Risograph Civic *(indie-press, friendly)*
- Acid Topo *(remixed cartography)*

---

## Why this beats the medium-based default

Most preset pickers are organized by craft category — Watercolor / Oil /
Photo / Digital / Sketch. Three problems:

1. **Users don't think in mediums.** They think in feelings or in references.
   "I want this to look like a New Yorker cover" doesn't map to "Sketch".
2. **Mediums collapse distinct presets together.** Two "watercolor" presets
   with very different POVs (Edward Hopper vs. Studio Ghibli) end up in the
   same drawer despite being completely different lenses.
3. **It hides the POV.** The whole goal of this library is *recognizability on
   sight*. Grouping by medium re-buries that.

Intent-based grouping lets the user pick *how the place should feel* first, then
disambiguate inside the group on visual fit.

---

## Picker order — within each group

Order presets within a group by *how often they will get picked*, not
alphabetically. This is a frequency optimization based on the principle that
the first preset in a group sets the user's expectation for the whole group.

| Group | Order rationale | Lead preset |
| --- | --- | --- |
| Atmospheres | Most-evocative first | Studio Ghibli at 6am |
| Documents | Most-versatile first | Indigo Cyanotype |
| Compositions | Most-recognizable first | Paris 1924 |
| Pop Surfaces | Highest-energy first | Memphis Postcard |

You should A/B test the lead preset by group after launch. Watching
pick-rate-per-group will tell you within a week whether the lead is right.

---

## Group order — top to bottom

Order across the four groups, on screen, top to bottom:

1. **Atmospheres** — broadest appeal, most-likely first pick for new users
2. **Compositions** — for users who already know the look they want
3. **Documents** — narrower intent, picked deliberately
4. **Pop Surfaces** — last because they're the most opinionated and most
   polarizing; users who want them seek them

Rationale: New users explore top-down. Atmospheres have the lowest barrier to
"I'll just try one and see." Pop Surfaces are pickier; users who want them
will scroll.

---

## Picker UI notes

A few small nudges that compound:

1. **Show the group name as a header**, not as a tab. Tabs hide what's not
   active; headers show the whole library at once. The library is small enough
   to scroll.
2. **Each preset card carries its full name**, not a single-word label.
   "Sōsaku Hanga" is more memorable than "Print". The name *is* the point of
   view.
3. **Hover/tap reveals 1-line description** ("modernist Japanese woodblock").
   Don't show it on the resting card — let the card breathe.
4. **Thumbnail preview is a fixed sample location** (e.g., generated at Mt.
   Fuji + a Tokyo block + a coast) — the same location across all presets so
   users can directly compare lenses on identical subject. This is the single
   highest-impact picker change you can make.
5. **Recently-used row, above the groups, capped at 4.** Most users settle
   into 1–3 favorites; surface them.

---

## What this displaces

The brief mentions the existing set was built by the team and "lacks a point
of view." Concretely, the medium-based grouping (if any) goes away. If the
existing presets don't fit any of the four intent groups cleanly, that's
diagnostic — they probably belong in the *drop* column. See
[EXISTING-AUDIT.md](./EXISTING-AUDIT.md) for the rubric.
