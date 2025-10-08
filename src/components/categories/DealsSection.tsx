import ProductCard from './ProductCard'

export default function DealsSection() {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-extrabold">
          <span className="text-orange-400 -ml-20 md:-ml-10 ">Day Of The</span> <span className="text-neutral-800">Deal</span>
        </h2>
        <div className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-orange-50 text-orange-500 ring-1 ring-orange-200">
          25 Days 23 : 59 : 54
        </div>
      </div>

      {/* Promo image banner */}
      <div className="mb-6 -ml-20 md:-ml-10">
        <img
          src="https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg"
          alt="Deals promo"
          className="w-full h-40 md:h-52 object-cover rounded-xl shadow-sm"
          loading="lazy"
        />
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-[1200px] flex flex-wrap justify-center gap-6">
        <ProductCard
          title="Body Lotion For Dry Skin"
          price="$20.00"
          oldPrice="$23.00"
          image="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop"
          badges={[{ label: 'NEW', color: 'sky' }]}
          ratingCount={18}
        />
        <ProductCard
          title="Women's Casual Shoes"
          price="$60.00"
          oldPrice="$80.00"
          image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
          badges={[{ label: 'SALE', color: 'red' }]}
          ratingCount={34}
        />
        <ProductCard
          title="Princess Look Fashion Dress"
          price="$65.00"
          oldPrice="$58.00"
          image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop"
          badges={[{ label: 'SALE', color: 'red' }]}
          ratingCount={7}
        />
        <ProductCard
          title="Mixed Nuts Berries Pack"
          price="$56.00"
          oldPrice="$45.00"
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
          badges={[{ label: 'SALE', color: 'red' }]}
          ratingCount={12}
        />
      </div>
    </section>
  )
}
