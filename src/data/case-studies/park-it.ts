import type { CaseStudy } from '@/types'

export const parkIt: CaseStudy = {
  hook: 'A smart-parking app for Indian cities. I led the research and end-to-end product design that turned aimless circling into a two-tap reservation.',
  overview: {
    timeline: '10 weeks · 2024',
    team: 'Solo: research, UX, UI, prototype',
    platform: 'iOS & Android (mobile app)',
    tools: ['Figma', 'FigJam', 'Maze', 'Illustrator'],
  },
  problem: [
    'In dense Indian metros, finding parking is a daily tax on time and temper. Drivers circle blocks for ten to twenty minutes, double-park, or give up, with no reliable way to know where a free spot is before they arrive.',
    'Existing options are fragmented: some lots take cash only, some have apps that never show live availability, and street parking is a guessing game. The core problem isn’t a missing map. It’s the absence of trust that a spot will actually be there when you arrive.',
  ],
  contributions: [
    'Ran primary research across Bengaluru, Delhi and Mumbai: intercept interviews with drivers and lot attendants.',
    'Framed the problem, defined the information architecture and the core reservation flow.',
    'Designed the full UI system, prototype and micro-interactions in Figma.',
    'Ran usability tests on the prototype and iterated the booking and navigation flows.',
  ],
  process: [
    {
      heading: 'Research: where the time actually goes',
      body: [
        'I spoke with drivers across three cities and shadowed a few through a real parking attempt. The pattern was consistent: the pain isn’t paying, it’s the uncertainty before you park. People wanted to leave home already knowing they had a spot.',
        'Talking to lot attendants surfaced the supply side. Lots often had space but no way to advertise it in real time, and walk-ins made their occupancy unpredictable.',
      ],
      media: { kind: 'placeholder', caption: 'Research synthesis: interview affinity map', aspect: '16 / 9' },
    },
    {
      heading: 'Insight: sell certainty, not spaces',
      body: [
        'The product’s job became reducing uncertainty at every step: see live availability, lock a spot before leaving, navigate straight to it, and pay without touching cash. Reservation, not discovery, is the emotional core.',
        'That reframing set the priority order: availability you can trust, then reservation, then turn-by-turn to the exact lot, then frictionless payment and a scannable e-ticket.',
      ],
    },
    {
      heading: 'Design: a flow you can run in one hand',
      body: [
        'I designed the booking path to be completable in two taps from the map: pick a lot, confirm the slot. Live availability is shown as confidence, not just a number. Colour and wording tell you how safe the bet is.',
        'An in-app wallet and e-tickets remove the cash friction attendants complained about, and an SMS fallback covers the reality that not every user keeps the app open or has steady data.',
      ],
      media: { kind: 'placeholder', caption: 'Core screens: map, lot detail, reservation, e-ticket', aspect: '16 / 9' },
    },
  ],
  decisions: [
    {
      title: 'Reservation-first, not map-first',
      body: 'Most parking apps open on a map and make you do the work. I made the reserved-spot state the hero: the app’s promise is “you have a spot,” so the confirmed reservation, not the search, is the screen that gets the most design weight.',
    },
    {
      title: 'Show availability as confidence',
      body: 'Raw counts (“3 spaces”) go stale in seconds and erode trust when wrong. I paired live counts with a confidence signal and honest wording, so a near-full lot reads as a risk rather than a false promise. Trust was the whole product.',
    },
    {
      title: 'An SMS fallback for real conditions',
      body: 'Designing only for the happy path ignores patchy data and older phones. Booking confirmations and e-tickets fall back to SMS so the system still works when the app doesn’t. It’s an industrial-design habit: design for the real environment, not the demo.',
    },
  ],
  outcome: {
    body: [
      'The prototype tested well: participants completed a reservation without guidance and specifically called out the reserved-spot confirmation and the confidence indicator as what made them trust it.',
      'The project became my clearest demonstration of end-to-end product thinking, from field research in three cities to a validated, high-fidelity flow, plus a reusable mobile UI system.',
    ],
  },
  reflection: [
    'I’d take the supply side further next. Attendants needed a lightweight way to keep availability honest, and a companion operator view would make the confidence signal real rather than modelled.',
    'I’d also pressure-test pricing and cancellation earlier. Reservations only build trust if letting go of one is as easy as making one.',
  ],
}
