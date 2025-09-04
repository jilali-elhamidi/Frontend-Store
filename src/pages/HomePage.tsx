import Categories from '../components/HomePage/Categories'
import Hero from '../components/HomePage/Hero'
import BestWeeklyDeals from '../components/HomePage/BestWeeklyDeals'
import TrendingSearch from '../components/HomePage/TrendingSearch'
import BestSeller from '../components/HomePage/BestSeller'
import PopularBrands from '../components/HomePage/PopularBrands'
import SuggestToday from '../components/HomePage/SuggestToday'
import BestSellingSpeakers from '../components/HomePage/BestSellingSpeakers'
import JustLanding from '../components/HomePage/JustLanding'
import LandingPanel from '../components/HomePage/LandingPanel'
import SpeakersTestimonial from '../components/HomePage/SpeakersTestimonial'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <BestWeeklyDeals />
      <TrendingSearch />
      <SuggestToday />
      <PopularBrands />
      <BestSeller />
      <BestSellingSpeakers />
      <JustLanding />
      <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <LandingPanel />
          <SpeakersTestimonial />
        </div>
      </section>
    </main>
  )
}
