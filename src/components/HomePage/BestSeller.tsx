export default function BestSeller() {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full h-[656px] relative">
        <div className="w-40 h-9 left-[15px] top-0 absolute justify-center text-black text-3xl font-bold leading-9">Best Seller</div>
        <div className="w-16 h-5 left-[1237.81px] top-[7.50px] absolute text-right justify-center text-black text-sm font-medium uppercase leading-tight">View All </div>
        <div className="w-1.5 h-3.5 left-[1309.73px] top-[11.50px] absolute text-right justify-center text-black leading-none">
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
            <path d="M7.293 14.707a1 1 0 0 1 0-1.414L9.586 11 7.293 8.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0z"/>
          </svg>
        </div>

        {/* Tabs */}
        <div className="w-20 h-10 left-[15px] top-[76px] absolute bg-orange-300 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-orange-300">
          <div className="w-12 h-5 left-[17px] top-[9px] absolute text-center justify-center text-white text-sm leading-tight">Top 30</div>
        </div>
        <div className="w-28 h-10 left-[105.36px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-20 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">Televisions</div>
        </div>
        <div className="w-28 h-10 left-[222.25px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-20 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">PC Gaming</div>
        </div>
        <div className="w-28 h-10 left-[339.78px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-20 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">Computers</div>
        </div>
        <div className="w-24 h-10 left-[456.84px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-14 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">Cameras</div>
        </div>
        <div className="w-24 h-10 left-[559.67px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-14 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">Gadgets</div>
        </div>
        <div className="w-28 h-10 left-[659.63px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-20 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">Smart Home</div>
        </div>
        <div className="w-40 h-10 left-[786.38px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
          <div className="w-28 h-5 left-[17px] top-[9px] absolute text-center justify-center text-black text-sm leading-tight">Sport Equipments</div>
        </div>

        {/* Cards row */}
        <div className="w-[1300px] h-[501px] left-[15px] top-[155px] absolute overflow-hidden">
          {/* Card 1 */}
          <div className="w-60 h-96 left-0 top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
            <div className="w-60 left-[1px] bottom-0 absolute bg-gradient-to-t from-white/95 via-white/90 to-white/40 rounded-b-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-sky-400 rounded-[800px] text-white text-xs uppercase">new</span>
                <span className="px-3 py-1 bg-orange-300 rounded-[800px] text-white text-xs uppercase">best seller</span>
              </div>
              <div className="text-black text-sm font-semibold leading-tight mb-2">Shorp 49” Class FHD (1080p)<br/>Android Led TV</div>
              <div className="text-black text-xl leading-loose">$3,029.50</div>
            </div>
            <div className="w-7 h-7 left-[190px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/tv-oled/204/160" alt="Shorp 49” Android LED TV" loading="lazy" />
          </div>

          {/* Card 2 */}
          <div className="w-60 h-96 left-[266px] top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
            <div className="w-60 left-[1px] bottom-0 absolute bg-gradient-to-t from-white/95 via-white/90 to-white/40 rounded-b-[10px] p-4">
              <div className="mb-2">
                <span className="px-3 py-1 bg-orange-300 rounded-[800px] text-white text-xs uppercase">best seller</span>
              </div>
              <div className="text-black text-sm font-semibold leading-tight">Gigabyte PC Gaming Case,<br/>Core i7, 32GB Ram</div>
              <div className="mt-2 flex items-center gap-1 text-green-700 text-xs">
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <span className="ml-1 text-black text-xs leading-tight">(2)</span>
              </div>
              <div className="mt-2 text-black text-xl leading-loose">$1,279.00</div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[189px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/gaming-setup/204/160" alt="Gigabyte PC Gaming Case Core i7" loading="lazy" />
          </div>

          {/* Card 3 */}
          <div className="w-60 h-96 left-[532px] top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
            <div className="w-60 left-[1px] bottom-0 absolute bg-gradient-to-t from-white/95 via-white/90 to-white/40 rounded-b-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-orange-300 rounded-[800px] text-white text-xs uppercase">best seller</span>
                <span className="px-3 py-1 bg-green-700 rounded-[800px] text-white text-xs uppercase">top rated</span>
              </div>
              <div className="text-black text-sm font-semibold leading-tight">Sceptre 32” Internet TV</div>
              <div className="mt-2 flex items-center gap-1 text-green-700 text-xs">
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <span className="ml-1 text-black text-xs leading-tight">(12)</span>
              </div>
              <div className="mt-2 text-black text-xl leading-loose">$610.00</div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[189px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/living-room-tv/204/160" alt="Sceptre 32” Internet TV" loading="lazy" />
          </div>

          {/* Card 4 */}
          <div className="w-60 h-96 left-[798px] top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
            <div className="w-60 left-[1px] bottom-0 absolute bg-gradient-to-t from-white/95 via-white/90 to-white/40 rounded-b-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-sky-400 rounded-[800px] text-white text-xs uppercase">new</span>
                <span className="px-3 py-1 bg-orange-300 rounded-[800px] text-white text-xs uppercase">best seller</span>
              </div>
              <div className="text-black text-sm font-semibold leading-tight mb-2">Shorp 49” Class FHD (1080p)<br/>Android Led TV</div>
              <div className="text-black text-xl leading-loose">$3,029.50</div>
            </div>
            <div className="w-7 h-7 left-[190px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/home-theater/204/160" alt="Shorp 49” Android LED TV" loading="lazy" />
          </div>

          {/* Card 5 */}
          <div className="w-60 h-96 left-[1064px] top-0 absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
            <div className="w-60 left-[1px] bottom-0 absolute bg-gradient-to-t from-white/95 via-white/90 to-white/40 rounded-b-[10px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-red-600 rounded-[800px] text-white text-xs uppercase">15% OFF</span>
                <span className="px-3 py-1 bg-orange-300 rounded-[800px] text-white text-xs uppercase">best seller</span>
              </div>
              <div className="text-black text-sm font-semibold leading-tight">Durotan Manual Espresso<br/>Machine, Coffe Maker</div>
              <div className="mt-2 flex items-center gap-1 text-green-700 text-xs">
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
                <span className="ml-1 text-black text-xs leading-tight">(34)</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-red-600 text-xl leading-loose">$489.00</span>
                <span className="text-neutral-400 text-base line-through leading-7">$619.00</span>
              </div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[189px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/espresso-machine/204/160" alt="Durotan Manual Espresso Machine" loading="lazy" />
          </div>

          {/* Pager */}
          <div className="w-48 h-8 left-[555px] top-[470px] absolute bg-slate-200 rounded-[20px]">
            <div className="w-2 h-3.5 left-[19.89px] top-[8.50px] absolute justify-center text-black text-[7px] leading-none">prev</div>
            <div className="w-1.5 h-1.5 left-[54px] top-[14px] absolute opacity-20 bg-black rounded"></div>
            <div className="w-1.5 h-1.5 left-[69px] top-[14px] absolute opacity-20 bg-black rounded"></div>
            <div className="w-1.5 h-1.5 left-[84px] top-[14px] absolute bg-orange-300 rounded"></div>
            <div className="w-1.5 h-1.5 left-[99px] top-[14px] absolute opacity-20 bg-black rounded"></div>
            <div className="w-1.5 h-1.5 left-[114px] top-[14px] absolute opacity-20 bg-black rounded"></div>
            <div className="w-1.5 h-1.5 left-[129px] top-[14px] absolute opacity-20 bg-black rounded"></div>
            <div className="w-2 h-3.5 left-[162.89px] top-[8.50px] absolute justify-center text-black text-[7px] leading-none">next</div>
          </div>
        </div>
      </div>
    </section>
  )
}
