import { site } from '@/data/site'

interface SeoProps {
  title?: string
  description?: string
  /** Path beginning with "/", used for the canonical + og:url. */
  path?: string
  /** Absolute or root-relative OG image. */
  image?: string
  type?: 'website' | 'article'
}

/**
 * Per-route document head. React 19 hoists these tags into <head>
 * and de-duplicates <title>, so no external head library is needed.
 */
export function Seo({
  title,
  description = site.intro,
  path = '/',
  image = '/og.png',
  type = 'website',
}: SeoProps) {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`
  const url = `${site.url}${path}`
  const imageUrl = image.startsWith('http') ? image : `${site.url}${image}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}
