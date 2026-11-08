import { ExternalLink } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { certifications, awards, publication } from '../data/content'

function CertificateItem({ c }) {
  return (
    <li className="panel flex h-full flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700 motion-reduce:hover:transform-none">
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{c.name}</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{c.issuer}</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Issued {c.date}
          {c.note ? ` · ${c.note}` : ''}
        </p>
        {c.credentialId && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Credential ID: <span className="font-mono text-slate-700 dark:text-slate-300">{c.credentialId}</span>
          </p>
        )}
      </div>
      {c.url && (
        <div className="mt-4 pt-2">
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link group inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span>Show Credential</span>
            <ExternalLink
              size={13}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:transform-none"
            />
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      )}
    </li>
  )
}

function Item({ i }) {
  return (
    <li className="panel transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700 motion-reduce:hover:transform-none">
      <p className="font-semibold text-slate-900 dark:text-white">{i.name}</p>
      <p className="mt-1 text-sm">{i.issuer}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{i.date}{i.note ? ` · ${i.note}` : ''}</p>
    </li>
  )
}

export default function Credentials() {
  return (
    <Section id="credentials" title="Certifications, awards, and publication">
      <Reveal>
        <h3 className="mb-4 text-xl font-semibold">Certifications</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <CertificateItem key={c.name} c={c} />
          ))}
        </ul>
      </Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="mb-4 text-xl font-semibold">Awards</h3>
          <ul className="grid gap-4">{awards.map((a) => <Item key={a.name} i={a} />)}</ul>
        </Reveal>
        <Reveal>
          <h3 className="mb-4 text-xl font-semibold">Publication</h3>
          <div className="panel transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700 motion-reduce:hover:transform-none">
            <p className="leading-relaxed">{publication.citation}</p>
            <a href={publication.url} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-flex items-center gap-1.5">
              <ExternalLink size={15} aria-hidden="true" /> Read the paper (DOI)<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
