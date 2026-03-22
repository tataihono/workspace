import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Explaining Christianity | Ev Church Auckland',
  description:
    'A relaxed, no-pressure course exploring the basics of the Christian faith. Ask questions, hear stories, and discover what Christianity is really about.',
  openGraph: {
    title: 'Explaining Christianity | Ev Church Auckland',
    description:
      'A relaxed course exploring the basics of the Christian faith. Ask questions and discover what Christianity is really about.',
    url: 'https://ev.church/explaining-christianity',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ev.church/explaining-christianity',
  },
}

const expectations = [
  {
    title: 'Relaxed atmosphere',
    description:
      'No awkward moments, no pressure. Just honest conversations over good food and coffee.',
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: 'Real questions welcome',
    description:
      'There are no silly questions. This is a space to ask anything you have ever wondered about faith.',
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Short and flexible',
    description:
      'The course runs over several weeks with short sessions. No commitment to keep coming if it is not for you.',
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Bring a friend',
    description:
      'Everything is better with a mate. You are welcome to bring someone along for the journey.',
    icon: (
      <svg className="h-8 w-8 text-rich-red" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

export default function ExplainingChristianityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/explaining-christianity/explaining-christianity-banner.jpg"
            alt="People gathered for Explaining Christianity course"
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
              Explore the faith
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Explaining{' '}
              <span className="italic text-light-red-3">Christianity</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              A relaxed, no-pressure course for anyone curious about the
              Christian faith. Ask your questions. Hear real stories.
              Decide for yourself.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Course Description */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                About the course
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                What is Explaining Christianity?
              </h2>
              <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-dark-grey">
                <p>
                  Explaining Christianity is a short course designed for people who
                  want to explore the Christian faith in an honest, open environment.
                  Whether you have never been to church, you grew up going but drifted
                  away, or you are simply curious, this course is for you.
                </p>
                <p>
                  Over several weeks, we look at the big questions of life and what the
                  Bible has to say about them. Each session includes a short talk,
                  a chance to discuss in small groups, and plenty of time for your
                  questions.
                </p>
                <p>
                  There is no pressure to believe anything, sign anything, or come back
                  the following week. This is simply a space for honest exploration.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                What to expect
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl font-serif text-h2 font-normal leading-heading text-brand-black">
                No pressure, just good conversation
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-xl border border-warm-grey/60 bg-warm-white p-8 text-center">
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

      {/* Community Photo */}
      <section className="bg-warm-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <img
                src="/images/homepage/carousel-5e2f5c9a.jpg"
                alt="People connecting over conversation"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-9a8d8943.jpg"
                alt="Community at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-c645786c.jpg"
                alt="People enjoying time together"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-db9ac570.jpg"
                alt="Small group discussion"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Signup Placeholder */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Register your interest
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Sign up for the next course
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-dark-grey">
              The next Explaining Christianity course will be announced soon.
              Register your interest and we will let you know when dates are confirmed.
            </p>

            {/* Placeholder form */}
            <div className="mt-10 rounded-xl border border-warm-grey/60 bg-warm-white p-8">
              <div className="space-y-4">
                <div className="text-left">
                  <label htmlFor="ec-name" className="block text-sm font-semibold text-dark-grey">Name</label>
                  <input
                    id="ec-name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md border border-warm-grey/60 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-mid-grey focus:border-rich-red focus:outline-none focus:ring-1 focus:ring-rich-red"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="ec-email" className="block text-sm font-semibold text-dark-grey">Email</label>
                  <input
                    id="ec-email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 w-full rounded-md border border-warm-grey/60 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-mid-grey focus:border-rich-red focus:outline-none focus:ring-1 focus:ring-rich-red"
                  />
                </div>
                <button
                  type="button"
                  className="mt-2 w-full rounded-md bg-rich-red px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-deep-red hover:shadow-md active:scale-[0.97]"
                >
                  Register interest
                </button>
              </div>
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
              Curious? That is a great start.
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              You do not need to have all the answers. You just need to be willing
              to ask the questions. We would love to explore them with you.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-rich-red shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Ask us anything
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
