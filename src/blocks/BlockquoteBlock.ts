import type { Block } from 'payload'

export const BlockquoteBlock: Block = {
  slug: 'blockquote',
  interfaceName: 'BlockquoteBlock',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'attribution',
      type: 'text',
      admin: {
        description: 'e.g. "1 Corinthians 1:23-24"',
      },
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'centered',
      options: [
        { label: 'Centered', value: 'centered' },
        { label: 'Left border', value: 'leftBorder' },
      ],
    },
  ],
}
