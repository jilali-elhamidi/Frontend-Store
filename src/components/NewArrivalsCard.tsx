export type NewArrivalsCardProps = {
  category: string
  title: string
  price: string
  oldPrice?: string
  image: string
  saleBadgeText?: string
}

export default function NewArrivalsCard({ category, title, price, oldPrice, image, saleBadgeText }: NewArrivalsCardProps) {
  return (
    <div className="relative w-72 h-96 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden bg-white">
      {/* Image */}
      <div className="relative w-72 h-60">
        <img className="w-72 h-60 absolute inset-0 object-cover" src={image} alt={title} />
        {saleBadgeText && (
          <div className="absolute left-[218.03px] top-[11px] w-12 h-5 bg-red-400 rounded-[5px] grid place-items-center">
            <div className="text-white text-xs font-medium uppercase leading-3 tracking-wide">{saleBadgeText}</div>
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div className="relative w-72 h-44 border-t border-zinc-100">
        <div className="absolute left-5 top-[21px] text-neutral-400 text-xs capitalize leading-none">{category}</div>
        <div className="absolute left-5 top-[46.6px] right-5 text-orange-300 text-sm capitalize leading-snug tracking-wide line-clamp-2">{title}</div>

        {/* Rating dots (static 4 orange + 1 gray to mimic design) */}
        <div className="absolute left-5 top-[105.6px] flex gap-4 opacity-50">
          {[0,1,2,3].map((i) => (
            <span key={i} className="block h-3 w-3 bg-orange-500"></span>
          ))}
          <span className="block h-3 w-3 bg-neutral-500"></span>
        </div>

        {/* Price row */}
        <div className="absolute left-5 top-[129.6px] flex items-center gap-3">
          <div className="text-orange-300 text-sm font-bold">{price}</div>
          {oldPrice && <div className="text-neutral-500 text-sm line-through">{oldPrice}</div>}
        </div>
      </div>
    </div>
  )
}
