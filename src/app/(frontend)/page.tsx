import type { Metadata } from 'next'
import Link from 'next/link'
import { Button, ArrowRight } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Ev Church — A Community of Christ-Followers in Auckland',
  description:
    'Join Ev Church this Sunday at one of our three Auckland campuses — North, Central, or Unichurch. Everyone is welcome.',
  openGraph: {
    title: 'Ev Church — A Community of Christ-Followers in Auckland',
    description:
      'Join us this Sunday at one of our three Auckland campuses. Everyone is welcome.',
    url: 'https://ev.church',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ev Church — Auckland, New Zealand',
    description: 'A community of Christ-followers across Auckland.',
  },
  alternates: {
    canonical: 'https://ev.church',
  },
}

const campuses = [
  {
    name: 'North',
    time: 'Sunday 10:15 am',
    location: 'Albany, Auckland',
    href: '/campus/north',
  },
  {
    name: 'Central',
    time: 'Sunday 10:15 am',
    location: 'Auckland CBD',
    href: '/campus/central',
  },
  {
    name: 'Unichurch',
    time: 'Sunday 5:15 pm',
    location: 'University of Auckland',
    href: '/campus/unichurch',
  },
]

const nextSteps = [
  {
    title: 'Explaining Christianity',
    description:
      'A relaxed, no-pressure course exploring the basics of the Christian faith over several weeks.',
    href: '/explaining-christianity',
  },
  {
    title: 'Connect Groups',
    description:
      'Small groups that meet during the week — a place to build real friendships and grow together.',
    href: '/connect-groups',
  },
  {
    title: 'Newish Connect',
    description:
      'New to Ev? This short course helps you meet people and find your place in the community.',
    href: '/newish',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-black">
        {/* Atmospheric gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-dark-brown to-brand-black" />
          {/* Subtle warm glow */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-rich-red/8 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-deep-red/6 blur-[100px]" />
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        </div>

        <div className="relative mx-auto max-w-[80rem] px-5 py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p
              className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-light-red-2"
              style={{ animationDelay: '100ms' }}
            >
              Auckland, New Zealand
            </p>

            {/* Heading */}
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              A place to
              <br />
              <span className="italic text-light-red-3">belong</span>
            </h1>

            {/* Subheading */}
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              Ev Church is a community of Christ-followers across Auckland.
              Whether you&apos;re exploring faith for the first time or
              have been part of a church for years — you&apos;re welcome here.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '500ms' }}
            >
              <Button href="/visit" size="large">
                Plan Your Visit
              </Button>
              <Button
                href="/about"
                variant="text"
                className="text-warm-white/90 hover:text-white"
              >
                Learn about us
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade to warm-white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* ═══════════════ CAMPUSES ═══════════════ */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Three campuses
            </p>
            <h2 className="mt-3 text-h2 font-normal leading-heading text-brand-black">
              Join us this Sunday
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campuses.map((campus, i) => (
              <ScrollReveal key={campus.name} delay={i * 100}>
                <Link
                  href={campus.href}
                  className="group relative block overflow-hidden rounded-xl border border-warm-grey/60 bg-white p-8 transition-all duration-300 hover:border-rich-red/20 hover:shadow-lg hover:shadow-rich-red/5"
                >
                  {/* Accent bar */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-rich-red to-light-red-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 className="font-sans text-h4 font-bold text-brand-black">
                    {campus.name}
                  </h3>
                  <p className="mt-2 text-sm text-mid-grey">{campus.location}</p>
                  <p className="mt-4 text-[0.8125rem] font-semibold text-dark-grey">
                    {campus.time}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rich-red transition-colors group-hover:text-deep-red">
                    Learn more
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WELCOME MESSAGE ═══════════════ */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Welcome
            </p>
            <h2 className="mt-3 text-h2 font-normal leading-heading text-brand-black">
              Real community, real faith
            </h2>
            <p className="mt-6 text-lg leading-body-lg text-dark-grey">
              At Ev Church, we believe everyone has a place. We&apos;re a
              diverse, multigenerational community united by a shared love for
              Jesus and each other. Our Sunday services are relaxed, engaging,
              and designed to help you take your next step — wherever you are
              on your journey.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Discover our story
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ NEXT STEPS ═══════════════ */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                  Get connected
                </p>
                <h2 className="mt-3 text-h2 font-normal leading-heading text-brand-black">
                  Your next step
                </h2>
              </div>
              <Button href="/next-steps" variant="text" className="hidden sm:inline-flex">
                View all
                <ArrowRight />
              </Button>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {nextSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <Link
                  href={step.href}
                  className="group flex h-full flex-col rounded-xl border border-warm-grey/60 bg-white p-8 transition-all duration-300 hover:border-rich-red/20 hover:shadow-lg hover:shadow-rich-red/5"
                >
                  <h3 className="font-sans text-h4 font-bold text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {step.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-rich-red transition-colors group-hover:text-deep-red">
                    Find out more
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button href="/next-steps" variant="text">
              View all next steps
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="relative overflow-hidden bg-rich-red px-5 py-20 lg:px-8 lg:py-28">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        {/* Warm glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              Everyone is welcome
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              We&apos;d love to meet you. Come as you are — no dress code, no
              expectations. Just a warm community ready to welcome you.
            </p>
            <div className="mt-10">
              <Button
                href="/visit"
                size="large"
                className="bg-white text-rich-red shadow-lg hover:bg-warm-white hover:shadow-xl"
              >
                Find a campus near you
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
