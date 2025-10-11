export default function LandingPanel({ images }: { images?: Partial<{ article1: string; article2: string }> }) {
  const defaultImages = {
    article1: 'https://images.unsplash.com/photo-1584697964190-8217b2fcbac5?q=80&w=1200&auto=format&fit=max',
    article2: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=max',
  }
  const merged = { ...defaultImages, ...(images as { article1: string; article2: string }) }

  const ChevronRight = () => (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )

  return (
    <div className="w-full md:flex-none md:basis-[652px] relative bg-violet-100 rounded-[20px] overflow-hidden ">
      {/* Mobile stacked version */}
      <div className="sm:hidden p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-black text-2xl font-bold leading-9">Just Landing</h3>
          <div className="flex items-center gap-1 text-black text-xs font-medium uppercase leading-tight">
            <span>View All</span>
            <ChevronRight />
          </div>
        </div>

        {/* Article 1 */}
        <div className="w-full bg-white rounded-[20px] p-3 flex gap-3">
          <div className="w-40 h-24 rounded-2xl overflow-hidden shrink-0">
            <img className="w-full h-full object-cover" src={merged.article1} alt="Article 1" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-black text-base font-bold leading-snug">How to choose size of Television fit to your living room</div>
            <div className="text-xs leading-none mt-2"><span className="text-stone-500">45 Minutes ago in </span><span className="text-black uppercase">Experience</span></div>
          </div>
        </div>

        {/* Article 2 */}
        <div className="w-full bg-white rounded-[20px] p-3 flex gap-3">
          <div className="w-40 h-24 rounded-2xl overflow-hidden shrink-0">
            <img className="w-full h-full object-cover" src={merged.article2} alt="Article 2" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-black text-base font-bold leading-snug">Introduce New Generation of Eluxtro Washing Machine 2023</div>
            <div className="text-xs leading-none mt-2"><span className="text-stone-500">2 Days ago in </span><span className="text-black uppercase">Technology</span></div>
          </div>
        </div>
      </div>

      {/* Original absolute layout for tablet/desktop */}
      <div className="hidden sm:block w-full h-[456px] relative">
        <div className="left-[30px] top-[30px] absolute text-black text-3xl font-bold leading-9">Just Landing</div>
        <div className="left-[30px] right-[30px] top-[35px] absolute flex justify-end items-center gap-2 text-black text-sm font-medium uppercase leading-tight">
          <span>View All</span>
          <ChevronRight />
        </div>

      {/* Article 1 */}
      <div className="w-[540px] md:w-[600px] h-36 left-[15px] top-[126px] absolute bg-white rounded-[20px]">
        <div className="w-40 h-24 left-[20px] top-[20px] absolute rounded-2xl overflow-hidden">
          <img className="w-40 h-24 left-0 top-0 absolute object-cover" src={merged.article1} alt="Article 1" />
        </div>
        <div className="h-24 left-[200px] right-[20px] top-[20px] absolute text-center">
          <div className="text-black text-lg font-bold leading-snug">How to choose size of Television fit to<br/>your living room</div>
          <div className="text-xs leading-none mt-2"><span className="text-stone-500">45 Minutes ago in </span><span className="text-black uppercase">Experience</span></div>
        </div>
      </div>

      {/* Article 2 */}
      <div className="w-[540px] md:w-[600px] h-36 left-[15px] top-[286px] absolute bg-white rounded-[20px]">
        <div className="w-40 h-24 left-[20px] top-[20px] absolute rounded-2xl overflow-hidden">
          <img className="w-40 h-24 left-0 top-0 absolute object-cover" src={merged.article2} alt="Article 2" />
        </div>
        <div className="h-24 left-[200px] right-[20px] top-[20px] absolute text-center">
          <div className="text-black text-lg font-bold leading-snug">Introduce New Generation of Eluxtro<br/>Washing Machine 2023</div>
          <div className="text-xs leading-none mt-2"><span className="text-stone-500">2 Days ago in </span><span className="text-black uppercase">Technology</span></div>
        </div>
      </div>

      {/* Prev/Next paddles */}
      <div className="w-12 h-20 right-0 top-[226px] absolute bg-white rounded-tl-lg rounded-bl-lg shadow-[0_0_15px_rgba(0,0,0,0.13)] grid place-items-center">
        <span className="text-orange-300 text-[8px]">next</span>
      </div>
      <div className="w-12 h-20 left-0 top-[226px] absolute bg-white rounded-tr-lg rounded-br-lg shadow-[0_0_15px_rgba(0,0,0,0.13)] grid place-items-center">
        <span className="text-orange-300 text-[8px]">prev</span>
      </div>
      </div>
    </div>
  )
}
