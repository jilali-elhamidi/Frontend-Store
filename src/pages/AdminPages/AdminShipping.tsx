import React from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'

export default function AdminShippingPage() {
  return (
    <div className="min-h-screen w-full bg-teal-50">
      {/* Sidebar pinned exactly inside the green zone */}
      <aside className="absolute left-0 top-0 h-full w-[280px]">
        <DashboardSidebar active="shipping" />
      </aside>

      {/* Content area to the right of the sidebar */}
      <main className="relative ml-[280px]">
        <div className="w-[1400px] h-[1200px] relative bg-teal-50">
          <div className="w-[1383.99px] h-20 left-[8px] top-[48px] absolute">
            <div className="w-36 h-10 left-[15.99px] top-[15.99px] absolute justify-center text-gray-900 text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10">Logistics</div>
            <div className="w-36 h-10 left-[1223.11px] top-[15.99px] absolute bg-indigo-500 rounded-xl shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]">
              <div className="w-5 h-5 left-[16.01px] top-[10.22px] absolute overflow-hidden">
                <div className="w-5 h-5 left-0 top-0 absolute overflow-hidden">
                  <div className="w-3 h-3 left-[4.17px] top-[4.17px] absolute outline outline-[1.67px] outline-offset-[-0.83px] outline-white" />
                </div>
              </div>
              <div className="w-20 h-4 left-[43.99px] top-[11.32px] absolute text-center justify-center text-white text-sm font-semibold font-['Inter'] leading-normal">Add Vehicle</div>
            </div>
          </div>
          <div className="w-80 h-36 left-[8px] top-[120.43px] absolute">
            <div className="w-80 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-7 h-7 left-[79.99px] top-[28.89px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">38</div>
              <div className="w-10 h-10 left-[24px] top-[23.99px] absolute rounded-[20px] overflow-hidden">
                <div className="w-4 h-4 left-[11px] top-[11.01px] absolute bg-red-500 rounded-lg" />
              </div>
              <div className="w-28 h-4 left-[24px] top-[74.20px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">On route vehicles</div>
            </div>
          </div>
          <div className="w-80 h-36 left-[353.99px] top-[120.43px] absolute">
            <div className="w-80 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
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
          <div className="w-80 h-36 left-[699.98px] top-[120.43px] absolute">
            <div className="w-80 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
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
          <div className="w-80 h-36 left-[1045.97px] top-[120.43px] absolute">
            <div className="w-80 h-28 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
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
          <div className="w-[692px] h-96 left-[8px] top-[270.34px] absolute">
            <div className="w-[660.02px] h-96 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
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
          <div className="w-[692px] h-96 left-[700px] top-[270.34px] absolute">
            <div className="w-[660.02px] h-96 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-40 h-5 left-[23.99px] top-[32px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">Vehicles Condition</div>
              <div className="w-48 h-72 left-[7.99px] top-[75.97px] absolute bg-indigo-500/5 rounded-3xl">
                <div className="w-20 h-5 left-[57.46px] top-[15.99px] absolute justify-center text-indigo-500 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">Very good</div>
                <div className="w-40 h-44 left-[15.85px] top-[35.99px] absolute overflow-hidden">
                  <div className="w-28 h-28 left-[32.09px] top-[35.59px] absolute outline outline-[14.51px] outline-offset-[-7.26px] outline-indigo-500/10" />
                  <div className="w-28 h-28 left-[32.09px] top-[35.59px] absolute outline outline-[14.96px] outline-offset-[-7.48px] outline-indigo-500/90" />
                  <div className="w-20 h-20 left-[44.35px] top-[47.85px] absolute" />
                  <div className="left-[65.50px] top-[96px] absolute text-center justify-start text-gray-500 text-xs font-normal font-['Inter']">Health</div>
                  <div className="left-[64.50px] top-[66px] absolute text-center justify-start text-gray-900 text-lg font-bold font-['Inter']">83%</div>
                  <div className="w-44 h-0 left-[-3.50px] top-0 absolute opacity-0 bg-black outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
                  <div className="w-44 h-0 left-[-3.50px] top-0 absolute opacity-0 bg-black" />
                </div>
                <div className="w-6 h-5 left-[87.34px] top-[214.69px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">181</div>
                <div className="w-16 h-4 left-[69.49px] top-[236.91px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Excellent</div>
              </div>
              <div className="w-48 h-72 left-[230.66px] top-[75.97px] absolute bg-amber-500/5 rounded-3xl">
                <div className="w-12 h-5 left-[76.13px] top-[15.99px] absolute justify-center text-amber-500 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">Good</div>
                <div className="w-40 h-44 left-[15.85px] top-[35.99px] absolute overflow-hidden">
                  <div className="w-28 h-28 left-[32.09px] top-[35.59px] absolute outline outline-[14.51px] outline-offset-[-7.26px] outline-amber-500/10" />
                  <div className="w-8 h-3 left-[84.50px] top-[35.59px] absolute outline outline-[14.96px] outline-offset-[-7.48px] outline-amber-500/90" />
                  <div className="w-20 h-20 left-[44.35px] top-[47.85px] absolute" />
                  <div className="left-[65.50px] top-[96px] absolute text-center justify-start text-gray-500 text-xs font-normal font-['Inter']">Health</div>
                  <div className="left-[67.50px] top-[66px] absolute text-center justify-start text-gray-900 text-lg font-bold font-['Inter']">11%</div>
                  <div className="w-44 h-0 left-[-3.50px] top-0 absolute opacity-0 bg-black outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
                  <div className="w-44 h-0 left-[-3.50px] top-0 absolute opacity-0 bg-black" />
                </div>
                <div className="w-5 h-5 left-[88.99px] top-[214.69px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">24</div>
                <div className="w-24 h-4 left-[48.80px] top-[236.91px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Good condition</div>
              </div>
              <div className="w-48 h-72 left-[453.33px] top-[75.97px] absolute bg-red-500/5 rounded-3xl">
                <div className="w-8 h-5 left-[83.15px] top-[15.99px] absolute justify-center text-red-500 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">Bad</div>
                <div className="w-40 h-44 left-[15.85px] top-[35.99px] absolute overflow-hidden">
                  <div className="w-28 h-28 left-[32.09px] top-[35.59px] absolute outline outline-[14.51px] outline-offset-[-7.26px] outline-red-500/10" />
                  <div className="w-5 h-1 left-[84.50px] top-[35.59px] absolute outline outline-[14.96px] outline-offset-[-7.48px] outline-red-500/90" />
                  <div className="w-20 h-20 left-[44.35px] top-[47.85px] absolute" />
                  <div className="left-[65.50px] top-[96px] absolute text-center justify-start text-gray-500 text-xs font-normal font-['Inter']">Health</div>
                  <div className="left-[70.50px] top-[66px] absolute text-center justify-start text-gray-900 text-lg font-bold font-['Inter']">6%</div>
                  <div className="w-44 h-0 left-[-3.50px] top-0 absolute opacity-0 bg-black outline outline-1 outline-offset-[-0.50px] outline-zinc-400" />
                  <div className="w-44 h-0 left-[-3.50px] top-0 absolute opacity-0 bg-black" />
                </div>
                <div className="w-4 h-5 left-[91.01px] top-[214.69px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">12</div>
                <div className="w-28 h-4 left-[46.29px] top-[236.91px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Needs attention</div>
              </div>
            </div>
          </div>
          <div className="w-[1383.99px] h-[454.91px] left-[8px] top-[696.99px] absolute">
            <div className="w-[1352.01px] h-96 left-[15.99px] top-[15.99px] absolute bg-white rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="w-36 h-5 left-[24px] top-[32px] absolute justify-center text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight">On Route Vehicles</div>
              <div className="w-44 h-4 left-[24px] top-[54.22px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Condition and temperature</div>
              <div className="w-[1352.01px] h-80 left-0 top-[89.95px] absolute overflow-hidden">
                <div className="w-60 h-10 left-0 top-0 absolute bg-gray-50">
                  <div className="w-16 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Location</div>
                </div>
                <div className="w-60 h-10 left-[244.79px] top-0 absolute bg-gray-50">
                  <div className="w-24 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Ending Route</div>
                </div>
                <div className="w-60 h-10 left-[482.24px] top-0 absolute bg-gray-50">
                  <div className="w-28 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Starting Route</div>
                </div>
                <div className="w-80 h-10 left-[719.69px] top-0 absolute bg-gray-50">
                  <div className="w-16 h-3.5 left-[15.99px] top-[12.77px] absolute justify-center text-gray-700 text-xs font-semibold font-['Inter'] uppercase leading-3 tracking-wide">Warnings</div>
                </div>
                <div className="w-80 h-10 left-[1042.12px] top-0 absolute bg-gray-50">
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
                <div className="w-60 h-20 left-[244.79px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-60 h-20 left-[482.24px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-80 h-20 left-[719.69px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-28 h-6 left-[15.99px] top-[23.98px] absolute bg-emerald-500/10 rounded-xl">
                    <div className="w-24 h-3.5 left-[7.99px] top-[4.44px] absolute justify-center text-emerald-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">No warnings</div>
                  </div>
                </div>
                <div className="w-80 h-20 left-[1042.12px] top-[41.99px] absolute border-b-1 border-gray-100">
                  <div className="w-16 h-4 left-[15.99px] top-[37.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                  <div className="w-44 h-px left-[85.89px] top-[45.96px] absolute" />
                  <div className="w-6 h-4 left-[268.87px] top-[37.21px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                  <div className="w-72 h-1 left-[15.99px] top-[15px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                    <div className="w-72 h-1 left-[-255.68px] top-0 absolute bg-indigo-500" />
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
                <div className="w-60 h-20 left-[244.79px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-60 h-20 left-[482.24px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-80 h-20 left-[719.69px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-52 h-6 left-[15.99px] top-[24.53px] absolute bg-amber-500/10 rounded-xl">
                    <div className="w-48 h-3.5 left-[7.99px] top-[4.45px] absolute justify-center text-amber-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">Temperature not optimal</div>
                  </div>
                </div>
                <div className="w-80 h-20 left-[1042.12px] top-[114.49px] absolute border-b-1 border-gray-100">
                  <div className="w-16 h-4 left-[15.99px] top-[37.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                  <div className="w-44 h-px left-[85.89px] top-[46.51px] absolute" />
                  <div className="w-6 h-4 left-[268.87px] top-[37.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                  <div className="w-72 h-1 left-[15.99px] top-[15.56px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                    <div className="w-72 h-1 left-[-255.68px] top-0 absolute bg-indigo-500" />
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
                <div className="w-60 h-20 left-[244.79px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-60 h-20 left-[482.24px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-36 h-4 left-[15.99px] top-[27.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                </div>
                <div className="w-80 h-20 left-[719.69px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-40 h-6 left-[15.99px] top-[24.53px] absolute bg-red-500/10 rounded-xl">
                    <div className="w-36 h-3.5 left-[7.99px] top-[4.44px] absolute justify-center text-red-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">ECU not responding</div>
                  </div>
                </div>
                <div className="w-80 h-20 left-[1042.12px] top-[187.55px] absolute border-b-1 border-gray-100">
                  <div className="w-16 h-4 left-[15.99px] top-[37.76px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                  <div className="w-44 h-px left-[85.89px] top-[46.51px] absolute" />
                  <div className="w-6 h-4 left-[268.87px] top-[37.76px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                  <div className="w-72 h-1 left-[15.99px] top-[15.55px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                    <div className="w-72 h-1 left-[-255.68px] top-0 absolute bg-indigo-500" />
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
                <div className="w-36 h-4 left-[260.78px] top-[288.37px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                <div className="w-36 h-4 left-[498.23px] top-[288.37px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Cleveland, Ohio, USA</div>
                <div className="w-28 h-6 left-[735.68px] top-[285.14px] absolute bg-emerald-500/10 rounded-xl">
                  <div className="w-24 h-3.5 left-[7.99px] top-[4.44px] absolute justify-center text-emerald-700 text-xs font-semibold font-['Inter'] uppercase leading-normal tracking-wide">No warnings</div>
                </div>
                <div className="w-16 h-4 left-[1058.11px] top-[298.37px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Very Good</div>
                <div className="w-44 h-px left-[1128.01px] top-[307.12px] absolute" />
                <div className="w-6 h-4 left-[1310.99px] top-[298.37px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                <div className="w-72 h-1 left-[1058.11px] top-[276.16px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                  <div className="w-72 h-1 left-[-255.68px] top-0 absolute bg-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
