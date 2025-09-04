import { useRef, useState, useEffect, useCallback } from 'react'
import ProductDescriptionCard from './ProductDescriptionCard'
import ProductSpecificationsCard from './ProductSpecificationsCard'
import ProductReviewsCard from './ProductReviewsCard'

export default function ProductInfoTabs() {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const tabs = [
    { id: 0, label: 'Description' },
    { id: 1, label: 'Product Details' },
    { id: 2, label: 'Reviews' },
  ]

  const scrollToIndex = useCallback((idx: number) => {
    const el = slidesRef.current
    if (!el) return
    const width = el.clientWidth
    el.scrollTo({ left: idx * width, behavior: 'smooth' })
  }, [])

  // Observe scroll to update active tab
  useEffect(() => {
    const el = slidesRef.current
    if (!el) return
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const width = el.clientWidth
        const idx = Math.round(el.scrollLeft / Math.max(1, width))
        setActive(idx)
        ticking = false
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="w-full">
      {/* Tabs header */}
      <div className="border-b border-neutral-200">
        <div className="flex gap-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => scrollToIndex(t.id)}
              className={`relative -mb-px py-3 text-sm transition-colors ${
                active === t.id ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              {t.label}
              {/* underline indicator */}
              <span
                className={`pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[2px] rounded bg-neutral-900 transition-opacity ${
                  active === t.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Slides: horizontal scroller with snap */}
      <div
        ref={slidesRef}
        className="mt-4 flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] gap-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Each slide takes full container width */}
        <div className="min-w-full snap-start">
          <ProductDescriptionCard />
        </div>
        <div className="min-w-full snap-start">
          <ProductSpecificationsCard />
        </div>
        <div className="min-w-full snap-start">
          <ProductReviewsCard />
        </div>
      </div>
    </div>
  )
}
