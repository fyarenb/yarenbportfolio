type OptimizedImageProps = {
  src: string
  alt: string
  widths?: number[]
  sizes?: string
  className?: string
  priority?: boolean
}

function imageUrl(src: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=82`
}

export function OptimizedImage({
  src,
  alt,
  widths = [480, 800, 1200],
  sizes = '100vw',
  className,
  priority = false,
}: OptimizedImageProps) {
  const largestWidth = widths[widths.length - 1] ?? 1200

  return (
    <img
      src={imageUrl(src, largestWidth)}
      srcSet={widths.map((width) => `${imageUrl(src, width)} ${width}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
