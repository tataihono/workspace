# Payload CMS Collections

Payload CMS serves two roles:

1. **Sync cache** for Rock RMS operational data (campuses, events, team, sermons, groups, registrations)
2. **Content authoring** for website-specific content (pages, blog posts, announcements, navigation, site settings)

Synced collections are read-only mirrors of Rock. Native collections are authored directly in Payload by volunteers.

---

## Synced Collections

### `campuses`

| Field | Type | Rock Source |
|-------|------|------------|
| `name` | text | Campus.Name |
| `slug` | text | Auto-generated from name |
| `rockId` | number (unique, indexed) | Campus.Id |
| `address.street` | text | Campus.Location.Street1 |
| `address.city` | text | Campus.Location.City |
| `address.postalCode` | text | Campus.Location.PostalCode |
| `geoPoint` | point | Campus.Location.GeoPoint |
| `googlePlaceId` | text | Campus attribute or Location.GooglePlaceId |
| `serviceTimes` | text | Campus.ServiceTimes |
| `description` | richText | Campus.Description |
| `featuredImage` | upload | Campus attribute: FeaturedImage |
| `slideImages` | array of uploads (max 4) | Campus attributes: SlideImage1-4 |
| `establishmentYear` | number | Campus attribute: EstablishmentYear |
| `isActive` | boolean | Campus.IsActive |
| `order` | number | Campus.Order |
| `lastSyncedAt` | date | Sync timestamp |

---

### `team-members`

| Field | Type | Rock Source |
|-------|------|------------|
| `fullName` | text | Person.FullName |
| `slug` | text | Auto-generated |
| `rockPersonId` | number (indexed) | Person.Id |
| `role` | text | GroupMember.GroupRole.Name |
| `email` | email | Person.Email |
| `photo` | upload | Person.PhotoUrl |
| `teamGroup` | select (staff/leadership/apprentices) | Source Group ID (29482/29485/29486) |
| `order` | number | GroupMember.GroupOrder |
| `isActive` | boolean | GroupMember.GroupMemberStatus == Active |
| `lastSyncedAt` | date | Sync timestamp |

---

### `events`

| Field | Type | Rock Source |
|-------|------|------------|
| `title` | text | EventItem.Name |
| `slug` | text | Auto-generated |
| `rockEventId` | number (indexed) | EventItem.Id |
| `summary` | richText | EventItem.Summary |
| `image` | upload | EventItem.PhotoUrl |
| `schedule` | json | Schedule.iCalendarContent (parsed) |
| `campus` | relationship → campuses | EventItemOccurrence.CampusId |
| `location.name` | text | EventItemOccurrence named location |
| `location.address` | text | Attribute: NamedLocation |
| `contactPerson.name` | text | ContactPersonAlias.Person.FullName |
| `contactPerson.email` | email | ContactPersonAlias.Person.Email |
| `contactPerson.phone` | text | ContactPersonAlias.Person.PhoneNumbers[0] |
| `registrationUrl` | text | Derived from FluroFormId attribute |
| `registrationStatus` | select | Derived from RegistrationInstance state |
| `registrationCapacity` | number | RegistrationInstance.MaxAttendees |
| `startDate` | date | NextStartDateTime |
| `endDate` | date | Schedule.EffectiveEndDate |
| `lastSyncedAt` | date | Sync timestamp |

---

### `sermon-series`

| Field | Type | Rock Source |
|-------|------|------------|
| `title` | text | ContentChannelItem.Title |
| `slug` | text | Auto-generated |
| `rockContentItemId` | number (indexed) | ContentChannelItem.Id |
| `content` | richText | ContentChannelItem.Content |
| `seriesImage` | upload | Attribute: SeriesImage |
| `startDate` | date | ContentChannelItem.StartDateTime |
| `resourceUrl` | text | Derived (link to resources site) |
| `isActive` | boolean | Status == Approved |
| `lastSyncedAt` | date | Sync timestamp |

---

### `connect-groups`

| Field | Type | Rock Source |
|-------|------|------------|
| `name` | text | Group.Name |
| `slug` | text | Auto-generated |
| `rockGroupId` | number (indexed) | Group.Id |
| `description` | richText | Group.Description |
| `leaders` | array (name, photo, email) | GroupMembers where IsLeader |
| `location.name` | text | GroupLocation name |
| `location.address` | text | GroupLocation address |
| `image` | upload | Group attribute: Image |
| `capacity` | number | Group.GroupCapacity |
| `campus` | relationship → campuses | Group.CampusId |
| `isActive` | boolean | Group.IsActive |
| `lastSyncedAt` | date | Sync timestamp |

---

### `registrations`

| Field | Type | Rock Source |
|-------|------|------------|
| `rockRegistrationId` | number (indexed) | RegistrationInstance.Id |
| `event` | relationship → events | Derived from RegistrationTemplate.EventItemId |
| `publicName` | text | RegistrationInstance.Name |
| `isActive` | boolean | RegistrationInstance.IsActive |
| `startDate` | date | RegistrationInstance.StartDateTime |
| `endDate` | date | RegistrationInstance.EndDateTime |
| `capacity` | number | RegistrationInstance.MaxAttendees |
| `currentCount` | number | Calculated from registration count |
| `lastSyncedAt` | date | Sync timestamp |

