# Content and assets

Everything editable lives in `src/data` and `public/`. Components should not need
to change to update content.

## Editing copy

| Want to change | Edit |
|---|---|
| Name, role, location, email, phone, socials, availability | `src/data/site.ts` |
| The About statement | `src/data/about.ts` (`statement`, `sub`) |
| Philosophies, hobbies, tools | `src/data/about.ts` |
| Roles and history | `src/data/experience.ts` |
| Project cards | `src/data/projects.ts` |
| A long-form case study | `src/data/case-studies/<slug>.ts` |
| Music marquee tracks | `src/data/music.ts` |
| Hero disciplines list | `src/sections/hero.tsx` (local `disciplines` const) |
| Terms banner words | `src/sections/terms-banner.tsx` (local `terms` const) |

## Adding a project

1. Add an entry to the `base` array in `src/data/projects.ts`. Order in this
   array is the order in Selected Work.
2. Drop a cover at `public/projects/<slug>/cover.jpg`.
3. If it has a written case study, add `src/data/case-studies/<slug>.ts` and
   export it from `case-studies/index.ts`. It will be attached automatically by
   slug.
4. If it has a deck, export the slides to
   `public/projects/<slug>/slides/01.webp`, `02.webp`, ... and register the count
   in `SLIDE_COUNTS`.
5. If it links out instead of having a study, set `external`.

No component changes are needed for any of this.

## Case study shape

`CaseStudy` in `src/types/index.ts` encodes the intended spine. Follow it:

- `hook`, a one-line, three-second read: what it is, the role, the outcome
- `overview`, timeline / team / platform / tools
- `problem`, the real user problem and the stakes
- `contributions`, exactly what Ishan did versus the team
- `process`, research to insight to exploration, in ordered sections
- `decisions`, two or three hard trade-offs with reasoning
- `outcome`, optional stats plus prose
- `reflection`, what he would do differently, which signals seniority

**Never fabricate metrics.** Honest qualitative outcomes are correct and
preferred over invented numbers. `outcome.stats` is optional for this reason.

## Drop-in assets

Placeholders render until the real file exists, so nothing looks broken.

| Path | Fallback if missing |
|---|---|
| `public/resume.pdf` | link 404s |
| `public/about/portrait.jpg` | large "IK" monogram, behind the About text |
| `public/projects/<slug>/cover.jpg` | composed placeholder card with the title |
| `public/projects/<slug>/slides/NN.webp` | gallery is omitted |
| `public/og.png` | social card has no image |

`public/about/` and `public/music/` contain `_DROP_*_HERE.txt` notes marking
where files go.

## Generated assets

`scripts/gen-og.mjs` renders `og.png` and the app icons via `@resvg/resvg-js`.
Run it manually after a brand change; it is not part of `npm run build`.

## Music data

`src/data/music.ts` holds `{ title, artist, cover }` per track. Covers are
referenced from the Spotify CDN (oEmbed thumbnails, displayed under licence, not
re-hosted). The list is shuffled so identical album art is never adjacent,
including across the loop seam. Marquee duration scales with track count, and
covers load eagerly because lazy loading breaks inside a moving track.
