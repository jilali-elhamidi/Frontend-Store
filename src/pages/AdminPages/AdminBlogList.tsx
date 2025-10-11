import { useEffect, useState } from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'
import { Link } from 'react-router-dom'

export default function AdminBlogListPage() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const preferDark = saved ? saved === 'dark' : systemPrefersDark
    setIsDark(preferDark)
    document.documentElement.classList.toggle('dark', !!preferDark)
  }, [])

  const frameBg = isDark ? 'bg-slate-800' : 'bg-slate-50'
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-white'
  const textSub = isDark ? 'text-slate-300' : 'text-gray-900'
  const textMuted = isDark ? 'text-slate-400' : 'text-gray-500'
  const outline = isDark ? 'outline-slate-700' : 'outline-gray-200'

  type CardLayout = {
    heightClass: string
    titleTop: string
    descTop: string
    authorTop: string
    avatarTop: string
    readTop: string
    secondTitle?: string
    secondTitleTop?: string
  }

  const BlogCardAbsolute = ({
    tag,
    title,
    desc,
    author,
    date,
    read,
    image,
    avatar,
    layout,
  }: {
    tag: string
    title: string
    desc: string
    author: string
    date: string
    read: string
    image: string
    avatar: string
    layout: CardLayout
  }) => (
    <div className={`w-full max-w-[660.02px] ${layout.heightClass} relative ${cardBg} rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden`}>
      <img className="w-full h-72 left-0 top-0 absolute object-cover" src={image} alt="blog cover" />
      <div className={`w-28 h-8 left-[24px] top-[312px] absolute ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} rounded-2xl`}>
        <div className="w-28 h-5 left-0 top-[6.25px] absolute overflow-hidden">
          <div className={`w-24 h-4 left-[11.99px] top-[1.11px] absolute justify-center ${textSub} text-xs font-medium font-['Inter'] leading-tight`}>{tag}</div>
        </div>
      </div>
      <div className={`left-[24px] right-[24px] ${layout.titleTop} absolute ${textSub} text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7 break-words overflow-hidden max-h-[3.5rem] pr-24`}>{title}</div>
      {layout.secondTitle && layout.secondTitleTop && (
        <div className={`left-[23.99px] right-[24px] ${layout.secondTitleTop} absolute ${textSub} text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7 break-words overflow-hidden max-h-[3.5rem] pr-24`}>{layout.secondTitle}</div>
      )}
      <div className={`left-[24px] right-[24px] ${layout.descTop} absolute overflow-hidden max-h-[3.5rem]`}>
        <div className={`left-0 right-0 ${textMuted} text-base font-normal font-['Inter'] leading-normal break-words`} dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      <div className={`left-[79.99px] ${layout.authorTop} absolute justify-center ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>By {author} • {date}</div>
      <div className={`w-10 h-10 left-[24px] ${layout.avatarTop} absolute ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-[20px] overflow-hidden`}>
        <img className="w-10 h-10 left-0 top-0 absolute object-cover" src={avatar} alt="author avatar" />
      </div>
      <div className={`h-4 right-[24px] ${layout.readTop} absolute text-right justify-center ${textMuted} text-sm font-normal font-['Inter'] leading-snug`}>{read}</div>
    </div>
  )

  return (
    <main className="home-zoom overflow-x-hidden">  
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen lg:w-351 min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <DashboardSidebar isDark={isDark} active="blog" />
          </aside>

          {/* Mobile sidebar (drawer) */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} aria-hidden="true" />
              <div className={`absolute left-0 top-0 h-full w-80 max-w-[80%] ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl`}>
                <div className="flex items-center justify-between px-3 py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Menu</span>
                  <button
                    className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-5 w-5 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      <path d="M6 6l12 12M6 18L18 6" />
                    </svg>
                  </button>
                </div>
                <div className="h-[calc(100%-56px)] overflow-y-auto">
                  <DashboardSidebar isDark={isDark} active="blog" />
                </div>
              </div>
            </div>
          )}
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 fixed top-2 left-2 z-50"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} h-5 w-5`}>
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          {/* Main content */}
          <main className="flex-1 p-6 flex flex-col gap-6">
            {/* Title and breadcrumb */}
            <div className="flex flex-col gap-1">
              <div className={`text-4xl font-bold leading-10 ${textSub}`}>Blog</div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`${textSub}`}>Dashboard</span>
                <span className="w-1 h-1 rounded-sm bg-gray-500" />
                <span className={`${textSub}`}>Blog</span>
                <span className="w-1 h-1 rounded-sm bg-gray-500" />
                <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>List</span>
              </div>
            </div>

            {/* Greeting bar */}
            <div className={`w-full h-20 ${cardBg} rounded-lg shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] relative`}>
              <div className={`absolute left-6 top-1/2 -translate-y-1/2 text-base font-medium ${textSub}`}>Hello, Admin</div>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 h-10 px-4 bg-indigo-500 rounded-xl shadow text-white text-sm font-semibold">
                New Post
              </button>
            </div>

            {/* Section header */}
            <div className="flex flex-col gap-2">
              <div className={`text-4xl font-bold leading-10 ${textSub}`}>Recent Articles</div>
              <div className={`max-w-3xl ${textMuted}`}>
                Discover the latest news, tips and user research insights from Acme. You will learn about web infrastructure, design systems and devops APIs best practices.
              </div>
              <div className={`border-b ${isDark ? 'border-slate-700' : 'border-gray-100'} mt-2`} />
            </div>

            {/* Mobile article cards (stacked, no absolute layout) */}
            <div className="sm:hidden flex flex-col gap-4">
              {/* Card 1 */}
              <Link to="/admin/blog/details" className="block w-full">
                <div className={`${cardBg} rounded-2xl overflow-hidden shadow p-3 flex flex-col gap-3`}>
                  <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop" alt="cover" />
                  <div className="text-xs font-medium px-2 py-1 rounded-full inline-block bg-black/10 w-max">Programming</div>
                  <div className={`text-lg font-bold ${textSub}`}>Why I Still Lisp, and You Should Too</div>
                  <div className={`${textMuted} text-sm`}>Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.</div>
                  <div className="flex items-center justify-between">
                    <div className={`text-sm ${textSub}`}>By Jie Yan Song • Feb 1, 2024</div>
                    <div className={`${textMuted} text-sm`}>5 min read</div>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link to="/admin/blog/details" className="block w-full">
                <div className={`${cardBg} rounded-2xl overflow-hidden shadow p-3 flex flex-col gap-3`}>
                  <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop" alt="cover" />
                  <div className="text-xs font-medium px-2 py-1 rounded-full inline-block bg-black/10 w-max">Productivity</div>
                  <div className={`text-lg font-bold ${textSub}`}>Scrum Has Hit the Glass Ceiling</div>
                  <div className={`${textMuted} text-sm`}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                  <div className="flex items-center justify-between">
                    <div className={`text-sm ${textSub}`}>By Omar Darobe • Feb 1, 2024</div>
                    <div className={`${textMuted} text-sm`}>6 min read</div>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to="/admin/blog/details" className="block w-full">
                <div className={`${cardBg} rounded-2xl overflow-hidden shadow p-3 flex flex-col gap-3`}>
                  <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="cover" />
                  <div className="text-xs font-medium px-2 py-1 rounded-full inline-block bg-black/10 w-max">Entrepreneurs</div>
                  <div className={`text-lg font-bold ${textSub}`}>How Model View Controller (MVC) Architectures Work</div>
                  <div className={`${textMuted} text-sm`}>Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst.</div>
                  <div className="flex items-center justify-between">
                    <div className={`text-sm ${textSub}`}>By Siegbert Gottfried • Jan 31, 2024</div>
                    <div className={`${textMuted} text-sm`}>3 min read</div>
                  </div>
                </div>
              </Link>

              {/* Card 4 */}
              <Link to="/admin/blog/details" className="block w-full">
                <div className={`${cardBg} rounded-2xl overflow-hidden shadow p-3 flex flex-col gap-3`}>
                  <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="cover" />
                  <div className="text-xs font-medium px-2 py-1 rounded-full inline-block bg-black/10 w-max">Innovation</div>
                  <div className={`text-lg font-bold ${textSub}`}>Generating Passive Income Is Hard, Here Is a Better</div>
                  <div className={`${textMuted} text-sm`}>Phasellus eu commodo lacus, eget tristique nunc. Ut ullamcorper semper nunc sit amet vehicula.</div>
                  <div className="flex items-center justify-between">
                    <div className={`text-sm ${textSub}`}>By Iulia Albu • Jan 27, 2024</div>
                    <div className={`${textMuted} text-sm`}>1 min read</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Articles grid (absolute-positioned cards as per the mock) */}
            <div className="hidden sm:grid grid-cols-2 gap-6 place-items-start">
              <Link to="/admin/blog/details" className="block w-full">
                <BlogCardAbsolute
                  tag="Programming"
                  title="Why I Still Lisp, and You Should Too"
                  desc={'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel,<br/>feugiat non nibh.'}
                  author="Jie Yan Song"
                  date="Feb 1, 2024"
                  read="5 min read"
                  image="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                  avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
                  layout={{
                    heightClass: 'h-[533.51px]',
                    titleTop: 'top-[358.88px] w-96 h-7',
                    descTop: 'top-[397.54px]',
                    authorTop: 'top-[472.75px] w-48 h-4',
                    avatarTop: 'top-[461.51px]',
                    readTop: 'top-[472.75px]'
                  }}
                />
              </Link>
              <Link to="/admin/blog/details" className="block w-full">
                <BlogCardAbsolute
                  tag="Productivity"
                  title="Scrum Has Hit the Glass Ceiling"
                  desc={'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos<br/>himenaeos.'}
                  author="Omar Darobe"
                  date="Feb 1, 2024"
                  read="6 min read"
                  image="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop"
                  avatar="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop"
                  layout={{
                    heightClass: 'h-[533.51px]',
                    titleTop: 'top-[358.88px] w-80 h-7',
                    descTop: 'top-[397.54px]',
                    authorTop: 'top-[472.75px] w-52 h-4',
                    avatarTop: 'top-[461.51px]',
                    readTop: 'top-[472.75px]'
                  }}
                />
              </Link>
              <Link to="/admin/blog/details" className="block w-full">
                <BlogCardAbsolute
                  tag="Entrepreneurs"
                  title="How Model View Controller (MVC) Architectures Work"
                  desc={'Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea<br/>dictumst.'}
                  author="Siegbert Gottfried"
                  date="Jan 31, 2024"
                  read="3 min read"
                  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                  avatar="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop"
                  layout={{
                    heightClass: 'h-[563.07px]',
                    titleTop: 'top-[358.87px] w-[610.32px] h-7',
                    descTop: 'top-[397.53px]',
                    authorTop: 'top-[472.74px] w-60 h-4',
                    avatarTop: 'top-[461.51px]',
                    readTop: 'top-[472.74px]'
                  }}
                />
              </Link>
              <Link to="/admin/blog/details" className="block w-full">
                <BlogCardAbsolute
                  tag="Innovation"
                  title="Generating Passive Income Is Hard, Here Is a Better"
                  desc={'Phasellus eu commodo lacus, eget tristique nunc. Ut ullamcorper semper nunc<br/>sit amet vehicula.'}
                  author="Iulia Albu"
                  date="Jan 27, 2024"
                  read="1 min read"
                  image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
                  avatar="https://images.unsplash.com/photo-1541534401786-2077eed87a9c?q=80&w=256&auto=format&fit=crop"
                  layout={{
                    heightClass: 'h-[563.07px]',
                    titleTop: 'top-[358.87px] w-[572.60px] h-7',
                    secondTitle: 'Option',
                    secondTitleTop: 'top-[388.44px] w-20 h-7',
                    descTop: 'top-[427.10px]',
                    authorTop: 'top-[502.31px] w-44 h-4',
                    avatarTop: 'top-[491.08px]',
                    readTop: 'top-[502.31px]'
                  }}
                />
              </Link>
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 w-full">
              <button className={`h-10 px-3 sm:h-11 sm:px-4 rounded-xl inline-flex items-center gap-2 ${isDark ? 'bg-transparent' : 'bg-transparent'}`}>
                <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-900/40'}`}>Newer</span>
              </button>
              <button className={`h-10 px-3 sm:h-11 sm:px-4 rounded-xl inline-flex items-center gap-2`}>
                <span className="text-indigo-500 text-sm font-semibold">Older posts</span>
                <span className={`inline-flex h-5 w-5 items-center justify-center ${isDark ? 'text-indigo-500' : 'text-indigo-500'}`}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </div>

            {/* Newsletter (mobile) */}
            <div className={`sm:hidden w-full ${cardBg} rounded-[20px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4`}>
              <div className={`text-2xl font-bold ${textSub}`}>Join the developer list</div>
              <div className={`${textMuted} text-sm`}>Subscribe to our newsletter to make sure you don't miss anything.</div>
              <input placeholder="Email address" className={`w-full h-12 rounded-lg px-3 ${isDark ? 'bg-transparent outline outline-1 outline-slate-700 text-slate-200 placeholder:text-slate-400' : 'bg-white outline outline-1 outline-gray-200 text-neutral-800 placeholder:text-gray-500'}`} />
              <button className="w-full h-11 bg-indigo-500 rounded-xl shadow text-white text-base font-semibold">Subscribe</button>
            </div>

            {/* Newsletter (desktop) */}
            <div className={`hidden sm:block w-full h-96 ${cardBg} rounded-[20px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] relative overflow-hidden`}>
              <div className={`absolute left-16 top-20 text-4xl font-bold ${textSub}`}>Join the developer list</div>
              <div className={`absolute left-16 top-32 ${textMuted} text-sm`}>
                Subscribe to our newsletter to make sure you don't miss anything.
              </div>
              <div className={`absolute left-16 top-[184px] w-[600px] h-14 rounded-lg ${isDark ? 'outline outline-1 outline-slate-700' : 'outline outline-1 outline-gray-200'} flex items-center px-4`}>
                <input placeholder="Email address" className={`w-full bg-transparent outline-none ${isDark ? 'text-slate-200 placeholder:text-slate-400' : 'text-neutral-800 placeholder:text-gray-500'}`} />
              </div>
              <button className="absolute left-16 top-[248px] w-[600px] h-12 bg-indigo-500 rounded-xl shadow text-white text-base font-semibold">
                Subscribe
              </button>

              <div className="absolute right-16 top-20 w-64 h-52 overflow-hidden">
                <div className="absolute left-0 top-0 w-64 h-52 overflow-hidden">
                  <div className="absolute left-9 top-4 w-24 h-28 bg-gradient-to-br from-pink-400 to-pink-600" />
                  <div className="absolute left-4 top-9 w-5 h-12 bg-gradient-to-br from-pink-400 to-pink-600" />
                  <div className="absolute left-0 top-4 w-7 h-20 bg-gradient-to-br from-pink-400 to-pink-600" />
                  <div className="absolute left-20 top-6 w-44 h-40 bg-pink-400/30 outline outline-2 outline-white/25" />
                  <div className="absolute left-20 top-14 w-11 h-14 bg-gradient-to-br from-pink-400 to-pink-600 blur-lg" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    </main>
  )
}
