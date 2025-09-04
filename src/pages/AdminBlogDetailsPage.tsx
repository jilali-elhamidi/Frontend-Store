import React, { useEffect, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar'

const AdminBlogDetailsPage: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  const [commentText, setCommentText] = useState('')

  const handleSend = () => {
    const text = commentText.trim()
    if (!text) return
    // TODO: Integrate with backend or state list. For now, just clear the field.
    console.log('New comment:', text)
    setCommentText('')
  }

  useEffect(() => {
    const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(preferDark)
    document.documentElement.classList.toggle('dark', !!preferDark)
  }, [])

  const frameBg = isDark ? 'bg-slate-800' : 'bg-slate-50'
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-white'
  const textSub = isDark ? 'text-slate-200' : 'text-gray-900'
  const textMuted = isDark ? 'text-slate-400' : 'text-gray-500'

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <DashboardSidebar isDark={isDark} active="blog" />

          {/* Main content */}
          <div className="flex-1 min-h-screen">
            <div className="max-w-[1460px] mx-auto px-6 py-8">
              {/* Absolute-positioned canvas per provided design */}
              <div className="w-[1423px] h-[2744px] relative bg-neutral-100 rounded-2xl overflow-hidden">
                <div className="w-[1423px] h-[2744px] left-0 top-0 absolute">
                  <div className="w-[1400px] h-[2615.59px] left-0 top-[90.99px] absolute">
                    {/* Top heading + breadcrumb */}
                    <div className={`w-20 h-11 left-[23.99px] top-[-1.11px] absolute ${textSub} text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10`}>Post</div>
                    <div className={`w-20 h-4 left-[23.99px] top-[56.42px] absolute ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>Dashboard</div>
                    <div className="w-1 h-1 left-[105.02px] top-[62.06px] absolute bg-gray-500 rounded-sm" />
                    <div className={`w-8 h-4 left-[117px] top-[56.42px] absolute ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>Blog</div>
                    <div className="w-1 h-1 left-[154.70px] top-[62.06px] absolute bg-gray-500 rounded-sm" />
                    <div className={`w-12 h-4 left-[166.68px] top-[55.31px] absolute ${textMuted} text-sm font-medium font-['Inter'] leading-snug`}>Details</div>

                    {/* Greeting + CTA */}
                    <div className={`w-[1352.01px] h-20 left-[23.99px] top-[124.15px] absolute ${cardBg} rounded-lg shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0px_10px_40px_0px_rgba(0,0,0,0.12)]`}>
                      <div className={`w-24 h-6 left-[24px] top-[23.64px] absolute ${textSub} text-base font-medium font-['Inter'] leading-relaxed`}>Hello, Admin</div>
                      <div className="w-24 h-10 left-[1227.83px] top-[15.99px] absolute bg-indigo-500 rounded-xl shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)]">
                        <div className="w-16 h-4 left-[20px] top-[11.32px] absolute justify-center text-white text-sm font-semibold font-['Inter'] leading-normal">Edit Post</div>
                      </div>
                    </div>

                    {/* Tag */}
                    <div className={`w-28 h-8 left-[23.99px] top-[260.57px] absolute ${isDark ? 'bg-white/10' : 'bg-gray-900/10'} rounded-2xl`}>
                      <div className="w-28 h-5 left-0 top-[6.25px] absolute overflow-hidden">
                        <div className={`w-20 h-4 left-[12px] top-[1.11px] absolute ${textSub} text-xs font-medium font-['Inter'] leading-tight`}>Programming</div>
                      </div>
                    </div>

                    {/* Title, Subhead */}
                    <div className={`w-[613.30px] h-11 left-[23.99px] top-[315.45px] absolute ${textSub} text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10`}>
                      Why I Still Lisp, and You Should Too
                    </div>
                    <div className={`w-[748.39px] h-6 left-[23.99px] top-[384.55px] absolute ${textMuted} text-base font-medium font-['Inter'] leading-relaxed`}>
                      Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.
                    </div>

                    {/* Author + read time */}
                    <div className="w-60 h-10 left-[79.98px] top-[435.88px] absolute justify-center">
                      <span className={`${textSub} text-sm font-medium font-['Inter'] leading-snug`}>By Jie Yan Song • February 1, 2024<br/></span>
                      <span className={`${textMuted} text-sm font-normal font-['Inter'] leading-snug`}>5 min read</span>
                    </div>
                    <div className={`w-10 h-10 left-[23.99px] top-[435.62px] absolute ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-[20px] overflow-hidden`}>
                      <img className="w-10 h-10 left-0 top-0 absolute" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" />
                    </div>

                    {/* Cover image */}
                    <img className="w-[1352.01px] h-96 left-[23.99px] top-[501.58px] absolute rounded-lg object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop" />

                    {/* Body content blocks */}
                    <div className={`w-[861.43px] h-6 left-[123.99px] top-[922.17px] absolute ${textSub} text-xl font-bold font-['Inter'] leading-normal`}>
                      Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.
                    </div>
                    <div className={`w-[1121.80px] h-11 left-[123.99px] top-[972.38px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor ex, non consequat ipsum aliquam at. Duis dapibus dolor in nisi viverra, a elementum
                      nulla viverra. Etiam feugiat turpis leo, nec finibus diam rhoncus ac. Sed at metus et orci consequat facilisis vel vel diam.
                    </div>
                    <div className={`w-[861.43px] h-6 left-[123.99px] top-[1034.77px] absolute ${textSub} text-xl font-bold font-['Inter'] leading-normal`}>
                      Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.
                    </div>
                    <div className={`w-[929.48px] h-5 left-[123.99px] top-[1084.98px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      Etiam faucibus massa auctor gravida finibus. Cras nulla magna, dapibus sit amet accumsan nec, ullamcorper sit amet dolor.
                    </div>
                    <div className={`w-[1137.91px] h-24 left-[123.99px] top-[1124.98px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      Donec leo nisi, porta et gravida nec, tincidunt ac velit. Aliquam in turpis a quam tempus dapibus. Morbi in tellus tempor, hendrerit mi vel, aliquet tellus.
                      Quisque vel interdum ante. Nunc quis purus sem. Donec at risus lacinia ipsum cursus condimentum at ac dui. Nulla bibendum feugiat tellus ac tristique.
                      Proin auctor, lectus et accumsan varius, justo odio vulputate neque, et efficitur augue leo id ex. Aliquam eget turpis nisl. Nam sapien massa, sollicitudin
                      et vehicula a, fringilla vitae purus. Praesent a vestibulum felis.
                    </div>

                    {/* Code block container */}
                    <div className={`w-[1152.01px] h-24 left-[123.99px] top-[1234.79px] absolute ${isDark ? 'bg-slate-800' : 'bg-gray-800'} rounded-lg overflow-hidden`}>
                      <div className="w-44 h-4 left-[15.99px] top-[15.10px] absolute justify-center text-slate-500 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">// This is a comment</div>
                      <div className="w-11 h-4 left-[14px] top-[57.08px] absolute justify-center text-sky-300 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">const</div>
                      <div className="w-2 h-4 left-[64.41px] top-[57.08px] absolute justify-center text-yellow-200 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">x</div>
                      <div className="w-2 h-4 left-[81.22px] top-[57.08px] absolute justify-center text-stone-100 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">=</div>
                      <div className="w-4 h-4 left-[98.02px] top-[57.08px] absolute justify-center text-stone-100 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">()</div>
                      <div className="w-4 h-4 left-[123.23px] top-[57.08px] absolute justify-center text-stone-100 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">=&gt;</div>
                      <div className="w-6 h-4 left-[148.44px] top-[57.08px] absolute justify-center text-stone-100 text-sm font-normal font-['Roboto_Mono'] leading-tight [text-shadow:_0px_1px_0px_rgb(0_0_0_/_0.30)]">{};</div>
                    </div>

                    <div className={`w-80 h-5 left-[123.99px] top-[1343.96px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      Class aptent taciti sociosqu ad litora torquent
                    </div>
                    <div className="w-20 h-3.5 left-[473.75px] top-[1347.29px] absolute justify-center text-indigo-500 text-sm font-normal font-['Inconsolata'] leading-tight">const d = 3;</div>
                    <div className={`w-[703.33px] h-5 left-[559.76px] top-[1343.96px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      per conubia nostra, per inceptos himenaeos. Morbi maximus metus eget nulla malesuada, sit
                    </div>
                    <div className={`w-[1148.28px] h-28 left-[123.99px] top-[1368.28px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      amet luctus est fringilla. Aenean imperdiet rhoncus justo, ut pharetra lorem gravida placerat. Duis et enim lorem. Aliquam placerat elit est, vitae
                      fermentum ipsum finibus sed. Donec dapibus magna non tortor commodo rhoncus. Suspendisse luctus tincidunt eros, aliquet pellentesque neque
                      venenatis quis. Aliquam auctor felis nec orci ornare gravida. Fusce ac neque sit amet nibh scelerisque molestie. Nullam in lorem viverra, aliquam nunc
                      vel, interdum orci. Fusce mattis est neque, et tincidunt justo blandit quis. Etiam tincidunt purus in libero semper, vitae placerat dui vehicula. Pellentesque
                      sit amet imperdiet purus, quis lacinia eros.
                    </div>
                    <div className={`w-[1139.68px] h-16 left-[123.99px] top-[1504.32px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      Duis placerat turpis non metus dapibus sagittis. Vestibulum ex massa, tempus pulvinar varius at, placerat non justo. Ut tristique nisl sed porta pulvinar.
                      Nunc ex nibh, tempor eget elit vel, fringilla ornare risus. Praesent vel lacus finibus, laoreet nulla quis, semper tellus. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus. Donec volutpat quis dui ac varius. Suspendisse potenti. Maecenas sagittis lacus vitae ex rhoncus, eu fringilla urna luctus.
                    </div>
                    <div className={`w-[790.54px] h-6 left-[123.99px] top-[1590.73px] absolute ${textSub} text-xl font-bold font-['Inter'] leading-normal`}>
                      Donec vel erat augue. Aenean ut nisl cursus nulla tempus ultricies vel eget lorem.
                    </div>
                    <div className={`w-[1128.29px] h-11 left-[123.99px] top-[1640.93px] absolute ${textSub} text-base font-normal font-['Inter'] leading-normal`}>
                      Suspendisse pharetra dolor in massa molestie, vel molestie nunc accumsan. Cras varius aliquet pellentesque. Curabitur ac mi fermentum nibh congue
                      pharetra in eu nunc. Vivamus mattis urna a fringilla facilisis. Cras finibus nulla in nulla imperdiet pharetra. Morbi vel tortor turpis.
                    </div>

                    {/* Divider */}
                    <div className={`w-[1352.01px] h-px left-[23.99px] top-[1750.71px] absolute ${isDark ? 'bg-slate-700' : 'border-b-1 border-gray-100'}`} />

                    {/* Comments */}
                    <div className={`w-[1296.02px] h-20 left-[79.98px] top-[1775.81px] absolute ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} rounded-lg`}>
                      <div className={`w-28 h-4 left-[15.99px] top-[18.22px] absolute ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>Alcides Antonio</div>
                      <div className={`w-28 h-3.5 left-[1175.97px] top-[18.22px] absolute ${textMuted} text-xs font-medium font-['Inter'] leading-tight`}>about 2 hours ago</div>
                      <div className={`w-[815.99px] h-4 left-[15.99px] top-[48.16px] absolute ${textSub} text-sm font-normal font-['Inter'] leading-snug`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    </div>
                    <div className={`w-10 h-10 left-[23.99px] top-[1775.81px] absolute ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-[20px] overflow-hidden`}>
                      <img className="w-10 h-10 left-0 top-0 absolute" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" />
                    </div>
                    <div className={`w-[1296.02px] h-20 left-[79.98px] top-[1875.69px] absolute ${isDark ? 'bg-slate-800/50' : 'bg-gray-100'} rounded-lg`}>
                      <div className={`w-20 h-4 left-[15.99px] top-[18.21px] absolute ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>Jie Yan Song</div>
                      <div className={`w-28 h-3.5 left-[1175.77px] top-[18.21px] absolute ${textMuted} text-xs font-medium font-['Inter'] leading-tight`}>about 8 hours ago</div>
                      <div className={`w-[529.24px] h-4 left-[15.99px] top-[48.16px] absolute ${textSub} text-sm font-normal font-['Inter'] leading-snug`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </div>
                    </div>
                    <div className={`w-10 h-10 left-[23.99px] top-[1875.69px] absolute ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-[20px] overflow-hidden`}>
                      <img className="w-10 h-10 left-0 top-0 absolute" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop" />
                    </div>

                    <div className={`w-[1352.01px] h-px left-[23.99px] top-[1983.57px] absolute ${isDark ? 'bg-slate-700' : 'border-b-1 border-gray-100'}`} />

                    {/* Add a comment */}
                    <div className={`w-[1296.02px] h-28 left-[79.98px] top-[2008.68px] absolute ${isDark ? 'bg-slate-800/40' : 'bg-gray-900/5'} rounded-lg ${isDark ? 'border border-slate-700' : 'border border-gray-200'} transition-colors`}>
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Add a comment"
                        className={`absolute left-[14px] top-[12px] w-[1268.04px] h-[56px] resize-none bg-transparent rounded-md p-3 text-sm ${textSub} placeholder:${textMuted} outline-none`}
                        aria-label="Add a comment"
                      />
                    </div>

                    {/* Actions under comment box */}
                    <div className="w-6 h-6 left-[87.97px] top-[2145.88px] absolute flex items-center justify-center rounded-md cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/10">
                      {/* Image icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#94a3b8' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                        <circle cx="8.5" cy="10" r="1.8" />
                        <path d="M21 16l-5.5-5.5L11 15l-2.5-2.5L3 18" />
                      </svg>
                    </div>
                    <div className="w-6 h-6 left-[135.92px] top-[2145.88px] absolute flex items-center justify-center rounded-md cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/10">
                      {/* Paperclip icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#94a3b8' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M21.44 11.05 12 20.5a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 1 1 5.66 5.66L9.17 17.17a2 2 0 1 1-2.83-2.83l8.49-8.49" />
                      </svg>
                    </div>
                    <div className="w-6 h-6 left-[183.87px] top-[2145.88px] absolute flex items-center justify-center rounded-md cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/10">
                      {/* Smiley icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#94a3b8' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 10h.01" />
                        <path d="M15 10h.01" />
                        <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                      </svg>
                    </div>
                    <button onClick={handleSend} className="w-20 h-10 left-[1301.25px] top-[2137.65px] absolute bg-indigo-500 rounded-xl shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                      <div className="w-9 h-4 left-[20px] top-[11.32px] absolute text-center justify-center text-white text-sm font-semibold font-['Inter'] leading-normal">Send</div>
                    </button>

                    {/* Newsletter card */}
                    <div className={`w-[1352.01px] h-96 left-[23.99px] top-[2242.10px] absolute ${cardBg} rounded-[20px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0px_12px_48px_0px_rgba(0,0,0,0.12)]`}>
                      <div className={`w-80 h-10 left-[64px] top-[80px] absolute ${textSub} text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10`}>Join the developer</div>
                      <div className={`w-96 h-4 left-[64px] top-[130.21px] absolute ${textMuted} text-sm font-normal font-['Inter'] leading-snug`}>
                        Subscribe to our newsletter to make sure you don't miss anything.
                      </div>
                      {/* Input group */}
                      <div className="left-[64px] top-[173.94px] absolute w-[600.02px] h-14">
                        <div className={`relative w-full h-full rounded-lg ${isDark ? 'bg-slate-800/40 outline outline-1 outline-slate-700' : 'bg-white outline outline-1 outline-gray-200'}`}>
                          <input
                            type="email"
                            placeholder="Email address"
                            className={`absolute left-0 top-0 w-full h-full bg-transparent px-4 pr-36 text-sm font-medium ${textSub} placeholder:${textMuted} outline-none`}
                            aria-label="Email address"
                          />
                          <button
                            className="absolute right-1 top-1 h-12 px-5 rounded-lg bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            type="button"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <div className="w-64 h-52 left-[858.01px] top-[80px] absolute overflow-hidden">
                        <div className="w-64 h-52 left-0 top-0 absolute overflow-hidden">
                          <div className="w-64 h-44 left-0 top-[14.85px] absolute overflow-hidden">
                            <div className="w-24 h-28 left-[35.86px] top-[11.21px] absolute bg-gradient-to-br from-pink-400 to-pink-600" />
                            <div className="w-5 h-12 left-[17.93px] top-[33.62px] absolute bg-gradient-to-br from-pink-400 to-pink-600" />
                            <div className="w-7 h-20 left-0 top-[17.93px] absolute bg-gradient-to-br from-pink-400 to-pink-600" />
                            <div className="w-44 h-40 left-[81.81px] top-[25.78px] absolute bg-pink-400/30 outline outline-2 outline-offset-[-1.12px] outline-white/25" />
                            <div className="w-11 h-14 left-[80.69px] top-[53.79px] absolute bg-gradient-to-br from-pink-400 to-pink-600 blur-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top translucent header strip */}
                    <div className={`w-[1447px] h-24 left-[-24px] top-[-30px] absolute ${isDark ? 'bg-slate-900/60' : 'bg-white/80'} backdrop-blur-[3px]`}>
                      {/* Right icon group */}
                    <div className="absolute right-6 top-6 h-20 flex items-center gap-3">
                      {/* Bell */}
                      <button className="relative w-15 h-15 rounded-full flex items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/10 z-20 transition-transform duration-200 hover:scale-105 active:scale-95" aria-label="Notifications">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-7 h-7 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"/>
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                        </svg>
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] leading-5 text-center">2</span>
                      </button>
                      {/* Chat */}
                      <button className="w-15 h-15 rounded-full flex items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/10 z-20 transition-transform duration-200 hover:scale-105 active:scale-95" aria-label="Messages">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-7 h-7 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
                        </svg>
                      </button>
                      {/* Avatar */}
                      <div className={`w-15 h-15 rounded-full ${isDark ? 'ring-1 ring-slate-700' : 'ring-1 ring-gray-200'} overflow-hidden z-20 transition-transform duration-200 hover:scale-105`}>
                        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminBlogDetailsPage
