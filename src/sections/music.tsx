import { Container } from '@/components/common/container'
import { Reveal } from '@/components/common/reveal'
import { AlbumCover } from '@/components/common/album-cover'
import { music } from '@/data/music'

export function Music() {
  return (
    <section id="music" className="border-t border-hairline py-20 sm:py-28">
      <Container>
        <Reveal>
          <ul className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {music.albums.map((a) => (
              <li key={a.slug} className="group w-36 shrink-0 sm:w-40" data-cursor="grow">
                <AlbumCover title={a.title} year={a.year} src={a.cover} />
                <p className="mt-2 truncate text-sm font-medium text-ink">{a.title}</p>
                <p className="font-mono text-[0.62rem] text-ink-mute">{a.year}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-2xl text-balance text-center font-display text-lg font-bold uppercase tracking-tight text-ink sm:text-xl">
            {music.caption}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
