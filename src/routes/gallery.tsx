import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

import { OptimizedImage } from '@/components/OptimizedImage'
import { galleryItems } from '@/lib/portfolio'

export const Route = createFileRoute('/gallery')({ component: GalleryPage })

function GalleryPage() {
  return (
    <div className="page-wrap">
      <section className="page-intro page-grid gallery-intro">
        <span className="eyebrow">Selected evidence</span>
        <h1>A working archive of<br /><em>ideas in motion.</em></h1>
        <p>
          Screens, studies, and artifacts from multilingual research, search-quality workflows,
          and strategy projects.
        </p>
      </section>

      <section className="gallery-grid page-grid">
        {galleryItems.map((item, index) => (
          <article className={`gallery-card ${item.aspect}`} key={item.src}>
            <a href={item.src} target="_blank" rel="noreferrer" className="gallery-image-link">
              <div className="gallery-image-wrap">
                <OptimizedImage
                  src={item.src}
                  alt={item.title}
                  widths={[420, 720, 1080]}
                  sizes="(max-width: 760px) 92vw, 44vw"
                />
                <span className="gallery-open"><ArrowUpRight size={18} /></span>
              </div>
            </a>
            <div className="gallery-caption">
              <div>
                <h2>{item.title}</h2>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
