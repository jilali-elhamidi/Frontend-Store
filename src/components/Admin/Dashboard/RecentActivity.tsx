function Badge({ color, label, isDark = false }: { color: 'orange' | 'green' | 'gray'; label: string; isDark?: boolean }) {
  const styles =
    color === 'orange'
      ? 'bg-orange-300 text-white'
      : color === 'green'
      ? 'bg-emerald-200 text-white'
      : `${isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-400'} dark:bg-slate-700 dark:text-slate-300`
  return (
    <span className={`inline-flex items-center justify-center h-6 px-3 rounded-lg text-xs font-semibold uppercase tracking-wide ${styles}`}>
      {label}
    </span>
  )
}

type RecentActivityProps = { isDark?: boolean }

export default function RecentActivity({ isDark = false }: RecentActivityProps) {
  return (
    <section className={`w-full rounded-2xl shadow-[0px_2px_10px_0px_rgba(175,137,255,0.15)] ${isDark ? 'bg-black' : 'bg-stone-50'} dark:bg-black`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <h3 className={`text-lg font-medium ${isDark ? 'text-slate-100' : 'text-black'} dark:text-slate-100`}>Recent Activity</h3>
        <button className="text-emerald-200 text-sm font-semibold leading-tight tracking-tight hover:opacity-80">
          View all
        </button>
      </div>

      <ul className={`mt-3 divide-y ${isDark ? 'divide-slate-700' : 'divide-zinc-200/80'} dark:divide-slate-700`}>
        {/* Item 1 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            <span className={`text-sm font-semibold truncate ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>Confirm order update</span>
          </div>
          <Badge color="orange" label="Urgent" isDark={isDark} />
        </li>
        {/* Item 2 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="h-5 w-5 rounded-full bg-red-600" />
            <span className={`text-sm font-semibold truncate ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>Finish shipping update</span>
          </div>
          <Badge color="orange" label="Urgent" isDark={isDark} />
        </li>
        {/* Item 3 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className={`h-5 w-5 rounded-full border-2 ${isDark ? 'border-slate-600' : 'border-neutral-300'} dark:border-slate-600`} />
            <span className={`text-sm font-semibold truncate ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>Create new order</span>
          </div>
          <Badge color="green" label="New" isDark={isDark} />
        </li>
        {/* Item 4 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            <span className={`text-sm font-semibold truncate ${isDark ? 'text-slate-100' : 'text-gray-800'} dark:text-slate-100`}>Update payment report</span>
          </div>
          <Badge color="gray" label="Default" isDark={isDark} />
        </li>
      </ul>
    </section>
  )
}
