import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

export default function ProjectImage({ src, alt, title, featured = false }) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div
        className={`flex w-full items-center justify-center border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500 select-none dark:border-slate-800 dark:from-slate-800 dark:to-slate-900 dark:text-slate-400 ${
          featured ? 'aspect-video w-full rounded-xl sm:aspect-[16/9]' : 'aspect-video w-full rounded-lg'
        }`}
        role="img"
        aria-label={`Preview placeholder for ${title}`}
      >
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <div className="rounded-full bg-white/80 p-3 shadow-sm dark:bg-slate-800/80">
            <ImageIcon size={featured ? 28 : 22} className="text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
            {title} Preview
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Add screenshot to <code className="rounded bg-slate-200 px-1 py-0.5 text-[10px] dark:bg-slate-800">public/images/projects/</code>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full overflow-hidden border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 ${
        featured ? 'aspect-video rounded-xl sm:aspect-[16/9]' : 'aspect-video rounded-lg'
      }`}
    >
      <img
        src={src}
        alt={alt || `${title} preview`}
        loading="lazy"
        onError={() => setError(true)}
        className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:transform-none"
      />
    </div>
  )
}
