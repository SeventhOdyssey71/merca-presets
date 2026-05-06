# Preset library — 10 directions

Each preset is fully specified: a name with a point of view, a 1-sentence description,
3+ specific references, a v0.1 prompt template, expected output across location
archetypes and zoom levels, edge-case behavior, and the picker group it belongs to.

Prompts use `{location}` as the template token the app substitutes per generation.

---

## 01 · Paris 1924 — *observed from a café*

**Group:** Compositions

**Description.** Single-pen ink wash with one signal-color accent and generous white
space. The aesthetic of a Saul Steinberg *New Yorker* cover translated to a place.

**References.**
- Saul Steinberg, *The View of the World from 9th Avenue* (1976) — for the wry,
  observed-from-somewhere quality
- George Grosz, ink-and-watercolor street studies, Berlin 1920s
- Jean-Jacques Sempé, *Le Petit Nicolas* covers — for the airy negative space

**Palette.** Ivory paper · ink black · one signal hue (alizarin red, default).
Three colors total.

**Prompt template.**
```
A pen-and-ink wash drawing of {location}, in the style of Saul Steinberg's
New Yorker covers and George Grosz's 1920s Berlin sketches. Loose hand-drawn
ink linework with deliberate gaps. Single signal-red accent on one element
only — sign, awning, vehicle. Cool grey ink wash for shadows. Generous ivory
paper white around the subject. Composition: subject placed off-centre, the
white space framing it. No text. No realistic detail. Wry, observed.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | A noodle-stall awning with the red accent on the kanji sign |
| Prairie town | Grain elevator with one red barn door |
| Mountain | Cabin in white-paper void, red flag on the porch |
| Coastline | A pier with a single red buoy, ink-wash wave |
| Desert | A roadside motel sign, red neon glyph |
| Forest | Forester's hut, red lantern hanging |

**Zoom behavior.** Excellent at all zooms. At Block level the red signal becomes a
specific object; at Country level it becomes a region label or flag.

**Edge cases.**
- Crowded city scenes can fight the white-space rule — explicitly limit detail to
  3–4 elements in the prompt if needed.
- Avoid for dense vegetation parcels; the ink wash flattens trees into one mass.

---

## 02 · Sōsaku Hanga — *modernist Japanese woodblock*

**Group:** Compositions

**Description.** Distilled to color planes and air. The 20th-century *creative print*
movement — closer to Hiroshi Yoshida than to Hokusai.

**References.**
- Hiroshi Yoshida, *Sailing Boats — Morning* (1926)
- Kawase Hasui, *Lake Misaka in Kai Province* (1931)
- Tatsuo Mitsuoka, post-war wood prints

**Palette.** Indigo · ochre · sumi-black · single vermilion accent · paper
unprinted-cream. Five colors.

**Prompt template.**
```
A modernist Japanese woodblock print of {location}, in the tradition of
Hiroshi Yoshida and Kawase Hasui — the sōsaku hanga creative-print
movement. Limited mineral palette: indigo, ochre, sumi-black, single
touch of vermilion, with cream paper showing through. Strong silhouettes,
flat color planes, atmospheric depth from value not detail. Visible
wood-grain texture in the pigment. No outlines on figures. No text. Calm,
slightly melancholy.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | Silhouetted skyline against ochre dusk, lanterns glowing |
| Prairie town | A barn at twilight, lone vermilion sun on horizon |
| Mountain | Mountain in three indigo values, mist between |
| Coastline | Wave breaking, indigo + cream, single fishing boat silhouette |
| Desert | Dune ridges in three ochre values, vermilion sky band |
| Forest | Tree mass in two greens, atmospheric haze |

**Zoom behavior.** Strongest at District–Country. At Block it can over-flatten to
silhouette only; consider pairing with Polaroid Diary for close-ups.

**Edge cases.**
- Avoid forcing it on busy modern urban scenes — the style strips them.
- Day and night both work; high-noon less so (the mood wants angle).

---

## 03 · Concrete Brutal — *Tarkovsky in 1979*

