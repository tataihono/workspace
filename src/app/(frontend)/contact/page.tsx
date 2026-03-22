import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Ev Church Auckland',
  description:
    'Get in touch with Ev Church. Find campus addresses, service times, and send us a message. We would love to hear from you.',
  openGraph: {
    title: 'Contact | Ev Church Auckland',
    description:
      'Get in touch with Ev Church. Find campus addresses and send us a message.',
    url: 'https://ev.church/contact',
    siteName: 'Ev Church',
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ev Church',
    description: 'Get in touch with Ev Church in Auckland.',
  },
  alternates: {
    canonical: 'https://ev.church/contact',
  },
}

const campuses = [
  {
    name: 'North',
    address: '10 Antares Place, Rosedale, Auckland 0632',
    time: 'Sunday 10:15 am',
    email: 'north@ev.church',
  },
  {
    name: 'Central',
    address: '15 Cross Street, Auckland CBD 1010',
    time: 'Sunday 10:15 am',
    email: 'central@ev.church',
  },
  {
    name: 'Unichurch',
    address: 'University of Auckland, 24 Princes Street, Auckland 1010',
    time: 'Sunday 5:15 pm',
    email: 'unichurch@ev.church',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-white px-5 pb-8 pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Get in touch
            </p>
            <h1 className="mt-3 font-serif text-display font-normal leading-display text-brand-black">
              Contact us
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-body-lg text-dark-grey">
              Have a question, need prayer, or just want to say hello? Fill out
              the form below and we will get back to you as soon as we can.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info Grid */}
      <section className="bg-warm-white px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[80rem] gap-16 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="rounded-xl border border-warm-grey/60 bg-white p-8 shadow-sm lg:p-10">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={100}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-rich-red">
                    General enquiries
                  </h2>
                  <p className="mt-3 text-dark-grey">
                    <a href="mailto:hello@ev.church" className="underline underline-offset-2 hover:text-rich-red">
                      hello@ev.church
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-rich-red">
                    Follow us
                  </h2>
                  <div className="mt-3 flex gap-4">
                    <a
                      href="https://instagram.com/ev.church"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-grey transition-colors hover:text-rich-red"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/ev.church"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-grey transition-colors hover:text-rich-red"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com/@evchurch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-grey transition-colors hover:text-rich-red"
                      aria-label="YouTube"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12L10 15V9l5.194 3z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[80rem]">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rich-red">
              Our locations
            </p>
            <h2 className="mt-3 font-serif text-h2 font-normal leading-heading text-brand-black">
              Campus addresses
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campuses.map((campus, i) => (
              <ScrollReveal key={campus.name} delay={i * 100}>
                <div className="rounded-xl border border-warm-grey/60 bg-warm-white p-8">
                  <h3 className="font-sans text-h4 font-bold text-brand-black">
                    {campus.name}
                  </h3>
                  <div className="mt-4 space-y-2 text-[0.9375rem] text-dark-grey">
                    <p>{campus.address}</p>
                    <p className="font-semibold">{campus.time}</p>
                    <p>
                      <a
                        href={`mailto:${campus.email}`}
                        className="text-rich-red underline underline-offset-2 hover:text-deep-red"
                      >
                        {campus.email}
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
