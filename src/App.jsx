import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills } from './components/AboutSkills'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar dark={dark} toggle={() => setDark((d) => !d)} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
