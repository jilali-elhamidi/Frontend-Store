import CartSummary from '../components/CartSummary'
import ProductCard, { type ProductCardBadge } from '../components/ProductCard'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const cartItems = [
    { id: 1, title: "Women's wallet Hand Purse", price: 70, image: 'https://picsum.photos/id/1064/60/52', qty: 1 },
    { id: 2, title: 'Rose Gold Earring', price: 80, image: 'https://picsum.photos/id/1027/60/52', qty: 1 },
    { id: 3, title: 'Apple', price: 12, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=60&h=52&fit=crop&auto=format&q=80', qty: 1 },
  ]

  const newArrivals: Array<{
    title: string
    price: string
    oldPrice?: string
    image: string
    badges: ProductCardBadge[]
    ratingCount?: number
  }> = [
    {
      title: 'Mixed Nuts Berries Pack',
      price: '$56.00',
      oldPrice: '$60.00',
      image: 'https://picsum.photos/id/1060/800/800',
      badges: [{ label: 'SALE', color: 'red' }],
      ratingCount: 24,
    },
    {
      title: 'Multi Grain Combo Cookies',
      price: '$26.00',
      oldPrice: '$29.00',
      image: 'https://picsum.photos/id/1068/800/800',
      badges: [{ label: 'SALE', color: 'red' }],
      ratingCount: 18,
    },
    {
      title: 'Fresh Mango Juice Pack',
      price: '$55.00',
      oldPrice: '$64.50',
      image: 'https://picsum.photos/id/1074/800/800',
      badges: [],
      ratingCount: 10,
    },
    {
      title: 'Dates Vuka Fresh Pouch',
      price: '$85.00',
      oldPrice: '$99.00',
      image: 'https://picsum.photos/id/1084/800/800',
      badges: [{ label: 'HOT', color: 'orange' }],
      ratingCount: 32,
    },
    {
      title: 'Stick Fiber Masala Magic',
      price: '$50.00',
      oldPrice: '$54.00',
      image: 'https://picsum.photos/id/1080/800/800',
      badges: [{ label: 'NEW', color: 'sky' }],
      ratingCount: 6,
    },
  ]

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-5 text-sm font-bold">
        <span className="text-neutral-400">Home</span>
        <span className="text-gray-500">/</span>
        <span className="text-neutral-400">pages</span>
        <span className="text-gray-500">/</span>
        <span className="text-black">cart</span>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Summary */}
        <div className="lg:col-span-4 order-2 lg:order-1"><CartSummary /></div>

        {/* Cart table */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden">
            <div className="grid grid-cols-12 items-center border-b-2 border-zinc-100 px-4 sm:px-6 py-3 text-gray-600 text-sm font-medium">
              <div className="col-span-6 sm:col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-1 text-center hidden sm:block">Total</div>
              <div className="col-span-1 text-center">Action</div>
            </div>
            <div className="divide-y divide-zinc-100">
              {cartItems.map((it) => (
                <div key={it.id} className="grid grid-cols-12 items-center px-4 sm:px-6 py-4 text-neutral-600">
                  <div className="col-span-6 flex items-center gap-3">
                    <img src={it.image} alt={it.title} className="w-14 h-14 rounded object-cover" />
                    <div className="text-sm">{it.title}</div>
                  </div>
                  <div className="col-span-2 text-center text-gray-700 font-medium">${it.price}</div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="inline-flex items-center gap-3 px-3 h-9 bg-transparent shadow-none outline-none rounded-none">
                      <span role="button" aria-label="decrease" tabIndex={0} className="text-black cursor-pointer select-none">-</span>
                      <span className="min-w-[1.5rem] text-center">{it.qty}</span>
                      <span role="button" aria-label="increase" tabIndex={0} className="text-black cursor-pointer select-none">+</span>
                    </div>
                  </div>
                  <div className="col-span-1 text-center hidden sm:block">${it.price * it.qty}</div>
                  <div className="col-span-1 text-center">
                    <span role="button" aria-label="remove" tabIndex={0} className="text-black cursor-pointer select-none">🗑</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Link to="/" className="text-gray-600 text-base font-medium underline">Continue Shopping</Link>
            <button className="inline-flex items-center justify-center h-10 px-5 !bg-orange-300 hover:bg-zinc-300 text-neutral-900 !text-white text-base font-medium rounded-[5px]">Check Out</button>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="text-gray-600">New </span>
          <span className="text-orange-300">Arrivals</span>
        </h2>
        <p className="mt-1 text-neutral-500 text-sm">Browse the collection of top products</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {newArrivals.slice(0, 4).map((p, idx) => (
          <ProductCard
            key={idx}
            title={p.title}
            price={p.price}
            oldPrice={p.oldPrice}
            image={p.image}
            badges={p.badges}
            ratingCount={p.ratingCount}
          />
        ))}
      </div>
    </section>
  )
}
