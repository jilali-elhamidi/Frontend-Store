export default function SuggestToday() {
    const Stars = ({ value, total = 5, size = 14, active = '#15803d', inactive = '#e5e7eb' }: { value: number; total?: number; size?: number; active?: string; inactive?: string }) => (
      <div className="flex items-center gap-1" aria-label={`${value} out of ${total} stars`}>
        {Array.from({ length: total }).map((_, i) => (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i < value ? active : inactive} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 13.347a1 1 0 00-1.175 0L6.615 16.282c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
    );
  
    return (
      <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-[1330px] h-[1009px] relative">
          <div className="w-56 h-9 left-[15px] top-0 absolute justify-center text-black text-3xl font-bold leading-9">Suggest Today</div>
          <a href="#" className="right-[30px] top-[4px] absolute flex items-center gap-2 text-right text-black text-sm font-medium uppercase leading-tight hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 rounded">
            View All <span aria-hidden>›</span>
          </a>
  
          <div className="w-56 h-14 left-[15px] top-[76px] absolute bg-orange-300 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-orange-300">
            <div className="w-2.5 h-3.5 left-[31px] top-[20px] absolute text-center justify-center text-white text-sm font-black leading-none" aria-hidden>🔥</div>
            <div className="w-36 h-5 left-[49.50px] top-[16px] absolute text-center justify-center text-white text-sm leading-tight"> Recommend For You</div>
          </div>
          <div className="w-44 h-14 left-[245.83px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
            <div className="w-2 h-3.5 left-[31px] top-[20px] absolute text-center justify-center text-black text-sm font-black leading-none" aria-hidden>⚡</div>
            <div className="w-24 h-5 left-[47.75px] top-[16px] absolute text-center justify-center text-black text-sm leading-tight"> Top Best Seller</div>
          </div>
          <div className="w-40 h-14 left-[437.92px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
            <div className="w-4 h-3.5 left-[31px] top-[20px] absolute text-center justify-center text-black text-sm font-black leading-none" aria-hidden>★</div>
            <div className="w-16 h-5 left-[54.75px] top-[16px] absolute text-center justify-center text-black text-sm leading-tight"> Top Rated</div>
          </div>
          <div className="w-32 h-14 left-[605.02px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
            <div className="w-14 h-5 left-[31px] top-[16px] absolute text-center justify-center text-black text-sm leading-tight">70% OFF</div>
          </div>
          <div className="w-32 h-14 left-[735.95px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
            <div className="w-16 h-5 left-[31px] top-[16px] absolute text-center justify-center text-black text-sm leading-tight">50% OFF</div>
          </div>
          <div className="w-32 h-14 left-[867.63px] top-[76px] absolute rounded-[30px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60">
            <div className="w-16 h-5 left-[31px] top-[16px] absolute text-center justify-center text-black text-sm leading-tight">30% OFF</div>
          </div>
  
          {/* Row 1 */}
          <div className="w-60 h-96 left-[15px] top-[199px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-40 left-[1px] top-[232.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-48 h-10 left-[15px] top-[30px] absolute justify-center text-black text-sm font-semibold leading-tight">SORE Simply Brew Compact<br/>Filter Drip Coffee Maker</div>
              <div className="left-[15px] top-[83px] absolute"><Stars value={5} /></div>
              <div className="w-4 h-5 left-[106.41px] top-[80px] absolute justify-center text-black text-xs leading-tight">(1)</div>
              <div className="w-20 h-8 left-[15px] top-[107.50px] absolute justify-center text-black text-xl leading-loose">$159.00</div>
            </div>
            <div className="w-7 h-7 left-[198px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/coffee-maker/212/160" alt="Coffee maker" />
          </div>
  
          <div className="w-60 h-96 left-[279px] top-[199px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-44 left-[1px] top-[208px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-20 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
                <div className="w-11 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">15% OFF</div>
              </div>
              <div className="w-24 h-6 left-[96.05px] top-[15px] absolute bg-orange-300 rounded-[800px]">
                <div className="w-16 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">best seller</div>
              </div>
              <div className="w-52 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Toshubi 2-Door Inveter 1200L<br/>Refrigerator</div>
              <div className="left-[15px] top-[107.50px] absolute"><Stars value={5} /></div>
              <div className="w-4 h-5 left-[106.41px] top-[104.50px] absolute justify-center text-black text-xs leading-tight">(2)</div>
              <div className="w-24 h-8 left-[15px] top-[132px] absolute justify-center text-red-600 text-xl leading-loose">$1,259.00 </div>
              <div className="w-20 h-7 left-[121.64px] top-[136.40px] absolute justify-center text-neutral-400 text-base line-through leading-7">$1,469.00</div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[197px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/refrigerator/212/160" alt="Refrigerator" />
          </div>
  
          <div className="w-60 h-96 left-[543px] top-[199px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-40 left-0 top-[235.92px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px]">
                <div className="w-6 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-52 h-9 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Epson Mini Portable Projector<br/>Wireless</div>
              <div className="w-44 h-8 left-[15px] top-[104.50px] absolute justify-center text-black text-xl leading-loose">$205.00 - $410.00</div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[197px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/projector/212/160" alt="Projector" />
          </div>
  
          <div className="w-60 h-96 left-[807px] top-[199px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-40 left-[1px] top-[232.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-48 h-10 left-[15px] top-[30px] absolute justify-center text-black text-sm font-semibold leading-tight">Brone 2021 iMac All-in-one<br/>Desktop Computer with M1</div>
              <div className="left-[15px] top-[83px] absolute"><Stars value={5} /></div>
              <div className="w-4 h-5 left-[106.41px] top-[80px] absolute justify-center text-black text-xs leading-tight">(2)</div>
              <div className="w-24 h-8 left-[15px] top-[107.50px] absolute justify-center text-black text-xl leading-loose">$2,725.00</div>
            </div>
            <div className="w-7 h-7 left-[198px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/imac/212/160" alt="iMac" />
          </div>
  
          <div className="w-60 h-96 left-[1071px] top-[199px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-44 left-[1px] top-[208px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-24 h-6 left-[15px] top-[15px] absolute bg-green-700 rounded-[800px]">
                <div className="w-16 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">top rated</div>
              </div>
              <div className="w-44 h-10 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Durotan Manual Espresso<br/>Machine, Coffe Maker</div>
              <div className="left-[15px] top-[107.50px] absolute"><Stars value={5} /></div>
              <div className="w-6 h-5 left-[106.41px] top-[104.50px] absolute justify-center text-black text-xs leading-tight">(12)</div>
              <div className="w-20 h-8 left-[15px] top-[132px] absolute justify-center text-black text-xl leading-loose">$449.00</div>
            </div>
            <div className="w-7 h-7 left-[198px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/espresso-machine/212/160" alt="Espresso Machine" />
          </div>
  
          {/* Row 2 */}
          <div className="w-60 h-96 left-[15px] top-[619px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-32 left-[1px] top-[256.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-20 h-6 left-[15px] top-[15px] absolute bg-red-600 rounded-[800px]">
                <div className="w-11 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">10% OFF</div>
              </div>
              <div className="w-44 h-5 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">Name of Product with Lore</div>
              <div className="w-16 h-8 left-[15px] top-[83.50px] absolute justify-center text-red-600 text-xl leading-loose">$79.50 </div>
              <div className="w-14 h-7 left-[94.45px] top-[87.90px] absolute justify-center text-neutral-400 text-base line-through leading-7">$69.00</div>
            </div>
            <div className="w-7 h-7 left-[198px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/smart-band/212/160" alt="Smart band" />
          </div>
  
          <div className="w-60 h-96 left-[279px] top-[619px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-32 left-[1px] top-[253.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-44 h-5 left-[15px] top-[30px] absolute justify-center text-black text-sm font-semibold leading-tight">aPod LTE+GPS Sliver Grey</div>
              <div className="left-[15px] top-[62px] absolute"><Stars value={3} /></div>
              <div className="w-4 h-5 left-[106.41px] top-[59px] absolute justify-center text-black text-xs leading-tight">(1)</div>
              <div className="w-20 h-8 left-[15px] top-[86.50px] absolute justify-center text-black text-xl leading-loose">$524.00</div>
            </div>
            <div className="w-7 h-7 left-[198px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/tablet/212/160" alt="Tablet" />
          </div>
  
          <div className="w-60 h-96 left-[543px] top-[619px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-40 left-[1px] top-[232.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-40 h-10 left-[15px] top-[30px] absolute justify-center text-black text-sm font-semibold leading-tight">Oloxtralic Smart Inveter<br/>Washing Machine</div>
              <div className="left-[15px] top-[83px] absolute"><Stars value={5} /></div>
              <div className="w-4 h-5 left-[106.41px] top-[80px] absolute justify-center text-black text-xs leading-tight">(2)</div>
              <div className="w-20 h-8 left-[15px] top-[107.50px] absolute justify-center text-black text-xl leading-loose">$725.00</div>
            </div>
            <div className="w-7 h-7 left-[198px] top-[16px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
              </svg>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/washing-machine/212/160" alt="Washing Machine" />
          </div>
  
          <div className="w-60 h-96 left-[807px] top-[619px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-40 left-[1px] top-[235.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-28 h-6 left-[15px] top-[15px] absolute bg-neutral-800 rounded-[800px]">
                <div className="w-20 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">out of stock</div>
              </div>
              <div className="w-44 h-9 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">TCL OLed 4K Ultra HD, 47”<br/>Smart TV</div>
              <div className="w-24 h-8 left-[15px] top-[104.50px] absolute justify-center text-black text-xl leading-loose">$1,205.00</div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[197px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/tv-oled/212/160" alt="OLED TV" />
          </div>
  
          <div className="w-60 h-96 left-[1071px] top-[619px] absolute bg-white rounded-[10px] overflow-hidden border-2 border-neutral-300 shadow-sm">
            <div className="w-60 h-32 left-[1px] top-[256.50px] absolute bg-gradient-to-l from-white via-white to-black/0 rounded-bl-[10px] rounded-br-[10px]">
              <div className="w-14 h-6 left-[15px] top-[15px] absolute bg-sky-400 rounded-[800px]">
                <div className="w-6 h-4 left-[16px] top-[3.75px] absolute justify-center text-white text-xs uppercase leading-none">new</div>
              </div>
              <div className="w-44 h-3.5 left-[15px] top-[54.50px] absolute justify-center text-black text-sm font-semibold leading-tight">BE Home Security Camera</div>
              <div className="w-16 h-8 left-[15px] top-[83.50px] absolute justify-center text-black text-xl leading-loose">$69.00</div>
            </div>
            <div className="w-60 h-14 left-[1px] top-[1px] absolute">
              <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
                <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
              </div>
              <div className="w-7 h-7 left-[197px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
                </svg>
              </div>
            </div>
            <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src="https://picsum.photos/seed/security-camera/212/160" alt="Security Camera" />
          </div>
        </div>
      </section>
    )
  }