import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'role', 'teamGroup', 'order'],
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'rockPersonId',
      type: 'number',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'e.g. "Senior Pastor"',
      },
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'teamGroup',
      type: 'select',
      options: [
        { label: 'Staff', value: 'staff' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Apprentices', value: 'apprentices' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'lastSyncedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}
