export default function JustLanding({ images }: { images?: Partial<{ a: string; b: string; c: string; d: string; e: string }> }) {
  const defaultImages: { a: string; b: string; c: string; d: string; e: string } = {
    a: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=max', // Washing Machine
    b: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=max', // Scooter alt
    c: 'https://images.unsplash.com/photo-1518441798258-4a6ccc6f82bc?q=80&w=1200&auto=format&fit=max', // Speaker alt
    d: 'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=1200&auto=format&fit=max', // TV
    e: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=max', // Charger
  }

  const merged = { ...defaultImages, ...(images as { a: string; b: string; c: string; d: string; e: string }) }

  const Heart = () => (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
    </svg>
  )

  const Star = ({ muted = false }: { muted?: boolean }) => (
    <svg viewBox="0 0 20 20" className={`h-3 w-3 ${muted ? 'text-stone-300' : 'text-green-700'}`} fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/>
    </svg>
  )

  const ChevronRight = () => (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-[1330px] h-[656px] relative">
        <div className="w-48 h-9 left-[15px] top-0 absolute justify-center text-black text-3xl font-bold leading-9">Just Landing</div>
        <div className="left-[1186px] top-[6px] absolute flex items-center gap-2 text-right text-black text-sm font-medium uppercase leading-tight">
          <span>View All</span>
          <ChevronRight />
        </div>

        {/* Category chips */}
        <div className="w-32 h-10 left-[15px] top-[76px] absolute bg-orange-300 rounded-[30px] border border-orange-300 grid place-items-center">
          <div className="text-white text-sm leading-tight">TV/Televisions</div>
        </div>
        <div className="w-28 h-10 left-[154.30px] top-[76px] absolute rounded-[30px] border border-neutral-300 grid place-items-center">
          <div className="text-black text-sm leading-tight">PC Gaming</div>
        </div>
        <div className="w-28 h-10 left-[271.83px] top-[76px] absolute rounded-[30px] border border-neutral-300 grid place-items-center">
          <div className="text-black text-sm leading-tight">Computers</div>
        </div>
        <div className="w-24 h-10 left-[388.89px] top-[76px] absolute rounded-[30px] border border-neutral-300 grid place-items-center">
          <div className="text-black text-sm leading-tight">Cameras</div>
        </div>
        <div className="w-24 h-10 left-[491.72px] top-[76px] absolute rounded-[30px] border border-neutral-300 grid place-items-center">
          <div className="text-black text-sm leading-tight">Gadgets</div>
        </div>
        <div className="w-28 h-10 left-[591.67px] top-[76px] absolute rounded-[30px] border border-neutral-300 grid place-items-center">
          <div className="text-black text-sm leading-tight">Smart Home</div>
        </div>
        <div className="w-40 h-10 left-[718.42px] top-[76px] absolute rounded-[30px] border border-neutral-300 grid place-items-center">
          <div className="text-black text-sm leading-tight">Sport Equipments</div>
        </div>

        {/* Cards row */}
        <div className="w-[1300px] h-[501px] left-[15px] top-[155px] absolute overflow-hidden">
          {/* Card A */}
          <div className="w-60 h-[420px] left-0 top-0 absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300">
            <div className="w-60 h-40 left-0 top-[265.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-56 left-[15px] top-[54.50px] absolute text-black text-sm font-semibold leading-tight">TOSHIRO Smart Inveter 12L<br/>Washing Machine</div>
              <div className="w-24 left-[15px] top-[102px] absolute text-black text-xl leading-loose">$1,029.50</div>
            </div>
            <div className="w-7 h-7 right-[16px] top-[16px] absolute rounded-2xl border border-neutral-200 grid place-items-center">
              <Heart />
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-contain" src={merged.a} alt="Washing Machine" />
          </div>

          {/* Card B */}
          <div className="w-60 h-[420px] left-[266px] top-0 absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300">
            <div className="w-60 h-44 left-0 top-[238px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-48 left-[15px] top-[54.50px] absolute text-black text-sm font-semibold leading-tight">TORO Smart Self Balancing<br/>Transporter Scooter</div>
              <div className="left-[15px] top-[107.50px] absolute flex items-center gap-1 text-xs">
                <Star /> <Star /> <Star /> <Star /> <Star />
                <div className="ml-2 text-black text-xs leading-tight">(2)</div>
              </div>
              <div className="w-24 left-[15px] top-[129.50px] absolute text-black text-xl leading-loose">$1,512.90</div>
            </div>
            <div className="w-7 h-7 right-[16px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <Heart />
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-contain" src={merged.b} alt="Scooter" />
          </div>

          {/* Card C */}
          <div className="w-60 h-[420px] left-[532px] top-0 absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300">
            <div className="w-60 h-40 left-0 top-[259px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-24 h-6 left-[76.23px] top-[15px] absolute bg-green-700 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">top rated</div>
              </div>
              <div className="w-44 left-[15px] top-[53.50px] absolute text-black text-sm font-semibold leading-tight">Onyx HK Studio 2 Speaker</div>
              <div className="left-[15px] top-[86.50px] absolute flex items-center gap-1 text-xs">
                <Star /> <Star /> <Star /> <Star /> <Star />
                <div className="ml-2 text-black text-xs leading-tight">(12)</div>
              </div>
              <div className="w-44 left-[15px] top-[108.50px] absolute text-black text-xl leading-loose">$205.00 - $410.00</div>
            </div>
            <div className="w-60 h-14 left-0 top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 right-[16px] top-[15px] absolute rounded-2xl border border-neutral-200 grid place-items-center">
                <Heart />
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-contain" src={merged.c} alt="Onyx HK Studio 2" />
          </div>

          {/* Card D */}
          <div className="w-60 h-[420px] left-[798px] top-0 absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300">
            <div className="w-60 h-40 left-0 top-[265.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-24 h-6 left-[76.23px] top-[15px] absolute bg-orange-300 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">best seller</div>
              </div>
              <div className="w-48 left-[15px] top-[54.50px] absolute text-black text-sm font-semibold leading-tight">Shorp 49” Class FHD (1080p)<br/>Android Led TV</div>
              <div className="w-24 left-[15px] top-[102px] absolute text-black text-xl leading-loose">$3,029.50</div>
            </div>
            <div className="w-7 h-7 right-[16px] top-[16px] absolute rounded-2xl border border-neutral-200 grid place-items-center">
              <Heart />
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-contain" src={merged.d} alt="Android TV" />
          </div>

          {/* Card E */}
          <div className="w-60 h-[420px] left-[1064px] top-0 absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300">
            <div className="w-60 h-44 left-0 top-[238px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px] grid place-items-center">
                <div className="text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-48 left-[15px] top-[54.50px] absolute text-black text-sm font-semibold leading-tight">uClever Boost Cube Mini 12V<br/>Charge</div>
              <div className="left-[15px] top-[107.50px] absolute flex items-center gap-1 text-xs">
                <Star /> <Star /> <Star muted /> <Star muted /> <Star muted />
                <div className="ml-2 text-black text-xs leading-tight">(9)</div>
              </div>
              <div className="w-20 left-[15px] top-[129.50px] absolute text-black text-xl leading-loose">$209.00</div>
            </div>
            <div className="w-60 h-14 left-0 top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 right-[16px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <Heart />
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-contain" src={merged.e} alt="uClever Boost Cube" />
          </div>

          {/* Pager */}
          <div className="w-48 h-8 left-[555px] top-[470px] absolute bg-slate-200 rounded-[20px]">
            <div className="w-2 h-3.5 left-[19.89px] top-[8.50px] absolute text-black text-[7px] leading-none grid place-items-center">prev</div>
            <div className="w-1.5 h-1.5 left-[54px] top-[14px] absolute opacity-20 bg-black rounded" />
            <div className="w-1.5 h-1.5 left-[69px] top-[14px] absolute opacity-20 bg-black rounded" />
            <div className="w-1.5 h-1.5 left-[84px] top-[14px] absolute bg-orange-300 rounded" />
            <div className="w-1.5 h-1.5 left-[99px] top-[14px] absolute opacity-20 bg-black rounded" />
            <div className="w-1.5 h-1.5 left-[114px] top-[14px] absolute opacity-20 bg-black rounded" />
            <div className="w-1.5 h-1.5 left-[129px] top-[14px] absolute opacity-20 bg-black rounded" />
            <div className="w-2 h-3.5 left-[162.89px] top-[8.50px] absolute text-black text-[7px] leading-none grid place-items-center">next</div>
          </div>
        </div>
      </div>
    </section>
  )
}
