import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'roles'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Content Lead', value: 'content-lead' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: ['editor'],
      required: true,
      saveToJWT: true,
      access: {
        update: ({ req: { user } }) => {
          return Boolean(user?.roles?.includes('admin'))
        },
      },
    },
  ],
}
