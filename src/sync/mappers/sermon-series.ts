import type { RockContentChannelItem } from '@/lib/rock-api'

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function mapRockSermonSeries(rock: RockContentChannelItem) {
  const attrs = rock.AttributeValues || {}
  return {
    title: rock.Title,
    slug: slugify(rock.Title),
    rockContentItemId: rock.Id,
    startDate: rock.StartDateTime || null,
    isActive: rock.Status === 2,
    resourceUrl: `https://resources.aucklandev.co.nz`,
    _imageGuid: attrs.SeriesImage?.Value || null,
    lastSyncedAt: new Date().toISOString(),
  }
}
