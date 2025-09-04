type Blog = {
  title: string
  image: string
}

export default function LatestBlog({ items }: { items?: Blog[] }) {
  const data: Blog[] =
    items ?? [
      {
        title: 'Marketing Guide: 5 Steps to Success to way.',
        image:
          'https://images.pexels.com/photos/209116/pexels-photo-209116.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Best way to solve business deal issue in market.',
        image:
          'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: '31 fashion customer service stats know in 2019.',
        image:
          'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Business ideas to grow your business traffic.',
        image:
          'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
      {
        title: 'Marketing Guide: 5 Steps way to Success.',
        image:
          'https://images.pexels.com/photos/3225519/pexels-photo-3225519.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      },
    ]

  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6 -ml-20 md:-ml-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="text-green-400">Latest </span>
            <span className="text-indigo-500">Blog</span>
          </h2>
          <p className="mt-2 text-neutral-500 text-sm">We tackle interesting topics every day in 2023.</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-2 text-neutral-500 text-base">
          <span>All Blogs</span>
          <span className="text-neutral-500">›</span>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data.map((b, i) => (
          <article key={i} className="rounded-md outline outline-1 outline-zinc-100 bg-white shadow-sm overflow-hidden">
            <div className="aspect-[294/221] w-full overflow-hidden">
              <img src={b.image} alt={b.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="text-green-400 text-sm sm:text-base font-medium leading-snug">{b.title}</h3>
              <button className="mt-3 inline-flex items-center gap-2 text-green-400 text-xs sm:text-sm">
                <span>Read More</span>
                <span>»</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
