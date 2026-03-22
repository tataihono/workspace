import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ev.church'),
  title: {
    default: 'Ev Church — Auckland, New Zealand',
    template: '%s | Ev Church',
  },
  description:
    'Ev Church is a community of Christ-followers across Auckland, New Zealand. Join us this Sunday at North, Central, or Unichurch.',
  keywords: [
    'Ev Church',
    'Auckland church',
    'New Zealand church',
    'Christian community Auckland',
    'Sunday service Auckland',
    'North Shore church',
    'Auckland CBD church',
    'university church Auckland',
  ],
  authors: [{ name: 'Ev Church' }],
  creator: 'Ev Church',
  publisher: 'Ev Church',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://ev.church',
    siteName: 'Ev Church',
    title: 'Ev Church — Auckland, New Zealand',
    description:
      'A community of Christ-followers across Auckland. Everyone is welcome.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ev Church — Auckland, New Zealand',
    description:
      'A community of Christ-followers across Auckland. Everyone is welcome.',
  },
  other: {
    'google-site-verification': '',
  },
}

export const viewport: Viewport = {
  themeColor: '#E22A30',
  width: 'device-width',
  initialScale: 1,
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts preconnect for faster font loading */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <OrganizationJsonLd />
      </head>
      <body className="bg-warm-white font-sans text-brand-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
