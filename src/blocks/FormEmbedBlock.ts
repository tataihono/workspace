import type { Block } from 'payload'

export const FormEmbedBlock: Block = {
  slug: 'formEmbed',
  interfaceName: 'FormEmbedBlock',
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
      name: 'formType',
      type: 'select',
      required: true,
      options: [
        { label: 'Contact Form', value: 'contact' },
        { label: 'Signup Form', value: 'signup' },
      ],
    },
    {
      name: 'formTitle',
      type: 'text',
      admin: {
        description: 'Label passed to signup form (e.g. "Explaining Christianity")',
        condition: (_, siblingData) => siblingData?.formType === 'signup',
      },
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'centered',
      options: [
        { label: 'Full width', value: 'full' },
        { label: 'Centered', value: 'centered' },
      ],
    },
  ],
}
