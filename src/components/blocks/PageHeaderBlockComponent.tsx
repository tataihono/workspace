import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface PageHeaderBlockProps {
  eyebrow?: string | null
  heading: string
  description?: string | null
  theme?: 'dark' | 'light' | null
}

export function PageHeaderBlockComponent({
  eyebrow,
  heading,
  description,
  theme = 'dark',
}: PageHeaderBlockProps) {
  const isDark = theme === 'dark'

  return (
    <section
      className={`px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-40 ${
        isDark ? 'bg-brand-black' : 'bg-warm-white'
      }`}
    >
      <div className="mx-auto max-w-[80rem]">
        <ScrollReveal>
          {eyebrow && (
            <p
              className={`text-sm font-semibold uppercase tracking-widest ${
                isDark ? 'text-light-red-2' : 'text-rich-red'
              }`}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className={`mt-4 font-serif text-display ${
              isDark ? 'text-white' : 'text-brand-black'
            }`}
          >
            {heading}
          </h1>

          {description && (
            <p
              className={`mt-6 max-w-2xl text-lg leading-relaxed ${
                isDark ? 'text-warm-grey/70' : 'text-dark-grey'
              }`}
            >
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
