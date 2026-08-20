import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { ArrowUpRight, Heart } from 'lucide-react'

import '../styles.css'

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'CV' },
  { to: '/contact', label: 'Contact' },
] as const

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Portfolio of Fatma Yaren Birben, a multilingual Search Quality and AI Evaluation Specialist.',
      },
      { title: 'Fatma Yaren Birben — AI Evaluation Portfolio' },

      { property: 'og:title', content: 'Fatma Yaren Birben — AI Evaluation Portfolio' },
      {
        property: 'og:description',
        content:
          'Portfolio of Fatma Yaren Birben, a multilingual Search Quality and AI Evaluation Specialist.',
      },
      { property: 'og:image', content: 'https://yarenbportfolio.vercel.app/assets/yb-heart-logo.png' },
      { property: 'og:url', content: 'https://yarenbportfolio.vercel.app/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Fatma Yaren Birben Portfolio' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Fatma Yaren Birben — AI Evaluation Portfolio' },
      {
        name: 'twitter:description',
        content:
          'Portfolio of Fatma Yaren Birben, a multilingual Search Quality and AI Evaluation Specialist.',
      },
      { name: 'twitter:image', content: 'https://yarenbportfolio.vercel.app/assets/yb-heart-logo.png' },
    ],
    links: [{ rel: 'icon', href: '/assets/yb-heart-logo.png' }],
  }),
  shellComponent: RootDocument,
  component: SiteLayout,
})

function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Fatma Yaren Birben, home">
          <img src="/assets/yb-heart-logo.png" alt="yb with a heart" />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: 'active' }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href="mailto:yarenbirben11@gmail.com">
          Say hello <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <span className="eyebrow">Based in Türkiye · Working globally</span>
          <p>Thoughtful human judgment for better machine intelligence.</p>

        </div>

        <div className="footer-mark">
          Made with <Heart size={15} fill="currentColor" /> by Yaren
        </div>
      </footer>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
