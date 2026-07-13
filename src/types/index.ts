export type Discipline =
  | 'UX/UI'
  | 'Industrial Design'
  | 'Product'
  | 'Visualization'

export interface MetricStat {
  value: string
  label: string
}

export interface CaseMedia {
  /** `placeholder` renders a labelled frame until a real asset is dropped in. */
  kind: 'image' | 'placeholder'
  src?: string
  alt?: string
  caption?: string
  /** CSS aspect-ratio, e.g. "16 / 9" or "4 / 3". */
  aspect?: string
}

export interface CaseSection {
  heading: string
  body: string[]
  media?: CaseMedia
}

export interface Decision {
  title: string
  body: string
}

export interface CaseStudy {
  /** One-line, 3-second read: what it is, the role, the outcome. */
  hook: string
  overview: {
    timeline: string
    team: string
    platform: string
    tools: string[]
  }
  /** The real user problem and stakes. */
  problem: string[]
  /** Exactly what Ishan did, vs. the team. */
  contributions: string[]
  /** Research -> insight -> exploration, in ordered sections. */
  process: CaseSection[]
  /** 2-3 hard trade-offs with the reasoning. */
  decisions: Decision[]
  outcome: {
    stats?: MetricStat[]
    body: string[]
  }
  /** What he'd do differently — signals seniority. */
  reflection: string[]
}

export interface Project {
  slug: string
  title: string
  /** Outcome-first one-liner for the card and hero. */
  tagline: string
  disciplines: Discipline[]
  year: string
  role: string
  /** Shown in the selected-work grid on the homepage. */
  featured: boolean
  /** Live/external destination (opens in a new tab) — used when no case study. */
  external?: string
  /** /projects/<slug>.jpg by convention; falls back to a generated cover. */
  cover?: string
  /** Optional long-form case study. */
  study?: CaseStudy
}

export interface ExperienceRole {
  when: string
  role: string
  org: string
  location?: string
  points: string[]
}

export interface Tool {
  abbr: string
  label: string
  note: string
}

export interface Philosophy {
  label: string
  text: string
}
