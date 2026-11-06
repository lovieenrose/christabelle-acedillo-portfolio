import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/content'

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const field =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-500 transition-colors focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-blue-400'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (!ENDPOINT) {
      // Fallback when Formspree is not configured: open the visitor's email app.
      const body = `${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + data.get('name'))}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'linkedin.com/in/itschristabelle', href: profile.linkedin },
    { icon: Github, label: 'github.com/lovieenrose', href: profile.github },
  ]

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="max-w-md text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Have a project in mind or want to connect? Send me a message—I’d love to hear from you.
            </p>
            <ul className="mt-6 space-y-4">
              {links.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-3 font-medium text-slate-900 transition-colors duration-150 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-400"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-blue-50 group-hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-400 motion-reduce:group-hover:transform-none">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="panel space-y-4 shadow-sm" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                Email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                Message
              </label>
              <textarea id="message" name="message" rows="5" required className={field} />
            </div>
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
            <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
              <Send size={16} aria-hidden="true" /> {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === 'success' && (
                <span className="font-medium text-emerald-700 dark:text-emerald-400">
                  Message sent. I will reply to your email soon.
                </span>
              )}
              {status === 'error' && (
                <span className="font-medium text-red-700 dark:text-red-400">
                  Message not sent. Try again, or email {profile.email} directly.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
