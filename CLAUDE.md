# CLAUDE.md

Operating guide for this repository. Read this before changing anything.

This is **Ishan Kaizer's portfolio**: a single-page React site plus long-form
case studies. It exists to convince a hiring manager, in 30 to 60 seconds, that
Ishan is an exceptional product / UX / industrial designer.

Deep detail lives in [`docs/`](./docs). This file is the short version plus the
rules that are easy to get wrong.

---

## Hard rules

1. **No em dashes. Anywhere.** This is enforced: `npm run build` runs
   `scripts/check-no-emdash.mjs` first, which fails on the em dash character
   (U+2014) and on its HTML entity forms (named, decimal, and hex). Use a comma,
   period, colon, or rewrite the sentence. See the script for the exact needles;
   this file deliberately does not spell them out so it stays clean itself.
2. **Make only the change that was asked for.** The owner likes the current
   site. Do not bundle in unrequested redesigns, refactors, or "while I was here"
   cleanups. Changes are usually directed by screenshot; map the screenshot to
   the exact component and change just that.
3. **A reference site is not a mandate.** When shown a site to draw from, take
   the principle, not the skin. The design language here is already locked (see
   [`docs/design-language.md`](./docs/design-language.md)).
4. **Motion must never be able to hide content permanently.** Any overlay or
   reveal must default to visible and resolve on a hard timer. See
   [`docs/animation.md`](./docs/animation.md#robustness-rules) before touching
   animation. This rule was learned from real bugs.
5. **Content lives in `src/data`, not in components.** Copy changes go there.

## Quick facts

| | |
|---|---|
| Stack | React 19, TypeScript, Vite 8, Tailwind v4, Framer Motion, React Router 7 |
| Dev server | `npm run dev`, port **5200** (config in `../.claude/launch.json`, outside this repo) |
| Build | `npm run build` (em dash guard, then `tsc -b`, then `vite build`) |
| Lint | `npm run lint` (oxlint) |
| Deploy | Vercel, from the `ishankaizer` remote (`github.com/ishankaizer/IshanKaizer`), branch `main` |
| Path alias | `@/*` maps to `src/*` |

## Where things are

```
src/
  components/
    ui/       shadcn primitives (Button, Badge) bound to brand tokens
    common/   Container, Section, Reveal, Marquee, WorkCard, Seo, ...
    layout/   Nav, Footer, RootLayout, CustomCursor, ThemeToggle
    case/     case-study presentation pieces (SlideGallery, CaseMediaFrame)
    draft/    Assemble, the signature motion primitive
    theme/    theme context + provider
  data/       site, projects, experience, about, music, case-studies/*
  pages/      home, case-study, not-found
  sections/   homepage sections
  types/      shared types
  index.css   design tokens + all bespoke CSS animation
```

Design tokens and every hand written keyframe live in **`src/index.css`**. There
is no separate Tailwind config file; Tailwind v4 is configured in CSS.

## Documentation map

- [`docs/architecture.md`](./docs/architecture.md), stack, routing, data layer, build, deploy
- [`docs/design-language.md`](./docs/design-language.md), "The Working Drawing", tokens, type, colour
- [`docs/animation.md`](./docs/animation.md), motion principles and the robustness rules
- [`docs/conventions.md`](./docs/conventions.md), coding conventions
- [`docs/decisions.md`](./docs/decisions.md), enduring decisions and rejected paths
- [`docs/content.md`](./docs/content.md), editing copy, projects, and drop-in assets
- [`docs/known-gaps.md`](./docs/known-gaps.md), dead code and stale references

## Verifying work

Run `npm run build` before shipping. It type checks and runs the em dash guard.

**The in-editor browser preview freezes animation frames.** Screenshots time out
and CSS transitions/animations stall mid flight, so a computed style read there
can show a stuck intermediate value that is *not* a real bug. Verify motion by
inspecting the DOM (structure, classes, computed styles at rest, resting
positions) rather than by screenshot, and confirm the final look on the deployed
site. When reading a computed transform, ask whether you caught a frozen
transition before concluding something is broken.

## Shipping

Commit, then push to both remotes:

```bash
git push ishankaizer HEAD:main                  # deploys to Vercel
git push origin HEAD:redesign/working-drawing   # older mirror repo
```

Local work happens on `redesign/working-drawing`. `ishankaizer/main` is what
deploys.
