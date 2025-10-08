import CategoriesHero from '../../components/categories/CategoriesHero'
import CategoriesSidebar from '../../components/categories/CategoriesSidebar'
import ProductCard from '../../components/categories/ProductCard'
import CategoriesStrip from '../../components/categories/CategoriesStrip'
import PromoBanners from '../../components/categories/PromoBanners'
import DealsSection from '../../components/categories/DealsSection'
import FashionSaleBanner from '../../components/categories/FashionSaleBanner'
import TrendingTopSelling from '../../components/categories/TrendingTopSelling'
import LatestBlog from '../../components/categories/LatestBlog'

export default function CategoriesPage() {
  return (
    <main className="home-zoom">
      {/* Breadcrumb */}
      <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm font-bold">
          <div className="w-10 h-5 justify-center text-neutral-400 leading-tight">Home</div>
          <div className="w-1.5 h-5 justify-center text-gray-500 leading-tight">/</div>
          <div className="w-11 h-5 justify-center text-neutral-400 leading-tight">pages</div>
          <div className="w-1.5 h-5 justify-center text-gray-500 leading-tight">/</div>
          <div className="w-24 h-5 justify-center text-black leading-tight">categories</div>
        </div>
      </section>

      {/* Hero panel */}
      <CategoriesHero
        images={[
          'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
        ]}
      />

      {/* Sidebar + Product grid (only) */}
      <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 lg:w-72 shrink-0">
            <CategoriesSidebar />
          </div>

          {/* Products */}
          <div className="min-w-0 flex-1">
            {/* Top categories strip */}
            <div className="mb-6">
              <CategoriesStrip />
            </div>
            {/* Sort + count row (placeholder) */}
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-neutral-600">Showing 12 of 48 products</div>
              <div className="text-sm">
                <label className="mr-2 text-neutral-700">Sort by</label>
                <select className="rounded border border-neutral-300 px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid using Best Seller card design */}
            <div className="flex flex-wrap gap-6">
              <ProductCard
                title="Shorp 49” Class FHD (1080p) Android Led TV"
                price="$3,029.50"
                image="https://picsum.photos/seed/tv-oled/204/160"
                badges={[{ label: 'new', color: 'sky' }, { label: 'best seller', color: 'orange' }]}
              />
              <ProductCard
                title="Gigabyte PC Gaming Case, Core i7, 32GB Ram"
                price="$1,279.00"
                image="https://picsum.photos/seed/gaming-setup/204/160"
                badges={[{ label: 'best seller', color: 'orange' }]}
                ratingCount={2}
              />
              <ProductCard
                title="Sceptre 32” Internet TV"
                price="$610.00"
                image="https://picsum.photos/seed/living-room-tv/204/160"
                badges={[{ label: 'best seller', color: 'orange' }, { label: 'top rated', color: 'green' }]}
                ratingCount={12}
              />
              <ProductCard
                title="Durotan Manual Espresso Machine, Coffee Maker"
                price="$489.00"
                oldPrice="$619.00"
                image="https://picsum.photos/seed/espresso-machine/204/160"
                badges={[{ label: '15% OFF', color: 'red' }, { label: 'best seller', color: 'orange' }]}
                ratingCount={34}
              />
              {/* Duplicates for grid fill */}
              <ProductCard
                title="Sony 65” 4K HDR Smart TV"
                price="$1,799.00"
                image="https://picsum.photos/seed/sony-tv/204/160"
                badges={[{ label: 'top rated', color: 'green' }]}
                ratingCount={8}
              />
              <ProductCard
                title="LG UltraWide Monitor 34”"
                price="$899.00"
                image="https://picsum.photos/seed/ultrawide/204/160"
                badges={[{ label: 'best seller', color: 'orange' }]}
                ratingCount={21}
              />
            </div>

            {/* Promo banners below product cards */}
            <div className="mt-8">
              <PromoBanners
                left={{
                  title: 'Digital Smartwatch',
                  subtitle: '50% OFF',
                  image:
                    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=900&auto=format&fit=crop',
                  ctaClassName: '!bg-blue-800 hover:bg-neutral-900',
                }}
                right={{
                  title: 'Men’s Sport Shoes',
                  subtitle: '70% OFF',
                  image:
                    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop',
                  ctaClassName: '!bg-blue-300 hover:bg-zinc-300 text-neutral-900',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standalone full-width sections (same container as header) */}
      <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
        {/* Day Of The Deal section */}
        <div className="mt-4 ">
          <DealsSection />
        </div>

        {/* Fashion Sale banner */}
        <div className="mt-6 mx-auto w-full max-w-[1330px]">
          <FashionSaleBanner />
        </div>

        {/* Trending / Top Rated / Top Selling */}
        <div className="mt-6 mx-auto w-full max-w-[1330px]">
          <TrendingTopSelling />
        </div>

        {/* Latest Blog */}
        <div className="mt-6 mx-auto w-full max-w-[1330px]">
          <LatestBlog />
        </div>
      </section>
    </main>
  )
}
