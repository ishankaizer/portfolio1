import type { CaseStudy } from '@/types'

export const levelstretch: CaseStudy = {
  hook: 'A self-leveling ambulance stretcher that keeps a patient stable on rough roads and streams live vitals to the hospital before arrival — industrial design meets connected health.',
  overview: {
    timeline: '14 weeks · 2024',
    team: 'Solo — industrial design, systems, companion app',
    platform: 'Medical device + hospital app',
    tools: ['Fusion 360', 'Blender', 'Figma', 'Arduino (concept)'],
  },
  problem: [
    'On the way to a hospital, two things fight against the patient: the road and the clock. Uneven roads tilt and jolt a stretcher, worsening conditions like spinal injury or shock, and the receiving team often learns the patient’s state only when the doors open.',
    'The brief was to keep the patient level regardless of terrain, and to close the information gap so the hospital can prepare while the ambulance is still moving.',
  ],
  contributions: [
    'Designed the mechanical concept for a gyro-stabilised, self-leveling platform.',
    'Designed the industrial form for real ambulance constraints — loading, weight, cleaning.',
    'Specified the live-vitals streaming system (ECG and core signs) to the hospital.',
    'Designed the companion hospital app that receives and surfaces incoming vitals.',
  ],
  process: [
    {
      heading: 'Stabilise the patient, not just the frame',
      body: [
        'The core mechanism uses gyroscopic sensing to counter the ambulance’s pitch and roll, keeping the patient surface level as the vehicle moves. I worked the concept in CAD around the hard realities: it has to fold and load like a normal stretcher, survive weight and motion, and be cleanable to medical standards.',
        'Industrial-design constraints led every decision — a clever mechanism that’s heavy, fragile or hard to sanitise never makes it into an ambulance.',
      ],
      media: { kind: 'placeholder', caption: 'Mechanism concept — self-leveling platform', aspect: '16 / 9' },
    },
    {
      heading: 'Turning the ride into data',
      body: [
        'Sensors on the stretcher capture ECG and core vitals and stream them ahead to the receiving hospital, so the trauma team is briefed before the patient arrives instead of after.',
        'The value isn’t the sensor — it’s the lead time. I designed the system around getting the right signal to the right team early enough to act on it.',
      ],
    },
    {
      heading: 'The hospital’s view',
      body: [
        'The companion app is built for a moving target and a busy room: incoming patients appear with their live vitals and ETA, prioritised so the most urgent case is unmistakable. It’s glanceable under pressure, because that’s the only condition it will ever be used in.',
      ],
      media: { kind: 'placeholder', caption: 'Hospital app — incoming patient vitals + ETA', aspect: '16 / 9' },
    },
  ],
  decisions: [
    {
      title: 'Constraints before cleverness',
      body: 'A self-leveling stretcher is only useful if it behaves like a stretcher — foldable, loadable, sanitisable. I let those industrial constraints bound the mechanism from the start rather than bolting them on later, because in a medical product the boring requirements are the ones that keep it out of service.',
    },
    {
      title: 'Design for the lead time, not the gadget',
      body: 'Streaming vitals is only valuable if it buys the hospital time to prepare. I framed the whole connected system around delivering an actionable picture before arrival, which shaped what to send and how to prioritise it — not just that data moves.',
    },
    {
      title: 'Glanceable under pressure',
      body: 'The receiving app will only ever be read in a hurry. I designed it to communicate the one thing that matters — how urgent, how soon — at a glance, and let detail come second. Calm information design for a high-stress moment.',
    },
  ],
  outcome: {
    body: [
      'Levelstretch is my most ambitious systems project: a physical mechanism, a connected sensing layer and a companion app, designed as one coherent response to a real emergency-care gap.',
      'It’s the clearest example of industrial-design rigour extended into IoT and software — the exact bridge I want to keep building.',
    ],
  },
  reflection: [
    'The next step is a working stabilisation rig — the mechanism’s real test is physical, and there’s only so far CAD and simulation can validate the ride.',
    'I’d also involve paramedics and ER staff directly in the app’s pressure-testing; the people who’d use it in the worst ten minutes of someone’s day should shape it earliest.',
  ],
}
