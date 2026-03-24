import { ScrollReveal } from '@/components/ui/ScrollReveal'
import RichText from '@/components/blocks/RichTextRenderer'

interface MediaUpload {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

interface ContentBlockProps {
  heading?: string | null
  body: unknown
  image?: MediaUpload | string | null
  alignment?: 'left' | 'center' | 'right' | null
}

export function ContentBlockComponent({
  heading,
  body,
  image,
  alignment = 'left',
}: ContentBlockProps) {
  const imageData = image && typeof image !== 'string' ? image : null
  const hasImage = !!imageData
  const isCenter = alignment === 'center'

  return (
    <section className="bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[80rem]">
        <ScrollReveal>
          {isCenter || !hasImage ? (
            <div className={isCenter ? 'mx-auto max-w-3xl text-center' : ''}>
              {heading && (
                <h2 className="mt-3 text-h2 font-normal leading-heading text-brand-black">
                  {heading}
                </h2>
              )}
              <div className="mt-6 text-lg leading-body-lg text-dark-grey">
                <RichText data={body} />
              </div>
              {isCenter && imageData && (
                <div className="mt-12">
                  <img
                    src={imageData.url}
                    alt={imageData.alt}
                    className="mx-auto rounded-lg"
                  />
                </div>
              )}
            </div>
          ) : (
            <div
              className={`grid gap-16 lg:grid-cols-2 lg:items-center ${
                alignment === 'right' ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className="lg:[direction:ltr]">
                {heading && (
                  <h2 className="font-serif text-h2 font-normal leading-heading text-brand-black">
                    {heading}
                  </h2>
                )}
                <div className="mt-6 space-y-4 text-lg leading-body-lg text-dark-grey">
                  <RichText data={body} />
                </div>
              </div>
              <div className="lg:[direction:ltr]">
                <img
                  src={imageData.url}
                  alt={imageData.alt}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
