import { useParams } from 'react-router-dom'
import { getProject } from '@/data/projects'
import { Seo } from '@/components/common/seo'
import { Container } from '@/components/common/container'
import { NotFoundPage } from './not-found'

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <NotFoundPage />

  return (
    <>
      <Seo
        title={project.title}
        description={project.tagline}
        path={`/work/${project.slug}`}
        type="article"
      />
      <section className="py-24">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
            {project.disciplines.join(' · ')} — {project.year}
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-black uppercase tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{project.tagline}</p>
        </Container>
      </section>
    </>
  )
}
