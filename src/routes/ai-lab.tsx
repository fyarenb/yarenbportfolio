import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/ai-lab')({ component: GalleryPage })

const SHEILA_AI_WEBSITE_URL = 'https://sheila-ai-one.vercel.app/'
const SHEILA_AI_ONEDRIVE_VIDEO_URL =
  'https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F00B4C7A2A10687D3%21s7ea619ce2e804508a534694e0b9a5a1d%3Fithint%3Dvideo%26e%3DPlGWVn%26migratedtospo%3Dtrue&cid=00B4C7A2A10687D3&id=00B4C7A2A10687D3%21s7ea619ce2e804508a534694e0b9a5a1d&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy8wMGI0YzdhMmExMDY4N2QzL0lRRE9HYVotZ0M0SVJhVTBhVTRMbWxvZEFiNXFqUk95bW5aY2ZjSlRfcUFZYjhVP2U9UGxHV1Zu&v=photos'

const AI_MARKETING_PROJECTS = [
  {
    href: '/assets/ai-lab/battlbox-weekly-content.pdf',
    preview: '/assets/ai-lab/previews/battlbox-weekly-content.png',
    title: 'BattlBox - Weekly Content Package',
  },
  {
    href: '/assets/ai-lab/battlbox-claude-project-assignment.pdf',
    preview: '/assets/ai-lab/previews/battlbox-claude-project-assignment.png',
    title: 'BattlBox - Claude Project Assignment',
  },
  {
    href: '/assets/ai-lab/battlbox-copywriting-assignment.pdf',
    preview: '/assets/ai-lab/previews/battlbox-copywriting-assignment.png',
    title: 'BattlBox - Copywriting Assignment',
  },
  {
    href: '/assets/ai-lab/youtube-playbook-battlbox-flyrank.pdf',
    preview: '/assets/ai-lab/previews/youtube-playbook-battlbox-flyrank.png',
    title: 'YouTube Playbook - BattlBox × FlyRank',
  },
  {
    href: '/assets/ai-lab/flyrank-state-of-seo-2026.pdf',
    preview: '/assets/ai-lab/previews/flyrank-state-of-seo-2026.png',
    title: 'FlyRank - State of SEO 2026 Content Pack',
  },
  {
    href: '/assets/ai-lab/flyrank-new-channel-shortlist.pdf',
    preview: '/assets/ai-lab/previews/flyrank-new-channel-shortlist.png',
    title: 'FlyRank - New Channel Shortlist',
  },
  {
    href: '/assets/ai-lab/flyrank-landing-page.pdf',
    preview: '/assets/ai-lab/previews/flyrank-landing-page.png',
    title: 'FlyRank - Landing Page',
  },
  {
    href: '/assets/ai-lab/moon-and-skin-beauty-playbook.pdf',
    preview: '/assets/ai-lab/previews/moon-and-skin-beauty-playbook.png',
    title: 'Moon and Skin - Beauty Marketing Playbook',
  },
  {
    href: '/assets/ai-lab/building-a-brand-ai-can-find.pdf',
    preview: '/assets/ai-lab/previews/building-a-brand-ai-can-find.png',
    title: 'Building a Brand AI Can Find',
  },
  {
    href: '/assets/ai-lab/ad-before-after-analysis.pdf',
    preview: '/assets/ai-lab/previews/ad-before-after-analysis.png',
    title: 'Ad Before/After Analysis',
  },
] as const

function GalleryPage() {
  return (
    <div className="page-wrap">
      <section className="page-intro page-grid gallery-intro ai-lab-intro">
        <span className="eyebrow">AI Lab</span>
      </section>

      <section className="gallery-grid page-grid ai-lab-gallery-grid" aria-label="AI Lab projects">
        <article className="gallery-card ai-lab-card sheila-ai-card">
          <a
            href={SHEILA_AI_ONEDRIVE_VIDEO_URL}
            target="_blank"
            rel="noreferrer"
            className="gallery-image-link"
            aria-label="Open Sheila AI demo video"
          >
            <div className="gallery-image-wrap ai-lab-preview-wrap">
              <img
                src="/assets/ai-lab/previews/sheila-ai-preview.png"
                alt="Sheila AI preview"
                className="ai-lab-preview"
              />
              <span className="ai-lab-open">
                Open <ArrowUpRight size={16} />
              </span>
            </div>
          </a>

          <div className="gallery-caption ai-lab-caption">
            <div>
              <h2>Sheila AI</h2>
              <p>Personal AI agent</p>
              <div className="sheila-links">
                <a
                  href={SHEILA_AI_WEBSITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="sheila-website-link"
                >
                  Website <ArrowUpRight size={16} />
                </a>
                <a
                  href={SHEILA_AI_ONEDRIVE_VIDEO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="sheila-website-link"
                >
                  Demo Video <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </article>

        {AI_MARKETING_PROJECTS.map((item) => (
          <article className="gallery-card ai-lab-card" key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="gallery-image-link"
              aria-label={`Open ${item.title}`}
            >
              <div className="gallery-image-wrap ai-lab-preview-wrap">
                <img
                  src={item.preview}
                  alt={`${item.title} preview`}
                  className="ai-lab-preview"
                  loading="lazy"
                />
                <span className="ai-lab-open">
                  Open <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
            <div className="gallery-caption ai-lab-caption">
              <div>
                <h2>{item.title}</h2>
                <p>AI Marketing Project · PDF</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
