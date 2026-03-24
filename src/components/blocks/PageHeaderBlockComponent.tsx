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
  theme = 'light',
}: PageHeaderBlockProps) {
  const isDark = theme === 'dark'

  return (
    <section
      className={`px-5 pb-8 pt-32 lg:px-8 lg:pt-40 ${
        isDark ? 'bg-brand-black lg:pb-20' : 'bg-warm-white'
      }`}
    >
      <div className="mx-auto max-w-[80rem]">
        <ScrollReveal>
          {eyebrow && (
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                isDark ? 'text-light-red-2' : 'text-rich-red'
              }`}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className={`mt-3 font-serif text-display font-normal leading-display ${
              isDark ? 'text-white' : 'text-brand-black'
            }`}
          >
            {heading}
          </h1>

          {description && (
            <p
              className={`mt-6 max-w-xl text-lg leading-body-lg ${
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
