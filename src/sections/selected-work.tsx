import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { WorkIndex } from '@/components/common/work-index'
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

      <div className="mt-14">
        <WorkIndex projects={featuredProjects} />
      </div>
    </Section>
  )
}
