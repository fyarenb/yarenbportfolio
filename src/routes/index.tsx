import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDownRight, ArrowRight, Check, Globe2, Search, ShieldCheck, Sparkles } from 'lucide-react'

import { caseStudies } from '@/lib/portfolio'

export const Route = createFileRoute('/')({ component: HomePage })

const criteria = [
  { icon: Search, label: 'Relevance', detail: 'Does it answer the real intent?' },
  { icon: ShieldCheck, label: 'Safety', detail: 'A non-negotiable baseline.' },
  { icon: Check, label: 'Accuracy', detail: 'Can every claim hold up?' },
  { icon: Sparkles, label: 'Readability', detail: 'Clear, useful, human language.' },
]

function HomePage() {
  return (
    <>
      <section className="hero page-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow hero-welcome">Welcome · Merhaba · Ciao</span>
          <h1>
            I make AI answers
            <em>worth trusting.</em>
          </h1>
          <p className="hero-intro">
            Hello, I’m <strong>Fatma Yaren Birben</strong> — a Search Quality &amp; AI Evaluation
            Specialist working across large-scale search engines and global e-commerce platforms.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              Explore my work <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="text-link">
              Get to know me <ArrowDownRight size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal delay-1">
          <div className="portrait-frame">
            <div className="portrait-inner">
              <img
                src="/assets/yb-heart-logo.png"
                alt="Fatma Yaren Birben yb heart logo"
                className="portrait portfolio-mark"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of expertise">
        <div>
          <span>LLM Evaluation</span><i>♥</i><span>Search Quality</span><i>♥</i>
          <span>Data Annotation</span><i>♥</i><span>AI Marketing</span><i>♥</i>
          <span>Multilingual QA</span>
        </div>
      </section>

      <section className="section page-grid approach-section">
        <div className="section-heading">
          <span className="index-number">01</span>
          <div>
            <span className="eyebrow">My evaluation lens</span>
            <h2>Quality is a system, not a feeling.</h2>
          </div>
        </div>
        <div className="criteria-grid">
          {criteria.map(({ icon: Icon, label, detail }, index) => (
            <article className="criterion" key={label}>
              <Icon aria-hidden="true" />
              <h3>{label}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured-work">
        <div className="page-grid section-heading">
          <span className="index-number">02</span>
          <div>
            <span className="eyebrow">Selected case studies</span>
            <h2>Work that turns judgment into signal.</h2>
          </div>
        </div>

        <div className="featured-list page-grid">
          {caseStudies.slice(0, 3).map((study, index) => (
            <Link to="/projects" hash={study.slug} className="featured-row" key={study.slug}>
              <span className="featured-index">0{index + 1}</span>
              <div>
                <p>{study.category}</p>
                <h3>{study.title}</h3>
              </div>
              <span className="featured-result">{study.resultShort}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="page-grid section-end-link">
          <Link to="/projects" className="button button-outline">
            View all case studies <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section page-grid home-about">
        <div className="home-about-art" aria-hidden="true">
          <Globe2 />
        </div>
        <div>
          <span className="eyebrow">International perspective</span>
          <h2>Curiosity is my favorite quality-control tool.</h2>
          <p>
            My International Relations background trained me to look for context, power,
            perspective, and what gets lost in translation. Today, I bring that same rigor to AI.
          </p>
          <Link to="/about" className="text-link">More about my path <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
