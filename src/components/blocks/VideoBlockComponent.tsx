interface VideoBlockProps {
  url: string
  caption?: string | null
}

/**
 * Extracts the YouTube video ID from various URL formats.
 */
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }

  return null
}

export function VideoBlockComponent({ url, caption }: VideoBlockProps) {
  const videoId = extractYouTubeId(url)

  if (!videoId) {
    return null
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-brand-black shadow-lg">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={caption ?? 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>

        {caption && (
          <p className="mt-4 text-center text-sm text-mid-grey">
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
