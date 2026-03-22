import type { Block } from 'payload'

export const CardGridBlock: Block = {
  slug: 'cardGrid',
  interfaceName: 'CardGridBlock',
  fields: [
    {
      name: 'dataSource',
      type: 'select',
      required: true,
      options: [
        { label: 'Campuses', value: 'campuses' },
        { label: 'Events', value: 'events' },
        { label: 'Team Members', value: 'team-members' },
      ],
    },
    {
      name: 'campusFilter',
      type: 'relationship',
      relationTo: 'campuses',
      admin: {
        condition: (_, siblingData) => siblingData?.dataSource === 'events',
      },
    },
  ],
}
