import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-1">
          <a href="#home" className="mr-3 font-medium hover:underline">Back to top</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub (opens in new tab)"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn (opens in new tab)"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
