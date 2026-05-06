# Preset library — the 10 + alternates

Single source of truth: `lib/presets.ts`. This Markdown is the human-readable
mirror; `presets.json` is the machine-readable mirror. Update all three
together.

Each preset is fully specified: a name with a point of view, a 1-sentence
description, three deep references, a current prompt template (with the most
load-bearing negatives inlined), a palette, a negative-hints array, expected
zoom levels (provisional until tested), and a verification status.

Prompts use `{location}` as the substitution token the app fills in per
generation.

> **Verification status legend.**
> `curation-only` — references / palette / prompt / group locked; not yet run
> against the production model.
> `prompt-tested` — run on at least one archetype/zoom and adjusted at least
> once.
> `fully-tested` — eighteen-tile sweep complete (6 archetypes × 3 zooms),
> prompt locked.

---

## Atmospheres

> Set a mood. When the user knows how the place should feel and doesn't yet care how it looks.

### Concrete Brutal — *Tarkovsky in 1979*

**Description.** Brutalist architecture under heavy fog. Quiet, monumental,
slightly threatening. Forces every place into the same atmospheric register.

**References.**
- Stalker (Tarkovsky, 1979) — color grade and pace
- Nadav Kander — Yangtze, The Long River photography
- National Theatre London at dusk

**Palette.** `#7a8086 · #9aa3aa · #1c1f22 · #d97a3b`

**Prompt template.**

```
{location} rendered as brutalist architecture under heavy fog. No people,
no vegetation, no saturated colors. Heavy concrete masses, board-marked
surfaces, monumental scale. Single warm pinpoint of distant light —
sodium-orange or candle-warm. Cinematic 35mm grain. Tarkovsky-era color
grade: desaturated blue-grey base, ink shadows, one warm highlight only.
Quiet, monumental, slightly threatening.
```

**Negatives.** people · vegetation · saturated colors

**Best zooms (provisional).** block · district · city
**Verification.** `curation-only`

---

### Studio Ghibli at 6am — *the cool morning before the characters wake up*

**Description.** A specific Ghibli moment — pre-dawn, mist on water,
blue-green sky with pink edge. Painterly atmosphere without the characters.

**References.**
- Studio Ghibli backgrounds — Princess Mononoke (1997), Spirited Away (2001)
- Kazuo Oga — Art of My Neighbor Totoro
- Hayao Miyazaki — watercolor concept art

**Palette.** `#7fa5a0 · #f7c4cf · #5e3a23 · #ece4c8 · #c43d3d`

**Prompt template.**

```
A painterly background scene of {location} at 6am — pre-dawn light, mist on
the ground. No characters, no people, no high-noon light. Studio Ghibli
background art tradition: Kazuo Oga, Mononoke, Spirited Away. Cool
blue-green sky with soft pink cloud edges, warm umber in foreground
silhouettes, cream-toned mist between layers. A single tiny saturated red
detail somewhere — a torii, a mailbox, a flower — that anchors the eye.
Hand-painted gouache and watercolor texture. The scene feels held,
breathing, just before the day starts.
```

**Negatives.** characters · people · high-noon light

**Best zooms (provisional).** district · city · region
**Verification.** `curation-only`

---

### Shan Shui — *mountain-water ink, distance receding*

**Description.** The Chinese ink-landscape tradition — mountain and water in
receding washes, vast negative space. Renders any place as if seen from a
Song-dynasty hand scroll.

**References.**
- Fan Kuan — Travelers Among Mountains and Streams (~1000 CE)
- Guo Xi — Early Spring (1072), Northern Song landscape theory
- Liu Dan — contemporary ink landscapes

**Palette.** `#1a1a1a · #5b6770 · #9aa3a8 · #e8e1cf · #a36a3e`

**Prompt template.**

