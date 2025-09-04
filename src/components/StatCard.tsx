import React from 'react'

type StatCardProps = {
  title: string
  value: string | number
  from?: string // tailwind color e.g. 'from-teal-300'
  to?: string   // tailwind color e.g. 'to-teal-400'
  icon?: React.ReactNode
  className?: string
}

export default function StatCard({ title, value, from = 'from-blue-400', to = 'to-emerald-200', icon, className = '' }: StatCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl shadow-[0px_2px_10px_0px_rgba(175,137,255,0.15)] bg-gradient-to-br transition-transform duration-300 will-change-transform hover:-translate-y-1 ${from} ${to} ${className}`}>
      {/* Decorative overlay */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rotate-[-17deg] rounded-xl bg-white/10" />
      {/* Shimmer on hover */}
      <div className="shimmer hidden rounded-2xl opacity-70 group-hover:block" />
      {/* Background watermark icon */}
      {icon && (
        <div className="pointer-events-none absolute -left-6 -bottom-6 -rotate-10 text-white/10 animate-float-y">
          <div className="[&>*]:h-24 [&>*]:w-24 md:[&>*]:h-28 md:[&>*]:w-28 lg:[&>*]:h-32 lg:[&>*]:w-32">
            {icon}
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-between p-3 md:p-4">
        <div className="min-w-0">
          <div className="text-white/90 text-xs md:text-sm font-medium truncate">{title}</div>
        </div>
        <div className="text-white font-semibold tracking-wide text-3xl md:text-5xl leading-tight transition-transform duration-300 group-hover:scale-105">{value}</div>
      </div>
    </div>
  )
}
