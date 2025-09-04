import React from 'react'

type Props = {
  title?: string
  headerRight?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export default function CardShell({ title, headerRight, className = '', children }: Props) {
  return (
    <div
      className={
        `group relative bg-white rounded-[10px] overflow-hidden `+
        `outline outline-1 outline-offset-[-1px] outline-neutral-300 `+
        `shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)] `+
        `transition-all duration-300 will-change-transform p-5 `+
        `hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.07),_0_20px_40px_rgba(0,0,0,0.10)] `+
        `outline-neutral-200 hover:outline-violet-200 `+
        className
      }
    >
      {/* Decorative gradient bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />
      {(title || headerRight) && (
        <div className="mb-3 flex items-center justify-between">
          {title ? <h2 className="text-lg font-semibold">{title}</h2> : <span />}
          {headerRight}
        </div>
      )}
      {children}
    </div>
  )
}
