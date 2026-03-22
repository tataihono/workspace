import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Connect Groups | Ev Church Auckland',
  description:
    'Connect Groups are the heart of community at Ev Church. Small gatherings in homes across Auckland where real friendships are formed.',
  openGraph: {
    title: 'Connect Groups | Ev Church Auckland',
    description:
      'Small gatherings in homes across Auckland where real friendships are formed. Find your Connect Group.',
    url: 'https://ev.church/connect-groups',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ev.church/connect-groups',
  },
}

const placeholderGroups = [
  {
    name: 'Young Adults',
    location: 'Various locations',
    day: 'Wednesday evenings',
    description: 'For people in their 20s and early 30s navigating work, relationships, and faith.',
  },
  {
    name: 'Couples',
    location: 'Various homes',
    day: 'Thursday evenings',
    description: 'For couples at any stage. Build friendships with others doing life together.',
  },
  {
    name: 'Women',
    location: 'Various locations',
    day: 'Tuesday mornings',
    description: 'A supportive space for women to connect, share, and grow in faith.',
  },
  {
    name: 'Men',
    location: 'Various locations',
    day: 'Wednesday evenings',
    description: 'Authentic conversations and genuine friendships for men of all ages.',
  },
  {
    name: 'Families',
    location: 'Various homes',
    day: 'Fortnightly Sundays',
    description: 'For families with kids. Faith, food, and fun for the whole household.',
  },
  {
    name: 'Mixed',
    location: 'Various homes',
    day: 'Various evenings',
    description: 'Open to anyone. A diverse group of people doing life and faith together.',
  },
]

export default function ConnectGroupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/connect-groups/connect-groups-banner.jpg"
            alt="People gathered in a Connect Group"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/60 to-brand-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[80rem] px-5 py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p
              className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-light-red-2"
              style={{ animationDelay: '100ms' }}
            >
              Find your people
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Connect{' '}
              <span className="italic text-light-red-3">Groups</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              Church is more than a Sunday service. Connect Groups are where
              real friendships form, faith deepens, and life is shared.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Description */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                Community
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                What are Connect Groups?
              </h2>
              <p className="mt-6 text-lg leading-body-lg text-dark-grey">
                Connect Groups are small gatherings of people who meet regularly
                in homes across Auckland. They are a place to build genuine
                friendships, discuss faith, support one another, and have fun.
                Whether you are new to church or have been coming for years,
                a Connect Group is the best way to find your people.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Group Cards */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Find a group
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Groups for every season of life
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderGroups.map((group, i) => (
              <ScrollReveal key={group.name} delay={i * 80}>
                <div className="h-full rounded-xl border border-warm-grey/60 bg-warm-white p-8 transition-all duration-300 hover:border-rich-red/20 hover:shadow-lg hover:shadow-rich-red/5">
                  <h3 className="font-sans text-h4 font-bold text-brand-black">
                    {group.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-rich-red">
                    {group.day}
                  </p>
                  <p className="mt-1 text-sm text-mid-grey">
                    {group.location}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {group.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="bg-warm-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <img
                src="/images/homepage/carousel-0c59a44d.jpg"
                alt="People sharing a meal together"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-5940ca71.jpg"
                alt="Friends laughing in community"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-2c75cbf3.jpg"
                alt="Connect Group gathering"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-d3b2d72e.jpg"
                alt="People in conversation"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-rich-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              Ready to find your group?
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              We will help you find a Connect Group that fits your life,
              your schedule, and your season. Get in touch and we will
              connect you with the right people.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-rich-red shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Join a group
              </a>
              <Button href="/visit" variant="text" className="text-white/90 hover:text-white">
                Plan a visit
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
