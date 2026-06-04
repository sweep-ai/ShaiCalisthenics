interface VideoPlaceholderProps {
  title?: string
  label?: string
  youtubeUrl?: string
}

function getYouTubeEmbedId(url: string): string | null {
  try {
    const parsed = new URL(url)
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1).split('/')[0] || null
    }
    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v')
    }
  } catch {
    return null
  }
  return null
}

export function VideoPlaceholder({ title, label = 'Video', youtubeUrl }: VideoPlaceholderProps) {
  const videoId = youtubeUrl ? getYouTubeEmbedId(youtubeUrl) : null

  return (
    <div className="w-full">
      {title && (
        <p className="mb-3 text-center font-heading text-lg text-pure-white/80">{title}</p>
      )}
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-void-gray">
        {videoId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title ?? label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <svg
                className="ml-1 h-7 w-7 text-pure-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-sm uppercase tracking-widest text-pure-white/50">{label}</span>
          </div>
        )}
      </div>
    </div>
  )
}
