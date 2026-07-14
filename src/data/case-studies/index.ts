import type { CaseStudy } from '@/types'
import { parkIt } from './park-it'
import { wellbell } from './wellbell'
import { materia } from './materia'
import { levelstretch } from './levelstretch'

export const caseStudyBySlug: Record<string, CaseStudy> = {
  'park-it': parkIt,
  wellbell,
  materia,
  levelstretch,
}
