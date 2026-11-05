export default function Section({ id, title, children, alt = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={alt ? 'bg-white dark:bg-slate-900/40' : ''}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 id={`${id}-title`} className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}
