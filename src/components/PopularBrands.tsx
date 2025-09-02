export default function PopularBrands() {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-[1330px] h-96 relative overflow-hidden">
        <div className="w-[1300px] h-96 left-[15px] top-0 absolute bg-violet-100 rounded-[20px]">
          <div className="absolute left-[30px] right-[30px] top-[30px] flex items-center justify-between">
            <div className="text-black text-3xl font-bold leading-9">Popular Brands</div>
            <a href="#" className="inline-flex items-center gap-2 text-black text-sm font-medium uppercase leading-tight hover:underline">
              <span>View all</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0">
                <path d="M7 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="w-96 h-64 left-[-393.35px] top-[106px] absolute rounded-[20px] overflow-hidden">
            <img className="w-96 h-64 left-0 top-0 absolute object-cover" src="https://picsum.photos/seed/abstract-brand/393/250" alt="Brand banner" />
          </div>

          <div className="w-96 h-64 left-[29.98px] top-[106px] absolute rounded-[20px] overflow-hidden">
            <img className="w-96 h-64 left-0 top-0 absolute object-cover" src="https://picsum.photos/seed/vr-headset/393/250" alt="VR Headset and Controllers" />
            <div className="w-20 h-3.5 left-[30px] top-[34px] absolute justify-center text-stone-500 text-xs font-normal uppercase leading-none tracking-widest">Acelos 3d</div>
            <div className="w-40 h-12 left-[30px] top-[60.50px] absolute justify-center text-black text-xl font-medium leading-normal">VR Headset and<br/>Controllers</div>
            <div className="w-28 h-8 left-[30px] top-[186px] absolute bg-neutral-800 rounded-[800px]">
              <div className="w-14 h-4 left-[24px] top-[7px] absolute justify-center text-white text-xs font-semibold leading-none">Shop Now</div>
            </div>
          </div>

          <div className="w-96 h-64 left-[453.31px] top-[106px] absolute rounded-[20px] overflow-hidden">
            <img className="w-96 h-64 left-0 top-0 absolute object-cover" src="https://picsum.photos/seed/massage-chair/393/250" alt="Massage Chair" />
            <div className="w-36 h-11 left-[30px] top-[30px] absolute justify-center text-white text-lg font-medium uppercase leading-snug">massage chair<br/>Luxury</div>
            <div className="w-28 h-8 left-[30px] top-[84.19px] absolute justify-center text-white text-xs font-normal leading-none">Fuka Relax Full Body<br/>Massage Chair</div>
            <div className="w-28 h-8 left-[30px] top-[186px] absolute bg-white rounded-[800px]">
              <div className="w-14 h-4 left-[24px] top-[7px] absolute justify-center text-black text-xs font-semibold leading-none">Shop Now</div>
            </div>
          </div>

          <div className="w-96 h-64 left-[876.64px] top-[106px] absolute rounded-[20px] overflow-hidden">
            <img className="w-96 h-64 left-0 top-0 absolute object-cover" src="https://picsum.photos/seed/action-cam/393/250" alt="Action camera" />
            <div className="w-24 h-20 left-[30px] top-[29px] absolute justify-center">
              <span className="text-white text-2xl font-semibold leading-7">OKODo<br/></span>
              <span className="text-white text-2xl font-light leading-7">hero 11+<br/>black</span>
            </div>
            <div className="w-7 h-3 left-[30px] top-[171px] absolute justify-center text-neutral-400 text-[10px] font-normal uppercase leading-none">from</div>
            <div className="w-12 h-7 left-[30px] top-[186px] absolute justify-center text-white text-xl font-normal leading-loose">$169</div>
          </div>

          <div className="w-96 h-64 left-[1299.96px] top-[106px] absolute rounded-[20px] overflow-hidden">
            <img className="w-96 h-64 left-0 top-0 absolute object-cover" src="https://picsum.photos/seed/brand-banner-2/393/250" alt="Brand banner" />
          </div>

          <div className="w-12 h-20 left-[1250px] top-[191px] absolute bg-white rounded-tl-lg rounded-bl-lg shadow-[0px_0px_15px_0px_rgba(0,0,0,0.13)]">
            <div className="w-2 h-4 left-[20.89px] top-[32px] absolute justify-center text-orange-300 text-[8px] font-normal leading-none">next</div>
          </div>
          <div className="w-12 h-20 left-0 top-[191px] absolute bg-white rounded-tr-lg rounded-br-lg shadow-[0px_0px_15px_0px_rgba(0,0,0,0.13)]">
            <div className="w-2 h-4 left-[20.89px] top-[32px] absolute justify-center text-orange-300 text-[8px] font-normal leading-none">prev</div>
          </div>
          <div className="w-[1330px] h-96 left-[-15px] top-[-15px] absolute border-x-[15px] border-y-[15px] border-x-white border-y-violet-100" />
        </div>
      </div>
    </section>
  )
}
