import { useRef, useCallback } from 'react'

export default function BestSellingSpeakers({ images }: { images?: Partial<{ hero: string; card1: string; card2: string; card3: string }> }) {
  const defaults = {
    hero: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    card1: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop',
    card2: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop',
    card3: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
  }
  const merged = { ...defaults, ...(images as { hero: string; card1: string; card2: string; card3: string }) }

  const Heart = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
    </svg>
  )
  const Star = ({ muted = false }: { muted?: boolean }) => (
    <svg viewBox="0 0 20 20" className={`h-3 w-3 ${muted ? 'text-stone-300' : 'text-green-700'}`} fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/>
    </svg>
  )

  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollBy = useCallback((delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }, [])

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative w-[1330px] md:h-[590px] rounded-[20px] bg-violet-100 overflow-hidden">
        {/* Left hero content */}
        <div className="absolute left-[30px] top-[60px]">
          <div className="w-52 h-4 absolute left-[280px] -top-[ - ] hidden" />
        </div>
        <div className="w-full md:w-auto">
          <div className="w-52 h-4 left-[90px] top-[63px] absolute justify-center text-stone-500 text-xs uppercase leading-none">amazon award-winning speaker</div>
          <div className="w-72 h-20 left-[90px] top-[91px] absolute justify-center">
            <span className="text-black text-4xl font-bold leading-10">Devialet Phantom<br/>II </span>
            <span className="text-black text-4xl font-light leading-10">Speaker</span>
          </div>
          <div className="w-16 h-7 left-[90px] top-[214.50px] absolute justify-center text-stone-500 text-[10px] uppercase leading-none">Starting at<br/>Price</div>
          <div className="w-20 h-6 left-[182.20px] top-[219px] absolute justify-center text-green-700 text-2xl leading-relaxed">$1,590</div>
          <img className="w-[420px] h-[240px] left-[90px] top-[270px] absolute object-cover z-0" src={merged.hero} alt="Devialet Phantom II" />
        </div>

        {/* Right list title and arrows */}
        <div className="absolute right-[30px] top-[60px] w-[752px] h-[470px] z-10">
          <div className="w-80 h-9 left-[15px] top-[2px] absolute justify-center text-black text-3xl font-bold leading-9">Best Selling Speakers</div>
          <button onClick={() => scrollBy(-260)} className="w-10 h-10 right-[54px] top-0 absolute bg-white rounded-[20px] grid place-items-center shadow-sm ring-1 ring-black/5 hover:ring-black/10">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-black">
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => scrollBy(260)} className="w-10 h-10 right-0 top-0 absolute bg-white rounded-[20px] grid place-items-center shadow-sm ring-1 ring-black/5 hover:ring-black/10">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-black">
              <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards row */}
          <div ref={scrollerRef} className="w-[752px] h-96 left-1/2 -translate-x-1/2 top-[80px] absolute overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] pb-2">
            <div className="flex gap-4 pr-4 justify-center">
            {/* Card 1 */}
            <div className="w-60 h-96 relative bg-white rounded-[10px] overflow-hidden outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
              <div className="w-60 h-40 left-0 top-[232.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
                <div className="w-52 h-10 left-[15px] top-[30px] absolute justify-center text-black text-sm font-semibold leading-tight">Marshall Stanmore II Wireless<br/>Bluetooth Speaker</div>
                <div className="left-[15px] top-[83px] absolute flex items-center gap-1 text-xs">
                  <Star /> <Star /> <Star /> <Star /> <Star />
                  <div className="ml-2 text-black text-xs leading-tight">(2)</div>
                </div>
                <div className="w-44 h-8 left-[15px] top-[105px] absolute justify-center text-black text-xl leading-loose">$325.00 - $410.00</div>
              </div>
              <div className="w-60 h-14 left-0 top-[1px] absolute">
                <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                  <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
                </div>
                <div className="w-7 h-7 right-[16px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 bg-white grid place-items-center shadow-sm">
                  <Heart />
                </div>
              </div>
              <div className="w-52 h-40 left-[16px] top-[61px] absolute rounded bg-stone-100 overflow-hidden">
                <img className="w-full h-full object-cover" src={merged.card1} alt="Marshall Stanmore II" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-60 h-96 relative bg-white rounded-[10px] overflow-hidden outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
              <div className="w-60 h-40 left-0 top-[229px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
                <div className="w-24 h-6 left-[15px] top-[15px] absolute bg-green-700 rounded-[800px]">
                  <div className="w-16 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">top rated</div>
                </div>
                <div className="w-44 h-5 left-[15px] top-[53.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Bose SoundLink III Speaker</div>
                <div className="left-[15px] top-[86.50px] absolute flex items-center gap-1 text-xs">
                  <Star /> <Star /> <Star /> <Star /> <Star />
                  <div className="ml-2 text-black text-xs leading-tight">(12)</div>
                </div>
                <div className="w-20 h-8 left-[15px] top-[108.50px] absolute justify-center text-black text-xl leading-loose">$149.00</div>
              </div>
              <div className="w-7 h-7 right-[16px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 bg-white grid place-items-center shadow-sm">
                <Heart />
              </div>
              <div className="w-52 h-40 left-[16px] top-[61px] absolute rounded bg-stone-100 overflow-hidden">
                <img className="w-full h-full object-cover" src={merged.card2} alt="Bose SoundLink III" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-60 h-96 relative bg-white rounded-[10px] overflow-hidden outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
              <div className="w-60 h-40 left-0 top-[235.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
                <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px]">
                  <div className="w-6 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">new</div>
                </div>
                <div className="w-48 h-8 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">B&O Beolit 20 Powerful<br/>Portable Wireless Bluetooth</div>
                <div className="w-20 h-8 left-[15px] top-[102px] absolute justify-center text-black text-xl leading-loose">$159.00</div>
              </div>
              <div className="w-7 h-7 right-[16px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 bg-white grid place-items-center shadow-sm">
                <Heart />
              </div>
              <div className="w-52 h-40 left-[16px] top-[61px] absolute rounded bg-stone-100 overflow-hidden">
                <img className="w-full h-full object-cover" src={merged.card3} alt="B&O Beolit 20" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
