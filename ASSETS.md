# ASSETS — the thirty panels

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
- *Verified by search 2026-10-01. Messi did not play; Cruz was the last substitute used.*

### 02 · Maracaibo
- **15 July 2007** · Estadio José Pachencho Romero, Maracaibo, Venezuela · Brazil 3–0 Argentina
- Goals: Júlio Baptista, Ayala own goal, Dani Alves.
- Plaque: `TE PIDO · MARACAIBO · 15·VII·2007`
- **Rung 2 — ex-voto pintado.** Three goals as three dark birds over a flat green field. Painted
  by someone who was there and did not enjoy it.
- *Verified by search 2026-09-01.*

### 03 · Ciudad del Cabo
- **3 July 2010** · Cape Town · Germany 4–0 Argentina
- Messi finished the tournament without a goal: five starts, 29 shots, none scored.
- Plaque: `TE PIDO · CIUDAD DEL CABO · 03·VII·2010`
- **Rung 2 — ex-voto pintado**, the darkest of the painted set. Four marks. Empty net at the
  wrong end. Heavy oxidation on the tin.
- *Verified by search 2026-10-01.*

### 04 · La final
- **13 July 2014** · Maracanã, Rio de Janeiro · Germany 1–0 Argentina (Götze 113')
- Messi took the Golden Ball and walked past the trophy.
- Plaque: `TE PIDO · MARACANÁ · 13·VII·2014`
- **Rung 2 — ex-voto pintado, the largest panel in the field.** The subject is *the walk past*,
  not the goal. A small striped figure passing a gold shape without looking at it.
- *Verified by search 2026-10-01.*

### 05 · Santiago
- **4 July 2015** · Estadio Nacional, Santiago · Chile 0–0 Argentina a.e.t., 4–1 on penalties
- Plaque: `TE PIDO · SANTIAGO · 04·VII·2015`
- **Rung 2 — ex-voto pintado.** Small, plain, almost perfunctory — the second of four finals,
  painted by someone running out of ways to ask.
- *Verified by search 2026-10-01.*

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
- *Verified by search 2026-10-01.*

### 09 · Lusail
- **18 December 2022** · Lusail Stadium · Argentina 3–3 France, 4–2 on penalties
- Plaque: `GRACIAS · LUSAIL · 18·XII·2022`
- **Rung 2 (or 5 — see open decision).** The full retablo treatment: gold leaf, ornamental
  border, the most elaborate object in the shrine. Celeste at full strength for the only time.
- *Verified by search 2026-10-01.*

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
- **BLOCKED: the full source text has not been set.** The Spanish text was published 31·VIII·2026
  and is reprinted in full by La Nación, Infobae, El Cronista, Forbes Argentina and CNN en Español.
  It has not been copied in yet because it must come from the original, character for character,
  not from a search summary. `LETTER[]` is all `null` until then.
- The two fragments previously set in `LETTER[]` were back-translated from English reporting and
  did not match the published Spanish. They were removed 2026-10-01.
- The published text opens *"Después de este tiempo que pasó desde la final..."* and the date
  line confirms it was written 21 July and that his father's death made him more certain.
  Line breaks and page splits still need the images of the handwritten pages.
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

## THE WHOLE CAREER — added 2026-10-01

*Scope widened by the user from the Argentina shirt to the whole football life. Same rule for
every panel: a loss or an asking is TE PIDO, a title is GRACIAS (youth titles included). Celeste
stays with the Argentina shirt's senior releases only; club and youth thanks hang in brass
without it. Club names appear in text only: no crests, no kit sponsors, plain colours.*
*All facts below verified by search 2026-10-01.*

### Origins

#### 14 · El tratamiento — TE PIDO
- Diagnosed with growth hormone deficiency at about 10, in Newell's youth teams. 1.27 m tall.
- Plaque: `TE PIDO · ROSARIO` — **no date**: no reliable source dates the diagnosis.
- **Rung 4 — milagro de hojalata.** A stamped tin child figure, the oldest form of milagro: a
  body asked for. No likeness; a generic votive shape.

#### 15 · La servilleta — TE PIDO
- **14 December 2000**, Barcelona. Carles Rexach wrote the commitment to sign him on a paper
  napkin, witnessed by Minguella and Gaggioli. He was 13; the club paid for the treatment.
- Plaque: `TE PIDO · BARCELONA · 14·XII·2000`
- **Rung 2.** The napkin on a café table. Hand-lettered text inside the art must not reproduce the
  napkin's real wording.

### Barcelona

#### 16 · El primer gol — GRACIAS
- **1 May 2005**, Camp Nou. Barcelona 2–0 Albacete. On in the 87th, a lob over the keeper in the
  91st from Ronaldinho's pass. Age 17.
- Plaque: `GRACIAS · CAMP NOU · 01·V·2005` · **Rung 1 — estampita.**

#### 17 · Roma — GRACIAS
- **27 May 2009**, Stadio Olimpico. Champions League final, Barcelona 2–0 Manchester United. His
  header in the 70th; the celebration with a boot in his hand.
- Plaque: `GRACIAS · ROMA · 27·V·2009` · **Rung 2.** The boot held up is the subject.

#### 18 · Wembley — GRACIAS
- **28 May 2011**. Champions League final, Barcelona 3–1 Manchester United; he scored the second
  and was man of the match.
- Plaque: `GRACIAS · WEMBLEY · 28·V·2011` · **Rung 2.**
- *Factual rhyme, not underlined:* he returned to Wembley with Argentina in 2022 (panel 25).

#### 19 · Berlín, otra vez — GRACIAS
- **6 June 2015**, Olympiastadion. Champions League final, Barcelona 3–1 Juventus; the treble.
  He did not score; the panel must not imply he did.
- Plaque: `GRACIAS · BERLÍN · 06·VI·2015` · **Rung 2.**
- *Factual rhyme:* the same stadium where he sat unused in 2006 (panel 01).

#### 20 · El burofax — TE PIDO
- **August 2020**, after the 2–8 against Bayern, he asked to leave by burofax. The club refused;
  he stayed one more year.
- Plaque: `TE PIDO · BARCELONA · VIII·2020` — month only: reports differ on the 24th vs 25th.
- **Rung 2.**

#### 21 · La despedida — TE PIDO
- **8 August 2021**, Camp Nou. The club could not renew him; a tearful farewell press conference
  after 21 years.
- Plaque: `TE PIDO · CAMP NOU · 08·VIII·2021` · **Rung 2.** A lectern and an empty room.

### Paris and Miami

#### 22 · París — TE PIDO
- **3 June 2023**, Parc des Princes. Last PSG match, a 2–3 loss to Clermont; part of the crowd
  booed him.
- Plaque: `TE PIDO · PARÍS · 03·VI·2023` · **Rung 2.**

#### 23 · Miami — GRACIAS
- **19 August 2023**, Nashville. Leagues Cup final: his goal and the first kick of a 10–9
  shootout. Inter Miami's first trophy. MLS Cup followed on 6 December 2025, 3–1 Vancouver.
- Plaque: `GRACIAS · NASHVILLE · 19·VIII·2023` · **Rung 1 — estampita.**

#### 24 · Ocho — GRACIAS
- **30 October 2023**, Paris. His eighth Ballon d'Or, a record, won on the World Cup.
- Plaque: `GRACIAS · PARÍS · 30·X·2023` · **Rung 4 — milagro.** A stamped tin `8`, the pair to
  panel 13's `10`. **No trophy is drawn**; the Ballon d'Or design is not ours to reproduce.

### Argentina, the gaps filled

#### 25 · Cuarenta segundos — TE PIDO
- **17 August 2005**, Budapest. Senior debut vs Hungary; on in the 64th, sent off after about
  forty seconds. Argentina won 2–1.
- Plaque: `TE PIDO · BUDAPEST · 17·VIII·2005` · **Rung 1 — estampita.**

#### 26 · Utrecht — GRACIAS (youth)
- **2 July 2005**. U20 World Cup final, Argentina 2–1 Nigeria, both his from the spot. Golden
  Ball and Golden Boot.
- Plaque: `GRACIAS · UTRECHT · 02·VII·2005` · **Rung 1.** No celeste: youth title.

#### 27 · Pekín — GRACIAS (youth)
- **23 August 2008**. Olympic final, Argentina 1–0 Nigeria; he set up Di María's chip. Gold.
- Plaque: `GRACIAS · PEKÍN · 23·VIII·2008` · **Rung 2.** No celeste: youth title.

#### 28 · La Finalissima — GRACIAS
- **1 June 2022**, Wembley. Argentina 3–0 Italy; two assists, man of the match.
- Plaque: `GRACIAS · WEMBLEY · 01·VI·2022` · **Rung 2.** Celeste permitted (after 2021).

#### 29 · Llorar en el banco — GRACIAS
- **14 July 2024**, Hard Rock Stadium, Miami Gardens. Copa América final, Argentina 1–0
  Colombia (Lautaro 112'). He went off injured at 64' and wept on the bench.
- Plaque: `GRACIAS · MIAMI GARDENS · 14·VII·2024` · **Rung 2.** Celeste permitted. The subject is
  the bench, not the trophy.

#### 30 · El último partido — THE ENDING
- **6 October 2026**, Estadio Monumental, Buenos Aires. Farewell friendly: **Argentina 3–0 Benin.**
  His corner for Nicolás Otamendi's header (48′; Otamendi was also playing his last for Argentina),
  his pass for Nico Paz, and a penalty: his 126th goal, in his 208th match.
- *Verified by search 2026-10-07: AP (via ClickOnDetroit), CNN en Español, El Heraldo, El Financiero,
  Excélsior, Infobae. Sources disagree on the minutes of the second goal (49′ or 61′) and the
  penalty (70′ or 71′), so only Otamendi's 48′ is used.*
- Plaque: `MONUMENTAL · 06·X·2026`
- **Rung 2 — ex-voto pintado**, in the ending's hand: barely touched, the thin black edge. The
  subject is the full stadium staying after the whistle, not a goal.

---

## Eras — how each panel is made (added 2026-10-05)

Every panel is made by a different hand depending on when it happened, the way a real shrine
collects objects over decades. Older eras are more worn. Tin vs brass and the state line never
change; the era changes only the making and the ageing. Defined in `src/stories.js` (`ERA_OF`)
and painted in `src/panels.js` (`eraDress`).

| Era | Years | Made as | Wear |
|---|---|---|---|
| Rosario · el origen | to 2000 | hand-tinted card, sepia, edge chewed by handling | heaviest |
| La promesa | 2004–2008 | kiosk estampita, gold double edge printed off register | heavy |
| La cumbre | 2009–2015 | beaten tin nailed to the wall, a nail at each corner | medium |
| El quiebre | 2016–2020 | taped back up after a fall, scratched | medium |
| La liberación | 2021–2023 | retablo, arched top, turned corner ornaments | light |
| El final | 2024–2026 | barely touched, thin black edge of mourning | almost none |

Each panel also opens to a longer story (`STORY` in `src/stories.js`, Spanish and English),
written only from facts verified in this file.

---

## Open decisions

1. **Rung 5 (photoreal) is assigned to nothing.** Panel 09 is the only candidate, as a deliberate
   register shift where the release arrives. Flagging rather than deciding, because the earlier
   argument still stands: photoreal celebrity images carry likeness exposure and tend to read to a
   design director as a shortcut rather than a skill. Used **once**, as the single break in a
   painted field, it is defensible art direction rather than a shortcut. Used across the field it
   is the thing to avoid. **User's call.**
2. **The name of the third state.**
3. ~~Six panels carried facts asserted from knowledge~~ — 01, 03, 04, 05, 08, 09 were all
   search-verified 2026-10-01. Every dated panel is now verified.
4. **Bilingual EN/ES.** Binding on the sibling project, unconfirmed here. Hand-lettered text
   inside a painted panel cannot be swapped at runtime, so if parity is wanted, each painted
   panel needs either two versions or no lettering in the art at all. **This decision has to be
   made before the images are generated, not after.**
