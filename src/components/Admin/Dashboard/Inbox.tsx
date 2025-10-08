type InboxProps = { isDark?: boolean }

export default function Inbox({ isDark = false }: InboxProps) {
  return (
    <section className={`w-full rounded-2xl shadow-[0px_2px_10px_0px_rgba(175,137,255,0.15)] ${isDark ? 'bg-black' : 'bg-stone-50'} dark:bg-black`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="min-w-0">
          <div className={`text-lg font-bold tracking-wide ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>Inbox</div>
          <div className="text-xs leading-none tracking-tight">
            <span className={`${isDark ? 'text-slate-400' : 'text-gray-400'} dark:text-slate-400`}>Group: </span>
            <span className={`${isDark ? 'text-slate-300' : 'text-slate-600'} dark:text-slate-300`}>Support</span>
          </div>
        </div>
        <button className="text-emerald-200 text-xs sm:text-sm font-semibold leading-tight tracking-tight hover:opacity-80">
          View details
        </button>
      </div>

      {/* List */}
      <div className={`mt-3 divide-y ${isDark ? 'divide-slate-700' : 'divide-zinc-200/80'} dark:divide-slate-700`}>
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:h-12">
          <div className={`text-sm font-medium leading-tight tracking-tight truncate ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>
            Waiting for order#12345
          </div>
          <div className={`text-sm font-medium leading-tight tracking-tight ${isDark ? 'text-slate-400' : 'text-gray-400'} dark:text-slate-400`}>4:39</div>
        </div>
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:h-12">
          <div className={`text-sm font-medium leading-tight tracking-tight truncate ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>
            Customer support id#22234
          </div>
          <div className={`text-sm font-medium leading-tight tracking-tight ${isDark ? 'text-slate-400' : 'text-gray-400'} dark:text-slate-400`}>11:07</div>
        </div>
      </div>
    </section>
  )
}
