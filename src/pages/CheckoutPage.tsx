import Checkout from '../components/Checkout'
import { Link } from 'react-router-dom'

export default function CheckoutPage() {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6 ml-6 md:ml-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-5 text-sm font-bold">
        <span className="text-neutral-400">Home</span>
        <span className="text-gray-500">/</span>
        <span className="text-neutral-400">pages</span>
        <span className="text-gray-500">/</span>
        <span>checkout</span>
      </div>

      {/* Checkout Content */}
      <Checkout />

      {/* Back to cart */}
      <div className="mt-6">
        <Link to="/pages/cart" className="text-gray-600 text-base font-medium underline ml-6 md:ml-20">
          Back to cart
        </Link>
      </div>
    </section>
  )
}
