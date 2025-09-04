import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardSidebar from '../components/DashboardSidebar'

export default function AdminOrderDetailsPage() {
  const { id = '#6743' } = useParams()
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const preferDark = saved ? saved === 'dark' : false
    setIsDark(preferDark)
    if (preferDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const frameBg = isDark ? 'bg-slate-800' : 'bg-slate-50'
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-white'
  const mutedCardBg = isDark ? 'bg-slate-900/40' : 'bg-zinc-100'
  const textMain = isDark ? 'text-white' : 'text-black'
  const textSub = isDark ? 'text-slate-300' : 'text-neutral-800'
  const outline = isDark ? 'outline-slate-600/40' : 'outline-stone-200'
  const tableCardBg = isDark ? 'bg-slate-900/40' : 'bg-teal-50'
  const border = isDark ? 'border-slate-700/50' : 'border-neutral-800/20'

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <DashboardSidebar isDark={isDark} active="order" />

          {/* Main content */}
          <main className="flex-1 p-6 flex flex-col gap-5">
            {/* Header */}
            <div className="inline-flex flex-col justify-start items-start gap-4 w-full">
              <div className="inline-flex justify-start items-end gap-6 w-full">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className={`justify-start ${textMain} text-2xl font-semibold font-['Rubik']`}>Orders Details</div>
                  <div className={`opacity-80 justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>
                    Home &gt; Order List &gt; Order Details
                  </div>
                </div>
              </div>
            </div>

            {/* Top bar with order id and actions */}
            <div className="w-full inline-flex flex-col justify-start items-center gap-2">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex justify-start items-center gap-4">
                  <div className={`justify-start ${textMain} text-xl font-semibold font-['Rubik']`}>Orders ID: {id}</div>
                  <div className="p-1.5 bg-orange-400/80 rounded-lg inline-flex items-center">
                    <div className="justify-start text-neutral-800 text-xs font-semibold font-['Open_Sans']">Pending</div>
                  </div>
                </div>
                <div className="flex justify-start items-start gap-5">
                  <div className={`w-56 p-4 ${mutedCardBg} rounded-lg inline-flex flex-col justify-start items-end gap-4`}>
                    <div className="self-stretch inline-flex justify-between items-center">
                      <div className={`justify-start ${textSub} text-sm font-semibold font-['Open_Sans']`}>Change Status</div>
                      <div className="w-5 h-5 flex items-center justify-center">
                        {/* Chevron down icon */}
                        <svg viewBox="0 0 24 24" className={`${isDark ? 'text-slate-300/80' : 'text-neutral-800'} w-4 h-4`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`flex-1 self-stretch px-4 py-2 ${mutedCardBg} rounded-lg inline-flex flex-col justify-between items-center`}>
                    <div className="w-6 h-6 flex items-center justify-center">
                      {/* Printer icon */}
                      <svg viewBox="0 0 24 24" className={`${isDark ? 'text-slate-300/80' : 'text-neutral-800'} w-5 h-5`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9V2h12v7" />
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                        <path d="M6 14h12v8H6z" />
                      </svg>
                    </div>
                  </div>
                  <div className={`flex-1 self-stretch px-4 py-2 ${mutedCardBg} rounded-lg inline-flex flex-col justify-center items-center gap-1`}>
                    <div className={`justify-start ${textSub} text-sm font-semibold font-['Open_Sans']`}>Save</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Customer */}
              <div className={`w-full h-full px-6 py-4 ${cardBg} rounded-2xl outline outline-1 outline-offset-[-1px] ${outline} flex flex-col justify-between items-stretch gap-4`}>
                <div className="inline-flex justify-start items-start gap-4">
                  <div className="p-4 bg-neutral-800 rounded-lg flex justify-start items-start gap-2.5">
                    {/* User icon */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Customer</div>
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Full Name: Shristi Singh</div>
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Email: shristi@gmail.com</div>
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Phone: +91 904 231 1212</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-8 px-4 py-2 bg-emerald-200 rounded-lg inline-flex justify-center items-center gap-1">
                    <div className="justify-start text-white text-sm font-medium font-['Inter']">View profile</div>
                  </div>
                </div>
              </div>

              {/* Order Info */}
              <div className={`w-full h-full px-6 py-4 ${cardBg} rounded-2xl outline outline-1 outline-offset-[-1px] ${outline} flex flex-col justify-between items-stretch gap-4`}>
                <div className="inline-flex justify-start items-start gap-4">
                  <div className="p-4 bg-neutral-800 rounded-lg flex justify-start items-start gap-2.5">
                    {/* Info icon */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Order Info</div>
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Shipping: Next express</div>
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Payment Method: Paypal</div>
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Status: Pending</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-8 px-4 py-2 bg-emerald-200 rounded-lg inline-flex justify-center items-center gap-1">
                    <div className="justify-start text-white text-sm font-medium font-['Inter']">Download info</div>
                  </div>
                </div>
              </div>

              {/* Deliver to */}
              <div className={`w-full px-6 py-4 ${cardBg} rounded-2xl outline outline-1 outline-offset-[-1px] ${outline} inline-flex flex-col justify-start items-center gap-4`}>
                <div className="inline-flex justify-start items-start gap-4">
                  <div className="p-4 bg-neutral-800 rounded-lg flex justify-start items-start gap-2.5">
                    {/* Map pin icon */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Deliver to</div>
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                      <div className={`self-stretch justify-start ${textSub} text-base font-semibold font-['Open_Sans'] leading-7`}>
                        Address: Dharam Colony, Palam Vihar, Gurgaon, Haryana
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch h-8 px-4 py-2 bg-emerald-200 rounded-lg inline-flex justify-center items-center gap-1">
                    <div className="justify-start text-white text-sm font-medium font-['Inter']">View profile</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products table */}
            <div className={`w-full px-4 py-6 ${tableCardBg} rounded-3xl inline-flex flex-col justify-start items-start gap-4`}>
              <div className="self-stretch inline-flex justify-between items-center">
                <div className={`justify-start ${textMain} text-xl font-semibold font-['Rubik']`}>Products</div>
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className={`${isDark ? 'bg-slate-300/80' : 'bg-black'} w-[3px] h-3.5 left-[10.50px] top-[4.50px] absolute`} />
                </div>
              </div>
              <div className={`self-stretch h-0 outline outline-[0.50px] outline-offset-[-0.25px] ${border}`}></div>

              <div className={`self-stretch border-b-[0.50px] ${border} inline-flex justify-between items-end`}>
                <div className="flex justify-start items-start gap-36">
                  <div className="w-64 flex justify-start items-end gap-2">
                    <div className="w-36 px-2 py-4 inline-flex flex-col justify-start items-start gap-2.5">
                      <div className={`opacity-80 text-center justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Product Name</div>
                    </div>
                  </div>
                  <div className="px-2 py-4 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className={`opacity-80 text-center justify-start ${textSub} text-base font-semibold font-['Rubik']`}>Order ID</div>
                  </div>
                  <div className="px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
                    <div className={`opacity-80 text-center justify-start ${textSub} text-base font-semibold font-['Rubik']`}>Quantity</div>
                  </div>
                </div>
                <div className="w-20 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
                  <div className={`opacity-80 text-center justify-start ${textSub} text-base font-semibold font-['Rubik']`}>Total</div>
                </div>
              </div>

              {[1, 2].map((i) => (
                <div key={i} className={`self-stretch border-b-[0.50px] ${border} inline-flex justify-between items-center`}>
                  <div className="flex justify-start items-start gap-36">
                    <div className="py-2 flex justify-start items-center gap-4">
                      <div className="px-2 py-4 flex justify-start items-start gap-2.5">
                        <div className="w-5 h-5 relative opacity-75">
                          <div className="w-5 h-5 left-0 top-0 absolute" />
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-black/20 rounded-lg" />
                      <div className={`w-36 justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>Lorem Ipsum</div>
                    </div>
                    <div className="w-20 h-16 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
                      <div className={`text-center justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>#25421</div>
                    </div>
                    <div className="w-20 h-16 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
                      <div className={`text-center justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>2</div>
                    </div>
                  </div>
                  <div className="w-20 h-16 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
                    <div className={`text-center justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>₹800.40</div>
                  </div>
                </div>
              ))}

              {/* Total footer */}
              <div className="w-full flex justify-end items-center pt-4">
                <div className={`text-right ${textMain} text-xl font-semibold font-['Rubik']`}>Total <span className="ml-8">₹3841.92</span></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
