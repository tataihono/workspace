import type { Block } from 'payload'

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  interfaceName: 'FeatureGridBlock',
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
      name: 'layout',
      type: 'select',
      defaultValue: 'twoColumn',
      options: [
        { label: '2 Columns', value: 'twoColumn' },
        { label: '3 Columns', value: 'threeColumn' },
        { label: '4 Columns', value: 'fourColumn' },
      ],
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'iconLeft',
      options: [
        { label: 'Icon on top', value: 'iconTop' },
        { label: 'Icon on left', value: 'iconLeft' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Smile', value: 'smile' },
            { label: 'Graduation', value: 'graduation' },
            { label: 'Coffee', value: 'coffee' },
            { label: 'Users', value: 'users' },
            { label: 'Clock', value: 'clock' },
            { label: 'Heart', value: 'heart' },
            { label: 'Music', value: 'music' },
            { label: 'Book', value: 'book' },
            { label: 'Chat', value: 'chat' },
            { label: 'Star', value: 'star' },
            { label: 'Globe', value: 'globe' },
            { label: 'Shield', value: 'shield' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'accentColor',
      type: 'text',
      admin: {
        description: 'Optional hex color override (e.g. #0096C3 for kids)',
      },
    },
  ],
}
