import type { Block } from 'payload'

export const StatsGridBlock: Block = {
  slug: 'statsGrid',
  interfaceName: 'StatsGridBlock',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "Grow"' },
        },
        {
          name: 'stat',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "2,030"' },
        },
        {
          name: 'statLabel',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "people across 6 campuses"' },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'scripture',
          type: 'textarea',
        },
        {
          name: 'scriptureReference',
          type: 'text',
        },
      ],
    },
  ],
}
