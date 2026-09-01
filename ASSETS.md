# ASSETS — the thirteen panels

Every moment in the field is one panel. This file is the commission: what each panel is,
which state it belongs to, its verified facts, the plaque line it carries, and which rung
of the image ladder it takes.

**The loader is null-safe.** A panel whose `src` is `null` is never requested and falls back
to its generated layer. The page is complete and shippable at every point in the process, so
assets can land one at a time in any order. Nothing structural depends on which rung a panel
ends up on — the ladder can change per panel, late, without a rebuild.

---

## The image ladder

A real shrine accumulates in different hands across decades. A 1970s painted panel sits beside
a printed holy card beside a stamped tin charm, and the heterogeneity is the authenticity. So
**medium encodes era and weight** rather than being applied uniformly.

| Rung | Medium | What it is | Reads as |
|---|---|---|---|
| 1 | **Estampita** | Cheap printed devotional card. Saturated, slightly off-register, gold edge. | Hope, mass-produced |
| 2 | **Ex-voto pintado** | Naive painted panel on tin or wood. A scene, plus a hand-lettered line. The core medium. | A debt being paid |
| 3 | **Placa de bronce** | Engraved brass. **No image at all.** | Absence, refusal |
| 4 | **Milagro de hojalata** | Stamped tin charm. An object, never a scene. | An offering, not a depiction |
| 5 | **Fotografía** | Photoreal. Reserved. See the open decision below. | The present tense |

### House style — binding on every generated panel

- Painted panels are **naive, not accomplished**. Flat perspective, heavy outline, honest
  proportion errors. A polished digital illustration is the failure mode here.
- **Aged, not distressed.** Chipped edges, oxidised tin, sun-faded pigment. Not a filter.
- Palette holds the world: warm-black ground, Gauchito red as carrier, brass and tin, wax cream.
  **No celeste in any petition panel.** Celeste is withheld from the whole piece until a release.
- Figures wear **sky-blue and white stripes with no crest, no sponsor, no manufacturer mark**.
  Colour and stripe are not trademarks; badges are. Do not draw the AFA crest or a World Cup trophy.
- Hand-lettered text inside a painted panel is in **rioplatense Spanish**, not neutral Spanish.
- **1200 × 1600 (3:4 portrait), WebP**, sRGB. Ship an AVIF sibling if it holds quality.
- Every generated panel is **labelled synthetic** in the page's colophon. It is a shrine of
  invented votive objects about documented events, and the page says so rather than implying
  these are photographs of anything.

---

## TE PIDO — the petitions

### 01 · El chico que no entró
- **30 June 2006** · Olympiastadion, Berlin · Germany 1–1 Argentina, 4–2 on penalties
- Messi, 18, an unused substitute. Pekerman never brought him on.
- Plaque: `TE PIDO · BERLÍN · 30·VI·2006`
- **Rung 1 — estampita.** A boy in stripes on a printed card, gold-edged, slightly off-register,
  as if bought at a kiosk in 2006 by someone who believed. It should look cheap and hopeful.
- *Verification: date/venue/result asserted from general knowledge, NOT search-verified. Confirm before ship.*

### 02 · Maracaibo
- **15 July 2007** · Estadio José Pachencho Romero, Maracaibo, Venezuela · Brazil 3–0 Argentina
- Goals: Júlio Baptista, Ayala own goal, Dani Alves.
- Plaque: `TE PIDO · MARACAIBO · 15·VII·2007`
- **Rung 2 — ex-voto pintado.** Three goals as three dark birds over a flat green field. Painted
  by someone who was there and did not enjoy it.
- *Verified by search 2026-09-01.*

### 03 · Ciudad del Cabo
- **3 July 2010** · Cape Town · Germany 4–0 Argentina
- Messi finished the tournament without a goal.
- Plaque: `TE PIDO · CIUDAD DEL CABO · 03·VII·2010`
- **Rung 2 — ex-voto pintado**, the darkest of the painted set. Four marks. Empty net at the
  wrong end. Heavy oxidation on the tin.
- *Verification: asserted, NOT search-verified. Confirm before ship.*

