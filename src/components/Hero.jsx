import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin, User } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  const reduce = useReducedMotion()
  const [photoError, setPhotoError] = useState(false)

  return (
    <section id="home" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-center md:gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 md:justify-start">
            <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
            Open to internships
            <span className="mx-1 text-slate-400" aria-hidden="true">|</span>
            <MapPin size={14} aria-hidden="true" /> {profile.location}
          </p>

          <h1 id="hero-title" className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-medium text-slate-900 dark:text-slate-100 sm:text-2xl">
            {profile.headline}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {profile.intro}
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start" aria-label="Internship focus areas">
            {profile.focus.map((f) => (
              <li key={f} className="tag transition-transform duration-150 hover:scale-105 motion-reduce:hover:transform-none">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href={profile.resume} download className="btn-outline">
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={16} aria-hidden="true" /> Contact
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:justify-start">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className="shrink-0"
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative group">
            {/* Subtle ambient halo gradient */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/25 via-emerald-500/20 to-indigo-600/25 blur-xl transition-all duration-300 group-hover:opacity-100 group-hover:blur-2xl dark:from-blue-500/20 dark:via-emerald-400/15 dark:to-indigo-500/20" />
            
            {/* Photo frame */}
            <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-2 border-slate-200/90 bg-slate-100 shadow-xl ring-4 ring-white/90 transition-all duration-300 group-hover:scale-[1.02] dark:border-slate-700/80 dark:bg-slate-900 dark:ring-slate-900/90 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 md:rounded-3xl motion-reduce:group-hover:transform-none">
              {profile.avatar && !photoError ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  onError={() => setPhotoError(true)}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:transform-none"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 p-4 text-center dark:bg-slate-800">
                  <User size={48} className="text-slate-400 dark:text-slate-500" />
                  <span className="mt-2 text-xs font-semibold text-slate-700 dark:text-slate-300">Profile Photo</span>
                  <span className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Add to <code className="rounded bg-slate-200 px-1 py-0.5 text-[10px] dark:bg-slate-700">public/images/profile.PNG</code></span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