```
A Chinese shan shui ink landscape of {location}, in the tradition of Fan
Kuan and Guo Xi. Sumi ink on aged silk: deep saturated black for nearest
ridges, mid-grey washes for middle distance, faint ghosted pale grey for
the farthest mountains. Vast unpainted silk between picture planes, the
negative space carrying the scale. A single small detail in earth-red ink
— a roof, a figure, a seal — placed where the eye needs to rest. No
outlines, no flat fills, no perspective grid; depth comes from value and
ink density only. Brushwork visible: dry brush on rock, wet brush on
water. Calm, reverent, ancient.
```

**Negatives.** perspective grid · flat color fill · modern outlines

**Best zooms (provisional).** region · country · continent
**Verification.** `curation-only`

---

## Compositions

> Strong graphic point of view. Print-design discipline applied to a place.

### Paris 1924 — *observed from a café*

**Description.** Single-pen ink wash with one signal-color accent and
generous white space. The aesthetic of a Saul Steinberg New Yorker cover
translated to a place.

**References.**
- Saul Steinberg — The View of the World from 9th Avenue (1976)
- George Grosz — ink-and-watercolor street studies, Berlin 1920s
- Jean-Jacques Sempé — Le Petit Nicolas covers

**Palette.** `#fafaf2 · #0c0c0c · #aaaaaa · #c8201f`

**Prompt template.**

```
A pen-and-ink wash drawing of {location}, in the style of Saul Steinberg's
New Yorker covers and George Grosz's 1920s Berlin sketches. No realistic
detail, no filled background, no rendered textures. Loose hand-drawn ink
linework with deliberate gaps. Single signal-red accent on one element
only — sign, awning, vehicle. Cool grey ink wash for shadows. Generous
ivory paper white around the subject. Composition: subject placed
off-centre, the white space framing it. Wry, observed.
```

**Negatives.** realistic detail · filled background · rendered textures

**Best zooms (provisional).** block · district · city · region · country
**Verification.** `curation-only`

---

### Sōsaku Hanga — *modernist Japanese woodblock*

**Description.** Distilled to color planes and air. The 20th-century creative
print movement — closer to Hiroshi Yoshida than to Hokusai.

**References.**
- Hiroshi Yoshida — Sailing Boats (Morning), 1926
- Kawase Hasui — Lake Misaka in Kai Province, 1931
- Tatsuo Mitsuoka — post-war wood prints

**Palette.** `#1f3a5f · #c69b4c · #0f0f0f · #b62a26 · #f3e6c7`

**Prompt template.**

```
A modernist Japanese woodblock print of {location}, in the tradition of
Hiroshi Yoshida and Kawase Hasui — the sōsaku hanga creative-print
movement. No black outlines on figures, no high-noon lighting. Limited
mineral palette: indigo, ochre, sumi-black, single touch of vermilion,
with cream paper showing through. Strong silhouettes, flat color planes,
atmospheric depth from value not detail. Visible wood-grain texture in the
pigment. Calm, slightly melancholy.
```

**Negatives.** outlines on figures · high-noon lighting · photo realism

**Best zooms (provisional).** district · city · region · country
**Verification.** `curation-only`

---

## Documents

> Make a place feel observed and recorded — catalogued, photographed, specimen-ized.

### Gouache Field Guide — *Audubon catalogue plate*

**Description.** Flat opaque gouache illustration of a place treated as a
specimen. Indicated label-marks and ruled grid lines — the look of an
Audubon plate without the readable text. (Most diffusion models render
labels as gibberish; the prompt asks for label *positions*, not spelled
words.)

**References.**
- John James Audubon — Birds of America plates (1827–38)
- Ernst Haeckel — Kunstformen der Natur (1904)
- Beatrix Potter — scientific illustrations of fungi

**Palette.** `#ede2c4 · #3d4754 · #5e7a4a · #a06432 · #c9a85c · #c43d3d`

**Prompt template.**

