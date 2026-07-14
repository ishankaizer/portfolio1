# Ishan Kaizer, Portfolio

Product · UX/UI · Industrial Design portfolio. Built to convince a hiring
manager, in 30–60 seconds, that this is an exceptional designer, timeless
editorial craft, optimized for the hire, not for design-community applause.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`) with a token-based design system
- **Framer Motion**, restrained, reduced-motion-aware
- **React Router**, home + `/work/:slug` case studies
- **shadcn/ui** primitives (Button, Badge) on the brand tokens
- **Lucide** icons

## Scripts

```bash
npm run dev      # dev server (port 5200 via launch.json)
npm run build    # type-check + production build
npm run preview  # preview the build
npm run lint     # oxlint
```

## Structure

```
src/
  components/
    ui/         shadcn primitives (Button, Badge)
    common/     Container, Section, SectionHeader, Reveal, Seo, WorkCard, ...
    layout/     Nav, Footer, RootLayout, ThemeToggle
    case/       case-study presentation pieces
    theme/      theme context + provider
  data/         site, projects, experience, about, case-studies/*
  pages/        home, case-study, not-found
  sections/     homepage sections (hero, selected-work, about, ...)
  types/        shared types
```

Design tokens (colour, type, radius) live in `src/index.css` and map onto
shadcn's semantic tokens, so both themes and every primitive stay in sync.

## Content

All copy and project data live in `src/data`. Edit content there, no
component changes needed.

## Drop-in assets (replace placeholders)

- `public/resume.pdf`, résumé (linked from the nav + hero)
- `public/about/portrait.jpg`, portrait (monogram shows until then)
- `public/projects/<slug>.jpg`, project covers (`park-it`, `wellbell`,
  `materia`, `levelstretch`, `binkli`) and per-section case-study visuals
- `public/og.png`, 1200×630 social share image

## Deploy

Vercel. SPA deep-link routing handled by `vercel.json` rewrites.
