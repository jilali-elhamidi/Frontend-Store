export default function BestWeeklyDeals() {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-[1300px] h-[1171.39px] relative bg-violet-100 rounded-[20px] mx-auto">
        {/* Title */}
        <div className="w-64 h-9 left-[30px] top-[34px] absolute justify-center text-black text-3xl font-bold leading-9">
          Best Weekly Deals
        </div>

        {/* Countdown pill */}
        <div className="w-96 h-11 left-[345.55px] top-[30px] absolute bg-red-600 rounded-[30px]">
          <div className="w-3.5 h-5 left-[30px] top-[11.50px] absolute">
            <div className="w-3.5 h-3.5 left-0 top-[4px] absolute justify-center text-white text-sm font-black leading-none">⏱</div>
          </div>
          <div className="w-20 h-6 left-[52px] top-[10.09px] absolute justify-center text-white text-sm leading-normal">Expires in:</div>
          <div className="w-12 h-6 left-[132.54px] top-[10px] absolute">
            <div className="w-12 h-6 left-0 top-0 absolute justify-center text-white text-base font-medium leading-normal">-132 d</div>
          </div>
          <div className="w-[0.21px] h-5 left-[189.65px] top-[11.50px] absolute justify-center text-white text-sm leading-tight">:</div>
          <div className="w-8 h-6 left-[195.51px] top-[10px] absolute">
            <div className="w-8 h-6 left-0 top-0 absolute justify-center text-white text-base font-medium leading-normal">-9 h</div>
          </div>
          <div className="w-[0.21px] h-5 left-[234.83px] top-[11.50px] absolute justify-center text-white text-sm leading-tight">:</div>
          <div className="w-11 h-6 left-[240.68px] top-[10px] absolute">
            <div className="w-11 h-6 left-0 top-0 absolute justify-center text-white text-base font-medium leading-normal">-35 m</div>
          </div>
          <div className="w-[0.21px] h-5 left-[294.20px] top-[11.50px] absolute justify-center text-white text-sm leading-tight">:</div>
          <div className="w-10 h-6 left-[300.06px] top-[10px] absolute">
            <div className="w-10 h-6 left-0 top-0 absolute justify-center text-white text-base font-medium leading-normal">-45 s</div>
          </div>
        </div>

        {/* Card 1 (left, tall) */}
        <div className="w-60 h-[464.39px] left-[30px] top-[114px] absolute bg-white rounded-[10px] border border-neutral-200 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
          <img className="w-52 h-36 left-[16px] top-[61px] absolute object-cover rounded" src="https://images.unsplash.com/photo-1617093727343-b3e674fb4476?w=600&q=80&auto=format&fit=crop" alt="Air Purifier" />
          <div className="w-60 h-14 left-[1px] top-[1px] absolute">
            <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
              <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
            </div>
            <div className="w-7 h-7 left-[188.59px] top-[15px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
          </div>
          <div className="w-60 h-60 left-[1px] top-[221px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
            <div className="w-20 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
              <div className="w-11 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">15% OFF</div>
            </div>
            <div className="w-36 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Air Purifier with<br/>True HEPA H14 Filter</div>
            <div className="left-[15px] top-[107.50px] absolute flex items-center gap-1 text-green-700 text-xs">
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3 text-stone-300" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <span className="ml-1 text-black text-xs leading-tight">(5)</span>
            </div>
            <div className="left-[15px] top-[132px] absolute text-red-600 text-xl leading-loose">$489.00 </div>
            <div className="left-[108.52px] top-[136.40px] absolute text-neutral-400 text-base line-through leading-7">$619.00</div>
            <div className="w-52 h-[5px] left-[15px] top-[186px] absolute bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="w-12 h-[5px] left-0 top-0 absolute bg-orange-300 rounded-[5px]" />
            </div>
            <div className="left-[15px] top-[206.30px] absolute text-black text-xs leading-tight">Sold: 24 / 80</div>
          </div>
        </div>

        {/* Card 2 (left, short) */}
        <div className="w-60 h-[440px] left-[30px] top-[598.39px] absolute bg-white rounded-[10px] border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
          <img className="w-52 h-36 left-[16px] top-[61px] absolute object-cover rounded" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop" alt="Robot Vacuum" />
          <div className="w-60 h-14 left-[1px] top-[1px] absolute">
            <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
              <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
            </div>
            <div className="w-7 h-7 left-[188.59px] top-[15px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
          </div>
          <div className="w-60 h-60 left-[1px] top-[221px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
            <div className="w-16 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
              <div className="w-10 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs leading-none">5% OFF</div>
            </div>
            <div className="w-44 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Shaork Robot Vacuum with<br/>Self-Empty Base</div>
            <div className="left-[15px] top-[86.50px] absolute flex items-center gap-1 text-green-700 text-xs">
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3 text-stone-300" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <span className="ml-1 text-black text-xs leading-tight">(2)</span>
            </div>
            <div className="left-[15px] top-[104.50px] absolute text-red-600 text-xl leading-loose">$325.00 </div>
            <div className="left-[107.84px] top-[108.90px] absolute text-neutral-400 text-base line-through leading-7">$428.00</div>
            <div className="w-52 h-[5px] left-[15px] top-[158.50px] absolute bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="w-2.5 h-[5px] left-0 top-0 absolute bg-orange-300 rounded-[5px]" />
            </div>
            <div className="left-[15px] top-[170px] absolute text-black text-xs leading-tight">Sold: 1 / 19</div>
          </div>
        </div>

        {/* Card 3 (center large) */}
        <div className="w-[471.19px] h-[924.39px] left-[288.47px] top-[114px] absolute bg-white rounded-[10px] border border-neutral-200 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
          <div className="w-[439px] h-[600px] left-[16px] top-[61px] absolute overflow-hidden rounded-[10px]">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200&q=80&auto=format&fit=crop"
              alt="Espresso Machine"
              className="h-full w-full object-cover rounded-[10px]"
            />
          </div>
          <div className="w-[469.19px] h-14 left-[1px] top-[1px] absolute">
            <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
              <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
            </div>
            <div className="w-7 h-7 left-[424.18px] top-[15px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
          </div>
          {/* Bottom info overlay inside the card */}
          <div className="w-[439px] h-[220px] left-[16px] top-[648px] absolute rounded-b-[10px] bg-gradient-to-t from-white/95 via-white/90 to-white/40 p-4">
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs uppercase">15% OFF</span>
              <span className="px-3 py-1 rounded-full bg-green-700 text-white text-xs uppercase">Top Rated</span>
            </div>
            <div className="text-black text-base font-semibold leading-tight">
              Durotan Manual Espresso Machine, Latte, Cappuccino Maker & Espresso Machine.
            </div>
            <div className="mt-2 flex items-center gap-1 text-green-700 text-xs">
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <span className="ml-1 text-black text-xs leading-tight">(34)</span>
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <div className="text-red-600 text-2xl">$489.00</div>
              <div className="text-neutral-400 text-base line-through">$649.00</div>
            </div>
            <div className="mt-4 h-[5px] w-[360px] bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="h-[5px] w-[220px] bg-orange-300" />
            </div>
            <div className="mt-2 text-black text-xs">Sold: 42 / 120</div>
          </div>
        </div>


        {/* Card 4 (right, top) */}
        <div className="w-60 h-[464.39px] left-[778.13px] top-[114px] absolute bg-white rounded-[10px] border border-neutral-200 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
          <img className="w-52 h-36 left-[16px] top-[61px] absolute object-cover rounded" src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80&auto=format&fit=crop" alt="Smart TV" />
          <div className="w-60 h-14 left-[1px] top-[1px] absolute">
            <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
              <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
            </div>
            <div className="w-7 h-7 left-[188.59px] top-[15px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
              <span className="text-white text-sm">❤</span>
            </div>
          </div>
          <div className="w-60 h-60 left-[1px] top-[221px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
            <div className="w-20 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
              <div className="w-11 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">15% OFF</div>
            </div>
            <div className="w-24 h-6 left-[96.04px] top-[15px] absolute bg-green-700 rounded-[800px]">
              <div className="w-16 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">top rated</div>
            </div>
            <div className="w-52 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Sona QLED Ultra HD 4k Smart<br/>Android TV 59’</div>
            <div className="left-[15px] top-[107.50px] absolute flex gap-1 text-green-700 text-xs">
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
              <span className="ml-1 text-black text-xs leading-tight">(2)</span>
            </div>
            <div className="left-[15px] top-[132px] absolute text-red-600 text-xl leading-loose">$1,759.00 </div>
            <div className="left-[120.48px] top-[136.40px] absolute text-neutral-400 text-base line-through leading-7">$2,069.00</div>
            <div className="w-52 h-[5px] left-[15px] top-[186px] absolute bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="w-4 h-[5px] left-0 top-0 absolute bg-orange-300 rounded-[5px]" />
            </div>
            <div className="left-[15px] top-[206.30px] absolute text-black text-xs leading-tight">Sold: 7 / 85</div>
            {/* scattered stars counts placeholders kept minimal */}
          </div>
        </div>

        {/* Card 5 (right, bottom) */}
        <div className="w-60 h-[440px] left-[778.13px] top-[598.39px] absolute bg-white rounded-[10px] border border-neutral-200 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden">
          <img className="w-52 h-36 left-[16px] top-[61px] absolute object-cover rounded" src="https://images.unsplash.com/photo-1585386959984-a415522316dc?w=800&q=80&auto=format&fit=crop" alt="Robot Vacuum" />
          <div className="w-7 h-7 left-[189.59px] top-[16px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden="true">
              <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
            </svg>
          </div>
          <div className="w-60 h-60 left-[1px] top-[221px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
            <div className="w-20 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
              <div className="w-12 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs leading-none">pre-order</div>
            </div>
            <div className="w-44 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Shaork Robot Vacuum with<br/>Self-Empty Base</div>
            <div className="left-[15px] top-[86.50px] absolute flex items-center gap-1 text-green-700 text-xs">
              <span>★</span><span>★</span><span>★</span><span className="text-stone-300">★</span><span className="text-stone-300">★</span>
              <span className="ml-1 text-black text-xs leading-tight">(1)</span>
            </div>
            <div className="left-[15px] top-[104.50px] absolute text-red-600 text-xl leading-loose">$325.00 </div>
            <div className="left-[107.84px] top-[108.90px] absolute text-neutral-400 text-base line-through leading-7">$428.00</div>
            <div className="w-52 h-[5px] left-[15px] top-[158.50px] absolute bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="w-2.5 h-[5px] left-0 top-0 absolute bg-orange-300 rounded-[5px]" />
            </div>
            <div className="left-[15px] top-[170px] absolute text-black text-xs leading-tight">Sold: 1 / 19</div>
          </div>
        </div>

        {/* Card 6 (far right, top) */}
        <div className="w-60 h-[464.39px] left-[1034.39px] top-[114px] absolute bg-white rounded-[10px] border border-neutral-200 overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
          <img className="w-52 h-36 left-[16px] top-[61px] absolute object-cover rounded" src="https://images.unsplash.com/photo-1599009434802-ca1c76e5f3f6?w=800&q=80&auto=format&fit=crop" alt="Air Purifier" />
          <div className="w-60 h-14 left-[1px] top-[1px] absolute">
            <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
              <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
            </div>
            <div className="w-7 h-7 left-[188.59px] top-[15px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
              <span className="text-white text-sm">❤</span>
            </div>
          </div>
          <div className="w-60 h-60 left-[1px] top-[221px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
            <div className="w-20 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
              <div className="w-11 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">15% OFF</div>
            </div>
            <div className="w-36 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Air Purifier with<br/>True HEPA H14 Filter</div>
            <div className="left-[15px] top-[107.50px] absolute flex items-center gap-1 text-green-700 text-xs">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-stone-300">★</span>
              <span className="ml-1 text-black text-xs leading-tight">(5)</span>
            </div>
            <div className="left-[15px] top-[132px] absolute text-red-600 text-xl leading-loose">$489.00 </div>
            <div className="left-[108.52px] top-[136.40px] absolute text-neutral-400 text-base line-through leading-7">$619.00</div>
            <div className="w-52 h-[5px] left-[15px] top-[186px] absolute bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="w-12 h-[5px] left-0 top-0 absolute bg-orange-300 rounded-[5px]" />
            </div>
            <div className="left-[15px] top-[206.30px] absolute text-black text-xs leading-tight">Sold: 24 / 80</div>
          </div>
        </div>

        {/* Card 7 (far right, bottom) */}
        <div className="w-60 h-[440px] left-[1034.39px] top-[598.39px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)]">
          <img className="w-52 h-36 left-[16px] top-[61px] absolute object-cover rounded" src="https://images.unsplash.com/photo-1519183071298-a2962be96f83?w=800&q=80&auto=format&fit=crop" alt="Camera" />
          <div className="w-7 h-7 left-[189.59px] top-[16px] absolute bg-orange-300 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-300 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden="true">
              <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
            </svg>
          </div>
          <div className="w-60 h-60 left-[1px] top-[221px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
            <div className="w-16 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
              <div className="w-10 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs leading-none">5% OFF</div>
            </div>
            <div className="w-44 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Shaork Robot Vacuum with<br/>Self-Empty Base</div>
            <div className="left-[15px] top-[86.50px] absolute flex items-center gap-1 text-green-700 text-xs">
              <span>★</span><span>★</span><span>★</span><span className="text-stone-300">★</span><span className="text-stone-300">★</span>
              <span className="ml-1 text-black text-xs leading-tight">(1)</span>
            </div>
            <div className="left-[15px] top-[104.50px] absolute text-red-600 text-xl leading-loose">$325.00 </div>
            <div className="left-[107.84px] top-[108.90px] absolute text-neutral-400 text-base line-through leading-7">$428.00</div>
            <div className="w-52 h-[5px] left-[15px] top-[158.50px] absolute bg-slate-200 rounded-[5px] overflow-hidden">
              <div className="w-2.5 h-[5px] left-0 top-0 absolute bg-orange-300 rounded-[5px]" />
            </div>
            <div className="left-[15px] top-[170px] absolute text-black text-xs leading-tight">Sold: 1 / 19</div>
          </div>
        </div>

        {/* CTA bottom */}
        <div className="w-60 h-14 left-[530.08px] top-[1088.39px] absolute bg-white rounded-[800px] grid place-items-center">
          <div className="w-36 h-5 text-center text-black text-sm font-semibold leading-tight">See All Products (63)</div>
        </div>
      </div>
    </section>
  )
}
