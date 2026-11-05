import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24">
      <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
        Open to internships
        <span className="mx-1 text-slate-400" aria-hidden="true">|</span>
        <MapPin size={14} aria-hidden="true" /> {profile.location}
      </p>
      <h1 id="hero-title" className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-5 max-w-2xl text-xl font-medium text-slate-900 dark:text-slate-100 sm:text-2xl">{profile.headline}</p>
      <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg">{profile.intro}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Internship focus areas">
        {profile.focus.map((f) => <li key={f} className="tag">{f}</li>)}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="btn-primary">View projects</a>
        <a href={profile.resume} download className="btn-outline"><Download size={16} aria-hidden="true" /> Download resume</a>
        <a href="#contact" className="btn-outline"><Mail size={16} aria-hidden="true" /> Contact</a>
      </div>

      <div className="mt-6 flex gap-2">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile (opens in new tab)"><Github size={20} /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile (opens in new tab)"><Linkedin size={20} /></a>
      </div>
    </section>
  )
}
