import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import type { RockWebhookPayload, RockEntityType } from '@/lib/rock-api'
import { CACHE_TAGS } from '@/lib/cache-tags'

const ROCK_WEBHOOK_SECRET = process.env.ROCK_WEBHOOK_SECRET || ''

// Map Rock entity types to Payload cache tags for ISR revalidation
const ENTITY_TO_CACHE_TAG: Partial<Record<RockEntityType, string>> = {
  Campus: CACHE_TAGS.campuses,
  EventItem: CACHE_TAGS.events,
  EventItemOccurrence: CACHE_TAGS.events,
  Person: CACHE_TAGS.teamMembers,
  GroupMember: CACHE_TAGS.teamMembers,
  ContentChannelItem: CACHE_TAGS.sermonSeries,
  Group: CACHE_TAGS.connectGroups,
  RegistrationInstance: CACHE_TAGS.registrations,
}

function validateWebhook(request: NextRequest): boolean {
  // Validate via shared secret in header
  const secret = request.headers.get('x-rock-webhook-secret')
  if (!ROCK_WEBHOOK_SECRET) {
    console.warn('ROCK_WEBHOOK_SECRET not set, skipping validation')
    return true
  }
  return secret === ROCK_WEBHOOK_SECRET
}

export async function POST(request: NextRequest) {
  // Validate the webhook
  if (!validateWebhook(request)) {
    console.error('Webhook validation failed')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: RockWebhookPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { entityType, entityId, operation } = body

  console.log(
    `[Rock Webhook] ${operation} ${entityType} #${entityId}`,
  )

  // Trigger ISR revalidation for the affected entity type
  const cacheTag = ENTITY_TO_CACHE_TAG[entityType]
  if (cacheTag) {
    revalidateTag(cacheTag, 'default')
    console.log(`[Rock Webhook] Revalidated cache tag: ${cacheTag}`)
  }

  // TODO: In production, queue a targeted sync for this specific entity
  // rather than revalidating the full cache tag. For now, cache
  // revalidation ensures the next page render fetches fresh data.

  return NextResponse.json({
    ok: true,
    entityType,
    entityId,
    operation,
    revalidated: cacheTag || null,
  })
}
