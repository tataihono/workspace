import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Newish Connect | Ev Church Auckland',
  description:
    'Newish Connect is a relaxed gathering for anyone new or newish to Ev Church. Meet the team, hear the vision, and find your place.',
  openGraph: {
    title: 'Newish Connect | Ev Church Auckland',
    description:
      'A relaxed gathering for anyone new or newish to Ev Church. Meet the team and find your place.',
    url: 'https://ev.church/newish',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ev.church/newish',
  },
}

const whatHappens = [
  {
    step: '01',
    title: 'Grab a coffee',
    description:
      'Arrive and settle in with a great coffee and some food. It is relaxed, warm, and welcoming.',
  },
  {
    step: '02',
    title: 'Hear the story',
    description:
      'Our pastors share the heart and vision of Ev Church. Where we have come from, where we are going, and why it matters.',
  },
  {
    step: '03',
    title: 'Meet your people',
    description:
      'Connect with other newcomers and leaders in a casual setting. Ask questions, share your story, and start building friendships.',
  },
  {
    step: '04',
    title: 'Find your place',
    description:
      'Discover the many ways you can get involved. From serving teams to connect groups, there is a place for everyone.',
  },
]

export default function NewishPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/newish/newish-connect-banner.jpg"
            alt="People connecting at Newish Connect event"
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
              New to Ev?
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Newish{' '}
              <span className="italic text-light-red-3">Connect</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              Whether you have been coming for a few weeks or a few months,
              Newish Connect is the perfect way to get to know Ev Church
              and find where you belong.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Description */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                About Newish Connect
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Your next step at Ev
              </h2>
              <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-dark-grey">
                <p>
                  Newish Connect is a casual, fun gathering designed for anyone who
                  is new or relatively new to Ev Church. It is your chance to meet
                  the pastors, learn about the church's vision, and connect with
                  other people who are finding their place.
                </p>
                <p>
                  There is no commitment and no pressure. Just good conversation,
                  good food, and a chance to take your next step. Whether that is
                  joining a connect group, volunteering on a team, or simply getting
                  to know more people, Newish Connect will help you find your way.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Happens */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                What happens
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl font-serif text-h2 font-normal leading-heading text-brand-black">
                A simple, welcoming experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatHappens.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="rounded-xl border border-warm-grey/60 bg-warm-white p-8">
                  <span className="font-serif text-3xl font-normal text-rich-red/30">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-sans text-h4 font-bold text-brand-black">
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

      {/* Community Photos */}
      <section className="bg-warm-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <img
                src="/images/homepage/carousel-4e35f42e.jpg"
                alt="People connecting over coffee"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-89a3395d.jpg"
                alt="Community at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-8aae1142.jpg"
                alt="People laughing together"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-c842f7b4.jpg"
                alt="Warm community gathering"
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
              Join us
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Sign up for Newish Connect
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-dark-grey">
              The next Newish Connect gathering will be announced soon.
              Register below and we will save you a spot.
            </p>

            <div className="mt-10 rounded-xl border border-warm-grey/60 bg-warm-white p-8">
              <div className="space-y-4">
                <div className="text-left">
                  <label htmlFor="nc-name" className="block text-sm font-semibold text-dark-grey">Name</label>
                  <input
                    id="nc-name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md border border-warm-grey/60 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-mid-grey focus:border-rich-red focus:outline-none focus:ring-1 focus:ring-rich-red"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="nc-email" className="block text-sm font-semibold text-dark-grey">Email</label>
                  <input
                    id="nc-email"
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
              We would love to meet you
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              Newish Connect is the easiest way to take your next step at Ev.
              Come along and see what it is all about.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/visit"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-rich-red shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Plan your visit
              </a>
              <Button href="/contact" variant="text" className="text-white/90 hover:text-white">
                Get in touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
