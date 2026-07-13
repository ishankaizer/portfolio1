import type { Project } from '@/types'

/**
 * Card + case-study metadata lives here; long-form `study` content is
 * attached per project. Order defines the selected-work sequence.
 * Cover images resolve from /public/projects/<slug>.jpg when present.
 */
export const projects: Project[] = [
  {
    slug: 'park-it',
    title: 'Park IT',
    tagline: 'A smart-parking app that turns circling for a spot into a two-tap reservation.',
    disciplines: ['UX/UI', 'Product'],
    year: '2024',
    role: 'UX Research & Product Design',
    featured: true,
    cover: '/projects/park-it.jpg',
  },
  {
    slug: 'wellbell',
    title: 'WellBell',
    tagline: 'A connected pill dispenser that helps seniors take the right dose at the right time.',
    disciplines: ['Industrial Design', 'UX/UI'],
    year: '2023',
    role: 'Industrial & Interaction Design',
    featured: true,
    cover: '/projects/wellbell.jpg',
  },
  {
    slug: 'materia',
    title: 'Materia',
    tagline: 'A material-discovery platform for interior designers — shipped as a working React product.',
    disciplines: ['Product', 'UX/UI', 'Visualization'],
    year: '2025',
    role: 'Product Design & Front-end',
    featured: true,
    cover: '/projects/materia.jpg',
  },
  {
    slug: 'levelstretch',
    title: 'Levelstretch',
    tagline: 'A self-leveling ambulance stretcher that streams live vitals to the hospital en route.',
    disciplines: ['Industrial Design', 'Product'],
    year: '2024',
    role: 'Industrial Design & IoT',
    featured: true,
    cover: '/projects/levelstretch.jpg',
  },
  {
    slug: 'binkli',
    title: 'Binkli',
    tagline: 'A retro image-effects lab — halftone, duotone, riso and glitch, live in the browser.',
    disciplines: ['UX/UI'],
    year: '2025',
    role: 'Design & Build',
    featured: true,
    external: 'https://binkli.vercel.app',
    cover: '/projects/binkli.jpg',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const featuredProjects = projects.filter((p) => p.featured)

/** Projects that have a readable case study (drive the /work/:slug routes). */
export const caseStudies = projects.filter((p) => p.study)
