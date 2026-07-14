import type { CaseStudy } from '@/types'

export const wellbell: CaseStudy = {
  hook: 'A connected pill dispenser for seniors — I designed both the physical product and its interaction model so the right dose happens at the right time, with a caregiver watching from afar.',
  overview: {
    timeline: '12 weeks · 2023',
    team: 'Solo — industrial design, UX, prototyping',
    platform: 'Connected device + caregiver app',
    tools: ['Fusion 360', 'Figma', 'Blender', 'Keyshot'],
  },
  problem: [
    'Older adults on multiple medications face a quietly dangerous problem: missed doses, double doses, and the wrong pill at the wrong hour. Blister packs and weekly organisers rely entirely on memory and good eyesight.',
    'Families living apart have no visibility — they find out about a missed dose after something has gone wrong. The need was a product that makes the correct action the easy action, and lets a caregiver help without hovering.',
  ],
  contributions: [
    'Owned the full industrial-design process: ergonomics, form, mechanism and CMF.',
    'Designed the on-device interaction — dispensing, audio and LED reminders.',
    'Designed the companion caregiver app for remote monitoring and refill alerts.',
    'Built physical and CAD prototypes to test reach, grip and legibility with older users.',
  ],
  process: [
    {
      heading: 'Understanding the user, not just the task',
      body: [
        'I grounded the design in the constraints of ageing hands and eyes: reduced grip strength, tremor, lower contrast sensitivity. That drove decisions before any styling — button size, actuation force, text size and the loudness and pitch of alerts.',
        'I mapped the daily medication ritual and the failure points around it: the moment of remembering, the moment of taking, and the gap where a caregiver currently has zero information.',
      ],
      media: { kind: 'placeholder', caption: 'Ergonomic study — reach, grip and legibility', aspect: '4 / 3' },
    },
    {
      heading: 'Form and mechanism',
      body: [
        'The dispenser had to be reassuring on a kitchen counter — closer to an appliance than a medical device — while housing a reliable dispensing mechanism and refillable cartridges. I modelled the form and internals in Fusion 360 and iterated the housing around the mechanism, not the other way around.',
        'A large, single primary action — “take my dose now” — anchors the interface. Audio and a clear LED ring signal the dose window so the cue works even from across the room.',
      ],
      media: { kind: 'placeholder', caption: 'CAD + rendered form study', aspect: '16 / 9' },
    },
    {
      heading: 'The caregiver layer',
      body: [
        'The companion app turns absence into presence: a caregiver sees adherence at a glance, gets alerted to a missed dose, and knows when a cartridge is running low so refills arrive before they’re needed.',
        'I kept the app deliberately quiet — it surfaces exceptions, not a stream of green checkmarks, so it earns attention only when attention is warranted.',
      ],
    },
  ],
  decisions: [
    {
      title: 'Appliance, not medical device',
      body: 'A clinical look signals “illness” and gets hidden in a drawer — where it can’t remind anyone. I designed WellBell to look like something you’d happily leave on the counter, because visibility is the entire point of a reminder product.',
    },
    {
      title: 'One unmistakable primary action',
      body: 'For a user with tremor and low vision, choice is friction. The device collapses the daily interaction to a single large, high-contrast action with a physical target that’s hard to miss and hard to trigger by accident.',
    },
    {
      title: 'Alert on exceptions, not activity',
      body: 'A caregiver app that pings for every taken dose gets muted within a week. I designed it to stay silent when things are fine and speak up only for a miss or a low cartridge — so the one alert that matters actually lands.',
    },
  ],
  outcome: {
    body: [
      'The result is a coherent product system — a device and an app that solve one problem from both ends, designed around real physical constraints rather than a screen in isolation.',
      'WellBell is the project I point to when a team asks whether I can hold hardware and software together: it’s ergonomics, mechanism, CMF and interaction design in one brief.',
    ],
  },
  reflection: [
    'I’d prototype the audio and light cues with older users in a real kitchen next — perceived urgency is hard to judge at a desk, and the reminder’s tone is as important as its timing.',
    'I’d also design the refill supply chain as part of the experience; the hardware only delivers on its promise if cartridges arrive reliably and effortlessly.',
  ],
}
