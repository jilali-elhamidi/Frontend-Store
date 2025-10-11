type Props = {
  title?: string
  discountText?: string
  ctaText?: string
  image?: string
  ctaClassName?: string
}

export default function FashionSaleBanner({
  title = 'Shopping Today\nFashion sale',
  discountText = '30% off Hurry up!!!',
  ctaText = 'Shop now',
  image = 'https://images.pexels.com/photos/8638308/pexels-photo-8638308.jpeg',
  ctaClassName,
}: Props) {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-4 ml-0 lg:-ml-6">
      {/* Mobile stacked version */}
      <div className="sm:hidden bg-white rounded-2xl overflow-hidden shadow-sm">
        <img src={image} alt="Fashion sale" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-2xl font-extrabold leading-tight text-orange-300 whitespace-pre-line">{title}</h3>
          <p className="mt-2 text-sm">
            <span className="font-bold text-indigo-600">{discountText.split(' ')[0]}</span>{' '}
            {discountText.substring(discountText.indexOf(' ') + 1)}
          </p>
          <button
            className={`mt-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/10 ${
              ctaClassName ?? '!bg-blue-300 hover:bg-zinc-300 text-neutral-900'
            }`}
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Original absolute layout for tablet/desktop */}
      <div className="hidden sm:block relative w-full h-72 md:h-80 bg-white rounded-2xl overflow-hidden shadow-sm">
        {/* decorative circle to match PromoBanners */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-50" />

        {/* rectangular image (larger frame) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 h-56 w-80 md:h-64 md:w-[28rem] rounded-xl overflow-hidden">
          <img src={image} alt="Fashion sale" className="h-full w-full object-cover select-none" />
        </div>

        {/* text area on the right */}
        <div className="absolute left-[22rem] md:left-[32rem] right-6 top-1/2 -translate-y-1/2 z-10">
          <h3 className="text-2xl md:text-4xl font-extrabold leading-tight text-orange-300 whitespace-pre-line">
            {title}
          </h3>
          <p className="mt-2 text-sm md:text-base">
            <span className="font-bold text-indigo-600">{discountText.split(' ')[0]}</span>{' '}
            {discountText.substring(discountText.indexOf(' ') + 1)}
          </p>
          <button
            className={`mt-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/10 ${
              ctaClassName ?? '!bg-blue-300 hover:bg-zinc-300 text-neutral-900'
            }`}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}
