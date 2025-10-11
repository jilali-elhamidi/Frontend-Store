import React, { useState } from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'

export default function AdminShippingPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <main className="home-zoom overflow-x-hidden">  
    <div className="w-screen lg:w-351 min-h-screen bg-teal-50 overflow-y-hidden relative">
      {/* Sidebar pinned exactly inside the green zone */}
      <aside className="hidden lg:block absolute left-0 top-0 h-full w-[280px]">
        <DashboardSidebar active="shipping" />
      </aside>

      {/* Mobile sidebar (drawer) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[80%] bg-white shadow-xl">
            <div className="flex items-center justify-between px-3 py-3 border-b border-slate-200">
              <span className="text-sm font-medium text-slate-800">Menu</span>
              <button className="p-2 rounded-md hover:bg-black/5" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-slate-700">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <div className="h-[calc(100%-56px)] overflow-y-auto">
              <DashboardSidebar active="shipping" />
            </div>
          </div>
        </div>
      )}
      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 fixed top-2 left-2 z-50"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-slate-700">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {/* Content area to the right of the sidebar */}
      <main className="relative ml-0 lg:ml-[280px]">
        {/* Mobile layout (stacked, no horizontal scroll) */}
        <div className="sm:hidden w-full px-4 py-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans']">Logistics</h1>
            <button className="inline-flex items-center gap-2 bg-indigo-500 text-white text-sm font-semibold rounded-xl px-3 py-2 shadow">
              <span>Add Vehicle</span>
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="text-2xl font-bold text-gray-900">38</div>
              <div className="text-sm text-gray-500">On route vehicles</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-500">Vehicles with errors</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-sm text-gray-500">Deviated from route</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-500">Late vehicles</div>
            </div>
          </div>

          {/* Vehicles Overview (compact) */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className="text-base font-bold text-gray-900 mb-2">Vehicles Overview</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Total</span><span className="font-semibold text-gray-900">100</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Available</span><span className="font-semibold text-gray-900">38</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Out of service</span><span className="font-semibold text-gray-900">50</span></div>
              <div className="flex justify-between"><span className="text-gray-500">On route</span><span className="font-semibold text-gray-900">12</span></div>
            </div>
          </div>

          {/* Vehicles Condition (already flex) */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className="text-base font-bold text-gray-900">Vehicles Condition</div>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3">
                <div className="min-w-20 text-indigo-600 font-semibold text-sm">Very good</div>
                <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden"><div className="h-2 bg-indigo-500" style={{ width: '83%' }} /></div>
                <div className="w-12 text-right text-gray-900 font-bold text-sm">181</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="min-w-20 text-amber-600 font-semibold text-sm">Good</div>
                <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden"><div className="h-2 bg-amber-500" style={{ width: '11%' }} /></div>
                <div className="w-12 text-right text-gray-900 font-bold text-sm">24</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="min-w-20 text-red-600 font-semibold text-sm">Bad</div>
                <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden"><div className="h-2 bg-red-500" style={{ width: '6%' }} /></div>
                <div className="w-12 text-right text-gray-900 font-bold text-sm">12</div>
              </div>
            </div>
          </div>

          {/* On Route Vehicles: mobile cards */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className="text-base font-bold text-gray-900">On Route Vehicles</div>
            <div className="text-xs text-gray-500 mb-3">Condition and temperature</div>
            <div className="space-y-3">
              {[1,2,3].map((n) => (
                <div key={n} className="rounded-xl border border-gray-200 p-3">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                    <span>{`VOL-653CD${n}`}</span>
                    <span className="text-gray-700">Very Good • 8°C</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-700">
                    <div>
                      <div className="opacity-70">Starting Route</div>
                      <div>Cleveland, Ohio, USA</div>
                    </div>
                    <div className="text-right">
                      <div className="opacity-70">Ending Route</div>
                      <div>Cleveland, Ohio, USA</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="inline-block px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 uppercase font-semibold tracking-wide">No warnings</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Original desktop layout */}
        <div className="hidden sm:block w-full h-[1200px] relative bg-teal-50 lg:-translate-x-[90px]">
          <div className="w-full h-20 left-[8px] top-[48px] absolute">
            <div className="w-36 h-10 left-[15.99px] top-[15.99px] absolute justify-center text-gray-900 text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10">Logistics</div>
            <div className="w-36 h-10 right-4 top-[15.99px] absolute bg-indigo-500 rounded-xl shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]">
              <div className="w-5 h-5 left-[16.01px] top-[10.22px] absolute overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute overflow-hidden">
                  <div className="w-3 h-3 left-[4.17px] top-[4.17px] absolute outline outline-[1.67px] outline-offset-[-0.83px] outline-white" />
                </div>
              </div>
              <div className="w-20 h-4 left-[43.99px] top-[11.32px] absolute text-center justify-center text-white text-sm font-semibold font-['Inter'] leading-normal">Add Vehicle</div>
            </div>
          </div>
          <div className="w-64 h-36 left-[8px] top-[120.43px] absolute">
            <div className="w-64 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-7 h-7 left-[79.99px] top-[28.89px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">38</div>
              <div className="w-10 h-10 left-[24px] top-[23.99px] absolute rounded-[20px] overflow-hidden">
                <div className="w-4 h-4 left-[11px] top-[11.01px] absolute bg-red-500 rounded-lg" />
              </div>
              <div className="w-28 h-4 left-[24px] top-[74.20px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">On route vehicles</div>
            </div>
          </div>
          <div className="w-64 h-36 left-[290px] top-[120.43px] absolute">
            <div className="w-64 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-3.5 h-7 left-[79.99px] top-[28.89px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">2</div>
              <div className="w-10 h-10 left-[24px] top-[23.99px] absolute bg-red-500/10 rounded-lg overflow-hidden">
                <div className="w-6 h-6 left-[8px] top-[8px] absolute overflow-hidden">
                  <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                    <div className="w-5 h-4 left-[1.73px] top-[2.49px] absolute bg-white/0" />
                    <div className="w-5 h-4 left-[1.73px] top-[2.49px] absolute outline outline-2 outline-offset-[-1px] outline-red-500" />
                  </div>
                </div>
              </div>
              <div className="w-32 h-4 left-[24px] top-[74.20px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Vehicles with errors</div>
            </div>
          </div>
          <div className="w-64 h-36 left-[572px] top-[120.43px] absolute">
            <div className="w-64 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-2.5 h-7 left-[79.98px] top-[28.89px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">1</div>
              <div className="w-10 h-10 left-[24px] top-[23.99px] absolute bg-amber-500/10 rounded-lg overflow-hidden">
                <div className="w-6 h-6 left-[8px] top-[8px] absolute overflow-hidden">
                  <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                    <div className="w-4 h-4 left-[3px] top-[2px] absolute bg-white/0" />
                    <div className="w-4 h-4 left-[3px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-amber-500" />
                  </div>
                </div>
              </div>
              <div className="w-48 h-4 left-[24px] top-[74.20px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Vehicles deviated from route</div>
            </div>
          </div>
          <div className="w-64 h-36 left-[854px] top-[120.43px] absolute">
            <div className="w-64 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-3.5 h-7 left-[79.98px] top-[28.89px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">2</div>
              <div className="w-10 h-10 left-[23.99px] top-[23.99px] absolute bg-indigo-500/10 rounded-lg overflow-hidden">
                <div className="w-6 h-6 left-[8.01px] top-[8px] absolute overflow-hidden">
                  <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                    <div className="w-4 h-4 left-[3px] top-[2px] absolute bg-white/0" />
                    <div className="w-1 h-2 left-[12px] top-[5.60px] absolute bg-white/0" />
                    <div className="w-4 h-4 left-[3px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-indigo-500" />
                  </div>
                </div>
              </div>
              <div className="w-20 h-4 left-[23.99px] top-[74.20px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Late vehicles</div>
            </div>
          </div>
          <div className="w-[560px] h-96 left-[8px] top-[270.34px] absolute">
            <div className="w-[540px] h-96 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-36 h-5 left-[24px] top-[32px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">Vehicles Overview</div>
              <div className="w-72 h-72 left-[24px] top-[91.98px] absolute overflow-hidden">
                <div className="w-52 h-52 left-[40.99px] top-[30.98px] absolute outline outline-[10.75px] outline-offset-[-5.37px] outline-gray-100/90" />
                <div className="w-44 h-44 left-[57.07px] top-[47.06px] absolute outline outline-[10.75px] outline-offset-[-5.37px] outline-gray-100/90" />
                <div className="w-36 h-36 left-[73.15px] top-[63.14px] absolute outline outline-[10.75px] outline-offset-[-5.37px] outline-gray-100/90" />
                <div className="w-28 h-48 left-[148px] top-[30.98px] absolute outline outline-[11.08px] outline-offset-[-5.54px] outline-indigo-500/90" />
                <div className="w-24 h-44 left-[148px] top-[47.06px] absolute outline outline-[11.08px] outline-offset-[-5.54px] outline-amber-500/90" />
                <div className="w-12 h-5 left-[148px] top-[63.14px] absolute outline outline-[11.08px] outline-offset-[-5.54px] outline-cyan-500/90" />
                <div className="w-32 h-32 left-[83.52px] top-[73.52px] absolute" />
                <div className="left-[148px] top-[122px] absolute text-center justify-start"></div>
                <div className="left-[148px] top-[156px] absolute text-center justify-start"></div>
                <div className="w-72 h-0 left-[10.01px] top-0 absolute opacity-0 bg-black outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
                <div className="w-72 h-0 left-[10.01px] top-0 absolute opacity-0 bg-black" />
              </div>
              <div className="w-8 h-4 left-[342px] top-[139.67px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Total</div>
              <div className="w-11 h-7 left-[342px] top-[158.30px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">100</div>
              <div className="w-4 h-4 left-[342px] top-[222.36px] absolute bg-indigo-500 rounded" />
              <div className="w-14 h-4 left-[365.98px] top-[221.60px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Available</div>
              <div className="w-48 h-px left-[424.66px] top-[230.35px] absolute" />
              <div className="w-5 h-4 left-[618.15px] top-[221.60px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">38</div>
              <div className="w-4 h-4 left-[342px] top-[260.30px] absolute bg-amber-500 rounded" />
              <div className="w-24 h-4 left-[365.98px] top-[259.53px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Out of service</div>
              <div className="w-40 h-px left-[459.15px] top-[268.28px] absolute" />
              <div className="w-5 h-4 left-[618.28px] top-[259.53px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">50</div>
              <div className="w-4 h-4 left-[342px] top-[298.23px] absolute bg-cyan-500 rounded" />
              <div className="w-14 h-4 left-[365.98px] top-[297.47px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">On route</div>
              <div className="w-48 h-px left-[423.39px] top-[306.22px] absolute" />
              <div className="w-4 h-4 left-[620.80px] top-[297.47px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">12</div>
            </div>
          </div>
          <div className="w-[520px] h-auto left-[600px] top-[270.34px] absolute">
            <div className="w-[500px] h-auto left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="px-6 pt-6 text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">Vehicles Condition</div>
              <div className="mt-4 px-6 pb-6 flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-2xl p-4 bg-indigo-500/5">
                  <div className="min-w-28 text-indigo-600 font-semibold">Very good</div>
                  <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden">
                    <div className="h-2 bg-indigo-500" style={{ width: '83%' }} />
                  </div>
                  <div className="w-14 text-right text-gray-900 font-bold">181</div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl p-4 bg-amber-500/5">
                  <div className="min-w-28 text-amber-600 font-semibold">Good</div>
                  <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden">
                    <div className="h-2 bg-amber-500" style={{ width: '11%' }} />
                  </div>
                  <div className="w-14 text-right text-gray-900 font-bold">24</div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl p-4 bg-red-500/5">
                  <div className="min-w-28 text-red-600 font-semibold">Bad</div>
                  <div className="flex-1 h-2 rounded bg-gray-200 overflow-hidden">
                    <div className="h-2 bg-red-500" style={{ width: '6%' }} />
                  </div>
                  <div className="w-14 text-right text-gray-900 font-bold">12</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1160px] h-[560px] left-[8px] top-[696.99px] absolute">
            <div className="w-full h-[520px] left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-36 h-5 left-[24px] top-[32px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">On Route Vehicles</div>
              <div className="w-44 h-4 left-[24px] top-[54.22px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Condition and temperature</div>
              <div className="w-full h-[460px] left-0 top-[89.95px] absolute overflow-hidden">
                <div className="w-60 h-10 left-0 top-0 absolute bg-gray-50">
                  <div className="w-16 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Location</div>
                </div>
                <div className="w-60 h-10 left-[224.79px] top-0 absolute bg-gray-50">
                  <div className="w-24 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Ending Route</div>
                </div>
                <div className="w-60 h-10 left-[462.24px] top-0 absolute bg-gray-50">
                  <div className="w-28 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Starting Route</div>
                </div>
                <div className="w-80 h-10 left-[699.69px] top-0 absolute bg-gray-50">
                  <div className="w-16 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Warnings</div>
                </div>
                <div className="w-64 h-10 left-[920px] top-0 absolute bg-gray-50">
                  <div className="w-48 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Refrigerator Temperature</div>
                </div>
                <div className="w-60 h-20 left-0 top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-20 h-4 left-[71.98px] top-[27.21px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">VOL-653CD1</div>
                  <div className="w-10 h-10 left-[15.99px] top-[15.98px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                    <div className="w-6 h-6 left-[8.01px] top-[8px] absolute overflow-hidden">
                      <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 h-20 left-[224.79px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-60 h-20 left-[462.24px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-80 h-20 left-[699.69px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-28 h-6 left-[15.99px] top-[23.98px] absolute bg-emerald-500/10 rounded-xl">
                    <div className="w-24 h-3.5 left-[7.99px] top-[4.44px] absolute justify-center text-emerald-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">No warnings</div>
                  </div>
                </div>
                <div className="w-64 h-20 left-[920px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-16 h-4 left-[15.99px] top-[37.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                  <div className="w-44 h-px left-[85.89px] top-[45.96px] absolute" />
                  <div className="w-6 h-4 left-[200px] top-[37.21px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                  <div className="w-56 h-1 left-[15.99px] top-[15px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                    <div className="w-56 h-1 left-[-200px] top-0 absolute bg-indigo-500" />
                  </div>
                </div>
                <div className="w-60 h-20 left-0 top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-24 h-4 left-[71.98px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">VOL-653CD2</div>
                  <div className="w-10 h-10 left-[15.99px] top-[16.53px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                    <div className="w-6 h-6 left-[8.01px] top-[8px] absolute overflow-hidden">
                      <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 h-20 left-[224.79px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-60 h-20 left-[462.24px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-80 h-20 left-[699.69px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-52 h-6 left-[15.99px] top-[24.53px] absolute bg-amber-500/10 rounded-xl">
                    <div className="w-48 h-3.5 left-[7.99px] top-[4.45px] absolute justify-center text-amber-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">Temperature not optimal</div>
                  </div>
                </div>
                <div className="w-64 h-20 left-[920px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-16 h-4 left-[15.99px] top-[37.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                  <div className="w-44 h-px left-[85.89px] top-[46.51px] absolute" />
                  <div className="w-6 h-4 left-[200px] top-[37.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                  <div className="w-56 h-1 left-[15.99px] top-[15.56px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                    <div className="w-56 h-1 left-[-200px] top-0 absolute bg-indigo-500" />
                  </div>
                </div>
                <div className="w-60 h-20 left-0 top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-24 h-4 left-[71.98px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">VOL-653CD3</div>
                  <div className="w-10 h-10 left-[15.99px] top-[16.53px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                    <div className="w-6 h-6 left-[8.01px] top-[8px] absolute overflow-hidden">
                      <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 h-20 left-[224.79px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-60 h-20 left-[462.24px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-80 h-20 left-[699.69px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-40 h-6 left-[15.99px] top-[24.53px] absolute bg-red-500/10 rounded-xl">
                    <div className="w-36 h-3.5 left-[7.99px] top-[4.44px] absolute justify-center text-red-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">ECU not responding</div>
                  </div>
                </div>
                <div className="w-64 h-20 left-[920px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-16 h-4 left-[15.99px] top-[37.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                  <div className="w-44 h-px left-[85.89px] top-[46.51px] absolute" />
                  <div className="w-6 h-4 left-[200px] top-[37.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                  <div className="w-56 h-1 left-[15.99px] top-[15.55px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                    <div className="w-56 h-1 left-[-200px] top-0 absolute bg-indigo-500" />
                  </div>
                </div>
                <div className="w-24 h-4 left-[71.98px] top-[288.37px] absolute justify-center text-gray-900 text-sm font-medium font-['Inter'] leading-snug">VOL-653CD4</div>
                <div className="w-10 h-10 left-[15.99px] top-[277.13px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                  <div className="w-6 h-6 left-[8.01px] top-[8.01px] absolute overflow-hidden">
                    <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                      <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                      <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                    </div>
                  </div>
                </div>
                <div className="w-36 h-4 left-[240.78px] top-[288.37px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                <div className="w-36 h-4 left-[478.23px] top-[288.37px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                <div className="w-28 h-6 left-[715.68px] top-[285.14px] absolute bg-emerald-500/10 rounded-xl">
                  <div className="w-24 h-3.5 left-[7.99px] top-[4.44px] absolute justify-center text-emerald-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">No warnings</div>
                </div>
                <div className="w-16 h-4 left-[936px] top-[298.37px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                <div className="w-44 h-px left-[1006px] top-[307.12px] absolute" />
                <div className="w-6 h-4 left-[1120px] top-[298.37px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                <div className="w-56 h-1 left-[936px] top-[276.16px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                  <div className="w-56 h-1 left-[-200px] top-0 absolute bg-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </main>
  )
}
