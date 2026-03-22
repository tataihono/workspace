import type { RockEventItemOccurrence } from '@/lib/rock-api'

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function mapRockEvent(rock: RockEventItemOccurrence) {
  return {
    title: rock.EventItem.Name,
    slug: slugify(rock.EventItem.Name),
    rockEventId: rock.EventItem.Id,
    startDate: rock.NextStartDateTime || null,
    endDate: rock.Schedule?.EffectiveEndDate || null,
    // Campus relationship resolved by matching rockId in the sync runner
    _campusRockId: rock.CampusId,
    location: {
      name: rock.Location || '',
      address: '',
    },
    contactPerson: rock.ContactPersonAlias
      ? {
          name: rock.ContactPersonAlias.Person.FullName,
          email: rock.ContactPersonAlias.Person.Email || '',
          phone: '',
        }
      : undefined,
    _imageUrl: rock.EventItem.PhotoUrl || null,
    lastSyncedAt: new Date().toISOString(),
  }
}
