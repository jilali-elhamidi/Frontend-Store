export default function Header() {
  return (
   <header className="w-full flex justify-center bg-white ml-6 md:ml-10">
      <div className="w-[1273.41px] h-28 relative border-b border-neutral-400/60">
        {/* Logo */}
        <div className="w-36 h-12 left-0 top-[30px] absolute">
          <img className="w-36 h-10 left-0 top-[5px] absolute" src="https://placehold.co/150x40" alt="Logo" />
        </div>

        {/* Hotline */}
        <div className="w-56 h-11 left-[757px] top-[32.50px] absolute ">
          <div className="w-11 h-11 left-0 top-0 absolute bg-violet-100 rounded-3xl grid place-items-center">
            {/* Phone icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor"/>
            </svg>
          </div>
          <div className="w-44 h-11 left-[60px] top-0 absolute">
            <div className="w-20 h-5 left-0 top-0 absolute text-black text-xs leading-tight">Hotline 24/7</div>
            <div className="w-44 h-6 left-0 top-[19.50px] absolute text-orange-300 text-xl font-bold leading-normal">(025) 3686 25 16</div>
          </div>
        </div>

        {/* Search */}
        <div className="w-96 h-12 left-[236px] top-[31.50px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-violet-100 overflow-hidden">
          {/* Category pill */}
          <div className="w-36 h-11 left-[1px] top-[1px] absolute bg-violet-100 rounded-tl rounded-bl">
            <div className="w-36 h-11 left-0 top-0 absolute">
              <div className="w-3 h-3 left-[116px] top-[16.50px] absolute">
                {/* caret */}
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="text-neutral-700">
                  <path d="M5 8l5 5 5-5H5z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="w-24 h-5 left-[12px] top-[12.75px] absolute">
              <div className="w-20 h-5 left-0 top-[-0.75px] absolute text-neutral-800 text-xs leading-tight">All Categories</div>
            </div>
          </div>

          {/* Input */}
          <div className="w-60 h-11 left-[140px] top-[1px] absolute bg-white">
            <div className="w-64 h-4 left-[12px] top-[13.75px] absolute">
              <div className="w-28 h-4 left-0 top-0 absolute text-neutral-400 text-xs">Search anything...</div>
            </div>
          </div>

          {/* Search button */}
          <button className="w-10 h-10 left-[378px] top-[3px] absolute bg-orange-300 rounded-[20px] grid place-items-center" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M21 21l-4.35-4.35m1.35-4.65a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Right actions */}
        <div className="w-52 h-9 left-[1065.59px] top-[37px] absolute">
          {/* refresh */}
          <div className="w-6 h-6 left-[25px] top-[5px] absolute">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M20 11a8 8 0 10-2.34 5.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 7v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* heart */}
          <div className="w-6 h-6 left-[77.94px] top-[5px] absolute">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          {/* notification dot over heart */}
          <div className="w-3.5 h-3.5 left-[102.94px] top-0 absolute bg-violet-100 rounded-lg">
            <div className="w-[5px] h-[5px] left-[5px] top-[5px] absolute bg-orange-300 rounded-sm" />
          </div>
          {/* user */}
          <div className="w-6 h-6 left-[130.88px] top-[5px] absolute">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          {/* cart */}
          <div className="w-6 h-6 left-[183.82px] top-[5px] absolute">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          {/* cart badge */}
          <div className="w-5 h-5 left-[207.82px] top-0 absolute bg-orange-300 rounded-[10px] grid place-items-center">
            <span className="text-white text-xs leading-tight">2</span>
          </div>
        </div>
      </div>
    </header>
  )
}
