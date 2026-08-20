import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, CalendarDays, CircleCheck, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from "react"

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)

  const [feedbackText, setFeedbackText] = useState("")
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [feedbackSending, setFeedbackSending] = useState(false)
  const [feedbackError, setFeedbackError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setSending(true)
    setError(false)
    const form = event.currentTarget
    const formData = new FormData(form)
    try {
      const response = await fetch('https://formspree.io/f/xppabpvq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  async function handleFeedbackSubmit() {
    if (!feedbackText.trim()) return
    setFeedbackSending(true)
    setFeedbackError(false)
    try {
      const response = await fetch('https://formspree.io/f/mbgrwyvv', {
        method: 'POST',
        body: JSON.stringify({ feedback: feedbackText }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        setFeedbackSubmitted(true)
        setFeedbackText("")
      } else {
        setFeedbackError(true)
      }
    } catch (err) {
      setFeedbackError(true)
    } finally {
      setFeedbackSending(false)
    }
  }

  return (
    <div className="page-wrap contact-page page-grid">
      <section className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h1>Let’s make the answer<br /><em>better together.</em></h1>
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
      <section className="contact-form-side">
        <section className="form-card">
          {submitted ? (
            <div className="form-success">
              <CircleCheck />
              <h2>Thank you!</h2>
              <p>Your message has been sent successfully. I'll get back to you soon.</p>
            </div>
          ) : (
            <form name="contact" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Your name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email address
                  <input name="email" type="email" required autoComplete="email" />
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
              <button className="button button-primary submit-button" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send message'} <ArrowUpRight size={18} />
              </button>
              {error && (
                <p className="form-error">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </section>
        <section className="feedback-card">
          <span className="eyebrow">Feedback / Suggestions</span>
          {feedbackSubmitted ? (
            <div className="form-success">
           <CircleCheck />
             <h2>Thank you!</h2>
             <p>Your feedback has been sent successfully.</p>
             </div>
          ) : (
            <>
              <textarea
                className="feedback-input"
                placeholder="Share your feedback or suggestion..."
                aria-label="Feedback or suggestions"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
              <button
                type="button"
                className="feedback-submit"
                onClick={handleFeedbackSubmit}
                disabled={feedbackSending}
              >
                {feedbackSending ? 'Sending...' : 'Submit Feedback'}
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              {feedbackError && (
                <p className="form-error">Something went wrong. Please try again.</p>
              )}
            </>
          )}
        </section>
      </section>
    </div>
  )
}