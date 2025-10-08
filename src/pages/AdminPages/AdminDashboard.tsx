import { useEffect, useState } from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'
import StatCard from '../../components/Admin/Dashboard/StatCard'
import Inbox from '../../components/Admin/Dashboard/Inbox'
import RecentActivity from '../../components/Admin/Dashboard/RecentActivity'
import TrendsCard from '../../components/Admin/Dashboard/TrendsCard'

export default function AdminDashboardPage() {
  const [isDark, setIsDark] = useState<boolean>(false)

  // Initialize theme from localStorage on mount
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

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }
  return (
    <main className="home-zoom ">
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-351 min-h-screen ${isDark ? 'bg-slate-800' : 'bg-slate-50'} dark:bg-slate-800`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <DashboardSidebar isDark={isDark} active="dashboard" />

          {/* Main content */}
          <main className="flex-1 p-3 lg:p-5 flex flex-col">
            {/* Top bar */}
            <div className="w-full mb-3 flex items-center gap-2">
              <h1 className={`text-xl font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'} dark:text-slate-100`}>Total Revenue</h1>
              <div className="ml-auto w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search"
                  className={`w-full px-3 py-1.5 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder-slate-400 ${isDark ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-neutral-200'} dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100`}
                />
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="ml-2 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                aria-label="Toggle dark mode"
                title="Toggle theme"
              >
                {isDark ? (
                  // Sun icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m13.49 0-1.41 1.41M6.46 17.54l-1.41 1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  // Moon icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
                <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <StatCard
                title="Shipped orders"
                value={67}
                from="from-blue-400"
                to="to-emerald-200"
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h13v10H3z" />
                    <path d="M16 10h4l1 3v4h-5z" />
                    <circle cx="7.5" cy="17" r="1.5" />
                    <circle cx="17.5" cy="17" r="1.5" />
                  </svg>
                }
              />
              <StatCard
                title="Pending orders"
                value={9}
                from="from-amber-300"
                to="to-orange-400"
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5h18" />
                    <path d="M7 5v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5" />
                    <path d="M10 9h4" />
                  </svg>
                }
              />
              <StatCard
                title="New orders"
                value={35}
                from="from-fuchsia-400"
                to="to-purple-500"
                icon={
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                }
              />
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                <Inbox isDark={isDark} />
                <RecentActivity isDark={isDark} />
              </div>
              <TrendsCard isDark={isDark} />
            </div>
          </main>
        </div>
      </div>
    </div>
    </main>
  )
}
