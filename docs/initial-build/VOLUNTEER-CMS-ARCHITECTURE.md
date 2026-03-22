# Website Architecture: Rock RMS + Payload CMS

## The Line

**Rock RMS** owns operational church data — the things staff already manage in Rock as part of running the church. This data flows automatically to the website.

**Payload CMS** owns website content — the things that only exist because the website exists. This is where volunteers edit pages, write posts, and manage announcements.

Volunteers interact with both systems, but for different reasons:
- They go to **Rock** to do church operations (create an event, update a campus service time, add a team member) — and the website reflects those changes automatically.
- They go to **Payload** to do website work (edit page text, post a sermon summary, set up an Easter banner) — with a visual editor, live preview, and version history.

---

## Architecture

```
Rock RMS (church operations)                    Payload CMS (website content)
  │                                               │
  ├── Campuses                                    ├── Pages (block editor)
  ├── Events & Registrations                      ├── Blog Posts
  ├── People & Groups (team, connect groups)      ├── Announcements
  ├── Sermon Series (Content Channel)             ├── Navigation
  ├── Form processing (workflows)                 ├── Site Settings
  └── Images (binary files)                       └── Media uploads
  │                                               │
  ↓  webhooks + cron sync                         │ (direct authoring)
  │                                               │
  └──────────────► Payload CMS ◄──────────────────┘
                      │
                      ↓  Payload Local API
                      │
                   Next.js
                      │
                      ↓
                   Browser
```

---

## What Syncs From Rock (Automatic)

Volunteers change these in Rock as part of normal church operations. The website updates automatically via webhook + cron sync.

| Data | Rock Source | What Changes on the Website |
|------|------------|---------------------------|
| **Campuses** | Campus entity | Campus pages, footer service times, campus cards everywhere, contact addresses, map embeds |
| **Events** | EventItem + Occurrences (Calendar 1) | Homepage events, campus event lists, Easter/seasonal event schedules |
| **Team members** | Groups #29482/#29485/#29486 | About page team grid (photos, names, roles) |
| **Sermon series** | Content Channel #4 | Homepage latest sermon section |
| **Connect groups** | Groups (connect group type) | Connect groups listing page |
| **Registrations** | RegistrationInstance | Event registration status (open/full/closed) |
| **Form submissions** | Workflows | Contact form, visitor registration, course signup — all processed by Rock |

**Volunteer experience:** They do their normal Rock work. The website just keeps up. No extra steps.

---

## What Volunteers Edit in Payload (Website Content)

These are things that exist purely for the website. Volunteers use Payload's visual editor to manage them.

### Pages (Block Editor)

Each page is built from a small set of blocks. Volunteers edit text and swap images within a fixed structure. They see a live preview of their changes before publishing.

**7 block types** (the only choices a volunteer sees):

| Block | What the Volunteer Does | What It Renders |
|-------|------------------------|-----------------|
| **Hero Banner** | Pick image, write heading + subtitle, add button(s) | Full-width banner at top of page |
| **Text Section** | Write heading + body text, optionally add an image | Standard content section |
| **Call to Action** | Write heading + short text, add buttons, pick colour preset | Coloured banner that draws attention |
| **Cards** | Pick a data source: "Show Campuses" or "Show Events" or "Show Team" | Auto-populated cards from synced Rock data — no manual card creation |
| **FAQ / Accordion** | Add question + answer pairs | Expandable Q&A section |
| **Image Gallery** | Upload images, drag to reorder | Grid of images |
| **Video** | Paste a YouTube URL | Responsive video embed |

**What volunteers can't do in the block editor:**
- Change page layout structure (developer task)
- Pick custom colours (only 3 presets: "Primary Red", "Light", "Dark")
- Change fonts or font sizes (design system handles this)
- Add custom CSS or HTML (not available)
- Build forms (forms are pre-built components placed by developers)

**Cards block is the bridge between Rock and Payload.** When a volunteer adds a Cards block and selects "Show Campuses," it pulls live data from the synced `campuses` collection. The volunteer doesn't create campus cards manually — they just say "put campus cards here" and the system populates them from Rock.

### Announcements

Scheduled homepage banners that auto-appear and auto-disappear.

| Field | Notes |
|-------|-------|
| Title | Banner heading |
| Subtitle | Supporting text |
| Body | Short description (1-2 sentences) |
| Image | Banner background |
| Link URL | Where the CTA button goes |
| Link Label | Button text |
| Start Date | When it appears |
| End Date | When it disappears |

