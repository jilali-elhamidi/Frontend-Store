export default function SpeakersTestimonial({ avatar }: { avatar?: string }) {
  const defaultAvatar =
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256';
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
    <div className="w-full md:flex-none md:basis-[652px] h-[454.33px] relative bg-violet-100 rounded-[20px] overflow-hidden">
      <div className="left-[30px] top-[32px] absolute text-black text-3xl font-bold leading-9">Best Selling Speakers</div>
      <div className="left-auto right-[84px] top-[30px] absolute bg-white rounded-[20px] h-10 w-10 grid place-items-center">
        <ChevronLeft />
      </div>
      <div className="left-auto right-[30px] top-[30px] absolute bg-white rounded-[20px] h-10 w-10 grid place-items-center">
        <ChevronRight />
      </div>

      <div className="w-[530px] md:w-[600px] h-80 left-[20px] top-[110px] absolute bg-white rounded-[20px] p-6">
        <div className="flex items-center gap-1">
          <Star /> <Star /> <Star /> <Star /> <Star />
        </div>
        <div className="mt-2 text-black text-lg font-bold leading-snug">Fast shipping and flexiable price!</div>
        <div className="mt-3 text-black text-sm leading-relaxed pr-4">
          I used to have experience shopping on much platform as Amozon, Eboy,
          Esto, etc. And see that Swoo Market really great. It’ll be my 1st choice for
          any shopping experience. Competitive price, fast shipping and support
          24/7. Extremely recommended!
        </div>

        <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 rounded-full object-cover" src={avatar || defaultAvatar} alt="Avatar" />
            <div>
              <div className="text-black text-lg font-bold leading-snug">Drake N.</div>
              <div className="flex items-center gap-2">
                <span className="text-green-700 text-[10px] font-bold uppercase leading-3">Verified Buyer</span>
                <span className="text-stone-500 text-xs leading-tight">Brooklyn, Los Angeles</span>
              </div>
            </div>
          </div>
          <div className="text-orange-300 text-xs font-semibold underline text-right">Marshall Standmore Speaker / Black</div>
        </div>
      </div>
    </div>
  )
}
