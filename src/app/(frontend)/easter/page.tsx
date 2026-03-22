import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Easter at Ev Church | Ev Church Auckland',
  description:
    'Celebrate Easter at Ev Church. Special services across all three Auckland campuses with live music, an inspiring message, and activities for the whole family.',
  openGraph: {
    title: 'Easter at Ev Church | Ev Church Auckland',
    description:
      'Celebrate Easter at Ev Church. Special services across all three Auckland campuses.',
    url: 'https://ev.church/easter',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ev.church/easter',
  },
}

const services = [
  {
    campus: 'North',
    location: '10 Antares Place, Rosedale, Auckland 0632',
    times: [
      { day: 'Good Friday', time: '10:00 am' },
      { day: 'Easter Sunday', time: '10:15 am' },
    ],
  },
  {
    campus: 'Central',
    location: '15 Cross Street, Auckland CBD 1010',
    times: [
      { day: 'Good Friday', time: '10:00 am' },
      { day: 'Easter Sunday', time: '10:15 am' },
    ],
  },
  {
    campus: 'Unichurch',
    location: 'University of Auckland, 24 Princes Street, Auckland 1010',
    times: [
      { day: 'Easter Sunday', time: '5:15 pm' },
    ],
  },
]

const faqs = [
  {
    question: 'Do I need to register for Easter services?',
    answer:
      'No registration is needed. Just show up and we will have a seat for you. Arrive a little early to grab a coffee and settle in.',
  },
  {
    question: 'Is there a kids program on Easter?',
    answer:
      'Yes. Ev Kids runs during all Easter services for children aged 0 to 12. It is a special Easter edition with fun activities and crafts.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Whatever you are comfortable in. There is no dress code at Ev Church. Come as you are.',
  },
  {
    question: 'How long are the services?',
    answer:
      'Easter services run approximately 75 to 90 minutes. They include live worship music, a message, and time for reflection.',
  },
  {
    question: 'Can I invite friends and family?',
    answer:
      'Absolutely. Easter is one of the best times to invite someone to church. Everyone is welcome.',
  },
]

export default function EasterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/homepage/carousel-146c7f7e.jpg"
            alt="Ev Church community celebrating together"
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
              Join us this Easter
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Easter at{' '}
              <span className="italic text-light-red-3">Ev</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              Easter is the heart of our faith. Join us for special services
              filled with live music, an inspiring message, and a warm
              community ready to welcome you.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* The Easter Story */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                  The Easter story
                </p>
                <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                  A story of hope, love, and new beginnings
                </h2>
                <div className="mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-dark-grey">
                  <p>
                    Easter is more than a long weekend. It is the story that changed
                    everything. Over 2,000 years ago, Jesus gave his life so that
                    we could have a fresh start, a restored relationship with God,
                    and a hope that reaches beyond this life.
                  </p>
                  <p>
                    Good Friday marks the day Jesus was crucified. It is a day of
                    reflection and gratitude. Easter Sunday celebrates the
                    resurrection, the moment death was defeated and new life
                    was made possible for everyone.
                  </p>
                  <p>
                    Whether this is a story you know well or one you are hearing
                    for the first time, we would love for you to experience
                    Easter with us.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/images/homepage/carousel-70ac2785.jpg"
                  alt="Community worshipping together"
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                />
                <img
                  src="/images/homepage/carousel-5e2f5c9a.jpg"
                  alt="People gathered in celebration"
                  className="mt-8 aspect-[3/4] w-full rounded-xl object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <blockquote>
              <p className="font-serif text-h2 font-normal leading-heading text-brand-black italic">
                &ldquo;I am the resurrection and the life. The one who believes in me
                will live, even though they die.&rdquo;
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-rich-red">
                John 11:25
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Schedule */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                Service times
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Easter services across Auckland
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-body-lg text-dark-grey">
                Join us at any of our three campuses for a special Easter experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {services.map((campus, i) => (
              <ScrollReveal key={campus.campus} delay={i * 100}>
                <div className="h-full rounded-xl border border-warm-grey/60 bg-white p-8 text-center transition-all duration-300 hover:border-rich-red/20 hover:shadow-lg hover:shadow-rich-red/5">
                  <h3 className="font-sans text-h3 font-bold text-brand-black">
                    {campus.campus}
                  </h3>
                  <p className="mt-2 text-sm text-mid-grey">
                    {campus.location}
                  </p>
                  <div className="mt-6 space-y-3">
                    {campus.times.map((service) => (
                      <div
                        key={`${campus.campus}-${service.day}`}
                        className="rounded-lg bg-warm-white px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-brand-black">
                          {service.day}
                        </p>
                        <p className="mt-0.5 text-sm text-rich-red font-semibold">
                          {service.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photo Strip */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <img
                src="/images/homepage/carousel-4e35f42e.jpg"
                alt="People celebrating together"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-9a8d8943.jpg"
                alt="Families at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-aea4638f.jpg"
                alt="Community enjoying Easter"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-c645786c.jpg"
                alt="People worshipping on Easter"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                Questions
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Frequently asked questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 80}>
                <details className="group rounded-xl border border-warm-grey/60 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between px-8 py-6 text-left font-sans text-[1.0625rem] font-semibold text-brand-black transition-colors hover:text-rich-red">
                    {faq.question}
                    <svg
                      className="ml-4 h-5 w-5 shrink-0 text-mid-grey transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-8 pb-6 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {faq.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-rich-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              We would love to see you this Easter
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              Easter is one of the best times to visit Ev Church. Bring your
              family, bring a friend, and experience the hope of Easter with us.
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
