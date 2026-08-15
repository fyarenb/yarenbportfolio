import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CalendarDays, FileText, Github, Linkedin, Mail } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  return (
    <div className="page-wrap contact-page page-grid">
      <section className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h1>Let’s make the answer<br /><em>better together.</em></h1>

        <p className="contact-intro">
          I'm open to AI evaluation opportunities, search-quality projects, multilingual workflows,
          and thoughtful collaborations.
        </p>

        <div className="social-list">
          <a href="mailto:yarenbirben11@gmail.com">
            <Mail />
            <span><small>Email</small>yarenbirben11@gmail.com</span>
            <ArrowUpRight />
          </a>

          <a href="https://www.linkedin.com/in/fatmayarenbirben" target="_blank" rel="noreferrer">
            <Linkedin />
            <span><small>LinkedIn</small>fatmayarenbirben</span>
            <ArrowUpRight />
          </a>

          <a href="https://github.com/fyarenb" target="_blank" rel="noreferrer">
            <Github />
            <span><small>GitHub</small>fyarenb</span>
            <ArrowUpRight />
          </a>

          <a href="https://wa.me/905365027574" target="_blank" rel="noreferrer">
            <CalendarDays />
            <span><small className="booking-label">BOOKING</small>Message me on WhatsApp</span>
            <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="form-card">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="mailto:yarenbirben11@gmail.com"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden-field">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div className="field-row">
            <label>
              Your name
              <input name="name" required autoComplete="name"  />
            </label>

            <label>
              Email address
              <input name="email" type="email" required autoComplete="email"  />
            </label>
          </div>

          <label>
            What would you like to discuss?
            <select name="topic" defaultValue="AI evaluation">
              <option>AI evaluation</option>
              <option>Search quality</option>
              <option>Marketing collaboration</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Your message
            <textarea name="message" required rows={6} placeholder="Tell me a little about the project, role, or idea…" />
          </label>

          <button className="button button-primary submit-button" type="submit">
            Send message <ArrowUpRight size={18} />
          </button>
        </form>
      </section>
    </div>
  )
}
