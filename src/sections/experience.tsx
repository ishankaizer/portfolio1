import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { experience } from '@/data/experience'
import type { ExperienceRole } from '@/types'
import { cn } from '@/lib/utils'

function ExperienceRow({
  role,
  defaultOpen = false,
}: {
  role: ExperienceRole
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div className="border-t border-hairline last:border-b">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="group flex w-full flex-col items-start gap-1.5 py-6 text-left sm:flex-row sm:items-center sm:gap-4"
        >
          <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-ink-mute">
            {role.when}
          </span>
          <span className="flex-1">
            <span className="block font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand-strong sm:text-2xl">
              {role.role}
            </span>
            <span className="mt-0.5 block text-sm text-ink-soft">
              {role.org}
              {role.location ? ` · ${role.location}` : ''}
            </span>
          </span>
          <span
            aria-hidden
            className="grid size-9 shrink-0 place-items-center self-start rounded-full border border-hairline text-ink transition-colors group-hover:border-brand group-hover:text-brand sm:self-center"
          >
            <Plus
              className={cn(
                'size-4 transition-transform duration-300',
                open && 'rotate-45',
              )}
            />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        hidden={!open}
        className="grid grid-cols-1 gap-2 pb-6 sm:pl-44"
      >
        <ul className="flex flex-col gap-2">
          {role.points.map((p) => (
            <li key={p.slice(0, 24)} className="flex gap-3 text-ink-soft">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <Section id="experience" divided>
      <SectionHeader
        index="03"
        eyebrow="Experience"
        title={
          <>
            Where I&rsquo;ve{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              put in the reps.
            </span>
          </>
        }
      />
      <Reveal className="mt-12">
        <div>
          {experience.map((role, i) => (
            <ExperienceRow key={role.role + role.when} role={role} defaultOpen={i === 0} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
