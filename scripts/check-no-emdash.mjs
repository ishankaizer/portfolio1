// Guard: fail the build if an em dash ever appears in the site source.
// Ishan's rule: no em dashes anywhere, no exceptions.
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const NEEDLES = ['—', '&mdash;', '&#8212;', '&#x2014;']
const EXT = /\.(ts|tsx|css|html|md|mjs|json|webmanifest)$/
const SKIP = new Set(['node_modules', 'dist', '.git'])

const offenders = []

function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!SKIP.has(e.name)) walk(join(dir, e.name))
    } else if (EXT.test(e.name)) check(join(dir, e.name))
  }
}

function check(file) {
  const text = readFileSync(file, 'utf8')
  text.split(/\r?\n/).forEach((line, i) => {
    if (NEEDLES.some((n) => line.includes(n))) {
      offenders.push(`${file}:${i + 1}  ${line.trim().slice(0, 80)}`)
    }
  })
}

walk('src')
for (const f of ['index.html', 'README.md', 'scripts/gen-og.mjs', 'public/site.webmanifest']) {
  if (existsSync(f)) check(f)
}

if (offenders.length) {
  console.error('\n✖ Em dash found. Ishan’s rule: no em dashes, no exceptions.\n')
  console.error(offenders.join('\n'))
  console.error(`\n${offenders.length} occurrence(s). Replace with a comma, period, colon, or a rewrite.\n`)
  process.exit(1)
}
console.log('✓ No em dashes.')
