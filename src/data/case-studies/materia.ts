import type { CaseStudy } from '@/types'

export const materia: CaseStudy = {
  hook: 'A material-discovery platform for interior designers. I designed it and shipped it as a working React product, not just a prototype.',
  overview: {
    timeline: 'Ongoing · 2025',
    team: 'Design + front-end (me), with product feedback',
    platform: 'Responsive web app (React)',
    tools: ['Figma', 'React', 'Photoshop', 'Python'],
  },
  problem: [
    'Interior designers spend hours hunting for the right material (tiles, laminates, stone, veneers) across scattered vendor catalogues, PDFs and WhatsApp forwards. Discovery is slow, comparison is manual, and the specification that comes out of it is easy to get wrong.',
    'The opportunity was a single, visual, searchable surface where a designer can find a material, understand it, and shortlist it with confidence, turning a scavenger hunt into a browse.',
  ],
  contributions: [
    'Designed the product’s information architecture, browse and detail experiences.',
    'Built the front-end in React: the live, interactive product, not a clickable mockup.',
    'Designed the product-visualization system so materials read accurately at a glance.',
    'Used Python to automate catalogue image processing at volume.',
  ],
  process: [
    {
      heading: 'Designing for the eye first',
      body: [
        'Material selection is a visual, tactile decision, so the interface leads with imagery at a size where texture and finish actually read. I designed a browse experience that behaves like flipping through samples: fast, forgiving, and image-forward.',
        'Consistent, honest product visualization was non-negotiable. A material chosen on-screen has to match the material that arrives, so I built a visualization treatment that keeps lighting and scale comparable across the whole catalogue.',
      ],
      media: { kind: 'placeholder', caption: 'Browse experience: image-forward material grid', aspect: '16 / 9' },
    },
    {
      heading: 'From Figma to shipped React',
      body: [
        'This is where the project earns its place: I didn’t stop at screens. I built the front-end in React, which meant confronting the real problems mockups hide, like loading states, empty states, responsive behaviour, and how the grid performs with a lot of imagery.',
        'Designing in code tightened the loop. Decisions about spacing, hierarchy and interaction were validated in the browser, on real content, rather than approximated in a static file.',
      ],
      media: { kind: 'placeholder', caption: 'Material detail: spec, finish and context', aspect: '16 / 9' },
    },
    {
      heading: 'Automating the unglamorous part',
      body: [
        'A material platform lives or dies on its catalogue, and catalogues mean thousands of vendor images in inconsistent formats. I wrote Python to batch-process them into a clean, consistent set. That kind of leverage lets a small team ship a big-feeling product.',
      ],
    },
  ],
  decisions: [
    {
      title: 'Ship it in code, not just Figma',
      body: 'A material tool is about performance and real imagery under real conditions, things a prototype can’t prove. Building it in React meant the design was accountable to the browser: it had to actually work, load and scale, which is exactly the discipline product teams hire for.',
    },
    {
      title: 'Consistency over vendor fidelity',
      body: 'Vendor photos are lit and shot inconsistently, which makes comparison meaningless. I chose a unified visualization treatment so materials are comparable to each other, accepting some deviation from any single source photo in exchange for trustworthy side-by-side decisions.',
    },
    {
      title: 'Automation as a design tool',
      body: 'Rather than treat catalogue prep as someone else’s problem, I folded it into the design system with Python. The pipeline is part of the product’s quality. The reason every material reads cleanly is a tooling decision, not luck.',
    },
  ],
  outcome: {
    body: [
      'Materia is a live, working product and my strongest proof that I close the gap between design and engineering. I can take a concept all the way to something people actually use.',
      'It’s also the clearest example of my range: research and IA, visual system, front-end implementation, and automation, on one brief.',
    ],
  },
  reflection: [
    'Next I’d invest in structured comparison, letting designers hold two or three materials side by side with specs aligned, since that’s the decision the whole product is building toward.',
    'I’d also formalise the design system as the product grows, so visual consistency scales without me hand-tuning it.',
  ],
}
