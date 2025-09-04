type Item = {
  title: string
  category: string
  price: string
  oldPrice?: string
  image: string
}

export default function TrendingTopSelling() {
  const trending: Item[] = [
    {
      title: "Men's Stylish Printed Shirt",
      category: 'Fashion',
      price: '$45.00',
      oldPrice: '$42.00',
      image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      title: 'Cotton Clothes Sets For Boys',
      category: 'Baby Wear',
      price: '$30.00',
      oldPrice: '$25.00',
      image: 'https://images.pexels.com/photos/459457/pexels-photo-459457.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      title: "Men's Leather Belt",
      category: 'Belt',
      price: '$65.00',
      oldPrice: '$62.00',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ]

  const topRated: Item[] = [
    {
      title: 'Rose Gold Earring',
      category: 'Jewellery',
      price: '$65.00',
      oldPrice: '$62.00',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      title: "Men's Wear Printed Shirt",
      category: 'Fashion',
      price: '$78.00',
      oldPrice: '$56.00',
      image: 'https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      title: "Women's Casual Shoes",
      category: 'Shoes',
      price: '$30.00',
      oldPrice: '$25.00',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ]

  const topSelling: Item[] = [
    {
      title: 'Liquid Matte Lipstick',
      category: 'Lipstick',
      price: '$55.00',
      oldPrice: '$50.00',
      image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      title: "Women's wallet Hand Purse",
      category: 'Wallet',
      price: '$55.00',
      oldPrice: '$52.00',
      image: 'https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      title: 'Long lasting perfume',
      category: 'Perfume',
      price: '$11.00',
      oldPrice: '$10.00',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ]

  const Section = ({ titleLeft, titleRight, items }: { titleLeft: string; titleRight: string; items: Item[] }) => (
    <div>
      <div className="flex items-center justify-between mb-3 ">
        <h3 className="text-2xl font-bold tracking-tight">
          <span className="text-orange-300">{titleLeft} </span>
          <span className="text-indigo-500">{titleRight}</span>
        </h3>
        <div className="hidden md:flex items-center gap-2 text-orange-300">
          <span className="rotate-180 select-none">›</span>
          <span className="select-none">›</span>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white rounded-md outline outline-1 outline-zinc-100 p-3 shadow-sm">
            <div className="h-16 w-20 rounded-md overflow-hidden shrink-0">
              <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-neutral-500 text-sm font-medium truncate">{it.title}</div>
              <div className="text-neutral-400 text-xs mt-1">{it.category}</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-orange-300 text-sm font-bold">{it.price}</span>
                {it.oldPrice && <span className="text-neutral-500 text-xs line-through">{it.oldPrice}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6 -ml-20 md:-ml-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Section titleLeft="Trending" titleRight="Items" items={trending} />
        <Section titleLeft="Top" titleRight="Rated" items={topRated} />
        <Section titleLeft="Top" titleRight="Selling" items={topSelling} />
      </div>
    </section>
  )
}
