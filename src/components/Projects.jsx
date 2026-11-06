import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import ProjectImage from './Img'
import { projects } from '../data/content'

const isUrl = (u) => /^https?:\/\//.test(u)

function ProjectLinks({ links }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((l) => {
        const isGithub = l.label.toLowerCase().includes('github')
        return (
          <li key={l.label}>
            {isUrl(l.url) ? (
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link group/link inline-flex items-center gap-1.5 transition-colors duration-150"
              >
                {isGithub ? (
                  <Github size={15} aria-hidden="true" className="transition-transform group-hover/link:scale-110 motion-reduce:group-hover/link:transform-none" />
                ) : (
                  <ExternalLink size={15} aria-hidden="true" className="transition-transform group-hover/link:scale-110 motion-reduce:group-hover/link:transform-none" />
                )}
                <span>{l.label}</span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <span className="placeholder">{l.url}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function Tags({ tech }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
      {tech.map((t) => (
        <li
          key={t}
          className={`${t.startsWith('[') ? 'tag italic opacity-70' : 'tag'} transition-colors duration-150 hover:bg-slate-300 dark:hover:bg-slate-700`}
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

const Role = ({ role }) => (
  <p className="mt-3 text-sm">
    <span className="font-semibold text-slate-900 dark:text-white">My role: </span>
    <span className={role.startsWith('[') ? 'placeholder' : ''}>{role}</span>
  </p>
)

function Featured({ p }) {
  return (
    <article className="group rounded-2xl border-2 border-blue-700 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:border-blue-400 dark:bg-slate-900 sm:p-8 motion-reduce:hover:transform-none">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="inline-block rounded-md bg-blue-700 px-2.5 py-1 text-xs font-semibold text-white dark:bg-blue-400 dark:text-slate-950">
          Featured project
        </p>
        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{p.period}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">{p.title}</h3>
            <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">{p.subtitle}</p>
            <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{p.description}</p>
            <Role role={p.role} />
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-6">
          <ProjectImage src={p.image} alt={`${p.title} preview screenshot`} title={p.title} featured />
        </div>
      </div>

      <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
        <Tags tech={p.tech} />
        <div className="mt-4">
          <ProjectLinks links={p.links} />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" alt>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) =>
          p.featured ? (
            <Reveal key={p.title} className="md:col-span-2 lg:col-span-3">
              <Featured p={p} />
            </Reveal>
          ) : (
            <Reveal key={p.title} className="h-full">
              <article className="group panel flex h-full flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:hover:border-slate-700 motion-reduce:hover:transform-none">
                <div className="mb-4">
                  <ProjectImage src={p.image} alt={`${p.title} preview screenshot`} title={p.title} />
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">{p.subtitle}</p>
                <p className={`mt-1 text-xs ${p.period.startsWith('[') ? 'placeholder' : 'text-slate-600 dark:text-slate-400'}`}>
                  {p.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{p.description}</p>
                <Role role={p.role} />
                <Tags tech={p.tech} />
                <div className="mt-auto pt-4">
                  <ProjectLinks links={p.links} />
                </div>
              </article>
            </Reveal>
          )
        )}
      </div>
    </Section>
  )
}
