import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'

export const Registrations: CollectionConfig = {
  slug: 'registrations',
  admin: {
    useAsTitle: 'publicName',
    defaultColumns: ['publicName', 'event', 'isActive', 'currentCount', 'capacity'],
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'rockRegistrationId',
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
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
    },
    {
      name: 'publicName',
      type: 'text',
    },
    {
      name: 'isActive',
      type: 'checkbox',
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'capacity',
      type: 'number',
    },
    {
      name: 'currentCount',
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
