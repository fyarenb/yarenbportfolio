import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/resume')({ component: ResumePage })

function ResumePage() {
  return (
    <div className="page-wrap resume-page page-grid">
      <section className="page-intro resume-intro">
        <span className="eyebrow">CV / RESUME</span>
        <h1>Fatma Yaren<br /><em>Birben.</em></h1>
        <p>
          Search Quality &amp; AI Evaluation Specialist with an analytical, multilingual,
          and evidence-first approach to AI, search, and digital work.
        </p>

        <div className="resume-actions">
          <a className="button button-primary" href="/assets/FYB-CV.docx" download>
            Download CV
          </a>
        </div>
      </section>

      <section className="resume-grid">
        <article className="resume-card">
          <span className="eyebrow">Positioning</span>
          <h2 className="resume-orange-title">Human judgment for better machine intelligence.</h2>
          <p>
            I work across search quality, AI evaluation, multilingual data annotation,
            and AI marketing. My approach combines context, evidence, consistency, and
            user intent rather than relying on surface-level confidence.
          </p>
        </article>

        <article className="resume-card">
          <span className="eyebrow">Education</span>
          <h2 className="resume-orange-title">Özyeğin University</h2>
          <p>International Relations — completed fully in English, with 50 percent scholarship.</p>
        </article>

        <article className="resume-card">
          <span className="eyebrow">Core capabilities</span>
          <div className="resume-tags">
            <span>LLM Evaluation</span>
            <span>Search Quality</span>
            <span>Data Annotation</span>
            <span>Multilingual QA</span>
            <span>SEO</span>
            <span>AI Marketing</span>
            <span>E-commerce Analysis</span>
            <span>Research</span>
          </div>
        </article>

        <article className="resume-card">
          <span className="eyebrow">Selected work</span>
          <ul className="resume-bullet-list">
            <li>LLM response evaluation and hallucination detection</li>
            <li>Search Page Quality Evaluation and Side-by-Side judging</li>
            <li>Turkish / English multilingual relevance work</li>
            <li>Trendyol digital marketing strategy analysis</li>
            <li>Italian-language international brand research</li>
          </ul>
          <Link to="/projects" className="text-link">
            See project details <ArrowRight size={18} />
          </Link>
        </article>

        <article className="resume-card">
          <span className="eyebrow">Languages</span>
          <div className="resume-language-grid">
            <span>Turkish</span>
            <span>English</span>
            <span>Italian</span>
            <span>Korean</span>
          </div>
        </article>


      </section>
    </div>
  )
}
