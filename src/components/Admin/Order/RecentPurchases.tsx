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
    <div
      className={`w-full max-w-none flex-1 px-4 py-6 ${cardBg} rounded-2xl flex flex-col justify-start items-start gap-4 ${className}`}
    >
      {/* Header */}
      <div className="self-stretch flex justify-between items-center">
        <div className={`justify-start ${textMain} text-xl font-semibold font-['Rubik']`}>Recent Purchases</div>
        <div className="w-6 h-6 flex items-center justify-center">
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

      <div
        className={`self-stretch h-0 outline outline-[0.50px] outline-offset-[-0.25px] ${outline}`}
      ></div>

      {/* ==================== TABLE (Desktop) ==================== */}
      <div className="hidden sm:flex sm:flex-col self-stretch">
        {/* Table Header */}
        <div
          className={`border-b-[0.50px] ${border} flex justify-between items-end py-3`}
        >
          <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} w-36`}>
            Product
          </div>
          <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} w-16`}>
            Order ID
          </div>
          <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} w-24`}>
            Date
          </div>
          <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} w-28`}>
            Customer
          </div>
          <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} w-20`}>
            Status
          </div>
          <div className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-neutral-800/80'} w-20`}>
            Amount
          </div>
        </div>

        {/* Table Rows */}
        {rows.map((r) => (
          <div
            key={r.id}
            className={`border-b-[0.50px] ${border} flex justify-between items-center py-3`}
          >
            {/* Product */}
            <div
              className={`${textMain} text-sm font-semibold font-['Open_Sans'] w-36`}
            >
              Lorem Ipsum
            </div>

            {/* Order ID */}
            <div className="w-16 text-center">
              <Link
                to={`/admin/orders/${r.id.replace('#', '')}`}
                className={`text-xs sm:text-sm font-semibold font-['Open_Sans'] underline underline-offset-2 hover:opacity-80 ${textMain}`}
              >
                {r.id}
              </Link>
            </div>

            {/* Date */}
            <div
              className={`w-24 text-center ${textMain} text-xs sm:text-sm font-semibold`}
            >
              {r.date}
            </div>

            {/* Customer */}
            <div className="w-28 flex items-center gap-2">
              {r.avatarUrl ? (
                <img
                  className="w-6 h-6 rounded-full object-cover"
                  src={r.avatarUrl}
                  alt={`${r.name} avatar`}
                  loading="lazy"
                />
              ) : (
                <div
                  className={`${
                    isDark ? 'bg-slate-700 text-slate-200' : 'bg-neutral-200 text-neutral-800'
                  } w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold`}
                >
                  {r.name
                    .split(' ')
                    .map((p) => p[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
              )}
              <span
                className={`${textMain} text-xs sm:text-sm font-semibold font-['Open_Sans'] whitespace-nowrap`}
              >
                {r.name}
              </span>
            </div>

            {/* Status */}
            <div
              className={`w-20 text-center ${textMain} text-xs sm:text-sm font-semibold`}
            >
              {r.status}
            </div>

            {/* Amount */}
            <div
              className={`w-20 text-center ${textMain} text-xs sm:text-sm font-semibold`}
            >
              {r.amt}
            </div>
          </div>
        ))}
      </div>

      {/* ==================== MOBILE CARDS ==================== */}
      <div className="flex flex-col sm:hidden gap-3 w-full">
        {rows.map((r) => (
          <div
            key={r.id}
            className={`rounded-xl p-4 border ${border} flex flex-col gap-2 ${
              isDark ? 'bg-slate-800/40' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {r.avatarUrl ? (
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={r.avatarUrl}
                    alt={`${r.name} avatar`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`${
                      isDark ? 'bg-slate-700 text-slate-200' : 'bg-neutral-200 text-neutral-800'
                    } w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold`}
                  >
                    {r.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}
                <div className={`${textMain} text-sm font-semibold`}>{r.name}</div>
              </div>
              <div
                className={`text-xs px-2 py-1 rounded-full ${
                  r.status.toLowerCase() === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : r.status.toLowerCase() === 'pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {r.status}
              </div>
            </div>

            <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-neutral-600'}`}>
              Order ID:{' '}
              <Link
                to={`/admin/orders/${r.id.replace('#', '')}`}
                className="underline underline-offset-2"
              >
                {r.id}
              </Link>
            </div>

            <div className={`flex justify-between ${textMain} text-sm`}>
              <div>{r.date}</div>
              <div className="font-semibold">{r.amt}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-4">
        <div className="flex flex-col justify-start items-start">
          <div
            className={`h-8 px-3 py-1.5 sm:px-4 sm:py-2 ${
              isDark ? 'bg-slate-700 text-white' : 'bg-neutral-800 text-white'
            } rounded-lg inline-flex justify-center items-center gap-1`}
          >
            <div className="text-sm font-medium font-['Inter'] uppercase tracking-tight">1</div>
          </div>
        </div>

        {[2, 3, 4].map((n) => (
          <div key={n} className="flex flex-col justify-start items-start">
            <div
              className={`h-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${
                isDark ? 'outline-slate-600 text-slate-300' : 'outline-neutral-800 text-neutral-800'
              } inline-flex justify-center items-center gap-1`}
            >
              <div className="text-sm font-medium font-['Inter'] uppercase tracking-tight">{n}</div>
            </div>
          </div>
        ))}

        <div
          className={`${
            isDark ? 'text-slate-300' : 'text-neutral-800'
          } text-sm font-medium font-['Inter'] uppercase tracking-tight px-1`}
        >
          ...
        </div>

        <div className="flex flex-col justify-start items-start">
          <div
            className={`h-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${
              isDark ? 'outline-slate-600 text-slate-300' : 'outline-neutral-800 text-neutral-800'
            } inline-flex justify-center items-center gap-1`}
          >
            <div className="text-sm font-medium font-['Inter'] uppercase tracking-tight">10</div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start">
          <div
            className={`h-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${
              isDark ? 'outline-slate-600 text-slate-300' : 'outline-neutral-800 text-neutral-800'
            } inline-flex justify-center items-center gap-1`}
          >
            <div className="text-sm font-medium font-['Inter'] uppercase tracking-tight">Next</div>
            <div className="w-4 h-4 flex items-center justify-center">
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
