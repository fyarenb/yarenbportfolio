type OptimizedImageProps = {
  src: string
  alt: string
  widths?: number[]
  sizes?: string
  className?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  sizes = '100vw',
  className,
  priority = false,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
