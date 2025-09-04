import { Link } from 'react-router-dom'
type Row = {
  id: string
  date: string
  name: string
  status: string
  statusDot: string
  amt: string
  avatarUrl?: string
}

type RecentPurchasesProps = {
  isDark?: boolean
  rows: Row[]
  className?: string
}

export default function RecentPurchases({ isDark = false, rows, className = '' }: RecentPurchasesProps) {
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-teal-50'
  const textMain = isDark ? 'text-white' : 'text-black'
  const outline = isDark ? 'outline-slate-600/40' : 'outline-neutral-800/20'
  const border = isDark ? 'border-slate-700/50' : 'border-neutral-800/20'

  return (
    <div className={`w-full max-w-none flex-1 px-4 py-6 ${cardBg} rounded-2xl inline-flex flex-col justify-start items-start gap-4 ${className}`}>
      <div className="self-stretch inline-flex justify-between items-center">
        <div className={`justify-start ${textMain} text-xl font-semibold font-['Rubik']`}>Recent Purchases</div>
        <div className="w-6 h-6 flex items-center justify-center">
          {/* Kebab menu icon */}
          <svg
            viewBox="0 0 24 24"
            className={`${isDark ? 'text-slate-200' : 'text-neutral-900'} w-4 h-4`}
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </div>
      </div>
      <div className={`self-stretch h-0 outline outline-[0.50px] outline-offset-[-0.25px] ${outline}`}></div>
      <div className={`self-stretch border-b-[0.50px] ${border} inline-flex justify-between items-end`}>
        <div className="flex justify-start items-end gap-2">
          <div className="px-2 py-4 flex justify-start items-start gap-2.5">
            <div data-disabled="False" data-focus="False" data-intermediate="False" data-selected="False" className="w-5 h-5 relative opacity-75">
              <div className="w-5 h-5 left-0 top-0 absolute" />
            </div>
          </div>
          <div className="w-36 px-2 py-4 inline-flex flex-col justify-start items-start gap-2.5">
            <div className={`opacity-80 text-center justify-start ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} text-base font-semibold font-['Rubik']`}>Product</div>
          </div>
        </div>
        <div className="px-2 py-4 inline-flex flex-col justify-start items-start gap-2.5">
          <div className={`opacity-80 text-center justify-start ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} text-base font-semibold font-['Rubik']`}>Order ID</div>
        </div>
        <div className="w-24 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
          <div className={`opacity-80 text-center justify-start ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} text-base font-semibold font-['Rubik']`}>Date</div>
        </div>
        <div className="px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
          <div className={`opacity-80 text-center justify-start ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} text-base font-semibold font-['Rubik']`}>Customer  Name</div>
        </div>
        <div className="w-20 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
          <div className={`opacity-80 text-center justify-start ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} text-base font-semibold font-['Rubik']`}>Status</div>
        </div>
        <div className="w-20 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
          <div className={`opacity-80 text-center justify-start ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} text-base font-semibold font-['Rubik']`}>Amount</div>
        </div>
      </div>

      {rows.map((r) => (
        <div key={r.id} className={`self-stretch border-b-[0.50px] ${border} inline-flex justify-between items-end`}>
          <div className="flex justify-start items-end gap-2">
            <div className="px-2 py-4 flex justify-start items-start gap-2.5">
              <div data-disabled="False" data-focus="False" data-intermediate="False" data-selected="False" className="w-5 h-5 relative opacity-75">
                <div className="w-5 h-5 left-0 top-0 absolute" />
              </div>
            </div>
            <div className="px-2 py-4 inline-flex flex-col justify-start items-start gap-2.5">
              <div className={`w-32 justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>Lorem Ipsum</div>
            </div>
          </div>
          <div className="w-20 px-2 py-4 inline-flex flex-col justify-start items-center gap-2.5">
            <Link
              to={`/admin/orders/${r.id.replace('#', '')}`}
              className={`text-center justify-start ${textMain} text-sm font-semibold font-['Open_Sans'] underline underline-offset-2 hover:opacity-80`}
            >
              {r.id}
            </Link>
          </div>
          <div className="px-2 py-4 inline-flex flex-col justify-start items-start gap-2.5">
            <div className={`text-center justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>{r.date}</div>
          </div>
          <div className="w-36 px-2 py-4 flex justify-start items-center gap-2">
            {r.avatarUrl ? (
              <img
                className="w-6 h-6 rounded-full object-cover"
                src={r.avatarUrl}
                alt={`${r.name} avatar`}
                loading="lazy"
              />
            ) : (
              <div className={`${isDark ? 'bg-slate-700 text-slate-200' : 'bg-neutral-200 text-neutral-800'} w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold`}
                aria-label={`${r.name} avatar`}>
                {r.name
                  .split(' ')
                  .map(p => p[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            )}
            <div className={`text-center justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>{r.name}</div>
          </div>
          <div className="w-20 py-4 flex justify-center items-center gap-2">
            <div className={`w-2 h-2 ${r.statusDot} rounded-full`} />
            <div className={`text-center justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>{r.status}</div>
          </div>
          <div className="w-20 px-2 py-4 inline-flex flex-col justify-center items-center gap-2.5">
            <div className={`text-center justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>{r.amt}</div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="inline-flex justify-center items-center gap-4">
        <div data-change-icon="None" data-size="Small" data-state="Default" data-type="Filled" className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className={`self-stretch h-8 px-4 py-2 ${isDark ? 'bg-slate-700 text-white' : 'bg-neutral-800 text-white'} rounded-lg inline-flex justify-center items-center gap-1`}>
            <div className="justify-start text-sm font-medium font-['Inter'] uppercase tracking-tight">1</div>
          </div>
        </div>
        {[2,3,4].map(n => (
          <div key={n} data-change-icon="None" data-size="Small" data-state="Default" data-type="Outlined" className="inline-flex flex-col justify-start items-start gap-2.5">
            <div className={`self-stretch h-8 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-600 text-slate-300' : 'outline-neutral-800 text-neutral-800'} inline-flex justify-center items-center gap-1`}>
              <div className="justify-start text-sm font-medium font-['Inter'] uppercase tracking-tight">{n}</div>
            </div>
          </div>
        ))}
        <div className={`${isDark ? 'text-slate-300' : 'text-neutral-800'} text-sm font-medium font-['Inter'] uppercase tracking-tight`}>...</div>
        <div data-change-icon="None" data-size="Small" data-state="Default" data-type="Outlined" className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className={`self-stretch h-8 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-600 text-slate-300' : 'outline-neutral-800 text-neutral-800'} inline-flex justify-center items-center gap-1`}>
            <div className="justify-start text-sm font-medium font-['Inter'] uppercase tracking-tight">10</div>
          </div>
        </div>
        <div data-change-icon="Right" data-size="Small" data-state="Default" data-type="Outlined" className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className={`self-stretch h-8 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-600 text-slate-300' : 'outline-neutral-800 text-neutral-800'} inline-flex justify-center items-center gap-1`}>
            <div className="justify-start text-sm font-medium font-['Inter'] uppercase tracking-tight">Next</div>
            <div className="w-4 h-4 flex items-center justify-center">
              {/* Chevron-right icon */}
              <svg
                viewBox="0 0 24 24"
                className={`${isDark ? 'text-slate-300' : 'text-neutral-800'} w-4 h-4`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
