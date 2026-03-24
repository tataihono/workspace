import type { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '@/lib/payload'
import { CACHE_TAGS } from '@/lib/cache-tags'
import { RenderBlocks } from '@/components/blocks/RenderBlocks'

async function getHomePage() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    depth: 1,
    limit: 1,
  })

  return result.docs[0] ?? null
}

const getCachedHomePage = unstable_cache(getHomePage, ['page', 'home'], {
  tags: [CACHE_TAGS.pages],
  revalidate: 60,
})

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCachedHomePage()

  if (!page) {
    return {
      title: 'Church in Auckland | Ev Church NZ | Sunday Services & Community',
    }
  }

  const seo = page.seo as
    | { metaTitle?: string | null; metaDescription?: string | null }
    | undefined

  const title =
    seo?.metaTitle ??
    'Church in Auckland | Ev Church NZ | Sunday Services & Community'
  const description =
    seo?.metaDescription ??
    'Looking for a church in Auckland? Ev Church is a community of Christ-followers meeting across Tāmaki Makaurau. Join us this Sunday or explore faith with us.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://ev.church',
      siteName: 'Ev Church',
      locale: 'en_NZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://ev.church',
    },
  }
}

export default async function HomePage() {
  const page = await getCachedHomePage()

  if (!page) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-mid-grey">Homepage content is being set up in the CMS.</p>
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blocks = (page.layout ?? []) as any[]

  return <RenderBlocks blocks={blocks} />
}
