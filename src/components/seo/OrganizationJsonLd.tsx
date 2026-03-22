export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Ev Church',
    alternateName: 'Auckland Evangelical Church',
    url: 'https://ev.church',
    logo: 'https://ev.church/logo.png',
    description:
      'Ev Church is a community of Christ-followers across Auckland, New Zealand with three campuses: North, Central, and Unichurch.',
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Ev Church North',
        addressLocality: 'Albany',
        addressRegion: 'Auckland',
        addressCountry: 'NZ',
      },
      {
        '@type': 'PostalAddress',
        name: 'Ev Church Central',
        addressLocality: 'Auckland CBD',
        addressRegion: 'Auckland',
        addressCountry: 'NZ',
      },
    ],
    sameAs: [
      'https://www.facebook.com/ev.church',
      'https://www.instagram.com/ev.church',
      'https://www.youtube.com/@ev.church',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
