import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { profile, nav } from '../data/content'

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-display text-lg font-bold text-slate-900 dark:text-white">{profile.shortName}</a>
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm font-medium transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-400">{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button onClick={toggle} className="icon-btn" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="icon-btn lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-slate-200 px-4 py-2 dark:border-slate-800 lg:hidden">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-200/60 dark:hover:bg-slate-800">{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}