```
A 19th-century field-guide plate illustration of {location}, treated as a
natural specimen. No photographic realism, no neon colors, no readable
modern type. Flat opaque gouache, hand-painted detail without photographic
shading. Three or four short ink-mark *positions* arranged around the
subject like an Audubon plate — indicated label-marks, never spelled
words. Faint ruled grid lines and a single decorative border. Cream
aged-paper background with slight foxing at edges. Palette of muted earth
tones with one bright accent on a single feature. Subject centred, framed
by negative cream. Calm, observed, scholarly.
```

**Negatives.** photographic realism · modern type · readable lettering · neon colors

**Best zooms (provisional).** block · district · city
**Verification.** `curation-only`

---

### Polaroid Diary — *underexposed instant film, single warm light*

**Description.** A single instant-film frame, slightly underexposed, white
border intact. The aesthetic of a personal travel journal.

**References.**
- Wim Wenders — Instant Stories (2017) Polaroid catalogue
- William Eggleston — dye-transfer color (in spirit)
- Stephen Shore — Uncommon Places

**Palette.** `#0e0d12 · #e7a35a · #b85a7a · #ece5d4`

**Prompt template.**

```
A single Polaroid SX-70 photograph of {location}, slightly underexposed.
No sharp focus, no high-noon light, no multiple light sources. The classic
white SX-70 border framing the image, with very subtle patina. Dominant
darkness; one warm amber light source illuminating one element. Shadows
hold blue-black, highlights faded toward magenta — the look of
dye-instability in old Polaroids. Casual but deliberate framing, slightly
off-balance. The whole image reads as a quiet evening moment. Soft focus.
```

**Negatives.** sharp focus · high noon · many light sources

**Best zooms (provisional).** block · district · city
**Verification.** `curation-only`

---

### Indigo Cyanotype — *Anna Atkins blueprint, place as botanical specimen*

**Description.** Cyanotype contact print. Pure Prussian blue against
unbleached paper white. Botanical-specimen energy applied to any place.

**References.**
- Anna Atkins — Photographs of British Algae: Cyanotype Impressions (1843)
- Bertha E. Jaques — cyanotype botanicals
- Christian Marclay — contemporary cyanotypes

**Palette.** `#0e2a52 · #f3eddc`

**Prompt template.**

```
A cyanotype contact print of {location}, in the manner of Anna Atkins'
1843 algae specimens. Two colors only: deep Prussian blue and paper white
— no grayscale midtones, no other colors. The subject treated as if
pressed flat against light-sensitive paper — botanical specimen energy
applied to architecture or terrain. Visible brush strokes at edges of the
chemistry, slight tonal unevenness. Pure silhouette where appropriate,
fine line detail where the form demands it.
```

**Negatives.** grayscale midtones · color other than blue · photographic gradient

**Best zooms (provisional).** block · district · city · region · country · continent
**Verification.** `curation-only`

---

## Pop Surfaces

> Playful, decorative, sign-like. Make the place feel like a poster about itself.

### Risograph Civic — *the indie press of municipal life*

**Description.** Two-color riso print, slightly mis-registered, dot-textured.
The aesthetic of municipal pamphlets and arts-council posters.

**References.**
- Hato Press, London — risograph practice
- Mike Perry — Wondering People posters
- The Riso Club Tokyo prints

**Palette.** `#ff48b0 · #0078bf · #fffae8`

**Prompt template.**

```
A two-color risograph print of {location}, fluoro pink and cyan only, on
cream paper. No photographic detail, no perfect registration. Slightly
mis-registered — the pink layer offset 1–2mm from the cyan. Visible
dot-screen texture. Flat shapes, hand-drawn linework. The aesthetic of
municipal arts-council pamphlets and indie publishing: friendly, slightly
imperfect, civic. Bold composition, single focal subject. Slight
imperfection in registration is desirable.
```

**Negatives.** photographic detail · perfect registration · gradient shading

