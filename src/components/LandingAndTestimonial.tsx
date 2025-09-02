export default function LandingAndTestimonial() {
  const ChevronRight = () => (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
  const ChevronLeft = () => (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
  const Star = ({ muted = false }: { muted?: boolean }) => (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 ${muted ? 'text-stone-300' : 'text-green-700'}`} fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/>
    </svg>
  )

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left panel: Just Landing list */}
        <div className="w-full md:w-[635px] h-[456px] relative bg-violet-100 rounded-[20px] overflow-hidden">
          <div className="left-[30px] top-[30px] absolute text-black text-3xl font-bold leading-9">Just Landing</div>
          <div className="left-[30px] right-[30px] top-[35px] absolute flex justify-end items-center gap-2 text-black text-sm font-medium uppercase leading-tight">
            <span>View All</span>
            <ChevronRight />
          </div>

          {/* Article 1 */}
          <div className="w-[575px] h-36 left-[30px] top-[126px] absolute bg-white rounded-[20px]">
            <div className="w-40 h-24 left-[20px] top-[20px] absolute rounded-2xl overflow-hidden">
              <img className="w-40 h-24 left-0 top-0 absolute object-cover" src="https://placehold.co/160x100" alt="Article 1" />
            </div>
            <div className="w-96 h-24 left-[200px] top-[20px] absolute">
              <div className="w-80 left-0 top-0 absolute text-black text-lg font-bold leading-snug">How to choose size of Television fit to<br/>your living room</div>
              <div className="w-64 left-0 top-[83px] absolute text-xs leading-none"><span className="text-stone-500">45 Minutes ago in </span><span className="text-black uppercase">Experience</span></div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="w-[575px] h-36 left-[30px] top-[286px] absolute bg-white rounded-[20px]">
            <div className="w-40 h-24 left-[20px] top-[20px] absolute rounded-2xl overflow-hidden">
              <img className="w-40 h-24 left-0 top-0 absolute object-cover" src="https://placehold.co/160x100" alt="Article 2" />
            </div>
            <div className="w-96 h-24 left-[200px] top-[20px] absolute">
              <div className="w-80 left-0 top-0 absolute text-black text-lg font-bold leading-snug">Introduce New Generation of Eluxtro<br/>Washing Machine 2023</div>
              <div className="w-64 left-0 top-[83px] absolute text-xs leading-none"><span className="text-stone-500">2 Days ago in </span><span className="text-black uppercase">Technology</span></div>
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

        {/* Right panel: Best Selling Speakers testimonial */}
        <div className="w-full md:w-[635px] h-[454.33px] relative bg-violet-100 rounded-[20px] overflow-hidden">
          <div className="left-[30px] top-[32px] absolute text-black text-3xl font-bold leading-9">Best Selling Speakers</div>
          <div className="left-auto right-[84px] top-[30px] absolute bg-white rounded-[20px] h-10 w-10 grid place-items-center">
            <ChevronLeft />
          </div>
          <div className="left-auto right-[30px] top-[30px] absolute bg-white rounded-[20px] h-10 w-10 grid place-items-center">
            <ChevronRight />
          </div>

          <div className="w-[575px] h-80 left-[30px] top-[110px] absolute bg-white rounded-[20px]">
            <div className="left-[40px] top-[40px] absolute flex items-center gap-1">
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>
            <div className="left-[144.5px] top-[39.7px] absolute text-black text-lg font-bold leading-snug">Fast shipping and flexiable price!</div>
            <div className="left-[40px] top-[81.47px] absolute text-black text-sm leading-relaxed">
              I used to have experience shopping on much platform as Amozon, Eboy,
              Esto, etc. And see that Swoo Market really great. It’ll be my 1st choice for
              any shopping experience. Competitive price, fast shipping and support
              24/7. Extremely recommended!
            </div>
            <div className="left-[90px] top-[232.04px] absolute text-black text-lg font-bold leading-snug">Drake N.</div>
            <div className="left-[171.94px] top-[239.34px] absolute text-green-700 text-[10px] font-bold uppercase leading-3">Verified Buyer</div>
            <div className="left-[90px] top-[253.24px] absolute text-stone-500 text-xs leading-tight">Brooklyn, Los Angeles</div>
            <img className="w-10 h-10 left-[40px] top-[233.33px] absolute rounded-full" src="https://placehold.co/40x40" alt="Avatar" />
            <div className="left-[343.17px] top-[257.83px] absolute text-orange-300 text-xs font-semibold underline capitalize">Marshall Standmore Speaker / Black</div>
          </div>
        </div>
      </div>
    </section>
  )
}
