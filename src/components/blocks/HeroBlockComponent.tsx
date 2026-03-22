import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface MediaUpload {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

interface HeroButton {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'text'
  id?: string
}

interface HeroBlockProps {
  image: MediaUpload | string
  heading: string
  subtitle?: string | null
  buttons?: HeroButton[] | null
}

export function HeroBlockComponent({ image, heading, subtitle, buttons }: HeroBlockProps) {
  const imageData = typeof image === 'string' ? null : image

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      {/* Background image */}
      {imageData && (
        <Image
          src={imageData.url}
          alt={imageData.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/50 to-brand-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1
            className="font-serif text-[length:var(--text-display)] leading-[var(--leading-display)] text-white"
          >
            {heading}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/90 sm:text-xl">
              {subtitle}
            </p>
          )}

          {buttons && buttons.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-4">
              {buttons.map((btn) => (
                <Button
                  key={btn.id ?? btn.href}
                  href={btn.href}
                  variant={btn.variant ?? 'primary'}
                  size="large"
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