**Best zooms (provisional).** block · district · city · region · country
**Verification.** `curation-only`

---

### Acid Topo — *USGS map remixed for a 1992 rave flyer*

**Description.** USGS topographic map crossed with acid-house color
discipline. Contour lines as design language.

**References.**
- USGS 7.5-minute topographic quadrangle maps (1960s)
- The Designers Republic — early Warp Records covers
- Aphex Twin — Selected Ambient Works II sleeve

**Palette.** `#f4f1e8 · #a4ff00 · #ff0080 · #00d6ff · #000000`

**Prompt template.**

```
A topographic map of {location} in the USGS quadrangle tradition, but
recolored as a 1992 acid-house rave flyer. No perspective view, no natural
colors. Off-white paper base. Electric chartreuse contour lines at regular
intervals. Hot pink for any glyph-like marks (no real text). Cyan
elevation shading in the lowest band. Black hatching for cliffs or built
mass. Maintain the clinical precision of a real topographic map —
gridlines, scale-bar mark at edge, neat margins. Top-down map view only.
The aesthetic clash of bureaucratic cartography against rave color is the
point.
```

**Negatives.** real text · perspective view · natural colors

**Best zooms (provisional).** city · region · country · continent
**Verification.** `curation-only`

---

## Alternates

Held in reserve in `lib/presets.ts`. Some are demoted core presets (kept
available rather than deleted, per the audit's "demote, don't delete" rule).
Others are queued candidates ready for promotion when a slot opens.

### Mughal Miniature — *17th-century court painting, jewel palette*

**Group.** documents

**Description.** Indo-Persian court painting tradition. Hierarchical scale,
gold-leaf accents, jewel-tone pigments, terraced architecture. Treats a
place as if catalogued by an imperial atelier.

**References.** Akbarnama miniatures (c. 1590s) · Padshahnama (c. 1640s) · Bichitr — early 17th-century portrait miniatures

**Status.** Queued candidate — added in the v1.1 geo-rebalance pass.

---

### Mexican Lotería — *place rendered as a chance-game card*

**Group.** pop-surfaces

**Description.** The Mexican Lotería tradition: bold flat color, heavy black
outlines, decorative card border, a single iconic motif filling the frame.
Treats a place as if it were one of the 54 cards.

**References.** Don Clemente Jacques Lotería (1887) · José Guadalupe Posada — calavera and woodcut traditions · Marcos Raya, Rafael López — contemporary loterías

**Status.** Queued candidate — added in the v1.1 geo-rebalance pass.

---

### Manga Dust — *modern seinen ink atmosphere*

**Group.** compositions

**Description.** Modern seinen manga ink masses, screentone gradients,
blacker-than-black shadows. Atmospheric and slightly menacing.

**References.** Tsutomu Nihei — Blame! · Kentaro Miura — Berserk dust scenes · Kazuto Nakazawa

**Status.** Queued candidate.

---

### Tropicália — *hand-tinted Brazilian lithography*

**Group.** atmospheres

**Description.** Mid-century Brazilian lithography, warm sepia base + emerald
+ flamingo, hand-drawn type, bossa-nova languidness.

**References.** Antônio Maia — Tropicália movement posters · Hélio Oiticica · Tropicália album covers (1968–72)

**Status.** Queued candidate.

---

### Memphis Postcard — *1985 group geometry on a souvenir*

**Group.** pop-surfaces

**Description.** Memphis Group geometric exuberance, structured as a 5×7
postcard composition. Bold primaries against black.

**References.** Ettore Sottsass + Memphis Group, Milan 1981–87 · Nathalie Du Pasquier — textile designs · Karel Martens — Werkplaats Typografie covers

**Status.** *Demoted from core* — lineage clusters tightly with Risograph
Civic in Pop Surfaces (both bold flat-color print on cream). The reference
set was already Italian-heavy. Demoted to alternates so it can return when
the picker has room or when seasonal campaigns need it.
