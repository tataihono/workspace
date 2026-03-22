# ev.church Site Map

Full page hierarchy, navigation structure, and external links for the ev.church website.

## Page Inventory

| # | Page | URL | Page ID | Layout | Notes |
|---|------|-----|---------|--------|-------|
| 1 | Homepage | `/` | 816 | Homepage | Main landing page |
| 2 | Visit | `/visit` | 858 | FullWidthNarrow | What to expect on a visit |
| 3 | About | `/about` | — | FullWidth | Anchors: `#our-team`, `#what-we-believe` |
| 4 | Vision | `/vision` | — | FullWidth | Church vision and values |
| 5 | Contact | `/contact` | — | FullWidthNarrow | Contact form + campus details |
| 6 | Give | `/give` | — | Redirect | Redirects to give.ev.church (Fundable) |
| 7 | Explaining Christianity | `/explaining-christianity` | — | FullWidth | Alpha-style course signup |
| 8 | Newish Connect | `/newish` | — | FullWidth | Newcomer connection event |
| 9 | Connect Groups | `/connect-groups` | 862 | FullWidth | Small group listings |
| 10 | Kids | `/kids` | 879 | FullWidth | Children's ministry |
| 11 | Youth | `/youth` | — | FullWidth | Youth ministry |
| 12 | Campus North | `/campus/2` | 877 | FullWidth | North Shore campus |
| 13 | Campus Central | `/campus/3` | 877 | FullWidth | Central Auckland campus |
| 14 | Campus Unichurch | `/campus/4` | 877 | FullWidth | University campus |
| 15 | Easter | `/easter` | — | FullWidth | Seasonal event page |
| 16 | Privacy | `/privacy` | — | FullWidthNarrow | Privacy policy |
| 17 | Health & Safety | `/hs` | 860 | FullWidthNarrow | H&S policy |
| — | Login | `/login` | — | Auth | Auth page (not documented) |

> Note: Campus pages share PageID 877 — the same Rock page template renders different content based on the campus ID in the URL (`/campus/{id}`).

## Page Hierarchy

```
/ (Homepage)
├── /visit (Visit / What to Expect)
│   ├── /campus/2 (North Campus)
│   ├── /campus/3 (Central Campus)
│   └── /campus/4 (Unichurch Campus)
├── /about (About)
│   ├── #our-team (anchor)
│   └── #what-we-believe (anchor)
├── /vision (Our Vision)
├── /explaining-christianity (Explaining Christianity)
├── /newish (Newish Connect)
├── /connect-groups (Connect Groups)
├── /kids (Kids Ministry)
├── /youth (Youth Ministry)
├── /contact (Contact)
├── /give → give.ev.church (Give — external redirect)
├── /easter (Easter — seasonal)
├── /privacy (Privacy Policy)
├── /hs (Health & Safety)
└── /login (Login — auth, not documented)
```

## Navigation Structure

### Primary Navigation Bar

```
Home  |  Visit ▾  |  About  |  Our Vision  |  Next Steps ▾  |  Contact  |  Give
```

#### Visit Dropdown

| Label | URL |
|-------|-----|
| What to Expect | `/visit` |
| North | `/campus/2` |
| Central | `/campus/3` |
| Unichurch | `/campus/4` |

#### Next Steps Dropdown

| Label | URL |
|-------|-----|
| Explaining Christianity | `/explaining-christianity` |
| Newish Connect | `/newish` |
| Connect Groups | `/connect-groups` |
| Kids | `/kids` |
| Youth | `/youth` |

### Footer Navigation

#### About

| Label | URL |
|-------|-----|
| What We're About | `/about` |
| Ministry Team | `/about#our-team` |
| Beliefs | `/about#what-we-believe` |
| Health & Safety | `/hs` |

#### Next Steps

| Label | URL |
|-------|-----|
| Explaining Christianity | `/explaining-christianity` |
| Newish Connect | `/newish` |
| Connect Groups | `/connect-groups` |
| Youth | `/youth` |
| Kids | `/kids` |

#### Sections

| Label | URL |
|-------|-----|
| Church Online | `https://live.ev.church` |
| Resources | `https://resources.aucklandev.co.nz` |
| Contact | `/contact` |
| Give | `https://give.ev.church` |

#### Campuses

| Label | URL |
|-------|-----|
| North | `/campus/2` |
| Central | `/campus/3` |
| Unichurch | `/campus/4` |

## External Links

| Destination | URL | Purpose |
|-------------|-----|---------|
| Church Online | `https://live.ev.church` | Live-stream services |
| Resources | `https://resources.aucklandev.co.nz` | Sermon notes, study guides |
| Give | `https://give.ev.church` | Online giving (Fundable platform) |

## Social Media Links

| Platform | URL |
|----------|-----|
| Facebook | `https://www.facebook.com/ev.church` |
| Instagram | `https://www.instagram.com/ev.church` |
| YouTube | `https://www.youtube.com/@ev.church` |
| Spotify | Spotify podcast link |
| Apple Podcasts | Apple Podcasts link |

> Social links appear in the site footer and are consistent across all pages.
