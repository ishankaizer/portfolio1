import type { Philosophy, Tool } from '@/types'

export const about = {
  /** Short, spacious About. Kept deliberately minimal. */
  statement: 'I make things you touch, and things you tap.',
  sub: 'An industrial designer now designing the interfaces and shipping the code too. Based in Bengaluru.',
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
