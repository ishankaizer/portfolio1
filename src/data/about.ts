import type { Philosophy, Tool } from '@/types'

export const about = {
  tldr:
    'Industrial designer who fell for interfaces. I take products from a rough brief to 3D form to a shipped, interactive experience, and I automate the boring parts with Python.',
  long: [
    'It started with making things. Before screens became my medium I was deep in products, machines and form: how a physical object communicates intent through shape, material and ergonomics.',
    'Studying Industrial Design at VIT grounded that curiosity in research, ergonomics, prototyping and manufacturing logic. UX/UI entered naturally, not as a switch but as an extension. Modern products don’t live in one world; a product is the hardware and the interface and the flow and the feeling.',
    'Today I design end-to-end experiences, physical and digital, mixing industrial-design thinking, UX principles and visualization. Along the way I’ve led a 40-person design team, built a material-discovery platform, modeled exhibition booths, and cut production grind with Python automation.',
  ],
}

export const philosophies: Philosophy[] = [
  {
    label: 'On interfaces',
    text: 'UX is paying attention to how people move, hesitate, tap and get confused. When something works, users never think about the interface. They just keep going.',
  },
  {
    label: 'On objects',
    text: 'I’m drawn to physical products because they’re honest. You feel immediately whether something is uncomfortable, awkward or thoughtfully made. There’s nowhere to hide.',
  },
]

export const hobbies = [
  'Music',
  'Football',
  'Photography',
  'Travel',
  'Video editing',
]

export const tools: Tool[] = [
  { abbr: 'Fg', label: 'Figma', note: 'UX/UI, prototyping, systems' },
  { abbr: 'Ps', label: 'Photoshop', note: 'Compositing, product viz' },
  { abbr: 'Ai', label: 'Illustrator', note: 'Vector, iconography' },
  { abbr: 'Bl', label: 'Blender', note: '3D modeling, render' },
  { abbr: 'Fu', label: 'Fusion 360', note: 'CAD, mechanical form' },
  { abbr: 'Pr', label: 'Premiere', note: 'Edit, motion' },
  { abbr: 'Ae', label: 'After Effects', note: 'Motion graphics' },
  { abbr: 'Cd', label: 'CorelDRAW', note: 'Print production' },
  { abbr: 'Py', label: 'Python', note: 'Design automation' },
]
