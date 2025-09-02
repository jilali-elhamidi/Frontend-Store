import Categories from '../components/Categories'
import Hero from '../components/Hero'
import BestWeeklyDeals from '../components/BestWeeklyDeals'
import TrendingSearch from '../components/TrendingSearch'
import BestSeller from '../components/BestSeller'
import PopularBrands from '../components/PopularBrands'
import SuggestToday from '../components/SuggestToday'
import BestSellingSpeakers from '../components/BestSellingSpeakers'
import JustLanding from '../components/JustLanding'
import LandingPanel from '../components/LandingPanel'
import SpeakersTestimonial from '../components/SpeakersTestimonial'

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
