import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Visit | Ev Church Auckland',
  description:
    'Plan your first visit to Ev Church. Relaxed services, welcoming community, amazing kids program, and great coffee. Three campuses across Auckland.',
  openGraph: {
    title: 'Visit | Ev Church Auckland',
    description:
      'Plan your first visit to Ev Church. Relaxed services, welcoming community, and three campuses across Auckland.',
    url: 'https://ev.church/visit',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Ev Church',
    description: 'Plan your first visit to Ev Church in Auckland.',
  },
  alternates: {
    canonical: 'https://ev.church/visit',
  },
}

const expectations = [
  {
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Relaxed services',
    description:
      'No dress code. No pressure. Our services run about 75 minutes with live music, a practical message, and time to connect.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Kids program',
    description:
      'Ev Kids runs during every service for ages 0 to 12. Safe, fun, and age-appropriate. Your kids will love it.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    title: 'Great coffee',
    description:
      'Arrive a few minutes early and grab a complimentary coffee. Our cafe is a great place to meet people before the service.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Friendly community',
    description:
      'Our welcome team will help you find a seat, point you to kids check-in, and answer any questions. You will feel at home.',
  },
]

const campuses = [
  {
    name: 'North',
    time: 'Sunday 10:15 am',
    location: 'Albany, Auckland',
    address: '10 Antares Place, Rosedale, Auckland 0632',
    image: '/images/homepage/carousel-70ac2785.jpg',
    href: '/campus/north',
  },
  {
    name: 'Central',
    time: 'Sunday 10:15 am',
    location: 'Auckland CBD',
    address: '15 Cross Street, Auckland CBD 1010',
    image: '/images/campus-central/photo-1.jpg',
    href: '/campus/central',
  },
  {
    name: 'Unichurch',
    time: 'Sunday 5:15 pm',
    location: 'University of Auckland',
    address: 'University of Auckland, 24 Princes Street, Auckland 1010',
    image: '/images/campus-unichurch/photo-1.jpg',
    href: '/campus/unichurch',
  },
]

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/homepage/carousel-146c7f7e.jpg"
            alt="Ev Church community gathering together"
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
              Plan your visit
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Come as
              <br />
              <span className="italic text-light-red-3">you are</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              Whether it is your first time at church or you have been going for years,
              you are welcome at Ev. We would love to meet you this Sunday.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* What to Expect */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                What to expect
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl font-serif text-h2 font-normal leading-heading text-brand-black">
                Your first Sunday at Ev
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-body-lg text-dark-grey">
                We want you to feel comfortable from the moment you walk in.
                Here is what a typical Sunday looks like.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-xl border border-warm-grey/60 bg-white p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-light-red-3/30">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-sans text-h4 font-bold text-brand-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photos Strip */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <img
                src="/images/homepage/carousel-4e35f42e.jpg"
                alt="People connecting at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-5e2f5c9a.jpg"
                alt="Worship at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-2c75cbf3.jpg"
                alt="Community life at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-d3b2d72e.jpg"
                alt="People laughing together at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Three campuses
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Find a campus near you
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {campuses.map((campus, i) => (
              <ScrollReveal key={campus.name} delay={i * 100}>
                <Link
                  href={campus.href}
                  className="group block overflow-hidden rounded-xl border border-warm-grey/60 bg-white transition-all duration-300 hover:border-rich-red/20 hover:shadow-lg hover:shadow-rich-red/5"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={campus.image}
                      alt={`Ev Church ${campus.name} campus`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-sans text-h4 font-bold text-brand-black">
                      {campus.name}
                    </h3>
                    <p className="mt-1 text-sm text-mid-grey">{campus.location}</p>
                    <p className="mt-4 text-[0.8125rem] font-semibold text-dark-grey">
                      {campus.time}
                    </p>
                    <p className="mt-1 text-sm text-mid-grey">{campus.address}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rich-red transition-colors group-hover:text-deep-red">
                      View campus details
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
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Visit CTA */}
      <section className="relative overflow-hidden bg-rich-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              We would love to meet you
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              Have questions before your visit? Get in touch and we will help you
              with anything you need. No question is too small.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-rich-red shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Get in touch
              </a>
              <Button href="/about" variant="text" className="text-white/90 hover:text-white">
                Learn about us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
