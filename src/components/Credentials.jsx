import { ExternalLink } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { certifications, awards, publication } from '../data/content'

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
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((c) => <Item key={c.name} i={c} />)}</ul>
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
