import { Container } from '@/components/common/container'
import { Reveal } from '@/components/common/reveal'
import { AlbumCover } from '@/components/common/album-cover'
import { music } from '@/data/music'

export function Music() {
  // Duplicated once so the marquee loops seamlessly at translateX(-50%).
  const loop = [...music.tracks, ...music.tracks]

  return (
    <section
      id="music"
      className="overflow-hidden border-t border-hairline py-24 sm:py-32 lg:py-40"
    >
      <div className="marquee">
        <ul
          className="marquee-track px-6"
          style={{ '--marquee-duration': `${music.tracks.length * 2}s` } as React.CSSProperties}
        >
          {loop.map((t, i) => (
            <li
              key={`${t.title}-${i}`}
              data-cursor="grow"
              className="group/item w-64 shrink-0 sm:w-72"
            >
              <div className="overflow-hidden rounded-lg border border-hairline transition duration-300 ease-out group-hover/item:scale-[1.04] group-hover/item:border-brand group-hover/item:shadow-xl group-hover/item:[filter:invert(1)]">
                <AlbumCover title={t.title} src={t.cover} />
              </div>
              <p className="mt-3 truncate text-[0.95rem] font-medium text-ink">
                {t.title}
              </p>
              <p className="truncate font-mono text-xs text-ink-mute">{t.artist}</p>
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <Reveal>
          <p className="mx-auto mt-20 max-w-[20ch] text-balance text-center font-display text-2xl font-black uppercase leading-[1.12] tracking-tight text-ink sm:mt-24 sm:text-4xl lg:text-[2.75rem]">
            I can&rsquo;t work without music,{' '}
            <span className="text-brand">so neither should you.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
