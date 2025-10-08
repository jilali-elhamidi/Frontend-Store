import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'

export default function AdminProductsPage() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(true)
  const [query, setQuery] = useState<string>('')
  const [selectedCats, setSelectedCats] = useState<Set<string>>(new Set())

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const preferDark = saved ? saved === 'dark' : systemPrefersDark
    setIsDark(preferDark)
    if (preferDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // keep in sync with system changes if user hasn't saved a preference
    const mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const next = e.matches
        setIsDark(next)
        document.documentElement.classList.toggle('dark', next)
      }
    }
    mql?.addEventListener?.('change', onChange)
    return () => {
      mql?.removeEventListener?.('change', onChange)
    }
  }, [])

  const frameBg = isDark ? 'bg-slate-800' : 'bg-slate-50'
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-white'
  const subtleCardBg = isDark ? 'bg-slate-900/60' : 'bg-neutral-50'
  const textMain = isDark ? 'text-white' : 'text-black'
  const textSub = isDark ? 'text-slate-300' : 'text-neutral-800'

  type Product = { id: number; name: string; category: string; price: number; image: string }
  const products: Product[] = [
    { id: 1, name: 'Wireless Earbuds', category: 'Audio', price: 110.4, image: 'https://images.unsplash.com/photo-1518446751215-4a655f1f3d54?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Smart Watch', category: 'Wearables', price: 199.99, image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Power Bank', category: 'Battery', price: 49.99, image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Bluetooth Speaker', category: 'Audio', price: 89.99, image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=400&auto=format&fit=crop' },
    { id: 5, name: 'USB-C Cable', category: 'Accessories', price: 9.99, image: 'https://images.unsplash.com/photo-1587825140400-4cfa3c1623e5?q=80&w=400&auto=format&fit=crop' },
    { id: 6, name: 'Portable SSD', category: 'Storage', price: 129.5, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=400&auto=format&fit=crop' },
  ]

  const categories = useMemo(() => {
    const counts: Record<string, number> = {}
    products.forEach((p) => (counts[p.category] = (counts[p.category] || 0) + 1))
    return Object.entries(counts).map(([name, count]) => ({ name, count }))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const matchesQuery = !q || p.name.toLowerCase().includes(q)
      const matchesCat = selectedCats.size === 0 || selectedCats.has(p.category)
      return matchesQuery && matchesCat
    })
  }, [products, query, selectedCats])

  const toggleCat = (name: string) => {
    setSelectedCats((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <div className={`w-full md:w-80 h-full p-4 ${subtleCardBg} rounded-2xl inline-flex flex-col justify-start items-start gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}>
      <div className="self-stretch inline-flex justify-start items-start gap-4 min-h-20">
        <div className="w-20 h-20 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={product.image}
            alt={product.name}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              if (target.src.indexOf('/apple-store-751567_1280-removebg-preview.png') === -1) {
                target.src = '/apple-store-751567_1280-removebg-preview.png'
              }
            }}
          />
        </div>
        <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-start items-start gap-4">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-0.5">
              <div className={`justify-start ${textSub} text-base font-semibold font-['Open_Sans'] whitespace-nowrap overflow-hidden text-ellipsis`}>{product.name}</div>
              <div className={`opacity-60 justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>{product.category}</div>
            </div>
            <button className={`px-2 py-2 rounded flex items-center justify-center transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-neutral-800/10'}`} aria-label="More options">
              {/* Kebab menu (vertical) */}
              <svg viewBox="0 0 24 24" className={`${isDark ? 'text-slate-300/80' : 'text-neutral-700'} w-5 h-5`} fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="5" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="12" cy="19" r="1.6" />
              </svg>
            </button>
          </div>
          <div className={`self-stretch justify-start ${textSub} text-sm font-semibold font-['Rubik']`}>₹{product.price.toFixed(2)}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <div className={`justify-start ${textSub} text-base font-semibold font-['Open_Sans']`}>Summary</div>
        <div className={`self-stretch h-9 opacity-60 justify-start ${textSub} text-sm font-normal font-['Open_Sans']`}>
          Lorem ipsum is placeholder text commonly used in the graphic.
        </div>
      </div>
      <div className={`self-stretch p-4 rounded-lg outline outline-[0.75px] outline-offset-[-0.75px] ${isDark ? 'outline-slate-700' : 'outline-neutral-800/30'} flex flex-col justify-start items-start gap-2 mt-auto`}>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className={`opacity-80 justify-start ${textSub} text-sm font-semibold font-['Open_Sans']`}>Sales</div>
          <div className="flex items-center gap-2">
            {/* Trending up icon */}
            <svg viewBox="0 0 24 24" className={`${isDark ? 'text-amber-300/90' : 'text-orange-400'} w-4 h-4`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M23 6l-9.5 9.5-5-5L1 18" />
              <path d="M17 6h6v6" />
            </svg>
            <div className={`opacity-60 ${textMain} text-sm font-semibold font-['Open_Sans']`}>1269</div>
          </div>
        </div>
        <div className={`self-stretch h-0 opacity-40 outline outline-[0.50px] outline-offset-[-0.25px] ${isDark ? 'outline-slate-700' : 'outline-neutral-800'}`}></div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className={`opacity-80 justify-start ${textSub} text-sm font-semibold font-['Open_Sans']`}>Remaining Products</div>
          <div className="flex justify-start items-center gap-2">
            <div className="w-12 h-1 relative">
              <div className="w-12 h-1 left-0 top-0 absolute bg-gray-50 rounded-lg" />
              <div className="w-7 h-1 left-0 top-0 absolute bg-orange-300 rounded-lg" />
            </div>
            <div className={`opacity-60 justify-start ${textMain} text-sm font-semibold font-['Open_Sans']`}>1269</div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <DashboardSidebar isDark={isDark} active="products" />

          {/* Main content */}
          <main className="flex-1 p-6 flex flex-col gap-5">
            {/* Header */}
            <div className="inline-flex flex-col justify-start items-start gap-4 w-full">
              <div className="inline-flex justify-between items-center w-full gap-6">
                {/* Title + breadcrumb */}
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className={`justify-start ${textSub} text-2xl font-semibold font-['Rubik']`}>All Products</div>
                  <div className={`opacity-80 justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>
                    Home &gt; All Products
                  </div>
                </div>
                {/* Search */}
                <div className="flex-1 flex items-center gap-3 max-w-xl">
                  <div className={`w-full h-10 rounded-[10px] flex items-center px-4 transition-colors ${isDark ? 'bg-slate-800 outline outline-1 outline-slate-700 shadow-none' : 'bg-white shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.10)]'} dark:bg-slate-800 dark:outline dark:outline-1 dark:outline-slate-700 dark:shadow-none`}>
                    <input
                      placeholder="Search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className={`w-full bg-transparent outline-none text-sm ${isDark ? 'text-slate-200 placeholder:text-slate-400' : 'text-neutral-700 placeholder:text-neutral-400'} dark:text-slate-200 dark:placeholder:text-slate-400`}
                    />
                  </div>
                </div>
                {/* Date + actions */}
                <div className={`flex items-center gap-4 ${textSub}`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    {/* Calendar icon */}
                    <svg viewBox="0 0 24 24" className={`${isDark ? 'text-slate-300/80' : 'text-neutral-800'} w-5 h-5`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div className={`justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>
                    Feb 16,2022 - Feb 20,2022
                  </div>
                  <button
                    onClick={() => setShowFilters((v) => !v)}
                    className={`h-9 px-3 rounded-lg outline outline-1 transition-colors text-sm flex items-center ${isDark
                      ? 'bg-slate-800 hover:bg-slate-700 outline-slate-700 text-slate-200'
                      : 'bg-white hover:bg-neutral-50 outline-neutral-300 text-neutral-700'
                      } dark:bg-slate-800 dark:hover:bg-slate-700 dark:outline-slate-700 dark:text-slate-200`}
                  >
                    <span className="inline-block translate-y-[1px]">{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
                  </button>
                  <Link
                    to="/admin/products/new"
                    className={`h-9 px-3 rounded-lg outline outline-1 transition-colors text-sm flex items-center ${isDark
                      ? 'bg-slate-800 hover:bg-slate-700 outline-slate-700 text-slate-200'
                      : 'bg-white hover:bg-neutral-50 outline-neutral-300 text-black'
                      } dark:bg-slate-800 dark:hover:bg-slate-700 dark:outline-slate-700 dark:text-slate-200`}
                  >
                    Create Product
                  </Link>
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className={`w-full ${showFilters ? 'grid grid-cols-1 lg:grid-cols-[1fr_320px]' : 'block'} gap-4 items-start`}>
              {/* Cards column */}
              <div className="flex flex-col gap-4">
                <div className={`grid grid-cols-1 ${showFilters ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-3 xl:grid-cols-3'} auto-rows-fr items-stretch gap-4`}>
                  {filtered.map((p) => (
                    <Link key={p.id} to={`/admin/products/${p.id}`} className="block h-full">
                      <ProductCard product={p} />
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                <div className="inline-flex justify-start items-center gap-4">
                  <div className="inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="h-8 px-4 py-2 bg-neutral-800 rounded-lg inline-flex justify-center items-center gap-1">
                      <div className="justify-start text-white text-sm font-medium font-['Inter'] uppercase tracking-tight">1</div>
                    </div>
                  </div>
                  {[2, 3, 4].map(n => (
                    <div key={n} className="inline-flex flex-col justify-start items-start gap-2.5">
                      <div className={`h-8 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-700' : 'outline-neutral-800'} inline-flex justify-center items-center gap-1`}>
                        <div className={`justify-start ${textSub} text-sm font-medium font-['Inter'] uppercase tracking-tight`}>{n}</div>
                      </div>
                    </div>
                  ))}
                  <div className={`justify-start ${textSub} text-sm font-medium font-['Inter'] uppercase tracking-tight`}>...</div>
                  <div className="inline-flex flex-col justify-start items-start gap-2.5">
                    <div className={`h-8 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-700' : 'outline-neutral-800'} inline-flex justify-center items-center gap-1`}>
                      <div className={`justify-start ${textSub} text-sm font-medium font-['Inter'] uppercase tracking-tight`}>10</div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-2.5">
                    <div className={`h-8 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-700' : 'outline-neutral-800'} inline-flex justify-center items-center gap-2`}>
                      <div className={`justify-start ${textSub} text-sm font-medium font-['Inter'] uppercase tracking-tight`}>Next</div>
                      {/* Chevron right */}
                      <svg viewBox="0 0 24 24" className={`${isDark ? 'text-slate-300/80' : 'text-neutral-800'} w-4 h-4`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories sidebar */}
              {showFilters && (
                <div className={`${cardBg} dark:bg-slate-900/40 rounded-2xl p-4 w-full`}>
                  <div className="w-full inline-flex justify-between items-center">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Categories</div>
                    <button
                      onClick={() => setShowFilters(false)}
                      className={`text-sm rounded-lg px-3 py-1 transition-colors ${isDark ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 outline outline-1 outline-slate-700' : 'bg-white text-neutral-700 hover:bg-neutral-50 outline outline-1 outline-neutral-200'} dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:outline dark:outline-1 dark:outline-slate-700`}
                    >
                      Collapse
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col justify-start items-start gap-4">
                    {categories.map(({ name, count }) => {
                      const active = selectedCats.has(name)
                      return (
                        <button
                          key={name}
                          onClick={() => toggleCat(name)}
                          className={`w-52 inline-flex justify-between items-center rounded-xl px-4 py-2 transition-colors ${isDark
                            ? `${active ? 'bg-slate-800' : 'bg-slate-800/60 hover:bg-slate-700/60'} outline outline-1 outline-slate-700`
                            : `${active ? 'bg-neutral-100' : 'bg-white hover:bg-neutral-50'} outline outline-1 outline-neutral-200`
                            } dark:bg-slate-800/60 dark:hover:bg-slate-700/60 dark:outline dark:outline-1 dark:outline-slate-700 ${active ? 'dark:bg-slate-800' : ''}`}
                        >
                          <div className={`justify-start ${textSub} text-base font-semibold font-['Open_Sans'] ${active ? 'underline' : ''}`}>{name}</div>
                          <div className={`w-10 h-9 p-2 ${active
                            ? (isDark ? 'bg-sky-700 text-white' : 'bg-sky-900 text-white')
                            : (isDark ? 'bg-slate-800 text-slate-200' : 'bg-stone-200 text-neutral-800')
                            } dark:bg-slate-800 dark:text-slate-200 ${active ? 'dark:bg-sky-700 dark:text-white' : ''} rounded inline-flex flex-col justify-center items-center gap-2.5`}>
                            <div className={`justify-start text-sm font-semibold font-['Open_Sans']`}>{String(count).padStart(2, '0')}</div>
                          </div>
                        </button>
                      )
                    })}
                    {selectedCats.size > 0 && (
                      <button onClick={() => setSelectedCats(new Set())} className={`text-sm ${isDark ? 'text-sky-300' : 'text-sky-700'}`}>Clear filters</button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