---

---

## Native Collections (Authored in Payload)

These are created and edited by volunteers directly in Payload CMS.

---

### `pages`

CMS-managed pages with a block-based visual editor.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | text | yes | Page title (also used as H1) |
| `slug` | text (unique) | yes | URL slug |
| `metaTitle` | text | — | SEO title override (defaults to title) |
| `metaDescription` | textarea | — | SEO meta description |
| `ogImage` | upload | — | Open Graph share image |
| `blocks` | blocks | — | Visual content blocks (see block types below) |
| `status` | select (draft/published) | — | Draft/Published |
| `publishedAt` | date | — | Publish date |

**Block Types:**

| Block | Fields | Purpose |
|-------|--------|---------|
| **HeroBlock** | heading, subheading, backgroundImage, ctaButtons[] (label, url, variant) | Full-width hero banner |
| **ContentBlock** | heading, richText, alignment | Text section with optional heading |
| **CardGridBlock** | heading, dataSource (select: campuses/events/team), campusFilter (optional), layout (2col/3col) | Auto-populated cards from synced Rock data |
| **CTABlock** | heading, text, buttons[], colourPreset (primary/light/dark) | Call-to-action banner |
| **AccordionBlock** | heading, items[] (title, content) | Expandable FAQ/accordion |
| **ImageGalleryBlock** | heading, images[] (image, caption) | Image grid |
| **VideoBlock** | heading, videoUrl | YouTube/Vimeo embed |

---

### `announcements`

Scheduled homepage banners with automatic show/hide.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | text | yes | Banner heading |
| `subtitle` | text | — | Supporting text |
| `body` | textarea | — | Short description |
| `image` | upload | — | Banner background |
| `linkUrl` | text | — | CTA destination |
| `linkLabel` | text | — | CTA button text |
| `startDate` | date | yes | When banner appears |
| `endDate` | date | yes | When banner disappears |
| `isActive` | boolean | — | Manual on/off toggle |

---

### `blog-posts`

Sermon summaries and articles for SEO and discipleship.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | text | yes | Post title |
| `slug` | text (unique) | — | Auto-generated from title |
| `content` | richText | yes | Post body |
| `summary` | textarea | — | Excerpt for cards (auto-generated if empty) |
| `featuredImage` | upload | — | Hero image (defaults to series image) |
| `author` | relationship → team-members | — | Dropdown from synced team |
| `sermonSeries` | relationship → sermon-series | — | Dropdown from synced series |
| `campus` | relationship → campuses | — | Optional campus filter |
| `videoUrl` | text | — | YouTube link |
| `audioUrl` | text | — | Podcast/audio link |
| `tags` | array of text | — | Topic tags |
| `publishDate` | date | — | Defaults to today |
| `status` | select (draft/published) | — | Draft/Published |

---

### `ministries`

Ministry pages (Kids, Youth, etc.).

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `name` | text | yes | Ministry name |
| `slug` | text (unique) | — | URL slug |
| `description` | richText | — | Overview |
| `heroImage` | upload | — | Banner image |
| `programs` | array | — | Individual programs |
| `programs.*.name` | text | — | Program name |
| `programs.*.ageGroup` | text | — | e.g. "Ages 1-4" |
| `programs.*.description` | richText | — | Details |
| `programs.*.schedule` | text | — | When it runs |
| `faq` | array | — | FAQ items |
| `faq.*.question` | text | — | Question |
| `faq.*.answer` | richText | — | Answer |
| `teamPhotos` | array of uploads | — | Activity/team photos |
| `isActive` | boolean | — | Active toggle |

---

## Globals (Authored in Payload)

### `site-settings`

| Field | Type | Notes |
|-------|------|-------|
| `siteName` | text | e.g. "Ev Church" |
| `logo` | upload | Site logo |
| `favicon` | upload | Favicon |
| `contactEmail` | email | General contact |
| `contactPhone` | text | General phone |
| `mailingAddress` | group (org, poBox, city, postalCode) | Postal address |
| `socialLinks` | array (platform select, url) | Facebook, Instagram, YouTube, Spotify, Apple Podcasts |
| `analyticsId` | text | Google Analytics ID |

### `navigation`

| Field | Type | Notes |
|-------|------|-------|
| `mainNav` | array (label, url, children[]) | Primary navigation with dropdowns |
| `footerNav` | array (heading, links[]) | Footer link columns |

---

## Payload Admin Access

| Role | Can Do | Cannot Do |
|------|--------|-----------|
| **Volunteer Editor** | Edit page content, create blog posts, manage announcements, upload images, preview | Create/delete pages, change nav, edit synced data, access settings |
| **Content Lead** | Above + manage navigation, site settings, create pages from templates, publish/unpublish | Delete core pages, modify schemas, access API keys |
| **Admin** | Everything + sync monitoring, manual resync | — |
