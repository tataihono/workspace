/**
 * Minimal rich text renderer placeholder.
 *
 * When @payloadcms/richtext-lexical is fully configured, replace this
 * with the official `<RichText />` component from that package.
 * For now this safely serializes Lexical editor state to basic HTML-like output.
 */

interface RichTextProps {
  data: unknown
  className?: string
}

export default function RichText({ data, className }: RichTextProps) {
  if (!data) return null

  // If the data is already a string (shouldn't be, but defensive)
  if (typeof data === 'string') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: data }} />
  }

  // Placeholder: render as serialized JSON preview until Lexical renderer is wired up
  return (
    <div className={className}>
      <p className="text-mid-grey italic">Rich text content from CMS</p>
    </div>
  )
}
