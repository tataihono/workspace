import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
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
  body: SerializedEditorState
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
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal>
          {isCenter || !hasImage ? (
            /* Center or text-only layout */
            <div className={isCenter ? 'text-center' : ''}>
              {heading && (
                <h2 className="font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] text-brand-black">
                  {heading}
                </h2>
              )}
              <div className={`mt-6 prose prose-lg max-w-none text-dark-grey leading-[var(--leading-body)] ${isCenter ? 'mx-auto max-w-3xl' : ''}`}>
                <RichText data={body} />
              </div>
              {isCenter && imageData && (
                <div className="mt-12">
                  <Image
                    src={imageData.url}
                    alt={imageData.alt}
                    width={imageData.width ?? 1200}
                    height={imageData.height ?? 800}
                    className="mx-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                </div>
              )}
            </div>
          ) : (
            /* Side-by-side layout */
            <div
              className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
                alignment === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                {heading && (
                  <h2 className="font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] text-brand-black">
                    {heading}
                  </h2>
                )}
                <div className="mt-6 prose prose-lg max-w-none text-dark-grey leading-[var(--leading-body)]">
                  <RichText data={body} />
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src={imageData.url}
                  alt={imageData.alt}
                  width={imageData.width ?? 900}
                  height={imageData.height ?? 600}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