**Volunteer workflow:** Announcements → New → fill in fields → set dates → Publish. Done. No developer. No stale Easter banner in July.

### Blog Posts

Weekly sermon summaries and articles (critical for SEO).

| Field | Notes |
|-------|-------|
| Title | Post title |
| Content | Rich text body (stripped-down editor: bold, italic, link, H2, H3, lists) |
| Featured Image | Hero image (defaults to sermon series artwork if empty) |
| Sermon Series | Dropdown picker (auto-populated from synced series) |
| Author | Dropdown picker (auto-populated from synced team members) |
| Video URL | YouTube link (optional) |
| Audio URL | Podcast/audio link (optional) |
| Publish Date | Defaults to today |

**Smart defaults that save time:** Today's date pre-filled, current sermon series pre-selected, slug auto-generated, SEO description auto-generated from first 160 characters.

**Volunteer workflow:** After Sunday → Blog Posts → New → pick preacher from dropdown → link to series → write summary or paste from preacher's notes → paste YouTube link → Publish. 15 minutes.

### Navigation

Main nav and footer nav structure, editable by the Content Lead role.

### Site Settings

Logo, social media links, contact email, mailing address, analytics ID. Editable by Content Lead role.

---

## Role-Based Access in Payload

| Role | Can Do | Cannot Do |
|------|--------|-----------|
| **Volunteer Editor** | Edit existing page content, create blog posts, manage announcements, upload images, preview changes | Create/delete pages, change navigation, access settings, edit synced Rock data |
| **Content Lead** | Everything above + manage navigation, site settings, create new pages from templates, publish/unpublish | Delete core pages, access API config, modify collection schemas |
| **Admin** (developer) | Everything + sync management, collection config | — |

---

## Fixed vs Flexible Pages

### Fixed Pages (data-driven, no block editing needed)

These pages are Next.js templates that automatically render synced Rock data. No volunteer editing in Payload — the content comes from Rock.

| Page | Template | Data Source |
|------|----------|-------------|
| `/campus/[slug]` | CampusTemplate | `campuses` (synced) + `events` filtered by campus |
| About → Team section | Part of AboutTemplate | `team-members` (synced) |
| Connect Groups listing | ConnectGroupsTemplate | `connect-groups` (synced) |

### Flexible Pages (block editor in Payload)

These pages use the block editor. Volunteers edit content within pre-set page templates.

| Page | Pre-loaded Blocks | What Volunteers Typically Edit |
|------|------------------|-------------------------------|
| Homepage | Hero + Announcement slot + Text (welcome) + Cards (events) + Cards (sermon) + Cards (campuses) + CTA | Welcome text, hero image, CTA labels |
| Visit | Hero + Text (what to expect) + Text (kids info) + Cards (campuses) + Form (pre-built) | Service description, kids ministry text |
| About → Mission | Text (mission) + Accordion (beliefs) | Mission text, belief statements (rare) |
| Kids | Hero + Text (intro) + Text (x3 programs) + FAQ | Program descriptions, FAQ answers |
| Youth | Hero + Text (intro) + Gallery (leaders) + Text (x2 programs) | Schedule info, leader photos |
| Explaining Christianity | Hero + Text (description) + Form (pre-built) | Course description, dates |
| Newish Connect | Hero + Text (description) + Form (pre-built) | Program description |
| Connect Groups | Hero + Text (description) + Cards (connect groups) + CTA | Description text |
| Easter (seasonal) | Hero + Text (services) + Text (story x3) + FAQ + CTA | Dates, service descriptions, FAQ |
| Vision | Hero + Text (vision) + Text (history) + Text (goals) + CTA | Milestone updates (rare) |
| Contact | Hero + Text (intro) + Form (pre-built) + Cards (campuses) | Intro text |
| Privacy | Text (full policy) | Legal updates (rare) |
| Health & Safety | CTA Banner + Text (overview) + Text (resources) | Contact info, form links |
| Blog list | Auto-generated from blog-posts collection | — |
| Blog post | Auto-rendered from individual blog-post | — |

---

## Page Templates with Smart Defaults

When a Content Lead creates a new page, they pick a template. The page starts pre-populated — not blank.

