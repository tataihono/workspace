import type { Block } from 'payload'

export const ImageGalleryBlock: Block = {
  slug: 'imageGallery',
  interfaceName: 'ImageGalleryBlock',
  fields: [
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