**Group:** Atmospheres

**Description.** Brutalist architecture under heavy fog. Quiet, monumental, slightly
threatening. Forces every place into the same atmospheric register.

**References.**
- *Stalker* (Tarkovsky, 1979) — color grade and pace
- Nadav Kander, *Yangtze, The Long River* photography
- The National Theatre London, board-marked concrete photographed at dusk

**Palette.** Cold concrete grey · fog blue-grey · ink shadow · single warm distant
light. Four colors.

**Prompt template.**
```
{location} rendered as brutalist architecture under heavy fog. Heavy
concrete masses, board-marked surfaces, monumental scale. Single warm
pinpoint of distant light — sodium-orange or candle-warm. Cinematic 35mm
grain. Tarkovsky-era color grade: desaturated blue-grey base, ink shadows,
one warm highlight only. No people. No vegetation. Quiet, monumental,
slightly threatening.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | A slab apartment block, single window lit |
| Prairie town | A grain silo as monument, fog rolling |
| Mountain | A concrete cabin or pavilion in mist |
| Coastline | A sea defense wall, fog on water |
| Desert | A bunker on a dune, low warm light |
| Forest | A concrete pavilion in trees, one lit door |

**Zoom behavior.** Best at Block–City. At Region+ it becomes too abstract
(monumental landscapes can't carry the mood without an architectural anchor).

**Edge cases.**
- Don't pair with cheerful locations (parks, weddings) without explicit subject
  guidance — the style will drag them dark.
- Anti-pattern: tropical/colorful subjects fight the grade.

---

## 04 · Risograph Civic — *the indie press of municipal life*

**Group:** Pop Surfaces

**Description.** Two-color riso print, slightly mis-registered, dot-textured. The
aesthetic of municipal pamphlets and arts-council posters.

**References.**
- Hato Press, London — risograph practice
- Mike Perry, *Wondering People* posters
- The Riso Club Tokyo prints

**Palette.** Risograph fluoro pink (Hot Pink F) · cyan (Federal Blue) · paper white.
Three colors. Optionally a third drum (yellow or teal) for accents.

**Prompt template.**
```
A two-color risograph print of {location}, fluoro pink and cyan only,
on cream paper. Slightly mis-registered — the pink layer offset 1–2mm
from the cyan. Visible dot-screen texture. Flat shapes, hand-drawn
linework. The aesthetic of municipal arts-council pamphlets and indie
publishing: friendly, slightly imperfect, civic. Bold composition,
single focal subject. No photographic detail. No text. Slight
imperfection in registration is desirable.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | A storefront with cyan windows and pink awning |
| Prairie town | A water tower in pink against cyan sky |
| Mountain | A simplified peak, two-color sunset |
| Coastline | A lighthouse, pink beam, cyan water |
| Desert | Cactus silhouettes in pink, cyan dune |
| Forest | Tree mass as pink dot-pattern, cyan sky |

**Zoom behavior.** Excellent at all zooms. The misregistration scales naturally.

**Edge cases.**
- The fluoro pink can dominate; if generations look too pink, swap the order in
  the prompt (cyan first, pink as accent).
- Some models render dot-screen as JPEG noise — call it out with "halftone dot
  pattern, not noise" if needed.

---

## 05 · Gouache Field Guide — *Audubon catalogue plate*

**Group:** Documents

**Description.** Flat opaque gouache illustration of a place treated as a specimen.
Hand-lettered labels, ruled grid lines. The aesthetic of a 19th-century field guide
plate.

**References.**
- John James Audubon, *Birds of America* plates (1827–38)
- Ernst Haeckel, *Kunstformen der Natur* (1904) — for the cataloguing impulse
- Beatrix Potter, scientific illustrations of fungi

**Palette.** Aged paper cream · Payne's grey · sap green · burnt sienna · pale ochre
· single bright accent. Six colors.

