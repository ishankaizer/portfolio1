# Known gaps

Verified against the source. These are real, low-risk, and safe to clean up when
touching the surrounding code. None of them break the site today.

## Dead code

| Item | Status |
|---|---|
| `src/components/layout/preloader.tsx` | **Unused.** Zero references. Superseded by the hero intro (see [`decisions.md`](./decisions.md#d11-the-intro-plays-once-per-session-and-only-on-the-homepage)). Safe to delete along with the `.preloader*` CSS. |
| `.preloader`, `.preloader-word`, `.preloader-word-2`, `@keyframes preloader-word-in` in `index.css` | Only consumed by the dead component above. |
| `.page-enter` and `@keyframes page-enter` in `index.css` | **Unused.** The page-wide entrance blur was removed because its `filter` created a stacking context that trapped the hero intro's z-index, and the intro replaced it as the load moment. |
| `.draft-grid-strong` in `index.css` | Unused. `.draft-grid` is used. |
| `.no-scrollbar` in `index.css` | Unused. |
| `--ease-mech` (`@theme` at the end of `index.css`) | Unused as a token. The same curve is hard coded as `cubic-bezier(0.16, 0.84, 0.3, 1)` throughout. Either adopt the token or drop it. |
| `site.positioning` in `src/data/site.ts` | Unused since the hero was stripped back to identity only. |
| `@fontsource/instrument-serif` in `package.json` | **Unused dependency.** Never imported. Left over from the retired serif voice. |

## Stale references

- **Canonical URL.** `site.url` and the `og:url` / `og:image` / JSON-LD `url`
  values in `index.html`, plus `public/sitemap.xml` and `public/robots.txt`,
  point at `https://portfolio1-murex-gamma.vercel.app`. The deploy now builds
  from the `IshanKaizer` repo. If the live domain has changed, these need
  updating together or social cards and canonical tags will point at the old
  deployment.

## Inconsistencies

- **`font-serif` is still used in nine places** (`footer.tsx`, `case-study.tsx`
  x2, `apart.tsx` x2, `contact.tsx`, `experience.tsx`, `selected-work.tsx`,
  `skills.tsx`), usually as `font-serif italic` for an accent phrase. Since
  `--font-serif` is aliased to Archivo, these render as **Archivo italic**, not a
  serif. This is intentional as a safety net, but the class name now lies about
  what it does. Consider replacing with `italic` alone.

- **Two marquee implementations** coexist: the CSS `.marquee` used by the Music
  section, and the generic `components/common/marquee.tsx` used by the Terms
  banner. Both work; consolidating is optional.

- **`README.md` structure section is slightly out of date.** It predates
  `sections/terms-banner.tsx`, `components/draft/`, and `components/common/marquee.tsx`.

## Environment notes

- The dev launch config lives at `../.claude/launch.json`, **outside this
  repository**, so a fresh clone has no port 5200 config. `npm run dev` still
  works, it just picks Vite's default port.
- The in-editor browser preview freezes animation frames. Screenshots time out
  and transitions stall mid flight. Verify motion via DOM inspection and on the
  deployed site, not by screenshot.
