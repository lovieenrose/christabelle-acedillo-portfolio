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
              <div className="panel">
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className="mt-1">{e.program}</p>
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
