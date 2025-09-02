import { useEffect, useRef, useState } from 'react'
export type CategoryItem = {
  name: string
  count?: number
  iconUrl: string
  bg: string // tailwind background color for outer card, e.g. 'bg-orange-50'
  discount?: string // e.g. '30%'
}

export type CategoriesStripProps = {
  title?: string
  items?: CategoryItem[]
  autoScroll?: boolean // enable automatic horizontal scroll
  scrollStepPx?: number // pixels per tick
  scrollIntervalMs?: number // interval between ticks
  pauseOnHover?: boolean // pause auto scroll when hovering
}

const defaultItems: CategoryItem[] = [
  { name: 'Televisions', count: 120, iconUrl: 'https://picsum.photos/seed/televisions/50/50', bg: 'bg-orange-50', discount: '30%' },
  { name: 'PC Gaming', count: 86, iconUrl: 'https://picsum.photos/seed/pc-gaming/50/50', bg: 'bg-green-100' },
  { name: 'Computers', count: 210, iconUrl: 'https://picsum.photos/seed/computers/50/50', bg: 'bg-rose-100', discount: '15%' },
  { name: 'Cameras', count: 48, iconUrl: 'https://picsum.photos/seed/cameras/50/50', bg: 'bg-pink-100', discount: '10%' },
  { name: 'Gadgets', count: 59, iconUrl: 'https://picsum.photos/seed/gadgets/50/50', bg: 'bg-indigo-50' },
  { name: 'Smart Home', count: 33, iconUrl: 'https://picsum.photos/seed/smart-home/50/50', bg: 'bg-orange-100' },
  { name: 'Sport ', count: 27, iconUrl: 'https://picsum.photos/seed/sport-equipments/50/50', bg: 'bg-purple-100' },
]

export default function CategoriesStrip({
  title = 'Category',
  items = defaultItems,
  autoScroll = false,
  scrollStepPx = 2,
  scrollIntervalMs = 16,
  pauseOnHover = true,
}: CategoriesStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  const scrollBy = (dx: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dx, behavior: 'smooth' })
  }

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll) return
    const el = scrollRef.current
    if (!el) return

    let raf: number | null = null
    let lastTick = performance.now()

    const tick = (now: number) => {
      if (paused) {
        raf = requestAnimationFrame(tick)
        return
      }

      if (now - lastTick >= scrollIntervalMs) {
        // if reached end, jump back to start
        const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth
        if (atEnd) {
          el.scrollTo({ left: 0 })
        } else {
          el.scrollTo({ left: el.scrollLeft + scrollStepPx })
        }
        lastTick = now
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [autoScroll, scrollIntervalMs, scrollStepPx, paused])

  return (
    <div className="w-full ">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-neutral-900">{title}</h2>
        </div>
        {/* Arrow controls */}
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-260)}
            className="grid h-8 w-8 place-items-center rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.12 10l3.67 3.71a.75.75 0 11-1.06 1.06l-4.2-4.24a.75.75 0 010-1.06l4.2-4.24a.75.75 0 011.06 0z" clipRule="evenodd"/></svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(260)}
            className="grid h-8 w-8 place-items-center rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.88 10 7.2 6.29a.75.75 0 111.06-1.06l4.2 4.24a.75.75 0 010 1.06l-4.2 4.24a.75.75 0 01-1.06 0z" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div className="relative -mx-2 pb-1">
        {/* gradient edge masks */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent" />

        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar"
          onMouseEnter={() => pauseOnHover && setPaused(true)}
          onMouseLeave={() => pauseOnHover && setPaused(false)}
        >
          <div className="flex w-full min-w-max gap-6 px-2">
            {items.map((item) => (
              <div key={item.name} className={`w-52 h-44 relative overflow-hidden rounded-[5px] ${item.bg}`}>
                <div className="w-full h-full absolute inset-0 bg-gradient-to-l from-white via-white to-black/0" />
                <div className="w-48 h-36 left-[15px] top-[15px] absolute bg-white rounded-[5px] shadow-[0px_5px_15px_0px_rgba(88,110,125,0.10)]">
                  <img className="w-12 h-12 left-1/2 -translate-x-1/2 top-[25px] absolute" src={item.iconUrl} alt={item.name} />
                  <div className="w-full top-[85px] absolute">
                    <div className="mx-auto w-32 text-center text-orange-300 text-base font-bold capitalize leading-snug tracking-tight">{item.name}</div>
                  </div>
                  {typeof item.count === 'number' && (
                    <div className="w-full top-[111px] absolute text-center text-neutral-500 text-xs leading-7 tracking-tight">{item.count} Items</div>
                  )}
                  {item.discount && (
                    <div className="absolute right-0 top-0 h-4 w-9 rounded-tr-[5px] rounded-bl-[5px] bg-indigo-500">
                      <div className="absolute inset-0 grid place-items-center text-[10px] text-white font-semibold leading-none tracking-tight">
                        {item.discount}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
