import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button, ArrowRight } from '@/components/ui/Button'

interface CardImage {
  url: string
  alt: string
  width?: number
  height?: number
}

interface DetailRow {
  label: string
  value: string
}

interface ManualCard {
  eyebrow?: string | null
  title: string
  subtitle?: string | null
  description?: string | null
  image?: CardImage | string | null
  href?: string | null
  linkLabel?: string | null
  address?: string | null
  details?: DetailRow[] | null
}

interface ManualCardGridBlockProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  cardStyle?: 'info' | 'imageOverlay' | 'imageTop' | 'alternatingRows' | null
  columns?: string | number | null
  cards: ManualCard[]
}

function getImageData(image: CardImage | string | null | undefined) {
  if (!image) return null
  if (typeof image === 'string') return { url: image, alt: '', width: 1200, height: 800 }
  return image
}

const columnClasses: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

function InfoCard({ card, index }: { card: ManualCard; index: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="rounded-xl border border-warm-grey/20 bg-white p-6">
        <h3 className="font-serif text-xl text-brand-black">{card.title}</h3>
        {card.subtitle && (
          <p className="mt-1 text-sm font-semibold text-rich-red">{card.subtitle}</p>
        )}
        {card.description && (
          <p className="mt-3 text-sm leading-relaxed text-dark-grey">{card.description}</p>
        )}
        {card.details && card.details.length > 0 && (
          <dl className="mt-4 space-y-2">
            {card.details.map((row, i) => (
              <div key={i} className="flex justify-between text-sm">
                <dt className="font-medium text-brand-black">{row.label}</dt>
                <dd className="text-mid-grey">{row.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </ScrollReveal>
  )
}

function ImageOverlayCard({ card, index }: { card: ManualCard; index: number }) {
  const img = getImageData(card.image)
  const content = (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl sm:aspect-[4/5]">
      {img && (
        <Image
          src={img.url}
          alt={img.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

      {/* Content anchored to bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        {card.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-light-red-2">
            {card.eyebrow}
          </p>
        )}
        <h3 className="mt-2 font-serif text-2xl text-white">{card.title}</h3>
        {card.subtitle && (
          <p className="mt-1 text-sm text-warm-white/70">{card.subtitle}</p>
        )}
        {card.address && (
          <p className="mt-2 text-xs text-warm-white/50">{card.address}</p>
        )}
        {card.linkLabel && (
          <p className="mt-3 text-sm font-semibold text-white">{card.linkLabel}</p>
        )}
      </div>
    </div>
  )

  return (
    <ScrollReveal delay={index * 100}>
      {card.href ? <Link href={card.href}>{content}</Link> : content}
    </ScrollReveal>
  )
}

function ImageTopCard({ card, index }: { card: ManualCard; index: number }) {
  const img = getImageData(card.image)
  const content = (
    <div className="group overflow-hidden rounded-xl">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        {img && (
          <Image
            src={img.url}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {!img && <div className="h-full w-full bg-warm-grey/20" />}
      </div>

      {/* Dark content panel */}
      <div className="bg-brand-black p-6 lg:p-8">
        <h3 className="font-serif text-xl text-white">{card.title}</h3>
        {card.description && (
          <p className="mt-2 text-sm leading-relaxed text-warm-grey/70">{card.description}</p>
        )}
        {card.linkLabel && (
          <p className="mt-4 text-sm font-semibold text-light-red-2">{card.linkLabel}</p>
        )}
      </div>
    </div>
  )

  return (
    <ScrollReveal delay={index * 100}>
      {card.href ? <Link href={card.href}>{content}</Link> : content}
    </ScrollReveal>
  )
}

function AlternatingRowCard({ card, index }: { card: ManualCard; index: number }) {
  const img = getImageData(card.image)
  const isEven = index % 2 === 1

  return (
    <ScrollReveal delay={index * 100}>
      <div
        className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          isEven ? 'lg:[direction:rtl]' : ''
        }`}
      >
        {/* Image */}
        <div className="lg:[direction:ltr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            {img && (
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            {!img && <div className="h-full w-full bg-warm-grey/20" />}
          </div>
        </div>

        {/* Text */}
        <div className="lg:[direction:ltr]">
          {card.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-rich-red">
              {card.eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-serif text-[length:var(--text-h3)] leading-[var(--leading-heading)] text-brand-black">
            {card.title}
          </h2>
          {card.description && (
            <p className="mt-4 text-lg leading-relaxed text-dark-grey">{card.description}</p>
          )}
          {card.href && card.linkLabel && (
            <div className="mt-6">
              <Button href={card.href} variant="primary">
                {card.linkLabel}
                <ArrowRight />
              </Button>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}

export function ManualCardGridBlockComponent({
  eyebrow,
  heading,
  description,
  cardStyle: cardStyleProp,
  columns: columnsProp,
  cards,
}: ManualCardGridBlockProps) {
  const cardStyle = cardStyleProp ?? 'info'
  const columns = Number(columnsProp) || 3
  const isAlternating = cardStyle === 'alternatingRows'

  return (
    <section className="bg-warm-white py-20 lg:py-28">
      <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
        {/* Section header */}
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

        {/* Cards */}
        {isAlternating ? (
          <div className="space-y-20 lg:space-y-28">
            {cards.map((card, i) => (
              <AlternatingRowCard key={i} card={card} index={i} />
            ))}
          </div>
        ) : (
          <div className={`grid gap-8 ${columnClasses[columns ?? 3]}`}>
            {cards.map((card, i) => {
              switch (cardStyle) {
                case 'info':
                  return <InfoCard key={i} card={card} index={i} />
                case 'imageOverlay':
                  return <ImageOverlayCard key={i} card={card} index={i} />
                case 'imageTop':
                  return <ImageTopCard key={i} card={card} index={i} />
                default:
                  return null
              }
            })}
          </div>
        )}
      </div>
    </section>
  )
}
