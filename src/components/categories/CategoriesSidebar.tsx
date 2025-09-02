import { useState } from 'react'

export default function CategoriesSidebar() {
  const sectionClass = 'mb-6 rounded-lg border border-neutral-300/60 p-4 bg-white'
  const titleClass = 'mb-0 text-base font-bold text-black'
  const checkboxClass = 'flex items-center gap-2 py-1 text-sm text-neutral-700'

  const [open, setOpen] = useState({
    categories: true,
    brand: true,
    price: true,
    tags: true,
  })

  const Chevron = ({ open }: { open: boolean }) => (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.172l3.71-2.94a.75.75 0 111.06 1.06l-4.24 3.36a.75.75 0 01-.94 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
    </svg>
  )

  return (
    <aside className="w-64 shrink-0">
      {/* Categories */}
      <div className={sectionClass} >
        <button
          type="button"
          className="mb-3 flex w-full items-center justify-between"
          onClick={() => setOpen((s) => ({ ...s, categories: !s.categories }))}
          aria-expanded={open.categories}
        >
          <h3 className={titleClass}>Categories</h3>
          <Chevron open={open.categories} />
        </button>
        {open.categories && (
          <div className="space-y-1">
            {['Televisions', 'PC Gaming', 'Computers', 'Cameras', 'Gadgets', 'Smart Home', 'Sport Equipments'].map((c) => (
              <label key={c} className={checkboxClass}>
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-orange-400 focus:ring-orange-300" />
                <span>{c}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand */}
      <div className={sectionClass}>
        <button
          type="button"
          className="mb-3 flex w-full items-center justify-between"
          onClick={() => setOpen((s) => ({ ...s, brand: !s.brand }))}
          aria-expanded={open.brand}
        >
          <h3 className={titleClass}>Brand</h3>
          <Chevron open={open.brand} />
        </button>
        {open.brand && (
          <div className="space-y-1">
            {['Sony', 'Samsung', 'LG', 'Sceptre', 'Gigabyte', 'Durotan'].map((b) => (
              <label key={b} className={checkboxClass}>
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-orange-400 focus:ring-orange-300" />
                <span>{b}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className={sectionClass}>
        <button
          type="button"
          className="mb-3 flex w-full items-center justify-between"
          onClick={() => setOpen((s) => ({ ...s, price: !s.price }))}
          aria-expanded={open.price}
        >
          <h3 className={titleClass}>Price</h3>
          <Chevron open={open.price} />
        </button>
        {open.price && (
          <div className="space-y-3">
            <input type="range" min={0} max={5000} defaultValue={1500} className="w-full accent-orange-400" />
            <div className="flex items-center gap-2 text-sm">
              <input type="number" placeholder="$ Min" className="w-24 rounded border border-neutral-300 px-2 py-1" />
              <span className="text-neutral-500">—</span>
              <input type="number" placeholder="$ Max" className="w-24 rounded border border-neutral-300 px-2 py-1" />
            </div>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className={sectionClass}>
        <button
          type="button"
          className="mb-3 flex w-full items-center justify-between"
          onClick={() => setOpen((s) => ({ ...s, tags: !s.tags }))}
          aria-expanded={open.tags}
        >
          <h3 className={titleClass}>Tags</h3>
          <Chevron open={open.tags} />
        </button>
        {open.tags && (
          <div className="flex flex-wrap gap-2">
            {['new', 'best seller', 'top rated', '0% installment', 'discount'].map((t) => (
              <button key={t} className="rounded-[30px] border border-neutral-300 px-3 py-1 text-xs capitalize hover:border-neutral-400">{t}</button>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
