type DashboardSidebarProps = {
  isDark?: boolean
  active?: 'dashboard' | 'order' | 'products' | 'shipping' | 'payments' | 'settings' | 'blog'
}

export default function DashboardSidebar({ isDark = false, active = 'dashboard' }: DashboardSidebarProps) {
  const pillTopMap: Record<NonNullable<DashboardSidebarProps['active']>, number> = {
    dashboard: 0,
    order: 72,
    products: 145,
    shipping: 217,
    payments: 289,
    settings: 361,
    blog: 433,
  }
  const pillTop = pillTopMap[active]
  const activeTextDark = 'text-slate-900'
  const inactiveTextDark = 'text-slate-300'
  return (
    <aside className={`w-58 h-screen sticky top-0 p-2.5 flex flex-col gap-4 border-r flex-shrink-0 ${isDark ? 'bg-blue-950 border-blue-900' : 'bg-white border-neutral-200'} dark:bg-blue-950 dark:border-blue-900`}>
      {/* Top icon block (as provided) */}
      <div className="w-12 h-12 relative overflow-hidden ml-6 md:ml-22">
        <div className={`w-9 h-10 left-[6.25px] top-[4.17px] absolute flex items-center justify-center ${isDark ? 'text-amber-300' : 'text-indigo-900'} dark:text-amber-300 transition-colors duration-200`}>
          {/* Power icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v10" />
            <path d="M7.5 4.2a9 9 0 1 0 9 0" />
          </svg>
        </div>
      </div>

      {/* Menu block (as provided with absolute positions inside a relative wrapper) */}
      <div className="w-36 relative overflow-y-auto flex-1">
        {/* Active pill */}
        <div
          className={`w-36 h-10 left-0 absolute rounded-lg shadow-[0px_4px_10px_0px_rgba(175,137,255,0.15)] ${isDark ? 'bg-amber-400' : 'bg-slate-50'} dark:bg-amber-400 transition-transform transition-colors duration-200 hover:shadow-lg hover:scale-[1.01]`}
          style={{ top: pillTop }}
        />
        <div className={`left-[51px] top-[10px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'dashboard' ? activeTextDark : inactiveTextDark) : 'text-indigo-900'} transition-all duration-200 hover:translate-x-0.5`}>Dashboard</div>
        <div className={`w-4 h-4 left-[11px] top-[11px] absolute ${isDark ? (active === 'dashboard' ? activeTextDark : inactiveTextDark) : 'text-indigo-900'} transition-all duration-200`}>
          {/* Dashboard grid icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
            <rect x="3" y="3" width="8" height="8" rx="1"></rect>
            <rect x="13" y="3" width="8" height="5" rx="1"></rect>
            <rect x="13" y="10" width="8" height="11" rx="1"></rect>
            <rect x="3" y="13" width="8" height="8" rx="1"></rect>
          </svg>
        </div>

        <div className={`w-5 h-5 left-[10px] top-[84px] absolute ${isDark ? (active === 'order' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-colors duration-200 hover:translate-x-0.5`}>
          {/* Orders clipboard icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3h6a2 2 0 0 1 2 2v2H7V5a2 2 0 0 1 2-2z" />
            <path d="M7 7h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
            <path d="M9 11h6M9 15h6" />
          </svg>
        </div>
        <div className={`left-[51px] top-[82px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'order' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-all duration-200 hover:translate-x-0.5`}>Order</div>

        <div className={`w-4 h-5 left-[12px] top-[156px] absolute ${isDark ? (active === 'products' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-colors duration-200 hover:translate-x-0.5`}>
          {/* Products box icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="M3.3 7L12 12l8.7-5" />
            <path d="M12 22V12" />
          </svg>
        </div>
        <div className={`left-[51px] top-[155px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'products' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-all duration-200 hover:translate-x-0.5`}>Products</div>

        <div className={`w-5 h-4 left-[10px] top-[303px] absolute ${isDark ? (active === 'payments' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-colors duration-200 hover:translate-x-0.5`}>
          {/* Payments card icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
            <path d="M2 10h20" />
            <path d="M6 15h4" />
          </svg>
        </div>
        <div className={`left-[51px] top-[299px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'payments' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-all duration-200 hover:translate-x-0.5`}>Payments</div>

        <div className={`w-5 h-5 left-[11px] top-[373.40px] absolute ${isDark ? (active === 'settings' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-colors duration-200 hover:translate-x-0.5`}>
          {/* Settings cog icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.49a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 3.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.04 3.3l.06.06A1.65 1.65 0 0 0 7.92 3h.18A1.65 1.65 0 0 0 9 1.49V1a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 14.1 3c.26 0 .52.03.77.1l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.36 0 .71.13 1 .36.29.23.52.54.63.89H21a2 2 0 0 1 0 4h-.09c-.11.35-.34.66-.63.89-.29.23-.64.36-1 .36z" />
          </svg>
        </div>
        <div className={`left-[51px] top-[371px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'settings' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-all duration-200 hover:translate-x-0.5`}>Settings</div>

        <div className={`w-5 h-4 left-[9px] top-[231px] absolute ${isDark ? (active === 'shipping' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-colors duration-200 hover:translate-x-0.5`}>
          {/* Shipping truck icon */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7h13v10H3z" />
            <path d="M16 11h3l2 3v3h-5z" />
            <circle cx="7.5" cy="18" r="1.5" />
            <circle cx="17.5" cy="18" r="1.5" />
          </svg>
        </div>
        <div className={`left-[51px] top-[227px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'shipping' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-all duration-200 hover:translate-x-0.5`}>Shipping</div>

        {/* Blog */}
        <div className={`w-5 h-5 left-[11px] top-[445px] absolute ${isDark ? (active === 'blog' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-colors duration-200 hover:translate-x-0.5`}>
          {/* Blog icon (book) */}
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" />
          </svg>
        </div>
        <div className={`left-[51px] top-[443px] absolute justify-start text-sm font-medium font-['Poppins'] ${isDark ? (active === 'blog' ? activeTextDark : inactiveTextDark) : 'text-indigo-300'} transition-all duration-200 hover:translate-x-0.5`}>Blog</div>
      </div>
    </aside>
  )
}
