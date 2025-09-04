import DashboardSidebar from '../components/DashboardSidebar'
import StatCard from '../components/StatCard'
import Inbox from '../components/Inbox'
import RecentActivity from '../components/RecentActivity'
import TrendsCard from '../components/TrendsCard'

export default function AdminDashboardPage() {
  return (
    <div className="w-screen min-h-screen bg-slate-50">
      <div className="flex w-full min-h-full">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main content */}
        <main className="flex-1 p-3 lg:p-5 flex flex-col">
          {/* Top bar */}
          <div className="w-full mb-3 flex items-center gap-2">
            <h1 className="text-xl font-semibold text-slate-900">Total Revenue</h1>
            <div className="ml-auto w-full max-w-sm">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-1.5 rounded-lg border border-neutral-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
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
              <Inbox />
              <RecentActivity />
            </div>
            <TrendsCard />
          </div>
        </main>
      </div>
    </div>
  )
}
