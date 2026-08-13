import { FormEvent, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle2, Linkedin, Mail } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-wrap contact-page page-grid">
      <section className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h1>Let’s make the answer<br /><em>better together.</em></h1>
        <p>
          I’m open to AI evaluation opportunities, search-quality projects, multilingual workflows,
          and thoughtful collaborations.
        </p>
        <div className="social-list">
          <a href="mailto:yarenbirben11@gmail.com"><Mail /><span><small>Email</small>yarenbirben11@gmail.com</span><ArrowUpRight /></a>
          <a href="https://www.linkedin.com/in/fatmayarenbirben" target="_blank" rel="noreferrer"><Linkedin /><span><small>LinkedIn</small>fatmayarenbirben</span><ArrowUpRight /></a>
        </div>
      </section>

      <section className="form-card">
        {status === 'success' ? (
          <div className="form-success" role="status">
            <CheckCircle2 />
            <h2>Message received.</h2>
            <p>Thank you for reaching out. I’ll get back to you soon.</p>
            <button type="button" className="text-link" onClick={() => setStatus('idle')}>Send another note</button>
          </div>
        ) : (
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden-field"><label>Don’t fill this out: <input name="bot-field" /></label></p>
            <div className="field-row">
              <label>Your name<input name="name" required autoComplete="name" placeholder="How should I call you?" /></label>
              <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
            </div>
            <label>What would you like to discuss?<select name="topic" defaultValue="AI evaluation">
              <option>AI evaluation</option><option>Search quality</option><option>Marketing collaboration</option><option>Other</option>
            </select></label>
            <label>Your message<textarea name="message" required rows={6} placeholder="Tell me a little about the project, role, or idea…" /></label>
            {status === 'error' && <p className="form-error" role="alert">Something went wrong. Please email me directly instead.</p>}
            <button className="button button-primary submit-button" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'} <ArrowUpRight size={18} />
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
