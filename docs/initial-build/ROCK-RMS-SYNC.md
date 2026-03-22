# Rock RMS to Payload CMS Sync Architecture

Data synchronization strategy from Rock RMS (source of truth) to Payload CMS (sole frontend data store).

## Overview

```
Rock RMS (operational data)
  ├── Webhooks (real-time on CRUD)
  └── Cron job (every 15-30 min, full reconciliation)
          ↓
  POST /api/webhooks/rock-rms
          ↓
  Validate signature → Map entity → Upsert Payload → Trigger ISR
          ↓
Payload CMS (frontend data store)
          ↓
Next.js (Server Components via Payload Local API)
```

## Entities to Sync

### 1. Campus → Payload `campuses` Collection

**Rock API:**

```
GET /api/Campuses?$filter=IsActive eq true and CampusTypeValueId eq 768&$orderby=Order
```

**Known Campuses:**

| Rock ID | Name | Slug |
|---------|------|------|
| 2 | North | `north` |
| 3 | Central | `central` |
| 4 | Unichurch | `unichurch` |

**Field Mapping:**

| Rock Field | Payload Field | Notes |
|------------|---------------|-------|
| `Name` | `name` | |
| (derived) | `slug` | Auto-generated from name |
| `Id` | `rockId` | Unique index |
| `Location.Street1` | `address.street` | |
| `Location.City` | `address.city` | |
| `Location.PostalCode` | `address.postalCode` | |
| `Location.GeoPoint` | `geoPoint` | `{ lat, lng }` |
| `Location.GooglePlaceId` | `googlePlaceId` | |
| `ServiceTimes` | `serviceTimes` | e.g. "Sunday at 10:15am" |
| `Description` | `description` | Rich text |
| `Order` | `order` | Sort order |
| `IsActive` | `isActive` | |

**Rock Attributes:**

| Attribute Key | Payload Field | Notes |
|---------------|---------------|-------|
| `FeaturedImage` | `featuredImage` | Image GUID → download + upload |
| `SlideImage1` | `slideImages[0]` | |
| `SlideImage2` | `slideImages[1]` | |
| `SlideImage3` | `slideImages[2]` | |
| `SlideImage4` | `slideImages[3]` | |
| `EstablishmentYear` | `establishmentYear` | |

---

### 2. Person/Group → Payload `team-members` Collection

**Rock API:**

```
GET /api/Groups/{groupId}/members?$filter=GroupMemberStatus eq 'Active'&$expand=Person,GroupRole&$orderby=GroupOrder
```

**Source Groups:**

| Group ID | Team Category |
|----------|--------------|
| 29482 | Staff |
| 29485 | Leadership |
| 29486 | Apprentices |

> These group IDs are referenced in the `About/OurTeam.lava` template.

**Known Team Members:**

| Name | Role |
|------|------|
| Rowan Hilsden | Senior Pastor |
| Andrew Coombridge | — |
| Ryan Green | — |
| Austin Ibarra | — |
| Ming Yong | — |
| Steve Mullins | — |
| Jared Stevenson | — |
| Ioana Selea | — |
| Tim Thang | — |
| _(plus apprentices)_ | Apprentice |

**Field Mapping:**

| Rock Field | Payload Field | Notes |
|------------|---------------|-------|
| `Person.FullName` | `fullName` | |
| (derived) | `slug` | Auto-generated |
| `Person.Id` | `rockPersonId` | Indexed |
| `GroupRole.Name` | `role` | e.g. "Senior Pastor" |
| `Person.Email` | `email` | |
| `Person.PhotoUrl` | `photo` | Download + upload |
| (from group ID) | `teamGroup` | `staff` / `leadership` / `apprentices` |
| `GroupOrder` | `order` | Sort order |

---

### 3. EventItem/EventItemOccurrence → Payload `events` Collection

**Rock API:**

```
GET /api/EventItemOccurrences?$filter=EventItem/IsActive eq true&$expand=EventItem,Schedule,Campus,EventItem/EventItemAudiences&$orderby=NextStartDateTime
```

**Calendar ID:** 1

**Field Mapping:**

| Rock Field | Payload Field | Notes |
|------------|---------------|-------|
| `EventItem.Name` | `title` | |
| (derived) | `slug` | Auto-generated |
| `EventItem.Id` | `rockEventId` | Indexed |
| `EventItem.Summary` | `summary` | Rich text |
| `EventItem.PhotoUrl` | `image` | Download + upload |
| `Schedule.iCalendarContent` | `schedule` | Parsed iCal → JSON |
| `CampusId` | `campus` | Relationship to `campuses` |
| `Location` | `location.name` | Named location |
| (attribute) `NamedLocation` | `location.address` | Physical address |
| `ContactPersonAlias.Person.FullName` | `contactPerson.name` | |
| `ContactPersonAlias.Person.Email` | `contactPerson.email` | |
| `ContactPersonAlias.Person.PhoneNumbers[0]` | `contactPerson.phone` | |
| `ContactPersonAlias.Person.PhotoUrl` | `contactPerson.photo` | |
| (attribute) `FluroFormId` | `registrationUrl` | Build URL from ID |
| (derived) | `registrationStatus` | `open` / `full` / `closed` / `coming-soon` |
| `RegistrationInstance.MaxAttendees` | `registrationCapacity` | |
| `NextStartDateTime` | `startDate` | |
| `Schedule.EffectiveEndDate` | `endDate` | |

