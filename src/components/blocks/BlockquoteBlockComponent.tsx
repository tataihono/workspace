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
      <section className="bg-warm-white px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <blockquote className="border-l-2 border-light-red-1 pl-4">
              <p className="text-sm italic leading-relaxed text-mid-grey">
                {quote}
              </p>
              {attribution && (
                <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-mid-grey/70">
                  {attribution}
                </footer>
              )}
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  // Centered style
  return (
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <blockquote>
            <p className="font-serif text-h2 font-normal italic leading-heading text-brand-black">
              &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-mid-grey">
                {attribution}
              </footer>
            )}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}