**Prompt template.**
```
A 19th-century field-guide plate illustration of {location}, treated as
a natural specimen. Flat opaque gouache, hand-painted detail without
photographic realism. Hand-lettered black ink labels naming up to 3 details.
Faint ruled grid lines and a single decorative border. Cream aged-paper
background, slight foxing at edges. Palette of muted earth tones with
one bright accent on a single feature. Composition: subject centred, framed
by negative cream, labels arranged around it like a Audubon plate or
Haeckel taxonomy. Calm, observed, scholarly.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | "Convenience store, *7-Eleven kiosk var. tokio*", 3 labelled details |
| Prairie town | "Grain elevator, *Silo zelandiae*" with bracket-section diagram |
| Mountain | "Alpine ridge, *Ridge cordillera*" — flora callouts |
| Coastline | "Tidal flat, *Litus mediterraneum*" — shells labelled |
| Desert | "Saguaro stand, *Carnegiea gigantea*" — anatomy |
| Forest | "Beech grove, *Fagus sylvatica*" — leaf detail |

**Zoom behavior.** Strongest at Block–District (specimen-scale). At Country+ it
becomes a regional natural-history plate.

**Edge cases.**
- Labels are the killer feature — if the model can't render text cleanly, set
  `expectsText: true` in the config so the picker hides this preset on weak
  text-rendering models.
- Best when the parcel has a single dominant element to "specimen-ize."

---

## 06 · Acid Topo — *USGS map remixed for a 1992 rave flyer*

**Group:** Pop Surfaces

**Description.** USGS topographic map crossed with acid-house color discipline.
Contour lines as design language. Cartography that's unmistakably a remix.

**References.**
- USGS 7.5-minute topographic quadrangle maps (1960s issue, faded)
- The Designers Republic, early Warp Records covers
- Aphex Twin, *Selected Ambient Works II* sleeve

**Palette.** Bright base (off-white or pale lime) · electric chartreuse contour
lines · hot pink labels · cyan elevation tints · black detail. Five colors.

**Prompt template.**
```
A topographic map of {location} in the USGS quadrangle tradition, but
recolored as a 1992 acid-house rave flyer. Off-white paper base. Electric
chartreuse contour lines at regular intervals. Hot pink for any text or
numerals (no real text — just glyph-like marks). Cyan elevation shading
in the lowest band. Black hatching for cliffs or built mass. Maintain the
clinical precision of a real topographic map — gridlines, scale bar at
edge, neat margins. Composition: top-down map view, no perspective. The
aesthetic clash of bureaucratic cartography against rave color is the
point.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | Street grid in chartreuse contours, pink block numbers |
| Prairie town | Sparse contours, pink section labels, single black road |
| Mountain | Dense contour swirls, vivid acid color |
| Coastline | Bathymetric contours in cyan, shore in chartreuse |
| Desert | Dune contours, scarce relief, expansive negative space |
| Forest | Few contours, hatched tree mass |

**Zoom behavior.** Extraordinary at Region+ (where contour density reads). At Block
the contours can become decorative noise — works as a graphic, less as a "place".

**Edge cases.**
- Some models will sneak in real-looking text; the prompt explicitly rejects it.
- Thumbnail readability is great because contour lines pixel-down well.

---

## 07 · Polaroid Diary — *underexposed instant film, single warm light*

**Group:** Documents

**Description.** A single instant-film frame, slightly underexposed, white border
intact. The aesthetic of a personal travel journal.

**References.**
- Wim Wenders, Polaroid catalogue *Instant Stories* (2017)
- William Eggleston, dye-transfer color (in spirit, not medium)
- Stephen Shore, *Uncommon Places* — for the casual-but-deliberate framing

**Palette.** Underexposed shadow blue-black · warm amber light source · faded
dye-magenta highlights · cream Polaroid border. Four colors.

