import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

import { caseStudies } from '@/lib/portfolio'

export const Route = createFileRoute('/projects')({ component: ProjectsPage })

function ProjectsPage() {
  return (
    <div className="page-wrap">
      <section className="page-intro page-grid projects-intro">
        <span className="eyebrow">Projects &amp; case studies</span>
        <h1>Complex questions.<br /><em>Clear decisions.</em></h1>
        <p>
          A selection of evaluation, localization, search, and marketing work—organized around
          the problem, the judgment call, and the outcome.
        </p>
      </section>

      <section className="case-study-list page-grid">
        {caseStudies.map((study) => (
          <article className="case-study" id={study.slug} key={study.slug}>
            <div className="case-meta">
              <span>{study.number}</span>
              <p>{study.category}</p>
            </div>

            <div className="case-body">
              <h2>{study.title}</h2>

              <div className="case-columns">
                <div>
                  <h3>The challenge</h3>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <h3>My approach</h3>
                  <p>{study.action}</p>
                </div>
                <div className="case-result">
                  <h3>The signal</h3>
                  <p>{study.result}</p>
                </div>
              </div>

              <div className="tag-row">
                {study.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              {study.sampleUrl && (
                <a
                  className="sample-button"
                  href={study.sampleUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View a sample <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="project-cta page-grid">
        <p>Have a model, market, or messy question that needs a sharper human lens?</p>
        <a href="mailto:yarenbirben11@gmail.com" className="button button-primary cta-yellow">
          Let’s compare notes <ArrowUpRight size={18} />
        </a>
      </section>
    </div>
  )
}
