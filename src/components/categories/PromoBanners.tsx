type Promo = {
  title: string
  subtitle?: string
  cta?: string
  image: string
  ctaClassName?: string
}

export default function PromoBanners({
  left,
  right,
  ctaClassName,
}: {
  left?: Promo
  right?: Promo
  ctaClassName?: string
}) {
  const defaults: { left: Promo; right: Promo } = {
    left: {
      title: 'Digital Smartwatch',
      subtitle: '50% OFF',
      cta: 'Shop Now',
      image:
        'https://images.unsplash.com/photo-1518081461904-9ac112093c05?q=80&w=900&auto=format&fit=crop',
    },
    right: {
      title: 'Men’s Sport Shoes',
      subtitle: '70% OFF',
      cta: 'Shop Now',
      image:
        'https://images.unsplash.com/photo-1542293787938-c9e299b88054?q=80&w=900&auto=format&fit=crop',
    },
  }

  const data = { left: { ...defaults.left, ...left }, right: { ...defaults.right, ...right } }

  const Card = ({ item }: { item: Promo }) => (
    <div className="relative w-full h-44 md:h-48 bg-zinc-100 rounded-xl overflow-hidden shadow-sm ml-0 md:-ml-10">
      {/* decorative circle */}
      <div className="absolute -right-20 -top-12 h-64 w-64 rounded-full bg-white/50" />

      {/* image */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 h-36 w-36 md:h-40 md:w-40 rounded-full overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </div>

      {/* text */}
      <div className="absolute left-44 right-5 top-1/2 -translate-y-1/2 z-10">
        <div className="text-2xl md:text-3xl font-bold text-orange-300 leading-snug">
          {item.title}
        </div>
        {item.subtitle && (
          <div className="mt-1 text-sm text-neutral-500">{item.subtitle}</div>
        )}
        {item.cta && (
          <button
            className={`mt-3 inline-flex items-center rounded-md px-3 py-1.5 text-xs font-semibold text-white shadow-md ring-1 ring-black/10 z-20 ${
              item.ctaClassName ?? ctaClassName ?? '!bg-green-600 hover:!bg-green-700'
            }`}
            style={!item.ctaClassName && !ctaClassName ? { backgroundColor: '#16a34a' } : undefined}
          >
            {item.cta}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <Card item={data.left} />
      <Card item={data.right} />
    </div>
  )
}