**Prompt template.**
```
A single Polaroid SX-70 photograph of {location}, slightly underexposed.
The classic white SX-70 border framing the image, with very subtle
patina. Dominant darkness; one warm amber light source illuminating one
element. Shadows hold blue-black, highlights faded toward magenta — the
look of dye-instability in old Polaroids. Casual but deliberate framing,
slightly off-balance. The whole image reads as a quiet evening moment.
No people unless central to the scene. Soft focus.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | A vending machine glowing on a dark side street |
| Prairie town | A motel sign, single warm window |
| Mountain | A cabin window glow at twilight |
| Coastline | A pier light reflecting in dark water |
| Desert | A roadside diner, neon faded by film |
| Forest | A campfire in trees, no faces visible |

**Zoom behavior.** Strong at Block–District. At Region+ the film aesthetic loses
purchase — switch to Sōsaku Hanga or Acid Topo for those zooms.

**Edge cases.**
- Daytime can feel forced — the format wants moody. If the parcel is sun-drenched,
  consider this preset poorly matched.

---

## 08 · Indigo Cyanotype — *Anna Atkins blueprint, place as botanical specimen*

**Group:** Documents

**Description.** Cyanotype contact print. Pure Prussian blue against unbleached paper
white. Botanical-specimen energy applied to any place.

**References.**
- Anna Atkins, *Photographs of British Algae: Cyanotype Impressions* (1843) — the
  foundational reference
- Bertha E. Jaques, cyanotype botanicals
- Christian Marclay, contemporary cyanotypes

**Palette.** Two colors only: Prussian blue · paper white. (A faint cyan undertone
optional.)

**Prompt template.**
```
A cyanotype contact print of {location}, in the manner of Anna Atkins'
1843 algae specimens. Two colors only: deep Prussian blue and paper white,
with the high-contrast silhouette behavior of a sun-exposure print. The
subject treated as if pressed flat against light-sensitive paper —
botanical specimen energy applied to architecture or terrain. Visible
brush strokes at edges of the chemistry, slight tonal unevenness. Pure
silhouette where appropriate, fine line detail where the form demands it.
No text. No grayscale midtones — only blue or white.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | Building silhouettes pressed flat, like dense seaweed |
| Prairie town | A church steeple alone in white space |
| Mountain | Pure peak silhouette, sky-as-paper |
| Coastline | Wave fingers + driftwood as botanical objects |
| Desert | Cactus silhouettes, exquisite |
| Forest | Tree skeletons, every branch readable |

**Zoom behavior.** Stunning at all zooms. The silhouette logic scales.

**Edge cases.**
- Anything that depends on color information (sunset, fire, neon) loses its
  identifying feature. Mark those parcels as poorly matched.

---

## 09 · Memphis Postcard — *1985 group geometry on a souvenir*

**Group:** Pop Surfaces

**Description.** Memphis Group geometric exuberance, structured as a 5×7 postcard
composition. Bold primaries against black. Decorative chaos with discipline.

**References.**
- Ettore Sottsass + the Memphis Group, Milan 1981–87
- Nathalie Du Pasquier, textile designs
- Karel Martens, Werkplaats Typografie covers (for graphic discipline)

**Palette.** Black ground or bright cream · primary red · primary yellow · cobalt
· kelly green · pink. Six colors.

