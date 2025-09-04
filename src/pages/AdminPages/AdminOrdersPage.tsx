import { useEffect, useState } from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'
import RecentPurchases from '../../components/Admin/Order/RecentPurchases'

export default function AdminOrdersPage() {
  const [isDark, setIsDark] = useState<boolean>(false)

  // Initialize theme from localStorage on mount (same behavior as AdminDashboardPage)
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
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-teal-50'
  const textMain = isDark ? 'text-white' : 'text-black'
  const textSub = isDark ? 'text-slate-300' : 'text-neutral-800'
  const outline = isDark ? 'outline-slate-600/40' : 'outline-neutral-800/20'
  const border = isDark ? 'border-slate-700/50' : 'border-neutral-800/20'
  const rows = [
    { id: '#25426', date: 'Nov 8th,2023', name: 'Kavin', status: 'Delivered', statusDot: 'bg-emerald-200', amt: '₹200.00', avatarUrl: 'https://i.pravatar.cc/48?u=kavin' },
    { id: '#25425', date: 'Nov 7th,2023', name: 'Komael', status: 'Canceled', statusDot: 'bg-orange-400', amt: '₹200.00', avatarUrl: 'https://i.pravatar.cc/48?u=komael' },
    { id: '#25424', date: 'Nov 6th,2023', name: 'Nikhil', status: 'Delivered', statusDot: 'bg-emerald-200', amt: '₹200.00', avatarUrl: 'https://i.pravatar.cc/48?u=nikhil' },
    { id: '#25423', date: 'Nov 5th,2023', name: 'Shivam', status: 'Canceled', statusDot: 'bg-orange-400', amt: '₹200.00', avatarUrl: 'https://i.pravatar.cc/48?u=shivam' },
    { id: '#25422', date: 'Nov 4th,2023', name: 'Shadab', status: 'Delivered', statusDot: 'bg-emerald-200', amt: '₹200.00', avatarUrl: 'https://i.pravatar.cc/48?u=shadab' },
  ]

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <DashboardSidebar isDark={isDark} active="order" />

          {/* Main content */}
          <main className="flex-1 p-5 flex flex-col gap-4">
            {/* Header strip */}
            <div className="flex items-center justify-between">
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className={`justify-start ${textMain} text-2xl font-semibold font-['Rubik']`}>Orders List</div>
                <div className={`opacity-80 justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Home &gt; Order List</div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`inline-flex justify-start items-center gap-2 ${textSub}`}>
                  <div className="w-5 h-5 flex items-center justify-center">
                    {/* Calendar icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className={`${isDark ? 'text-slate-300/90' : 'text-neutral-800'} w-5 h-5`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
                      <path d="M16 3v4M8 3v4M3 11h18" />
                      <rect x="7" y="14" width="3" height="3" rx="0.5" />
                      <rect x="12" y="14" width="3" height="3" rx="0.5" />
                    </svg>
                  </div>
                  <div className={`justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Feb 16,2022 - Feb 20,2022</div>
                </div>

                <div className={`w-56 p-4 ${cardBg} rounded-lg inline-flex flex-col justify-start items-end gap-4`}>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className={`justify-start ${textSub} text-sm font-semibold font-['Open_Sans']`}>Change Status</div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      {/* Refresh/rotate icon */}
                      <svg
                        viewBox="0 0 24 24"
                        className={`${isDark ? 'text-slate-300/80' : 'text-neutral-800'} w-4 h-4`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="23 4 23 10 17 10" />
                        <polyline points="1 20 1 14 7 14" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
                        <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table card extracted to a reusable component */}
            <RecentPurchases isDark={isDark} rows={rows} />
          </main>
        </div>
      </div>
    </div>
  )
}
