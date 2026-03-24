import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface BlockquoteBlockProps {
  quote: string
  attribution?: string | null
  style?: 'centered' | 'leftBorder' | null
}

export function BlockquoteBlockComponent({
  quote,
  attribution,
  style = 'centered',
}: BlockquoteBlockProps) {
  if (style === 'leftBorder') {
    return (
      <section className="bg-warm-white py-12 lg:py-16">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <ScrollReveal>
            <blockquote className="border-l-4 border-light-red-1 pl-6">
              <p className="font-serif text-lg italic leading-relaxed text-dark-grey">
                {quote}
              </p>
              {attribution && (
                <cite className="mt-4 block text-sm font-semibold not-italic uppercase tracking-wide text-mid-grey">
                  {attribution}
                </cite>
              )}
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  // Centered style
  return (
    <section className="bg-warm-white py-20 lg:py-28">
      <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <blockquote>
              <p className="font-serif text-[length:var(--text-h3)] italic leading-relaxed text-brand-black">
                {quote}
              </p>
            </blockquote>
            {attribution && (
              <cite className="mt-6 block text-sm font-semibold not-italic uppercase tracking-widest text-mid-grey">
                {attribution}
              </cite>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
