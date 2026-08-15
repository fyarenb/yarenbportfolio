import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Heart, Languages, Map, Waves } from 'lucide-react'

import { OptimizedImage } from '@/components/OptimizedImage'

export const Route = createFileRoute('/about')({ component: AboutPage })

const interests = [
  { icon: Languages, title: 'Languages', text: 'Turkish, English and Italian' },
  { icon: Map, title: 'Travel', text: '9 European countries and counting' },
  { icon: Waves, title: 'Reset', text: 'Swimming, time in nature and animal lover' },
  { icon: BookOpen, title: 'Always', text: 'Reading and learning new concepts' },
]

function AboutPage() {
  return (
    <div className="page-wrap">
      <section className="about-hero page-grid">
        <div>
          <span className="eyebrow about-me-label">About me</span>
          <h1>Analytical by training.<br /><em>Curious by nature.</em></h1>
        </div>
        <div className="about-portrait">
          <OptimizedImage
            src="/assets/profile-portrait.png"
            alt="Fatma Yaren Birben"
            widths={[320, 520]}
            sizes="(max-width: 760px) 75vw, 30vw"
          />
        </div>
      </section>

      <section className="about-story page-grid">
        <p className="story-lead">
          I’m an International Relations graduate from Özyeğin University, where I completed my
          degree fully in English. That background taught me to inspect systems from more than one
          angle—and to notice whose context might be missing.
        </p>
        <div className="story-columns">
          <p>
            Today, I apply that perspective as a Search Quality &amp; AI Evaluation Specialist. I
            classify complex issues, detect hallucinations, judge content quality, and translate
            ambiguous user needs into consistent evaluation decisions.
          </p>
          <p>
            I’m also expanding into AI marketing, where my search and SEO experience helps me think
            about the full path from intent to content to conversion—especially in e-commerce.
          </p>
        </div>
      </section>

      <section className="values-band">
        <div className="page-grid values-row">
          <span className="value-text">Context over assumption</span>
          <Heart className="value-heart" aria-hidden="true" fill="currentColor" />
          <span className="value-text">Evidence over confidence</span>
          <Heart className="value-heart" aria-hidden="true" fill="currentColor" />
          <span className="value-text">People over metrics</span>
        </div>
      </section>

      <section className="interests-section page-grid">
        <div className="section-heading compact">
          <span className="index-number">Off screen</span>
          <div>
            <span className="eyebrow">A little more human</span>
            <h2>What keeps me curious</h2>
          </div>
        </div>

        <div className="interest-grid">
          {interests.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <Link to="/contact" className="button button-outline">
          Start a conversation <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}
