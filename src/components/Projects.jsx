import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { projects } from '../data/content'

const isUrl = (u) => /^https?:\/\//.test(u)

function ProjectLinks({ links }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((l) => (
        <li key={l.label}>
          {isUrl(l.url) ? (
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="link">
              {l.label === 'GitHub' ? <Github size={15} aria-hidden="true" /> : <ExternalLink size={15} aria-hidden="true" />}
              {l.label}<span className="sr-only"> (opens in new tab)</span>
            </a>
          ) : (
            <span className="placeholder">{l.url}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

function Tags({ tech }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
      {tech.map((t) => <li key={t} className={t.startsWith('[') ? 'tag italic opacity-70' : 'tag'}>{t}</li>)}
    </ul>
  )
}

const Role = ({ role }) => (
  <p className="mt-3 text-sm"><span className="font-semibold text-slate-900 dark:text-white">My role: </span>
    <span className={role.startsWith('[') ? 'placeholder' : ''}>{role}</span></p>
)

function Featured({ p }) {
  return (
    <article className="rounded-2xl border-2 border-blue-700 bg-white p-6 dark:border-blue-400 dark:bg-slate-900 sm:p-8">
      <p className="mb-2 inline-block rounded-md bg-blue-700 px-2.5 py-1 text-xs font-semibold text-white dark:bg-blue-400 dark:text-slate-950">Featured project</p>
      <h3 className="text-3xl font-bold">{p.title}</h3>
      <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">{p.subtitle}</p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.period}</p>
      <p className="mt-4 max-w-3xl leading-relaxed">{p.description}</p>
      <Role role={p.role} />
      <ul className="mt-3 max-w-3xl list-disc space-y-1 pl-5 text-sm">
        {p.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <Tags tech={p.tech} />
      <ProjectLinks links={p.links} />
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" alt>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) =>
          p.featured ? (
            <Reveal key={p.title} className="md:col-span-2 lg:col-span-3"><Featured p={p} /></Reveal>
          ) : (
            <Reveal key={p.title} className="h-full">
              <article className="panel flex h-full flex-col">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">{p.subtitle}</p>
                <p className={`mt-1 text-xs ${p.period.startsWith('[') ? 'placeholder' : 'text-slate-600 dark:text-slate-400'}`}>{p.period}</p>
                <p className="mt-3 text-sm leading-relaxed">{p.description}</p>
                <Role role={p.role} />
                <Tags tech={p.tech} />
                <div className="mt-auto"><ProjectLinks links={p.links} /></div>
              </article>
            </Reveal>
          )
        )}
      </div>
    </Section>
  )
}
