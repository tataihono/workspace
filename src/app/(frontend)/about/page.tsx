import type { Metadata } from 'next'
import { Button, ArrowRight } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'About | Ev Church Auckland',
  description:
    'Ev Church is a community of Christ-followers across Auckland, New Zealand. Learn about our mission, team, and what we believe.',
  openGraph: {
    title: 'About | Ev Church Auckland',
    description:
      'Ev Church is a community of Christ-followers across Auckland. Learn about our mission, team, and beliefs.',
    url: 'https://ev.church/about',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ev Church',
    description: 'Learn about our mission, team, and what we believe.',
  },
  alternates: {
    canonical: 'https://ev.church/about',
  },
}

const teamGroups = [
  {
    label: 'Staff',
    members: [
      { name: 'Simon Burne', role: 'Senior Pastor' },
      { name: 'Hannah Burne', role: 'Creative Pastor' },
      { name: 'Josh Hamilton', role: 'Campus Pastor, North' },
      { name: 'Sarah Hamilton', role: 'Kids Pastor' },
      { name: 'Reuben Munn', role: 'Campus Pastor, Central' },
      { name: 'Grace Munn', role: 'Community Pastor' },
    ],
  },
  {
    label: 'Leadership',
    members: [
      { name: 'David Thompson', role: 'Elder' },
      { name: 'Michelle Lee', role: 'Elder' },
      { name: 'Mark Jensen', role: 'Elder' },
      { name: 'Rachel Adams', role: 'Elder' },
    ],
  },
  {
    label: 'Apprentices',
    members: [
      { name: 'Liam Parker', role: 'Ministry Apprentice' },
      { name: 'Mia Chen', role: 'Ministry Apprentice' },
      { name: 'Ethan Williams', role: 'Ministry Apprentice' },
    ],
  },
]

const beliefs = [
  {
    title: 'The Bible',
    content:
      'We believe the Bible is the inspired Word of God. It is the ultimate authority for what we believe and how we live.',
  },
  {
    title: 'God',
    content:
      'We believe in one God who exists eternally in three persons: Father, Son, and Holy Spirit. He is the Creator and Sustainer of all things.',
  },
  {
    title: 'Jesus Christ',
    content:
      'We believe Jesus Christ is the Son of God, fully God and fully human. He lived a perfect life, died on the cross for our sins, and rose again on the third day.',
  },
  {
    title: 'The Holy Spirit',
    content:
      'We believe the Holy Spirit is present and active in the life of every believer, empowering us to live for God and equipping us with gifts for service.',
  },
  {
    title: 'Salvation',
    content:
      'We believe that salvation is a gift from God, received through faith in Jesus Christ. It is not earned by good works but given freely by grace.',
  },
  {
    title: 'The Church',
    content:
      'We believe the church is the body of Christ on earth. It is a community of Christ-followers called to worship God, grow together, and serve the world.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/homepage/carousel-70ac2785.jpg"
            alt="Ev Church community"
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
              About us
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Our <span className="italic text-light-red-3">story</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              Ev Church is a growing community of Christ-followers across
              Auckland, united by a shared love for Jesus, each other, and our city.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Mission Statement */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Our mission
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              To see lives transformed by Jesus
            </h2>
            <p className="mt-6 text-lg leading-body-lg text-dark-grey">
              Everything we do at Ev Church flows from this mission. We exist to
              create environments where people can encounter God, build authentic
              community, and discover their purpose. We are a church for the
              city, passionate about seeing Auckland and beyond reached with the
              good news of Jesus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Community Photos */}
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              <img
                src="/images/homepage/carousel-9a8d8943.jpg"
                alt="Community gathering at Ev Church"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-0c59a44d.jpg"
                alt="People worshipping together"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src="/images/homepage/carousel-146c7f7e.jpg"
                alt="Ev Church volunteers serving"
                className="aspect-[4/3] w-full rounded-lg object-cover md:col-span-1 col-span-2"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                Our people
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Meet the team
              </h2>
            </div>
          </ScrollReveal>

          {teamGroups.map((group, groupIdx) => (
            <div key={group.label} className={groupIdx === 0 ? 'mt-16' : 'mt-20'}>
              <ScrollReveal>
                <h3 className="mb-8 text-center font-sans text-sm font-semibold uppercase tracking-[0.15em] text-mid-grey">
                  {group.label}
                </h3>
              </ScrollReveal>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member, i) => (
                  <ScrollReveal key={member.name} delay={i * 80}>
                    <div className="overflow-hidden rounded-xl border border-warm-grey/60 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-rich-red/5">
                      {/* Placeholder avatar */}
                      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-warm-grey/30 to-warm-grey/10">
                        <svg className="h-20 w-20 text-warm-grey" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <div className="p-5 text-center">
                        <h4 className="font-sans text-base font-bold text-brand-black">
                          {member.name}
                        </h4>
                        <p className="mt-1 text-sm text-mid-grey">{member.role}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beliefs Accordion */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                What we believe
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Our beliefs
              </h2>
              <p className="mt-6 text-lg leading-body-lg text-dark-grey">
                These are the core convictions that shape who we are and
                everything we do as a church.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 divide-y divide-warm-grey/60">
            {beliefs.map((belief, i) => (
              <ScrollReveal key={belief.title} delay={i * 60}>
                <details className="group py-6" open={i === 0}>
                  <summary className="flex cursor-pointer items-center justify-between text-left">
                    <h3 className="font-sans text-lg font-bold text-brand-black group-open:text-rich-red">
                      {belief.title}
                    </h3>
                    <svg
                      className="h-5 w-5 shrink-0 text-mid-grey transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-dark-grey">
                    {belief.content}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-rich-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              Come and see for yourself
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              The best way to get to know us is to join us on a Sunday.
              We would love to welcome you.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/visit"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-rich-red shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Plan your visit
              </a>
              <Button href="/contact" variant="text" className="text-white/90 hover:text-white">
                Contact us
                <ArrowRight />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
