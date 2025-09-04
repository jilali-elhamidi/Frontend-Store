export type ProductCardBadge = {
  label: string
  color?: 'orange' | 'sky' | 'green' | 'red'
}

export type ProductCardProps = {
  title: string
  price: string
  oldPrice?: string
  image: string
  ratingCount?: number
  badges?: ProductCardBadge[]
  showInstallment?: boolean
}

const badgeColorClass: Record<NonNullable<ProductCardBadge['color']>, string> = {
  orange: 'bg-orange-300',
  sky: 'bg-sky-400',
  green: 'bg-green-700',
  red: 'bg-red-600',
}

export default function ProductCard({
  title,
  price,
  oldPrice,
  image,
  ratingCount,
  badges = [],
  showInstallment = true,
}: ProductCardProps) {
  return (
    <div className="relative w-60 h-96 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-400/60 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_8px_20px_rgba(0,0,0,0.08)] " >
      {/* Top row */}
      <div className="w-60 h-14 absolute left-[1px] top-[1px] ">
        {showInstallment && (
          <div className="w-28 h-7 left-[15px] top-[15px] absolute rounded-[800px] outline outline-1 outline-offset-[-1px] outline-red-600">
            <div className="w-20 h-4 left-[17px] top-[4.75px] absolute justify-center text-red-600 text-xs leading-none">0% Installment</div>
          </div>
        )}
        <div className="w-7 h-7 left-[189px] top-[15px] absolute rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-400/60 grid place-items-center">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-6.716-4.243-9.193-6.721a5.5 5.5 0 1 1 7.778-7.778L12 6.916l1.415-1.415a5.5 5.5 0 1 1 7.778 7.778C18.716 16.757 12 21 12 21z"/>
          </svg>
        </div>
      </div>

      {/* Image */}
      <img className="w-52 h-40 left-[16px] top-[61px] absolute object-cover rounded" src={image} alt={title} loading="lazy" />

      {/* Bottom gradient info */}
      <div className="w-60 left-[1px] bottom-0 absolute bg-gradient-to-t from-white/95 via-white/90 to-white/40 rounded-b-[10px] p-4">
        {badges.length > 0 && (
          <div className="flex items-center gap-2 mb-2">
            {badges.map((b) => (
              <span key={b.label} className={`px-3 py-1 rounded-[800px] text-white text-xs uppercase ${badgeColorClass[b.color ?? 'orange']}`}>
                {b.label}
              </span>
            ))}
          </div>
        )}
        <div className="text-black text-sm font-semibold leading-tight">{title}</div>
        <div className="mt-2 flex items-center gap-1 text-green-700 text-xs">
          {/* Static 5 stars for now to match original UI */}
          {[0,1,2,3,4].map((i) => (
            <svg key={i} viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.97 0 1.372 1.24.589 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.987 2.033c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L3.38 8.72c-.783-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .952-.69l1.07-3.292Z"/></svg>
          ))}
          {typeof ratingCount === 'number' && (
            <span className="ml-1 text-black text-xs leading-tight">({ratingCount})</span>
          )}
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className={`text-xl leading-loose ${oldPrice ? 'text-red-600' : 'text-black'}`}>{price}</span>
          {oldPrice && <span className="text-neutral-400 text-base line-through leading-7">{oldPrice}</span>}
        </div>
      </div>
    </div>
  )
}
