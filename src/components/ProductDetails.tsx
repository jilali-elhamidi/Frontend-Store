import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { MdLocalShipping, MdSecurity } from 'react-icons/md'
import ProductDescriptionCard from './ProductDescriptionCard'
import ProductSpecificationsCard from './ProductSpecificationsCard'
import ProductReviewsCard from './ProductReviewsCard'
import ProductInfoTabs from './ProductInfoTabs'
import ProductCard from './ProductCard'

// ProductDetails component
// - Responsive container aligned with site width (max-w-[1330px])
// - Left: image gallery with thumbnails
// - Right: title, rating, price, variants, quantity, actions
// - Below: description/specs/reviews blocks
// - Bottom: related products grid

const sampleImages = [
  'https://images.pexels.com/photos/9558596/pexels-photo-9558596.jpeg',
  'https://images.pexels.com/photos/6311654/pexels-photo-6311654.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/8534242/pexels-photo-8534242.jpeg',
]

const sameCategory = [
  {
    id: 'c1',
    title: 'Over‑Ear ANC Headphones',
    price: 139.99,
    image:
      'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c2',
    title: 'Wireless Earbuds Pro',
    price: 89.99,
    image:
      'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c3',
    title: 'Portable Noise‑Minimizing Speaker',
    price: 69.99,
    image:
      'https://images.pexels.com/photos/1919030/pexels-photo-1919030.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'c4',
    title: 'Studio Monitoring Headset',
    price: 179.99,
    image:
      'https://images.pexels.com/photos/243988/pexels-photo-243988.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const related = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 129.99,
    image:
      'https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 2,
    title: 'Smart Watch Series 7',
    price: 199.99,
    image:
      'https://images.pexels.com/photos/2773942/pexels-photo-2773942.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    title: 'Compact Bluetooth Speaker',
    price: 59.99,
    image:
      'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    title: 'DSLR Camera Lens 50mm',
    price: 249.99,
    image:
      'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const colors = ['#111827', '#dc2626', '#2563eb', '#16a34a']
const sizes = ['S', 'M', 'L', 'XL']

export default function ProductDetails() {
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(colors[0])
  const [size, setSize] = useState<string | null>(null)

  const rating = 4

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-neutral-500 mb-4 flex flex-wrap gap-x-2">
        <span className="hover:text-neutral-700 cursor-pointer">Home</span>
        <span>/</span>
        <span className="hover:text-neutral-700 cursor-pointer">Electronics</span>
        <span>/</span>
        <span className="text-neutral-800">Noise Cancelling Headphones</span>
      </nav>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-4">
          <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-auto md:max-h-[520px]">
            {sampleImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative h-20 w-20 shrink-0 rounded-md overflow-hidden border ${
                  activeImg === i ? 'border-indigo-500' : 'border-zinc-200'
                }`}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <img src={src} className="h-full w-full object-cover" alt="thumbnail" />
              </button>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-square w-full rounded-md overflow-hidden bg-zinc-50 border border-zinc-200">
              <img
                src={sampleImages[activeImg]}
                alt="Product"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
            Noise Cancelling Headphones Over-Ear Bluetooth 5.3
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-400 text-xl">
              {[...Array(5)].map((_, i) =>
                i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
              )}
            </div>
            <span className="text-sm text-neutral-500">(124 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3">
            <div className="text-3xl font-semibold text-neutral-900">$149.00</div>
            <div className="text-neutral-400 line-through">$189.00</div>
            <div className="px-2 py-0.5 text-xs rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
              21% OFF
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-3 pt-2">
            <div>
              <div className="text-sm text-neutral-600 mb-2">Color</div>
              <div className="flex gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-8 w-8 rounded-full border ${
                      color === c ? 'ring-2 ring-offset-2 ring-indigo-500' : ''
                    }`}
                    style={{ backgroundColor: c }}
                    aria-label={`Pick color ${c}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm text-neutral-600 mb-2">Size</div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-1.5 rounded-md border text-sm ${
                      size === s
                        ? 'border-neutral-900 text-neutral-900'
                        : 'border-zinc-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center border border-zinc-200 rounded-md overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 hover:bg-zinc-50"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <div className="px-4 py-2 min-w-[48px] text-center">{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2 hover:bg-zinc-50"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800">
              Add to Cart
            </button>

            <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-zinc-200 text-neutral-700 hover:bg-zinc-50">
              <FiHeart className="text-lg" />
              Wishlist
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3 rounded-md border border-zinc-200 p-3">
              <MdLocalShipping className="text-2xl text-indigo-500" />
              <div className="text-sm text-neutral-600">
                Free shipping over $99. Delivery in 3-5 days.
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-zinc-200 p-3">
              <MdSecurity className="text-2xl text-indigo-500" />
              <div className="text-sm text-neutral-600">Secure payments and easy returns.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info blocks as scroller with tabs */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductInfoTabs />
        </div>

        {/* Sidebar info */}
    
      </div>

      {/* Related products */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Related Products</h2>
          <a className="text-sm text-indigo-600 hover:underline" href="#">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {related.map((p, i) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={`$${p.price.toFixed(2)}`}
              oldPrice={`$${(p.price * 1.2).toFixed(2)}`}
              image={p.image}
              badges={
                i % 4 === 0
                  ? [{ label: 'Hot', color: 'red' }]
                  : i % 4 === 1
                  ? [{ label: '-20%', color: 'orange' }]
                  : i % 4 === 2
                  ? [{ label: 'Best Seller', color: 'green' }]
                  : [{ label: 'Limited', color: 'sky' }]
              }
              ratingCount={124}
              showInstallment={false}
            />
          ))}
        </div>
      </div>

      {/* In the same category */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">In the same category</h2>
          <a className="text-sm text-indigo-600 hover:underline" href="#">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {sameCategory.map((p, i) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={`$${p.price.toFixed(2)}`}
              oldPrice={`$${(p.price * 1.2).toFixed(2)}`}
              image={p.image}
              badges={
                i % 4 === 0
                  ? [{ label: 'Clearance', color: 'red' }]
                  : i % 4 === 1
                  ? [{ label: 'Promo', color: 'orange' }]
                  : i % 4 === 2
                  ? [{ label: 'Top Rated', color: 'green' }]
                  : [{ label: 'Eco', color: 'sky' }]
              }
              ratingCount={86}
              showInstallment={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
