import { HeroBlockComponent } from './HeroBlockComponent'
import { ContentBlockComponent } from './ContentBlockComponent'
import { CTABlockComponent } from './CTABlockComponent'
import { CardGridBlockComponent } from './CardGridBlockComponent'
import { AccordionBlockComponent } from './AccordionBlockComponent'
import { ImageGalleryBlockComponent } from './ImageGalleryBlockComponent'
import { VideoBlockComponent } from './VideoBlockComponent'

/**
 * Union of all known block types.
 * Once Payload generates types, replace these with the generated interfaces.
 */
interface BaseBlock {
  blockType: string
  id?: string
}

interface HeroBlock extends BaseBlock {
  blockType: 'hero'
  image: { id: string; url: string; alt: string; width?: number; height?: number } | string
  heading: string
  subtitle?: string | null
  buttons?: Array<{
    label: string
    href: string
    variant?: 'primary' | 'secondary' | 'text'
    id?: string
  }> | null
}

interface ContentBlock extends BaseBlock {
  blockType: 'content'
  heading?: string | null
  body: unknown
  image?: { id: string; url: string; alt: string; width?: number; height?: number } | string | null
  alignment?: 'left' | 'center' | 'right' | null
}

interface CTABlock extends BaseBlock {
  blockType: 'cta'
  heading: string
  text?: string | null
  buttons?: Array<{
    label: string
    href: string
    variant?: 'primary' | 'secondary'
    id?: string
  }> | null
  colorPreset?: 'primary-red' | 'light' | 'dark' | null
}

interface CardGridBlock extends BaseBlock {
  blockType: 'cardGrid'
  dataSource: 'campuses' | 'events' | 'team-members'
  campusFilter?: string | null
}

interface AccordionBlock extends BaseBlock {
  blockType: 'accordion'
  heading?: string | null
  items: Array<{
    question: string
    answer: unknown
    id?: string
  }>
  allowMultiple?: boolean | null
}

interface ImageGalleryBlock extends BaseBlock {
  blockType: 'imageGallery'
  images: Array<{
    image: { id: string; url: string; alt: string; width?: number; height?: number } | string
    id?: string
  }>
}

interface VideoBlock extends BaseBlock {
  blockType: 'video'
  url: string
  caption?: string | null
}

type Block =
  | HeroBlock
  | ContentBlock
  | CTABlock
  | CardGridBlock
  | AccordionBlock
  | ImageGalleryBlock
  | VideoBlock
  | BaseBlock

interface RenderBlocksProps {
  blocks: Block[]
}

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const key = block.id ?? `block-${index}`

        switch (block.blockType) {
          case 'hero': {
            const b = block as HeroBlock
            return (
              <HeroBlockComponent
                key={key}
                image={b.image}
                heading={b.heading}
                subtitle={b.subtitle}
                buttons={b.buttons}
              />
            )
          }

          case 'content': {
            const b = block as ContentBlock
            return (
              <ContentBlockComponent
                key={key}
                heading={b.heading}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                body={b.body as any}
                image={b.image}
                alignment={b.alignment}
              />
            )
          }

          case 'cta': {
            const b = block as CTABlock
            return (
              <CTABlockComponent
                key={key}
                heading={b.heading}
                text={b.text}
                buttons={b.buttons}
                colorPreset={b.colorPreset}
              />
            )
          }

          case 'cardGrid': {
            const b = block as CardGridBlock
            return (
              <CardGridBlockComponent
                key={key}
                dataSource={b.dataSource}
                campusFilter={b.campusFilter}
              />
            )
          }

          case 'accordion': {
            const b = block as AccordionBlock
            return (
              <AccordionBlockComponent
                key={key}
                heading={b.heading}
                items={b.items}
                allowMultiple={b.allowMultiple}
              />
            )
          }

          case 'imageGallery': {
            const b = block as ImageGalleryBlock
            return <ImageGalleryBlockComponent key={key} images={b.images} />
          }

          case 'video': {
            const b = block as VideoBlock
            return <VideoBlockComponent key={key} url={b.url} caption={b.caption} />
          }

          default:
            return null
        }
      })}
    </>
  )
}
