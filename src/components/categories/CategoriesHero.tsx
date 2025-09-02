import { useCallback, useEffect, useRef, useState } from 'react'

const defaultImages = [
  'https://images.unsplash.com/photo-1520975615370-0f2f6ac8c6a2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
]

type Props = { images?: string[] }

export default function CategoriesHero({ images }: Props) {
  const imgs = images ?? defaultImages
  const scrollPrev = useCallback(() => {
    setSelected((s) => (s - 1 + imgs.length) % imgs.length)
  }, [imgs.length])
  const scrollNext = useCallback(() => {
    setSelected((s) => (s + 1) % imgs.length)
  }, [imgs.length])

  // Autoplay + bullets
  const [selected, setSelected] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const AUTOPLAY_MS = 3500

  // Ensure selected stays in range if images prop changes
  useEffect(() => {
    setSelected((s) => (s % imgs.length + imgs.length) % imgs.length)
  }, [imgs.length])

  // Autoplay loop
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) window.clearInterval(timerRef.current)
      return
    }
    timerRef.current = window.setInterval(() => {
      setSelected((s) => (s + 1) % imgs.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [imgs.length, isPaused])

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 pb-10 ml-6 md:ml-10">
      <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative w-full aspect-[21/9]">
          {/* Fade carousel */}
          <div
            className="absolute inset-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Stacked images */}
            <div className="absolute inset-0">
              {imgs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Hero ${i + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover object-center select-none transition-opacity duration-700 ease-in-out ${
                    selected === i ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              ))}
            </div>

          {/* Arrows */}
          <button aria-label="Previous" onClick={scrollPrev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow ring-1 ring-black/10 hover:bg-white">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="Next" onClick={scrollNext} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow ring-1 ring-black/10 hover:bg-white">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Bullets */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imgs.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setSelected(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  selected === i ? 'bg-green-500' : 'bg-white/70 hover:bg-white'
                } shadow ring-1 ring-black/10`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
