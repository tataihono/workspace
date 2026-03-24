import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface FeatureItem {
  icon?: string | null
  title: string
  description?: string | null
}

interface FeatureGridBlockProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  layout?: 'twoColumn' | 'threeColumn' | 'fourColumn' | null
  style?: 'iconTop' | 'iconLeft' | null
  items: FeatureItem[]
  accentColor?: string | null
}

const iconPaths: Record<string, string> = {
  smile:
    'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  graduation:
    'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342',
  coffee:
    'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z',
  users:
    'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  heart:
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  music:
    'M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.34A1.125 1.125 0 0017.28 1.26l-6.405 1.831A1.125 1.125 0 009.75 4.21V15',
  book: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  chat: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155',
  star: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  globe:
    'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  shield:
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
}

function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const path = iconPaths[name]
  if (!path) return null

  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  )
}

const columnClasses: Record<string, string> = {
  twoColumn: 'grid-cols-1 sm:grid-cols-2',
  threeColumn: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  fourColumn: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function FeatureGridBlockComponent({
  eyebrow,
  heading,
  description,
  layout: layoutProp,
  style: styleProp,
  items,
  accentColor,
}: FeatureGridBlockProps) {
  const layout = layoutProp ?? 'twoColumn'
  const style = styleProp ?? 'iconLeft'

  if (style === 'iconLeft') {
    return (
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: heading section */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ScrollReveal>
                {eyebrow && (
                  <p className="text-sm font-semibold uppercase tracking-widest text-rich-red">
                    {eyebrow}
                  </p>
                )}
                {heading && (
                  <h2 className="mt-4 font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] text-brand-black">
                    {heading}
                  </h2>
                )}
                {description && (
                  <p className="mt-4 text-lg leading-relaxed text-dark-grey">{description}</p>
                )}
              </ScrollReveal>
            </div>

            {/* Right: items */}
            <div className="space-y-10">
              {items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-4">
                    {item.icon && (
                      <div className="shrink-0 pt-1">
                        <FeatureIcon
                          name={item.icon}
                          className="h-7 w-7 text-rich-red"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-xl text-brand-black">{item.title}</h3>
                      {item.description && (
                        <p className="mt-2 leading-relaxed text-dark-grey">{item.description}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // iconTop style
  return (
    <section className="bg-warm-white py-20 lg:py-28">
      <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
        {(eyebrow || heading || description) && (
          <ScrollReveal>
            <div className="mb-16 text-center">
              {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-widest text-rich-red">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2 className="mt-4 font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] text-brand-black">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-dark-grey">
                  {description}
                </p>
              )}
            </div>
          </ScrollReveal>
        )}

        <div className={`grid gap-10 ${columnClasses[layout]}`}>
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="text-center">
                {item.icon && (
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-light-red-3">
                    <FeatureIcon
                      name={item.icon}
                      className="h-7 w-7 text-rich-red"
                    />
                  </div>
                )}
                <h3 className="font-serif text-xl text-brand-black">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 leading-relaxed text-dark-grey">{item.description}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