| Template | Pre-loaded Blocks | When to Use |
|----------|------------------|-------------|
| **Standard** | Hero + Text + CTA | General-purpose page |
| **Ministry** | Hero + Text (intro) + Text (x3 programs) + FAQ + CTA | New ministry/program |
| **Seasonal Event** | Hero + Text (services) + Text (story) + FAQ + CTA | Easter, Christmas, special events |
| **Simple Content** | Text | Policy pages, simple info |

The volunteer adds, removes, or reorders blocks within the template. The starting point is 80% done.

---

## Publishing Workflow

```
Volunteer edits in Payload
  → "Save Draft" (saved, not live)
  → Live Preview (sees the actual page)
  → "Publish" (goes live)
  → Payload triggers Next.js ISR revalidation
  → Page updates on live site in ~5-10 seconds

Rock data changes
  → Webhook fires to Payload
  → Payload syncs the changed entity
  → Triggers Next.js ISR revalidation
  → Page updates on live site in ~1-5 minutes
```

### Safety Features

- **Versions:** Every save creates a version. Volunteer can restore any previous version with one click.
- **Drafts:** Changes aren't live until published. Work-in-progress is safe.
- **Live Preview:** See the exact page before publishing.
- **Scheduled Publishing:** Set publish/unpublish dates on announcements and seasonal pages.
- **Approval workflow (optional):** Content Lead can require approval before volunteer edits go live.

---

## What Volunteers Never Have To Do

| Task | How It's Handled |
|------|-----------------|
| Update event listings | Auto-synced from Rock |
| Update campus info / service times | Auto-synced from Rock |
| Update team photos / roles | Auto-synced from Rock |
| Update sermon series | Auto-synced from Rock |
| Update connect group listings | Auto-synced from Rock |
| Handle form submissions | Rock workflows process everything |
| Optimise images | Next.js Image component, automatic |
| Generate SEO sitemaps | Next.js auto-generates |
| Generate structured data | Auto-generated from collection data |
| Deploy the site | Auto-deploy on publish via ISR |
| Manage responsive design | Handled by component design system |
| Manage SSL / hosting | Infrastructure, not their concern |

---

## Onboarding

### Payload Quick Start (built into the admin dashboard)

```
Welcome to the Ev Church Website Admin!

📝 Edit a page:
   Pages → click the page → edit blocks → Save Draft → Preview → Publish

📢 Add a homepage announcement:
   Announcements → New → fill in details → set start/end dates → Publish

✍️ Write a sermon summary:
   Blog Posts → New → select preacher & series → write summary → Publish

💡 Tips:
   - Use "Save Draft" first, then Preview before publishing
   - You can't break the site — drafts aren't live until you Publish
   - Events, campuses, and team info update automatically from Rock RMS
   - Click "Versions" to undo any mistake
```

### Dashboard Health Widget

```
🟢 Homepage announcement: "Easter at Ev Church" (active until Apr 7)
🟢 Last Rock sync: 8 minutes ago
🟢 Upcoming events: 4 events in next 4 weeks
🟡 Blog: Last post 9 days ago (aim for weekly)
🟢 All pages: 17 published, 0 drafts
```

### Training: Two 30-minute sessions

**Session 1: Payload basics**
- Tour the dashboard
- Edit a page together (change text, swap image, preview, publish)
- Create a blog post
- Create an announcement with dates

**Session 2: Understanding the Rock → website connection**
- Change a campus service time in Rock → see it update on the site
- Create an event in Rock → see it appear on the campus page
- Add a team member in Rock → see them on the About page

---

## Summary

| Question | Answer |
|----------|--------|
| Where does operational church data live? | Rock RMS (campuses, events, people, groups, sermons, registrations) |
| Where does website content live? | Payload CMS (page text, images, announcements, blog posts, navigation) |
| What syncs automatically? | All Rock operational data → Payload, via webhooks + cron |
| What do volunteers edit manually? | Page content, blog posts, and announcements in Payload |
| Do volunteers need to use Rock differently? | No — they do the same Rock work as always. The website just picks it up. |
| Can volunteers break the site? | No — drafts, versions, live preview, constrained block editor, role-based access |
| How fast do changes appear? | Payload edits: ~5-10 seconds. Rock data changes: ~1-5 minutes. |
| What does a developer do? | Builds new page templates, updates design, adds new block types. Not daily content. |
