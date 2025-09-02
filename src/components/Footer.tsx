import React from 'react'
import {
  FaShippingFast,
  FaUndoAlt,
  FaLock,
  FaHeadset,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBehance,
} from 'react-icons/fa'

function FeatureItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 px-4">
      <div className="text-orange-400">{icon}</div>
      <div className="text-sm uppercase text-black">{title}</div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 ml-6 md:ml-20">
        {/* Top feature bar */}
        <div className="relative w-full">
          <div className="h-32 w-full border-b border-zinc-200 flex items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <FeatureItem icon={<FaShippingFast size={18} />} title="Free Shipping over $99" />
              <div className="hidden md:block h-5 w-px bg-zinc-200" />
              <FeatureItem icon={<FaUndoAlt size={18} />} title="30 Days money back" />
              <div className="hidden md:block h-5 w-px bg-zinc-200" />
              <FeatureItem icon={<FaLock size={18} />} title="100% Secure Payment" />
              <div className="hidden md:block h-5 w-px bg-zinc-200" />
              <FeatureItem icon={<FaHeadset size={18} />} title="24/7 Dedicated Support" />
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 - Brand/contact */}
          <div>
            <div className="text-black font-bold text-base mb-3">Swoo - Online Electronic Market</div>
            <div className="uppercase text-xs text-black mb-1">hotline 24/7</div>
            <div className="text-orange-400 text-xl font-bold mb-3">(025) 3686 25 16</div>
            <div className="text-sm text-black/80 leading-relaxed mb-3">
              257 Thatcher Road St, Brooklyn, Manhattan,
              <br />NY 10092
              <br />contact@swateletro.com
            </div>
            <div className="flex items-center gap-3">
              {[
                { key: 'tw', Icon: FaTwitter },
                { key: 'fb', Icon: FaFacebookF },
                { key: 'ig', Icon: FaInstagram },
                { key: 'yt', Icon: FaYoutube },
                { key: 'be', Icon: FaBehance },
              ].map(({ key, Icon }) => (
                <div key={key} className="h-9 w-9 rounded-2xl outline outline-1 outline-neutral-400/20 grid place-items-center">
                  <Icon className="text-black" size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 - Top Categories */}
          <div>
            <div className="text-black text-lg font-medium mb-4">Top Categories</div>
            <ul className="text-sm text-stone-500 leading-7">
              {[
                'TV/Televisions',
                'Computers',
                'Laptops',
                'Mobiles & Tablets',
                'Audios',
                'Cameras',
                'Gadget',
                'Sport Equipments',
                'Office',
                'Smart Home',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Company */}
          <div>
            <div className="text-black text-lg font-medium mb-4">Company</div>
            <ul className="text-sm text-stone-500 leading-7">
              {['About Swoo', 'Contact', 'Career', 'Blog', 'Sitemap', 'Store Locations'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Help Center */}
          <div>
            <div className="text-black text-lg font-medium mb-4">Help Center</div>
            <ul className="text-sm text-stone-500 leading-7">
              {[
                'Customer Service',
                'Policy',
                'Terms & Conditions',
                'Trach Order',
                'FAQs',
                'My Account',
                'Product Support',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Col 5 - Partner */}
          <div>
            <div className="text-black text-lg font-medium mb-4">Partner</div>
            <ul className="text-sm text-stone-500 leading-7">
              {['Become Seller', 'Affiliate', 'Advertise', 'Partnership'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
