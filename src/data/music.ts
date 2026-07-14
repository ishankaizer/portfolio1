export interface Album {
  slug: string
  title: string
  year: string
  cover: string
}

/**
 * Placeholder recommendations (Gorillaz discography). Album artwork is
 * copyrighted, so covers are drop-ins: put <slug>.jpg in public/music/
 * and it replaces the name tile automatically.
 */
const albums: Omit<Album, 'cover'>[] = [
  { slug: 'gorillaz', title: 'Gorillaz', year: '2001' },
  { slug: 'demon-days', title: 'Demon Days', year: '2005' },
  { slug: 'plastic-beach', title: 'Plastic Beach', year: '2010' },
  { slug: 'the-fall', title: 'The Fall', year: '2010' },
  { slug: 'humanz', title: 'Humanz', year: '2017' },
  { slug: 'the-now-now', title: 'The Now Now', year: '2018' },
  { slug: 'song-machine', title: 'Song Machine, Season One', year: '2020' },
  { slug: 'cracker-island', title: 'Cracker Island', year: '2023' },
]

export const music = {
  caption: 'A few records on repeat, if you are after some fresh tunes :)',
  albums: albums.map((a) => ({ ...a, cover: `/music/${a.slug}.jpg` })) as Album[],
}
