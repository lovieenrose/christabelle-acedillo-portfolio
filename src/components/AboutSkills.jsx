import Section from './Section'
import Reveal from './Reveal'
import { about, skills } from '../data/content'

export function About() {
  return (
    <Section id="about" title="About" alt>
      <Reveal>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {about}
        </p>
      </Reveal>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={Math.min(i, 3) * 0.05}>
            <div className="panel h-full transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700 motion-reduce:hover:transform-none">
              <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
