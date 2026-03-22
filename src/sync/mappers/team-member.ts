import type { RockGroupMember } from '@/lib/rock-api'

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Rock group IDs mapped to team categories
const TEAM_GROUP_MAP: Record<number, 'staff' | 'leadership' | 'apprentices'> = {
  29482: 'staff',
  29485: 'leadership',
  29486: 'apprentices',
}

export function mapRockTeamMember(
  member: RockGroupMember,
  groupId: number,
) {
  return {
    fullName: member.Person.FullName,
    slug: slugify(member.Person.FullName),
    rockPersonId: member.Person.Id,
    role: member.GroupRole.Name,
    email: member.Person.Email || '',
    teamGroup: TEAM_GROUP_MAP[groupId] || 'staff',
    order: member.GroupOrder,
    // Photo URL for image sync pipeline
    _photoUrl: member.Person.PhotoUrl || null,
    lastSyncedAt: new Date().toISOString(),
  }
}

export const TEAM_GROUP_IDS = Object.keys(TEAM_GROUP_MAP).map(Number)