### 04 · La final
- **13 July 2014** · Maracanã, Rio de Janeiro · Germany 1–0 Argentina (Götze 113')
- Messi took the Golden Ball and walked past the trophy.
- Plaque: `TE PIDO · MARACANÁ · 13·VII·2014`
- **Rung 2 — ex-voto pintado, the largest panel in the field.** The subject is *the walk past*,
  not the goal. A small striped figure passing a gold shape without looking at it.
- *Verification: asserted, NOT search-verified. Confirm before ship.*

### 05 · Santiago
- **4 July 2015** · Estadio Nacional, Santiago · Chile 0–0 Argentina, lost on penalties
- Plaque: `TE PIDO · SANTIAGO · 04·VII·2015`
- **Rung 2 — ex-voto pintado.** Small, plain, almost perfunctory — the second of four finals,
  painted by someone running out of ways to ask.
- *Verification: asserted, NOT search-verified. Confirm before ship.*

### 06 · Se terminó
- **26 June 2016** · MetLife Stadium, East Rutherford, New Jersey · Chile 0–0 Argentina,
  4–2 on penalties. Messi's penalty went over the bar. He announced that night he was done
  with the national team. He returned in August.
- Plaque: `TE PIDO · EAST RUTHERFORD · 26·VI·2016`
- **Rung 3 — placa de bronce. NO IMAGE.** The moment he said he was finished gets no picture.
  Engraved brass, nothing else. The absence is the panel, and in the field it will read as a
  hole among painted things.
- *Verified by search 2026-09-01.*

### 07 · Kazán
- **30 June 2018** · Kazan Arena · France 4–3 Argentina
- Mbappé, 19, scored twice in four minutes. Argentina's goals: Di María, Mercado, Agüero 90+3'.
- Plaque: `TE PIDO · KAZÁN · 30·VI·2018`
- **Rung 2 — ex-voto pintado**, small and crowded. Seven goals is a busy panel; let it be busy.
- *Verified by search 2026-09-01.*

---

## GRACIAS POR EL FAVOR CONCEDIDO — the thanks

### 08 · La deuda saldada
- **10 July 2021** · Maracanã, Rio de Janeiro · Argentina 1–0 Brazil (Di María 22')
- His first senior title with Argentina, at 34, in the stadium where he lost the 2014 final.
- Plaque: `GRACIAS POR EL FAVOR CONCEDIDO · MARACANÁ · 10·VII·2021`
- **Rung 2 — ex-voto pintado, in the thanks palette.** Brass ground, gold leaf on the lettering.
  Same hand as the petition panels, different materials — the debt is being paid, not begged.
  **This is the first panel in the whole field permitted a trace of celeste.**
- *Verification: asserted, NOT search-verified. Confirm before ship.*

### 09 · Lusail
- **18 December 2022** · Lusail Stadium · Argentina 3–3 France, 4–2 on penalties
- Plaque: `GRACIAS · LUSAIL · 18·XII·2022`
- **Rung 2 (or 5 — see open decision).** The full retablo treatment: gold leaf, ornamental
  border, the most elaborate object in the shrine. Celeste at full strength for the only time.
- *Verification: asserted, NOT search-verified. Confirm before ship.*

---

## THE ENDING — state unnamed

*The third state has no name yet. It is not remembrance; he is alive, and a placa recordatoria
would be false. It should use his own words. Undecided by the user, deliberately.*

### 10 · MetLife, otra vez
- **19 July 2026** · MetLife Stadium, New Jersey · Spain 1–0 Argentina after extra time
- Ferran Torres, 106'. Enzo Fernández sent off late. Emiliano Martínez made 11 saves, a record
  for a World Cup final.
- **The rhyme is factual and must not be underlined as if it were clever:** the same stadium
  ended it both times. 2016 and 2026, ten years apart.
- Plaque: `EAST RUTHERFORD · 19·VII·2026`
- **Rung 3 — placa de bronce. NO IMAGE**, matching panel 06. The two MetLife panels are the
  only imageless objects in the field, and they should be recognisably the same object twice.
- *Verified by search 2026-09-01.*

### 11 · La carta
- Written **21 July 2026**, two days after the final. Published **31 August 2026**.
- Handwritten. Reported as three pages of notepad paper, black ink, capitals, with crossings-out
  and corrections left visible — *single-source, unverified, and load-bearing if true.*
- **No generated image. This panel is the letter itself** — it opens the room already built at
  `drafts/la-carta.html`.
- **BLOCKED: the full source text has not been obtained.** `LETTER[]` currently holds two
  verified fragments; every other line renders as an empty rule. Do not paraphrase, translate
  back, or reconstruct. Needs his published post or images.
- *Dates verified by search 2026-09-01.*

### 12 · El padre
- **Jorge Messi**, his father and lifelong agent, died **8 August 2026**, aged 68, in Rosario,
  after a long illness. Messi published a separate open letter to him on **12 August 2026** —
  three weeks before the letter to the country.
- He wrote that his father's death was what made him certain.
- Plaque: `ROSARIO · 08·VIII·2026`
- **Rung 4 — milagro de hojalata. A candle, or a stamped tin heart. NO DEPICTION OF HIM.**
  This is a hard line, not a stylistic preference: he was a private individual, he died three
  weeks ago, and generating a likeness of him would be indefensible. An object, lit, and nothing else.
- *Verified by search 2026-09-01.*

### 13 · La camiseta
- Not an event. The shirt and the number, and what it costs to wear them.
- No date. This panel carries no plaque line, only the number.
- **Rung 4 — milagro de hojalata.** A stamped tin `10`, worn at the edges, hung on a ribbon.
  It is the one object in the field with no date attached, and it should be findable from
  anywhere in the volume.

---

## Open decisions

1. **Rung 5 (photoreal) is assigned to nothing.** Panel 09 is the only candidate, as a deliberate
   register shift where the release arrives. Flagging rather than deciding, because the earlier
   argument still stands: photoreal celebrity images carry likeness exposure and tend to read to a
   design director as a shortcut rather than a skill. Used **once**, as the single break in a
   painted field, it is defensible art direction rather than a shortcut. Used across the field it
   is the thing to avoid. **User's call.**
2. **The name of the third state.**
3. **Five panels carry facts asserted from knowledge rather than search-verified** — 01, 03, 04,
   05, 08, 09. They are marked inline. None ships until confirmed.
4. **Bilingual EN/ES.** Binding on the sibling project, unconfirmed here. Hand-lettered text
   inside a painted panel cannot be swapped at runtime, so if parity is wanted, each painted
   panel needs either two versions or no lettering in the art at all. **This decision has to be
   made before the images are generated, not after.**
