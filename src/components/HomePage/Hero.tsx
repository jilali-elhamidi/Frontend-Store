import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

export default function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' })

  const tvSlides = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80&auto=format&fit=crop',
  ]

  const [selected, setSelected] = useState(0)
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  useEffect(() => {
    if (!embla) return
    const onSelect = () => setSelected(embla.selectedScrollSnap())
    embla.on('select', onSelect)
    onSelect()
    return () => {
      const anyEmbla = embla as unknown as { off?: (evt: string, cb: () => void) => void }
      anyEmbla.off?.('select', onSelect)
    }
  }, [embla])

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 pb-8 ml-6 md:ml-20">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left: Big TV card with Embla carousel (2 slides) */}
        <div className="relative md:col-span-2 h-[480px] rounded-[20px] overflow-hidden">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {tvSlides.map((src) => (
                <div key={src} className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
                  <img src={src} alt="Android TV" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute left-[96px] top-[56.92px] text-white leading-10">
                    <div className="text-4xl font-extralight">EKO 40"<br/>Android<br/>TV</div>
                  </div>
                  <div className="absolute left-[96px] top-[199.92px] uppercase text-white text-xs leading-tight">
                    Smart Full HD<br/>Android TV with<br/>Google Assistant
                  </div>
                  <button className="absolute left-[96px] top-[319.09px] h-20 w-36 rounded-full bg-orange-300 text-white">
                    <span className="absolute left-12 top-4 text-sm font-semibold leading-tight">Shop<br/>Now</span>
                  </button>
                </div>
              ))}
            </div>
            {/* Functional arrows */}
            <button onClick={scrollPrev} aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/5 hover:bg-white">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-800"><path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={scrollNext} aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/5 hover:bg-white">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-gray-800"><path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Pager in exact small rounded container (absolute positions) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[399px] w-32 h-8 relative bg-slate-200 rounded-[20px]">
              <button
                onClick={scrollPrev}
                className="left-[19.89px] top-[8.50px] absolute text-black text-[7px] font-normal font-['Inter'] leading-none uppercase whitespace-nowrap"
              >
                prev
              </button>
              <span
                className={`w-1.5 h-1.5 left-[54px] top-[14px] absolute rounded ${selected === 0 ? 'bg-black' : 'opacity-20 bg-black'}`}
              />
              <span
                className={`w-1.5 h-1.5 left-[69px] top-[14px] absolute rounded ${selected === 1 ? 'bg-black' : 'opacity-20 bg-black'}`}
              />
              <button
                onClick={scrollNext}
                className="left-[102.89px] top-[8.50px] absolute text-black text-[7px] font-normal font-['Inter'] leading-none uppercase whitespace-nowrap"
              >
                next
              </button>
            </div>
          </div>
        </div>

        {/* Right: Humidifying Fan card */}
        <div className="relative h-[480px] rounded-[20px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900&q=80&auto=format&fit=crop"
            alt="Humidifying Fan"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-violet-600/60" />
          <div className="absolute left-1/2 top-8 -translate-x-1/2 text-center text-white">
            <div className="text-3xl font-bold leading-9">Humidifying Fan</div>
            <div className="mt-1 text-xs">From $299</div>
          </div>
          <button className="absolute left-1/2 top-28 -translate-x-1/2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow">
            Discover Now
          </button>
        </div>

        {/* Bottom row: three product cards under the left hero span 2 columns */}
        <div className="md:col-span-3 grid gap-6 md:grid-cols-3">
          {/* iPad mini 2022 */}
          <div className="relative h-56 rounded-[20px] overflow-hidden bg-amber-50">
            <img src="https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&q=80&auto=format&fit=crop" alt="iPad mini" className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <div className="absolute left-6 top-6">
              <div className="text-3xl font-bold leading-9">iPad mini<br/>2022</div>
              <div className="mt-1 text-xs text-stone-500">Mega Power in mini size</div>
              <button className="mt-4 rounded-full bg-neutral-800 px-4 py-2 text-xs font-semibold text-white">Shop Now</button>
            </div>
          </div>

          {/* Air Purifier */}
          <div className="relative h-56 rounded-[20px] overflow-hidden bg-gray-900 text-white">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop" alt="Air Purifier" className="absolute inset-0 h-full w-full object-cover opacity-50" />
            <div className="absolute left-6 top-6">
              <div className="text-xl font-medium leading-normal">Air<br/>Purifier</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[10px] uppercase text-neutral-400">from</span>
                <span className="text-lime-300 text-xl">$169</span>
              </div>
            </div>
          </div>

          {/* Washing Machine */}
          <div className="relative h-56 rounded-[20px] overflow-hidden bg-slate-200 text-white">
            <img src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=1200&q=80&auto=format&fit=crop" alt="Washing Machine" className="absolute inset-0 h-full w-full object-cover opacity-60" />
            <div className="absolute left-6 top-6">
              <div className="uppercase text-[10px]">washing machine</div>
              <div className="mt-1 text-xl font-medium leading-normal">Anatico<br/>Max 2</div>
              <button className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
