import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Ev Kids | Ev Church Auckland',
  description:
    'Ev Kids provides a safe, fun, and engaging environment for children aged 0 to 12 every Sunday across all Ev Church campuses.',
  openGraph: {
    title: 'Ev Kids | Ev Church Auckland',
    description:
      'Safe, fun, and age-appropriate programs for kids aged 0 to 12 every Sunday at Ev Church.',
    url: 'https://ev.church/kids',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ev.church/kids',
  },
}

const programs = [
  {
    name: 'Creche',
    ages: '0 to 2 years',
    description:
      'A gentle, nurturing space for babies and toddlers. Our trained volunteers provide a safe and caring environment so parents can enjoy the service with peace of mind.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: 'Explorers',
    ages: '3 to 5 years',
    description:
      'Creative, play-based learning that introduces preschoolers to Bible stories through songs, crafts, and interactive activities. Every session is designed to be fun and memorable.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: 'Adventurers',
    ages: '6 to 12 years',
    description:
      'High-energy, interactive sessions with games, worship, small groups, and Bible teaching. Adventurers is where kids build friendships and grow in their faith.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'Is Ev Kids available at every service?',
    answer:
      'Yes. Ev Kids runs during every Sunday service at all three campuses: North, Central, and Unichurch.',
  },
  {
    question: 'How do I check in my child?',
    answer:
      'When you arrive, our welcome team will direct you to the kids check-in area. You will receive a tag that matches your child for a secure pick-up after the service.',
  },
  {
    question: 'What if my child has special needs or allergies?',
    answer:
      'We want every child to have a great experience. Please let our team know at check-in about any special needs, allergies, or requirements, and we will do our best to accommodate them.',
  },
  {
    question: 'Can I stay with my child?',
    answer:
      'Absolutely. Parents are welcome to stay with their children, especially in the Creche. We want you to feel comfortable and confident in the care your child receives.',
  },
  {
    question: 'Are your volunteers police vetted?',
    answer:
      'Yes. All Ev Kids volunteers are police vetted and trained in child safety. The wellbeing of your children is our highest priority.',
  },
]

export default function KidsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/kids/ev-kids-banner.png"
            alt="Children enjoying Ev Kids program"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/60 to-brand-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[80rem] px-5 py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p
              className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-[#0096C3]"
              style={{ animationDelay: '100ms' }}
            >
              Ages 0 to 12
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Ev <span className="italic text-[#0096C3]">Kids</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              A safe, fun, and engaging place where your children can learn,
              play, and grow. Ev Kids runs every Sunday during all services.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Intro */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0096C3]">
                What is Ev Kids?
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Where kids discover faith, friendship, and fun
              </h2>
              <p className="mt-6 text-lg leading-body-lg text-dark-grey">
                Ev Kids is our dedicated children's ministry for ages 0 to 12.
                Every Sunday, while you enjoy the service, your children are
                cared for by trained, police-vetted volunteers in
                age-appropriate programs filled with creativity, music,
                and Bible-based teaching.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0096C3]">
              Our programs
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Three programs, one mission
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ScrollReveal key={program.name} delay={i * 100}>
                <div className="h-full rounded-xl border border-warm-grey/60 bg-warm-white p-8 transition-all duration-300 hover:border-[#0096C3]/20 hover:shadow-lg hover:shadow-[#0096C3]/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0096C3]/10 text-[#0096C3]">
                    {program.icon}
                  </div>
                  <h3 className="mt-6 font-sans text-h4 font-bold text-brand-black">
                    {program.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#0096C3]">
                    {program.ages}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {program.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photo Strip */}
      <section className="bg-warm-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <img
                src="/images/homepage/carousel-79cef650.jpg"
                alt="Children at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-3c68ddf1.jpg"
                alt="Families at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-168f386e.jpg"
                alt="Kids enjoying activities"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-aea4638f.jpg"
                alt="Community gathering with children"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0096C3]">
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
                <details className="group rounded-xl border border-warm-grey/60 bg-warm-white">
                  <summary className="flex cursor-pointer items-center justify-between px-8 py-6 text-left font-sans text-[1.0625rem] font-semibold text-brand-black transition-colors hover:text-[#0096C3]">
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
      <section className="relative overflow-hidden bg-[#0096C3] px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              Your kids will love it
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-white/80">
              Bring your family along this Sunday. Our team is ready to welcome
              your children into a space made just for them.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/visit"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-[#0096C3] shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
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