---

### 4. ContentChannelItem (Channel #4) → Payload `sermon-series` Collection

**Rock API:**

```
GET /api/ContentChannelItems?$filter=ContentChannelId eq 4 and Status eq 2&$orderby=StartDateTime desc
```

**Field Mapping:**

| Rock Field | Payload Field | Notes |
|------------|---------------|-------|
| `Title` | `title` | |
| (derived) | `slug` | Auto-generated |
| `Id` | `rockContentItemId` | Indexed |
| `Content` | `content` | Rich text (HTML → clean) |
| (attribute) `SeriesImage` | `seriesImage` | Image GUID → download + upload |
| `StartDateTime` | `startDate` | |
| (derived) | `resourceUrl` | Link to resources.aucklandev.co.nz |
| `Status` | `isActive` | Status 2 = Approved |

---

### 5. Group (Connect Groups) → Payload `connect-groups` Collection

**Rock API:**

```
GET /api/Groups?$filter=GroupTypeId eq {connectGroupTypeId} and IsActive eq true&$expand=Members,GroupLocations,Campus&$orderby=Name
```

**Field Mapping:**

| Rock Field | Payload Field | Notes |
|------------|---------------|-------|
| `Name` | `name` | |
| (derived) | `slug` | Auto-generated |
| `Id` | `rockGroupId` | Indexed |
| `Description` | `description` | Rich text |
| `Members` (leader role) | `leaders[]` | Filter by IsLeader role |
| `GroupLocations[0]` | `location` | Name + address |
| (attribute) `Image` | `image` | Download + upload |
| `GroupCapacity` | `capacity` | |
| `CampusId` | `campus` | Relationship to `campuses` |
| `IsActive` | `isActive` | |

---

### 6. RegistrationInstance → Payload `registrations` Collection

**Rock API:**

```
GET /api/RegistrationInstances?$filter=IsActive eq true&$expand=RegistrationTemplate&$orderby=StartDateTime
```

**Field Mapping:**

| Rock Field | Payload Field | Notes |
|------------|---------------|-------|
| `Id` | `rockRegistrationId` | Indexed |
| `RegistrationTemplate.EventItemId` | `event` | Relationship to `events` |
| `Name` | `publicName` | |
| `IsActive` | `isActive` | |
| `StartDateTime` | `startDate` | |
| `EndDateTime` | `endDate` | |
| `MaxAttendees` | `capacity` | |
| (calculated) | `currentCount` | Count of registrations |

---

## Webhook Architecture

### Endpoint

```
POST /api/webhooks/rock-rms
```

### Flow

1. **Receive** — Rock RMS fires webhook on entity create, update, or delete
2. **Validate** — Verify webhook signature/API key
3. **Identify** — Determine entity type and operation (create/update/delete)
4. **Map** — Transform Rock entity to Payload collection format
5. **Upsert** — Use Payload REST API to create or update the record (match on `rockId` / `rockPersonId` / etc.)
6. **Delete** — If delete operation, soft-delete or remove from Payload
7. **Revalidate** — Trigger Next.js ISR revalidation for affected pages

### Webhook Payload Structure (expected from Rock)

```json
{
  "entityType": "Campus",
  "entityId": 2,
  "operation": "update",
  "timestamp": "2026-03-22T10:00:00Z"
}
```

### Error Handling

- Retry failed syncs up to 3 times with exponential backoff
- Log all webhook events (success and failure)
- Dead-letter queue for permanently failed syncs
- Alert on repeated failures

## Cron Sync

### Schedule

- **Frequency:** Every 15-30 minutes
- **Purpose:** Full reconciliation — catch any missed webhooks

### Process

1. Fetch all active records from Rock RMS for each entity type
2. Fetch all records from corresponding Payload collection
3. Diff comparison based on `rockId` and `lastModifiedDateTime`
4. **Create** records that exist in Rock but not in Payload
5. **Update** records where Rock `lastModifiedDateTime` > Payload `lastSyncedAt`
6. **Delete** (or deactivate) records that exist in Payload but not in Rock
7. Update `lastSyncedAt` timestamp on all synced records
8. Log sync results (created, updated, deleted, unchanged counts)

### Cron Configuration

```
*/15 * * * *  node scripts/sync-rock-to-payload.js
```

## Image Sync

### Rock Image URL Pattern

```
https://rock.ev.church/GetImage.ashx?Guid={imageGuid}&w={width}
```

### Responsive Widths

| Width | Usage |
|-------|-------|
| `310w` | Thumbnail, mobile small |
| `620w` | Card image, mobile |
| `1240w` | Desktop card, content |
| `1920w` | Hero, full-width backgrounds |

### Sync Process

1. On entity sync, detect image GUID fields (FeaturedImage, SlideImage1-4, SeriesImage, etc.)
2. Check if image GUID already exists in Payload media library (store Rock GUID as metadata)
3. If new or changed: download highest resolution (`1920w`) from Rock
4. Upload to Payload media library with metadata:
   - `rockImageGuid`: original GUID for future reference
   - `alt`: derived from entity name / context
5. Link uploaded media to the parent entity record
6. Payload handles responsive image generation via its built-in image processing

### Cache Strategy

- Store `rockImageGuid` on each Payload media record
- On sync, compare GUIDs — skip download if unchanged
- Periodically clean orphaned media (images no longer referenced)
