# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

**Vite + Three.js, real module build.** Chosen by the user 2026-08-31, deliberately over the single-file / no-build-step setup used on the sibling project La Bombonera. A toolchain is sanctioned here; "no build step" is not a constraint on this project.

Deploy target is Vercel by precedent (account `JuanZamora`, Hobby plan, at its project limit with 1 slot remaining as of 2026-08-29). The Vercel GitHub App is installed with **selected-repository** scope, so this repo must be added to it individually. This Mac has **no global gitconfig by design** — set the identity repo-local as `Juan Zamora <36822863+jzrandodev@users.noreply.github.com>`.

## Users

*Carried from the La Bombonera product record rather than re-confirmed for this project. Correct it if it has changed.*

1. **Hiring managers and design directors** evaluating Juan Zamora professionally. They arrive from a portfolio index or a shared link, usually with several tabs open, and decide within seconds whether to keep going. They are judging capability, not reading documentation. The first viewport carries a five-second bar.
2. **Juan himself.** This is also a passion project. Work that serves only the first audience at the expense of the second is a failed trade.

**Success is conversations**, not traffic and not peer recognition. He is job hunting and sending links now.

## Product Purpose

A **non-linear, explorable WebGL space** about Lionel Messi in the Argentina shirt.

The content spine is **thematic, not chronological** — the weight of the 10, the crowd, the exile years, the homecoming. It is not a timeline and does not march 2005 → 2022.

The user's stated ambition, in his words: *"incredibly modern"*, *"wow people"*, and **the centerpiece of his side projects**. That ambition is recorded here as product intent; the visual direction that delivers it is not decided in this file.

Success is a visitor who explores it, and then talks to him about it.

## Positioning

**Deliberately unlike La Bombonera.** Same subject matter — Argentine football — and opposite execution, to prove range rather than repeat a trick.

The difference is structural, not just cosmetic:

| La Bombonera | This piece |
|---|---|
| Linear, scripted walk | No fixed order at all |
| Scroll plays it; the visitor is a passenger | The visitor navigates and drives |
| Eight chapters on one camera path, building to one climax | A field of moments, entered in a different sequence each time |

Both are WebGL. That is not the axis of difference and must not be treated as one.

## Operating Context

- Encountered as a shared link or from a portfolio index. The first impression happens before any interaction.
- Read on both desktop and phone. La Bombonera was verified at 1440×900 and 390×844; assume the same bar until told otherwise.
- **Non-linear navigation is the primary interaction.** Scroll is not the spine of this piece and should not become one by default.
- Sits alongside https://la-bombonera-gules.vercel.app as part of one body of work. Whether the two cross-link is **undecided**.

## Capabilities and Constraints

- **Non-linear structure is binding.** No fixed chapter order, no single scripted camera path. The visitor arrives at moments in an order they choose, and a second visit need not match the first.
- **Thematic, not chronological.** The four themes above are the user's chosen framing. The actual set of moments, and how many, is **not yet decided**.
- **Undecided — what the piece is made of.** Whether it is generated-only (La Bombonera's approach), original artwork the user supplies, or licensed photography he sources is **explicitly open**, by his decision. The build must let this answer change late without a rebuild: manifest-driven asset loading where any `null` path is never requested and each moment falls back to a generated layer, as already proven on the sibling project.
- **Undecided:** bilingual EN/ES. It was binding on La Bombonera; it has not been confirmed for this project.
- No build-step restriction (see `## Stack`).

### IP and likeness boundaries

Carried from the sibling project, where the user set them, and extended to this subject. Not legal advice — the last two points in particular are worth his own judgment.

- **Messi's name and the documented facts of his Argentina career are usable.** Matches, dates, scorelines, minutes, competitions and published quotes are public record, and naming the subject of a non-commercial fan tribute is ordinary expressive use.
- **Agency photography is the real exposure**, more than the name or the facts. Getty, AP and Reuters images are straight copyright and are not cleared by a tribute framing.
- **Claude does not draw club or federation crests.** The AFA crest, the FIFA World Cup trophy and adidas marks are registered trademarks. Precedent: build any emblem behind an `EMBLEMS[]`-style array of original invented marks so the user can swap in real artwork himself as a one-line change.
- **Colour and simple geometry are fine.** Sky blue and white stripes are not a trademark. Crests, sponsor logos and manufacturer marks are.
- **Audio is synthesized, never sampled.** No chant recordings, no anthem recordings, no commentary, no match footage.
- **A non-affiliation line belongs on the page** — *not affiliated with, endorsed by, or licensed by* the AFA, FIFA, or any club. On La Bombonera the user removed a broader "no marks are used" claim and deliberately kept the non-affiliation line, because that is the part that actually protects him. Do not write claims the page cannot keep.

## Brand Commitments

- Authored by **Juan Zamora**; carries his name and links to jjzamora.com and github.com/jzrandodev.
- Public repo under `jzrandodev` with a permissive license is the precedent (La Bombonera is MIT), **not yet confirmed** for this project.

## Evidence on Hand

Real and available:

- The sibling project, live and public — https://la-bombonera-gules.vercel.app and https://github.com/jzrandodev/la-bombonera — including a working manifest-driven asset loader, a bilingual system, and synthesized Web Audio, all of which are proven and re-usable approaches.
- Messi's Argentina record is verifiable public fact and needs no invention.

Explicitly absent — future work must not fabricate these:

- **No artwork, photography, or footage of any kind exists in this project.** The directory is empty.
- No image rights have been secured.
- No testimonials, clients, press, awards, usage metrics, or quotes about the piece.
- No decision yet on the moments, their number, or their names.

## Product Principles

1. **The visitor sets the order.** Non-linearity is the product, not a navigation feature bolted onto a linear piece.
2. **Him and the shirt, not the timeline.** Any drift toward chronology is drift away from the brief.
3. **Design for an undecided image answer.** Nothing structural may depend on which imagery route wins.
4. **Prove range, not repetition.** If a decision would read as La Bombonera's move, it is the wrong decision here.
5. **Show, don't describe.** On the sibling project three sessions were lost to prose about "vibe"; a visual artifact moved things in one pass. Build the artifact first.

## Accessibility & Inclusion

Carried from the sibling project, where the user confirmed them as binding. **Not re-confirmed for this project**, and the first is genuinely harder here:

- **Reduced motion is the same story, held still** — not a degraded version.
- **No-WebGL and lost-GPU-context leave a complete, readable page.** A non-linear explorable space has no obvious linear fallback the way a chapter walk does. This is a real open design problem, not a checkbox.
