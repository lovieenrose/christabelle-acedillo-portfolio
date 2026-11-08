import { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

// Shown when a project has no screenshots yet (or an image fails to load).
function ComingSoon({ title, featured }) {
  return (
    <div
      className="flex h-full w-full select-none flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-center dark:from-slate-900 dark:to-slate-800"
      role="img"
      aria-label={`Preview coming soon for ${title}`}
    >
      <div className="rounded-full bg-white p-3 shadow-sm dark:bg-slate-800">
        <ImageIcon size={featured ? 30 : 24} className="text-blue-700 dark:text-blue-400" aria-hidden="true" />
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Preview Coming Soon</p>
      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Screenshots will be added shortly</p>
    </div>
  )
}

function SlideImage({ item, title, featured }) {
  const [error, setError] = useState(false)
  const src = typeof item === 'string' ? item : item.src
  const label = typeof item === 'object' && item.label ? item.label : title
  const caption = typeof item === 'object' && item.caption ? item.caption : null

  if (!src || error) {
    return <ComingSoon title={title} featured={featured} />
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <img
        src={src}
        alt={caption || `${title} - ${label}`}
        loading="lazy"
        onError={() => setError(true)}
        className="h-full w-full object-contain object-center transition-transform duration-300"
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent px-3 py-2 text-left">
          <span className="text-[11px] font-medium text-slate-200 drop-shadow-sm">
            {caption}
          </span>
        </div>
      )}
    </div>
  )
}

export default function ProjectCarousel({ images = [], title = '', featured = false }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const reduce = useReducedMotion()
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Normalize images to array
  const slides = Array.isArray(images) && images.length > 0 ? images : []

  // Wrap around index
  const nextSlide = () => {
    if (slides.length <= 1) return
    setDirection(1)
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    if (slides.length <= 1) return
    setDirection(-1)
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Handle mobile swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 45
    const isRightSwipe = distance < -45
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
    touchStartX.current = null
    touchEndX.current = null
  }

  if (slides.length === 0) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/60 ${
          featured ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-video'
        }`}
      >
        <SlideImage item="" title={title} featured={featured} />
      </div>
    )
  }

  const currentItem = slides[index]
  const currentLabel = typeof currentItem === 'object' && currentItem.label ? currentItem.label : null

  return (
    <div className="group/carousel relative w-full select-none">
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900/[0.03] dark:border-slate-800 dark:bg-slate-950/70 ${
          featured ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-video'
        }`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: direction >= 0 ? 30 : -30 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction >= 0 ? -30 : 30 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="h-full w-full"
          >
            <SlideImage item={slides[index]} title={title} featured={featured} />
          </motion.div>
        </AnimatePresence>

        {/* View / feature badge if label exists */}
        {currentLabel && (
          <div className="absolute left-3 top-3 z-10 rounded-md bg-slate-900/80 px-2 py-1 text-[11px] font-medium text-slate-100 backdrop-blur-sm dark:bg-slate-950/80">
            {currentLabel}
          </div>
        )}

        {/* Slide counter indicator */}
        {slides.length > 1 && (
          <div className="absolute right-3 top-3 z-10 rounded-md bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-slate-100 backdrop-blur-sm dark:bg-slate-950/80">
            {index + 1} / {slides.length}
          </div>
        )}

        {/* Prev / Next controls */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label={`Previous screenshot for ${title}`}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-md backdrop-blur-sm transition-all duration-150 hover:bg-slate-900 hover:scale-105 active:scale-95 focus-visible:outline-white dark:bg-slate-800/80 dark:hover:bg-slate-700 sm:opacity-90 sm:hover:opacity-100 motion-reduce:hover:transform-none"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label={`Next screenshot for ${title}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-md backdrop-blur-sm transition-all duration-150 hover:bg-slate-900 hover:scale-105 active:scale-95 focus-visible:outline-white dark:bg-slate-800/80 dark:hover:bg-slate-700 sm:opacity-90 sm:hover:opacity-100 motion-reduce:hover:transform-none"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Navigation dots */}
      {slides.length > 1 && (
        <div className="mt-2.5 flex items-center justify-center gap-1.5" role="tablist" aria-label={`${title} screenshot slides`}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to screenshot ${i + 1} of ${slides.length}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === index
                  ? 'w-6 bg-blue-600 dark:bg-blue-400'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

