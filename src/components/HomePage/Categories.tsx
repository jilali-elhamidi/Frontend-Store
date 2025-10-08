import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

type Cat = { label: string; img: string }

const items: Cat[] = [
  { label: 'Gaming', img: 'https://images.unsplash.com/photo-1603484477859-abe6a73f936d?w=200&q=80&auto=format&fit=crop' },
  { label: 'Sport Equip', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&q=80&auto=format&fit=crop' },
  { label: 'Kitchen', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&q=80&auto=format&fit=crop' },
  { label: 'Robot Cleaner', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80&auto=format&fit=crop' },
  { label: 'Mobiles', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=80&auto=format&fit=crop' },
  { label: 'Office', img: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?w=200&q=80&auto=format&fit=crop' },
  { label: 'Cameras', img: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=200&q=80&auto=format&fit=crop' },
  { label: 'Computers', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&q=80&auto=format&fit=crop' },
  { label: 'Televisions', img: 'https://images.unsplash.com/photo-1583225272837-20aa696ecb05?w=200&q=80&auto=format&fit=crop' },
  { label: 'Audios', img: 'https://images.unsplash.com/photo-1518443888341-1043c1d6a4bf?w=200&q=80&auto=format&fit=crop' },
]

export default function Categories() {
  const [viewportRef, embla] = useEmblaCarousel({ dragFree: true, align: 'start', containScroll: 'trimSnaps' })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
      <div>
        {/* Title row */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[22px] font-bold leading-7">Popular Categories</h2>
          <a href="#" className="group inline-flex items-center gap-1 text-sm leading-tight text-gray-700 hover:text-gray-900">
            <span>View All</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button onClick={scrollPrev} aria-label="Previous" className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow ring-1 ring-black/5 p-2 hover:bg-gray-50">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={scrollNext} aria-label="Next" className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white shadow ring-1 ring-black/5 p-2 hover:bg-gray-50">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-700">
              <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden" ref={viewportRef}>
            <div className="flex gap-6">
              {items.map((it) => (
                <div key={it.label} className="shrink-0 w-28">
                  <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-[55px] bg-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
                    <img src={it.img} alt={it.label} className="h-14 w-20 object-contain" />
                  </div>
                  <div className="mt-3 text-center text-[12px] font-bold leading-snug text-black">{it.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

