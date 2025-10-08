import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

type TrendPoint = { name: string; today: number; yesterday: number }

function generateTrendsData(): TrendPoint[] {
  // Generate hourly points from 09:00 to 17:00
  const hours = Array.from({ length: 9 }, (_, i) => 9 + i) // 9..17
  const rad = (deg: number) => (deg * Math.PI) / 180

  const points: TrendPoint[] = hours.map((h, idx) => {
    const t = idx / (hours.length - 1) // 0..1
    // Today: base sinusoid + small high-frequency + slight upward trend + noise
    const base = 18 + 12 * Math.sin(rad(20 + 180 * t)) + 4 * Math.sin(rad(360 * t)) + 6 * t
    const noise = (Math.random() - 0.5) * 2 // -1..1
    const today = Math.max(0, Math.round(base + noise))
    // Yesterday: phase-shifted and lower amplitude, smoothed
    const yBase = 16 + 9 * Math.sin(rad(180 * t - 25)) + 3 * Math.sin(rad(360 * t - 30)) + 4 * t
    const yesterday = Math.max(0, Math.round(yBase))
    const label = `${String(h).padStart(2, '0')}:00`
    return { name: label, today, yesterday }
  })

  return points
}

const data: TrendPoint[] = generateTrendsData()

function ActiveDot(props: any) {
  const { cx, cy } = props
  if (cx == null || cy == null) return null
  return (
    <g>
      <circle cx={cx} cy={cy} r={10} stroke="#2563eb" strokeWidth={2} opacity={0.2} fill="none" />
      <circle cx={cx} cy={cy} r={4} fill="#ffffff" stroke="#2563eb" strokeWidth={6} />
    </g>
  )
}

type TrendsCardProps = { isDark?: boolean }

export default function TrendsCard({ isDark = false }: TrendsCardProps) {
  // Compute the max point on 'today' to display value callout
  let highlightIndex = 0
  let maxVal = -Infinity
  let yHighlightIndex = 0
  let yMaxVal = -Infinity
  data.forEach((p, i) => {
    if (p.today > maxVal) {
      maxVal = p.today
      highlightIndex = i
    }
    if (p.yesterday > yMaxVal) {
      yMaxVal = p.yesterday
      yHighlightIndex = i
    }
  })
  const highlightValue = maxVal
  const yesterdayHighlightValue = yMaxVal

  return (
    <section className={`w-full rounded-2xl shadow-[0px_2px_10px_0px_rgba(175,137,255,0.15)] p-4 ${isDark ? 'bg-black' : 'bg-white'} dark:bg-black`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className={`font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'} dark:text-slate-100`}>Today vs Yesterday</h3>
          <div className="text-xs text-gray-400 dark:text-slate-400">30 Sept 2021</div>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <span className="inline-block w-5 border-t-2 border-blue-600" />
            Today
          </span>
          <span className="flex items-center gap-2">
            <span className={`inline-block w-4 border-t-2 ${isDark ? 'border-pink-600' : 'border-zinc-300'}`} />
            Yesterday
          </span>
        </div>
      </div>

      <div className="relative w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="todayStroke" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={1} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="yesterdayStroke" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isDark ? '#e11d48' : '#9ca3af'} stopOpacity={1} />
                <stop offset="100%" stopColor={isDark ? '#e11d48' : '#9ca3af'} stopOpacity={isDark ? 0.25 : 0.4} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke={isDark ? '#334155' : '#e5e7eb'} strokeOpacity={0.8} vertical={false} />
            <XAxis dataKey="name" tick={{ fill: isDark ? '#94a3b8' : '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: isDark ? '#94a3b8' : '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} width={28} />
            <Tooltip contentStyle={{ borderRadius: 8, borderColor: isDark ? '#334155' : '#e5e7eb' }} />
            <Legend wrapperStyle={{ paddingTop: 8, color: isDark ? '#94a3b8' : '#9ca3af' }} />

            {/* Yesterday */}
            <Line
              type="monotone"
              dataKey="yesterday"
              stroke="url(#yesterdayStroke)"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />

            {/* Today */}
            <Line
              type="monotone"
              dataKey="today"
              stroke="url(#todayStroke)"
              strokeWidth={3}
              dot={false}
              activeDot={<ActiveDot />}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Value callouts near highlight points */}
        <div
          className="absolute -translate-x-1/2 -translate-y-full bg-white text-gray-800 text-xs sm:text-sm font-semibold rounded-md px-2 py-1 shadow dark:bg-slate-900 dark:text-slate-100 dark:border dark:border-slate-700"
          style={{ left: `${(highlightIndex / (data.length - 1)) * 100}%`, top: '40%' }}
        >
          {highlightValue}
        </div>
        <div
          className="absolute -translate-x-1/2 -translate-y-full bg-white text-gray-600 text-xs sm:text-sm font-semibold rounded-md px-2 py-1 shadow dark:bg-slate-900 dark:text-slate-300 dark:border dark:border-slate-700"
          style={{ left: `${(yHighlightIndex / (data.length - 1)) * 100}%`, top: '70%' }}
        >
          {yesterdayHighlightValue}
        </div>
      </div>
    </section>
  )
}
