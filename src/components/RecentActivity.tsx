function Badge({ color, label }: { color: 'orange' | 'green' | 'gray'; label: string }) {
  const styles =
    color === 'orange'
      ? 'bg-orange-300 text-white'
      : color === 'green'
      ? 'bg-emerald-200 text-white'
      : 'bg-gray-100 text-gray-400'
  return (
    <span className={`inline-flex items-center justify-center h-6 px-3 rounded-lg text-xs font-semibold uppercase tracking-wide ${styles}`}>
      {label}
    </span>
  )
}

export default function RecentActivity() {
  return (
    <section className="w-full bg-stone-50 rounded-2xl shadow-[0px_2px_10px_0px_rgba(175,137,255,0.15)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <h3 className="text-black text-lg font-medium">Recent Activity</h3>
        <button className="text-emerald-200 text-sm font-semibold leading-tight tracking-tight hover:opacity-80">
          View all
        </button>
      </div>

      <ul className="mt-3 divide-y divide-zinc-200/80">
        {/* Item 1 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            <span className="text-gray-800 text-sm font-semibold truncate">Confirm order update</span>
          </div>
          <Badge color="orange" label="Urgent" />
        </li>
        {/* Item 2 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="h-5 w-5 rounded-full bg-red-600" />
            <span className="text-gray-800 text-sm font-semibold truncate">Finish shipping update</span>
          </div>
          <Badge color="orange" label="Urgent" />
        </li>
        {/* Item 3 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="h-5 w-5 rounded-full border-2 border-neutral-300" />
            <span className="text-gray-800 text-sm font-semibold truncate">Create new order</span>
          </div>
          <Badge color="green" label="New" />
        </li>
        {/* Item 4 */}
        <li className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>
            <span className="text-gray-800 text-sm font-semibold truncate">Update payment report</span>
          </div>
          <Badge color="gray" label="Default" />
        </li>
      </ul>
    </section>
  )
}
