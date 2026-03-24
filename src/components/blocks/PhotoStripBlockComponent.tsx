import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface PhotoImage {
  image: { url: string; alt: string } | string
}

interface PhotoStripBlockProps {
  layout?: 'horizontalScroll' | 'grid4' | 'grid2' | null
  images: PhotoImage[]
}

function getUrl(img: PhotoImage): string {
  return typeof img.image === 'string' ? img.image : img.image?.url ?? ''
}

function getAlt(img: PhotoImage): string {
  return typeof img.image === 'string' ? '' : img.image?.alt ?? ''
}

const heightPatterns = [
  'h-72 lg:h-96',
  'h-56 lg:h-72',
  'h-64 lg:h-80',
] as const

const marginPatterns = [
  'mt-0',
  'mt-8',
  'mt-4',
] as const

export function PhotoStripBlockComponent({ layout: layoutProp, images }: PhotoStripBlockProps) {
  const layout = layoutProp ?? 'horizontalScroll'
  if (layout === 'grid4') {
    return (
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={getUrl(img)}
                    alt={getAlt(img)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'grid2') {
    return (
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {images.slice(0, 2).map((img, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div
                  className={`relative overflow-hidden rounded-lg ${
                    i === 1 ? 'mt-8' : ''
                  }`}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={getUrl(img)}
                      alt={getAlt(img)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // horizontalScroll layout
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
        <div className="-mx-2 flex items-start gap-4">
          {images.map((img, i) => {
            const heightClass = heightPatterns[i % heightPatterns.length]
            const marginClass = marginPatterns[i % marginPatterns.length]

            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className={`relative shrink-0 overflow-hidden rounded-lg ${heightClass} ${marginClass} w-56 lg:w-72`}
                >
                  <Image
                    src={getUrl(img)}
                    alt={getAlt(img)}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-xl"
                    sizes="(max-width: 1024px) 224px, 288px"
                  />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
