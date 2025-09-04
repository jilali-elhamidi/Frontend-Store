export default function Inbox() {
  return (
    <section className="w-full bg-stone-50 rounded-2xl shadow-[0px_2px_10px_0px_rgba(175,137,255,0.15)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="min-w-0">
          <div className="text-gray-800 text-lg font-bold tracking-wide">Inbox</div>
          <div className="text-xs leading-none tracking-tight">
            <span className="text-gray-400">Group: </span>
            <span className="text-slate-600">Support</span>
          </div>
        </div>
        <button className="text-emerald-200 text-sm font-semibold leading-tight tracking-tight hover:opacity-80">
          View details
        </button>
      </div>

      {/* List */}
      <div className="mt-3 divide-y divide-zinc-200/80">
        <div className="flex items-center justify-between px-4 h-12">
          <div className="text-gray-800 text-sm font-medium leading-tight tracking-tight truncate">
            Waiting for order#12345
          </div>
          <div className="text-gray-400 text-sm font-medium leading-tight tracking-tight">4:39</div>
        </div>
        <div className="flex items-center justify-between px-4 h-12">
          <div className="text-gray-800 text-sm font-medium leading-tight tracking-tight truncate">
            Customer support id#22234
          </div>
          <div className="text-gray-400 text-sm font-medium leading-tight tracking-tight">11:07</div>
        </div>
      </div>
    </section>
  )
}
