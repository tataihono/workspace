import { getPayloadClient } from '@/lib/payload'
import { unstable_cache } from 'next/cache'
import { CACHE_TAGS } from '@/lib/cache-tags'

type ColorPreset = 'primary-red' | 'light' | 'dark'

const colorStyles: Record<ColorPreset, string> = {
  'primary-red': 'bg-rich-red text-white',
  light: 'bg-warm-white text-brand-black',
  dark: 'bg-brand-black text-white',
}

interface AnnouncementDoc {
  id: string
  title: string
  message: unknown
  link?: {
    label?: string | null
    href?: string | null
  }
  startDate: string
  endDate: string
  colorPreset?: ColorPreset | null
}

async function getActiveAnnouncements(): Promise<AnnouncementDoc[]> {
  const payload = await getPayloadClient()
  const now = new Date().toISOString()

  const result = await payload.find({
    collection: 'announcements',
    depth: 0,
    limit: 1,
    sort: '-startDate',
    where: {
      and: [
        { startDate: { less_than_equal: now } },
        { endDate: { greater_than_equal: now } },
        { _status: { equals: 'published' } },
      ],
    },
  })

  return result.docs as unknown as AnnouncementDoc[]
}

const getCachedAnnouncements = unstable_cache(
  getActiveAnnouncements,
  ['active-announcements'],
  { tags: [CACHE_TAGS.announcements], revalidate: 300 },
)

export async function AnnouncementBanner() {
  const announcements = await getCachedAnnouncements()

  if (announcements.length === 0) {
    return null
  }

  const announcement = announcements[0]
  const preset = announcement.colorPreset || 'primary-red'
  const styles = colorStyles[preset]

  return (
    <div className={`relative z-[55] ${styles}`}>
      <div className="mx-auto flex max-w-[80rem] items-center justify-center gap-3 px-5 py-2.5 text-center text-sm">
        <span className="font-medium">{announcement.title}</span>
        {announcement.link?.href && announcement.link?.label && (
          <a
            href={announcement.link.href}
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            {announcement.link.label}
          </a>
        )}
      </div>
    </div>
  )
}
