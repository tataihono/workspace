import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Ev Youth | Ev Church Auckland',
  description:
    'Ev Youth is a vibrant community for teenagers. Junior Youth (Years 7-9) and Senior Youth (Years 10-13) meet weekly across Auckland.',
  openGraph: {
    title: 'Ev Youth | Ev Church Auckland',
    description:
      'A vibrant community for teenagers at Ev Church. Junior Youth and Senior Youth programs across Auckland.',
    url: 'https://ev.church/youth',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ev.church/youth',
  },
}

const leaders = [
  {
    src: '/images/youth/youthleaders-all.jpg',
    alt: 'Ev Youth leaders team',
  },
  {
    src: '/images/youth/youthleaders-fun.jpg',
    alt: 'Youth leaders having fun together',
  },
  {
    src: '/images/youth/youthleaders-junior1.jpg',
    alt: 'Junior Youth leaders',
  },
  {
    src: '/images/youth/youthleaders-senior.jpg',
    alt: 'Senior Youth leaders',
  },
]

const programs = [
  {
    name: 'Junior Youth',
    ages: 'Years 7 to 9',
    day: 'Friday nights',
    description:
      'Junior Youth is where young teens find their people. Each week is packed with games, food, small groups, and real conversations about faith and life. It is a place to belong, to be known, and to have a blast.',
    highlights: ['Games and activities', 'Small group discussions', 'Weekend camps and events', 'Mentoring relationships'],
  },
  {
    name: 'Senior Youth',
    ages: 'Years 10 to 13',
    day: 'Friday nights',
    description:
      'Senior Youth is a space for older teens to go deeper. With worship, teaching, honest conversations, and genuine community, it is designed to help young people navigate the real challenges of life with faith and confidence.',
    highlights: ['Worship and teaching', 'Leadership development', 'Retreats and conferences', 'Service opportunities'],
  },
]

export default function YouthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/youth/ev-youth-banner.png"
            alt="Ev Youth community of teenagers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/60 to-brand-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[80rem] px-5 py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p
              className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.2em] text-[#870394]"
              style={{ animationDelay: '100ms' }}
            >
              Years 7 to 13
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Ev <span className="italic text-[#c06cc9]">Youth</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              A place for teenagers to connect, grow, and find where they belong.
              Real community. Real faith. Real fun.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#870394]">
                About Ev Youth
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Where teenagers find their people
              </h2>
              <p className="mt-6 text-lg leading-body-lg text-dark-grey">
                Ev Youth exists to help young people navigate life with faith,
                community, and purpose. Every week, teens from across Auckland
                come together for worship, fun, and authentic relationships
                with peers and leaders who genuinely care.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leader Photo Gallery */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#870394]">
              Our leaders
            </p>
            <h2 className="mt-3 text-center font-serif text-h2 font-normal leading-heading text-brand-black">
              Led by people who care
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.src} delay={i * 100}>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={leader.src}
                    alt={leader.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#870394]">
              Programs
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Two programs, one heart
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {programs.map((program, i) => (
              <ScrollReveal key={program.name} delay={i * 120}>
                <div className="h-full rounded-xl border border-warm-grey/60 bg-white p-10 transition-all duration-300 hover:border-[#870394]/20 hover:shadow-lg hover:shadow-[#870394]/5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-sans text-h3 font-bold text-brand-black">
                      {program.name}
                    </h3>
                    <span className="rounded-full bg-[#870394]/10 px-3 py-1 text-xs font-semibold text-[#870394]">
                      {program.ages}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#870394]">
                    {program.day}
                  </p>
                  <p className="mt-5 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {program.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-dark-grey">
                        <svg className="h-4 w-4 shrink-0 text-[#870394]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#870394] px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              Your teen is welcome here
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-white/80">
              Whether your teenager is looking for community, exploring faith,
              or just wants somewhere to belong, Ev Youth is the place.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-[#870394] shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Get in touch
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
