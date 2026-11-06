import Section from './Section'
import Reveal from './Reveal'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" title="Education" alt>
      <ul className="space-y-4">
        {education.map((e) => (
          <li key={e.school}>
            <Reveal>
              <div className="panel transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700 motion-reduce:hover:transform-none">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{e.school}</h3>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{e.program}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{e.period}</p>
                {e.note && <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">{e.note}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
