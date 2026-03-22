import type { Metadata } from 'next'
import { Button, ArrowRight } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Vision | Ev Church Auckland',
  description:
    'Discover the vision, history, and future goals of Ev Church. We exist to see lives transformed by Jesus across Auckland and beyond.',
  openGraph: {
    title: 'Vision | Ev Church Auckland',
    description:
      'The vision, history, and future of Ev Church in Auckland, New Zealand.',
    url: 'https://ev.church/vision',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Vision | Ev Church',
    description: 'See where we have been and where we are going.',
  },
  alternates: {
    canonical: 'https://ev.church/vision',
  },
}

const goals = [
  {
    number: '01',
    title: 'Multiply campuses',
    description:
      'We believe every community in Auckland deserves a local expression of church. Our goal is to launch new campuses that bring the gospel closer to where people live and work.',
  },
  {
    number: '02',
    title: 'Raise up leaders',
    description:
      'Healthy churches are led by healthy leaders. We are committed to developing a pipeline of emerging leaders through our apprenticeship program, mentoring, and hands-on ministry training.',
  },
  {
    number: '03',
    title: 'Serve our city',
    description:
      'Auckland is our home, and we want to be the best neighbours we can be. We are growing our community initiatives, partnerships with local organisations, and practical support for those in need.',
  },
  {
    number: '04',
    title: 'Reach the nations',
    description:
      'Our vision does not stop at Auckland. Through mission partnerships and church planting support, we are investing in gospel work across the Pacific and beyond.',
  },
]

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img
            src="/images/homepage/carousel-9a8d8943.jpg"
            alt="Ev Church community gathered for worship"
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
              Our vision
            </p>
            <h1
              className="animate-fade-in-up mt-6 font-serif text-display font-normal leading-display text-white"
              style={{ animationDelay: '200ms' }}
            >
              Where we are
              <br />
              <span className="italic text-light-red-3">going</span>
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-lg text-lg leading-body-lg text-warm-grey/80"
              style={{ animationDelay: '350ms' }}
            >
              For over two decades, Ev Church has been growing, planting, and
              dreaming. Here is the story of where we have been and where God
              is taking us next.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* Vision Statement */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              The vision
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              To see lives transformed by Jesus
            </h2>
            <p className="mt-6 text-lg leading-body-lg text-dark-grey">
              This is the heartbeat of everything we do. Every service, every
              connect group, every outreach, every conversation is driven by a
              desire to see people encounter the living God and be changed from
              the inside out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <blockquote>
              <p className="font-serif text-h2 font-normal italic leading-heading text-brand-black">
                &ldquo;For I know the plans I have for you, declares the Lord,
                plans to prosper you and not to harm you, plans to give you hope
                and a future.&rdquo;
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-mid-grey">
                Jeremiah 29:11
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* History */}
      <section className="bg-warm-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                  Our history
                </p>
                <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                  How it all started
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-body-lg text-dark-grey">
                  <p>
                    Ev Church began in the early 2000s as a small group of
                    people with a big dream: to build a church that would be a
                    genuine home for anyone, regardless of their background or
                    story.
                  </p>
                  <p>
                    What started as a single gathering has grown into a
                    multi-campus church across Auckland. Along the way, we have
                    seen countless lives changed, families restored, and a
                    community built on love, generosity, and faith.
                  </p>
                  <p>
                    Today, we continue to grow and plant with the same passion
                    and conviction that began all those years ago. The best is
                    still ahead.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/images/homepage/carousel-0c59a44d.jpg"
                  alt="Early days of Ev Church community"
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                />
                <img
                  src="/images/homepage/carousel-146c7f7e.jpg"
                  alt="Ev Church growing community"
                  className="mt-8 aspect-[3/4] w-full rounded-lg object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
                Looking ahead
              </p>
              <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
                Our goals for the future
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {goals.map((goal, i) => (
              <ScrollReveal key={goal.number} delay={i * 100}>
                <div className="rounded-xl border border-warm-grey/60 bg-warm-white p-8 lg:p-10">
                  <span className="font-serif text-4xl font-normal text-light-red-1">
                    {goal.number}
                  </span>
                  <h3 className="mt-4 font-sans text-h4 font-bold text-brand-black">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-mid-grey">
                    {goal.description}
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
                alt="Ev Church gathering"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-rich-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h1 font-normal leading-display text-white">
              Be part of the story
            </h2>
            <p className="mt-5 text-lg leading-body-lg text-light-red-3">
              The vision of Ev Church is carried by ordinary people who love
              God and love their city. There is a place for you in this story.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/visit"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-rich-red shadow-lg transition-all duration-200 hover:bg-warm-white hover:shadow-xl active:scale-[0.97]"
              >
                Plan your visit
              </a>
              <Button href="/about" variant="text" className="text-white/90 hover:text-white">
                Meet the team
                <ArrowRight />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
