import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { WorkCard } from '@/components/common/work-card'
import { featuredProjects } from '@/data/projects'

export function SelectedWork() {
  return (
    <Section id="work" divided>
      <SectionHeader
        index="02"
        eyebrow="Selected work"
        title={
          <>
            Projects that go{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              deep,
            </span>{' '}
            not wide.
          </>
        }
        description="A few end-to-end pieces across mobile UX, connected hardware and shipped software. Each one is a full story: problem, decisions and outcome."
      />

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.08}>
            <WorkCard project={project} index={i} priority={i < 2} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