**Prompt template.**
```
A souvenir postcard of {location} rendered in the Memphis Group
visual language: 1985 Milan, Ettore Sottsass and Nathalie Du Pasquier.
Geometric chaos with discipline — squiggles, grids, dots, irregular
shapes. Bold primary palette: red, yellow, cobalt, kelly green, pink,
on black or cream. Flat shapes, no rendering, no perspective on the
subject itself. Composition rules: postcard 5:7 portrait, the location
as the main motif but stylized into Memphis vocabulary, decorative
border patterns at top and bottom. Cheerful, exuberant, mid-80s.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | Buildings as colored shapes, neon as squiggles |
| Prairie town | Silo and barn as primary-color blocks |
| Mountain | Triangular peaks, dotted snow, pink sun |
| Coastline | Geometric waves, beach umbrella as Memphis pattern |
| Desert | Cactus-as-dingbat, sun-as-circle, dot-grid sky |
| Forest | Tree-shapes as alternating green/red grid |

**Zoom behavior.** Best at District–City (subjects need to be readable as motifs).
At Block, can over-fill with pattern and lose the subject.

**Edge cases.**
- Memphis is irreducibly cheerful. Don't pair with grim-context parcels (memorials,
  cemeteries) — feels disrespectful.
- The pattern density can overwhelm; if generations come back too busy, reduce to
  "3 colors max, one motif per zone."

---

## 10 · Studio Ghibli at 6am — *the cool morning before the characters wake up*

**Group:** Atmospheres

**Description.** A specific Ghibli moment — pre-dawn, mist on water, blue-green sky
with pink edge. Painterly atmosphere without the characters.

**References.**
- Studio Ghibli backgrounds, *Princess Mononoke* (1997) and *Spirited Away* (2001)
- Kazuo Oga, *Art of My Neighbor Totoro*
- Hayao Miyazaki, watercolor concept art

**Palette.** Cool morning blue-green · soft pink cloud edge · warm umber for
foreground · cream mist · single tiny saturated red detail. Five colors.

**Prompt template.**
```
A painterly background scene of {location} at 6am — pre-dawn light, mist
on the ground. Studio Ghibli background art tradition: Kazuo Oga, Mononoke,
Spirited Away. Cool blue-green sky with soft pink cloud edges, warm umber
in foreground silhouettes, cream-toned mist between layers. A single tiny
saturated red detail somewhere — a torii, a mailbox, a flower — that
anchors the eye. Hand-painted gouache and watercolor texture. No
characters visible. No text. The scene feels held, breathing, just
before the day starts.
```

**Expected output across archetypes.**

| Archetype | What it gives you |
| --- | --- |
| Tokyo block | Empty crosswalk, vending machine glow, pre-dawn |
| Prairie town | Farmhouse in mist, single mailbox red |
| Mountain | Peak emerging from cloud, pink-edged |
| Coastline | Boat at low tide, soft pink horizon |
| Desert | Saguaros in mist (yes, they're a thing) |
| Forest | Layered tree silhouettes, mist between |

**Zoom behavior.** Magnificent at District–City–Region. At Block can be too quiet
(needs a small subject for the red anchor); at Country+ becomes generic landscape.

**Edge cases.**
- The "no characters" rule is critical. Models love sneaking in figures.
- The single red detail is the trick — without it, the image goes generic-ambient.
  If the model omits it, add a stronger directive: "exactly one tiny vermilion
  detail on a single small object."

---

## Two alternates (carry forward only if budget allows)

These two are strong but I'd hold them in reserve until the first 10 are tested.
Budget burn rate matters.

### 11 · Manga Dust — *modern seinen ink atmosphere*

Modern seinen manga (Tsutomu Nihei *Blame!*, Kentaro Miura *Berserk* dust scenes).
Heavy ink masses, screentone gradients for atmosphere, blacker-than-black shadows.
Atmospheric and slightly menacing — overlaps thematically with Concrete Brutal but
delivered through ink instead of fog.

### 12 · Tropicália — *hand-tinted Brazilian lithography*

Mid-century Brazilian lithography, warm sepia base + emerald + flamingo accents,
hand-drawn type, bossa-nova languidness. Antônio Maia and the *Tropicália* movement
poster aesthetic. Warm where Indigo Cyanotype is cold; languid where Memphis is
exuberant.

---

## Test plan applied to all 10

For each preset, before shipping:

1. **Six-archetype run.** Tokyo block, Iowa town, Swiss Alps slope, Costa Rican
   coastline, Sahara dune, Vermont forest. Three generations each = 18 images.
2. **Three-zoom run.** The same parcel rendered at Block, City, Country zoom levels.
   Three each = 9 images. (For presets where zoom matters, e.g., Acid Topo, run
   five zooms: Block, District, City, Region, Country.)
3. **Recognizability test.** Show 5 random outputs to a third party with no
   labels. They should be able to group same-preset images together with ≥ 80%
   accuracy.
4. **Picker thumbnail check.** Render at 64×64 and 128×128. The preset's identity
   must read at thumbnail size. (This is why the palette discipline matters more
   than detail.)

A preset doesn't ship until 80%+ of its 27 generations clearly match the lens.
