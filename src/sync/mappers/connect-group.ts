import type { RockGroup } from '@/lib/rock-api'

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function mapRockConnectGroup(rock: RockGroup) {
  const leaders = rock.Members.filter(
    (m) => m.GroupRole.Name === 'Leader',
  ).map((m) => ({
    name: m.Person.FullName,
    email: m.Person.Email || '',
  }))

  const location = rock.GroupLocations[0]?.Location

  return {
    name: rock.Name,
    slug: slugify(rock.Name),
    rockGroupId: rock.Id,
    leaders,
    location: {
      name: location?.Street1 || '',
      address: location?.City || '',
    },
    capacity: rock.GroupCapacity,
    isActive: rock.IsActive,
    _campusRockId: rock.CampusId,
    lastSyncedAt: new Date().toISOString(),
  }
}
