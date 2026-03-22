import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-brand-black px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-display font-bold leading-display text-white">
            Welcome to Ev Church
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-body-lg text-warm-grey">
            A community of Christ-followers in Auckland, New Zealand. Join us
            this Sunday at one of our three campuses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/visit" size="large">
              Plan Your Visit
            </Button>
            <Button href="/about" variant="secondary" size="large" className="border-white text-white hover:bg-white hover:text-brand-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="bg-warm-white px-4 py-20">
        <div className="mx-auto max-w-[80rem]">
          <h2 className="text-center text-h2 font-bold leading-heading text-brand-black">
            Get Connected
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-mid-grey">
            Whether you&apos;re new to church or have been part of a faith community
            for years, there&apos;s a place for you here.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Visit Us',
                description:
                  'Find a campus near you and learn what to expect on your first visit.',
                href: '/visit',
              },
              {
                title: 'Next Steps',
                description:
                  'Explore courses and groups to help you grow in your faith journey.',
                href: '/next-steps',
              },
              {
                title: 'Connect Groups',
                description:
                  'Join a small group to build deeper relationships and community.',
                href: '/connect-groups',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-cool-grey bg-white p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="text-h4 font-bold text-brand-black">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-body text-dark-grey">
                  {card.description}
                </p>
                <Button href={card.href} variant="text" className="mt-4">
                  Learn more &rarr;
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rich-red px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-h2 font-bold leading-heading">
            Join Us This Sunday
          </h2>
          <p className="mt-4 text-lg leading-body-lg text-light-red-3">
            Three campuses across Auckland. Everyone is welcome.
          </p>
          <Button
            href="/visit"
            size="large"
            className="mt-8 bg-white text-rich-red hover:bg-warm-white"
          >
            Find a Campus
          </Button>
        </div>
      </section>
    </>
  )
}
