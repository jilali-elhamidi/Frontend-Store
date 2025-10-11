import React, { useEffect, useRef, useState } from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'

const AdminBlogCreatePage: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [coverPreview, setCoverPreview] = useState<string>('https://placehold.co/861x230')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const onCancel = () => {
    // Reset fields for now
    setTitle('')
    setDescription('')
    setContent('')
    setCoverPreview('https://placehold.co/861x230')
  }

  const onPublish = () => {
    // Placeholder publish action; wire to backend as needed
    const payload = { title, description, content }
    console.log('Publish post:', payload)
  }

  const onPickCover = () => fileInputRef.current?.click()
  const onCoverChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setCoverPreview(url)
  }

  useEffect(() => {
    const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(preferDark)
    document.documentElement.classList.toggle('dark', !!preferDark)
  }, [])

  const frameBg = isDark ? 'bg-slate-800' : 'bg-slate-50'
  const textSub = isDark ? 'text-slate-200' : 'text-gray-900'
  const textMuted = isDark ? 'text-slate-400' : 'text-gray-500'
  const cardBg = isDark ? 'bg-amber-50/5' : 'bg-amber-50'

  return (
    
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen lg:w-421 min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <DashboardSidebar isDark={isDark} active="blog" />
          </aside>

          {/* Sidebar (mobile drawer) */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} aria-hidden="true" />
              <div className={`absolute left-0 top-0 h-full w-80 max-w-[80%] ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-xl`}>
                <div className="flex items-center justify-between px-3 py-3 border-b border-slate-200 dark:border-slate-700">
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Menu</span>
                  <button className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setMobileOpen(false)}>
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

          {/* Main content */}
          <main className="flex-1">
          {/* Top bar (mobile) */}
          <div className="lg:hidden flex items-center gap-2 p-3">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setMobileOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${isDark ? 'text-slate-200' : 'text-slate-700'} h-5 w-5`}>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
            <h1 className={`text-lg font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Create Post</h1>
          </div>

          <div className="flex-1 min-h-screen">
            <div className="max-w-[1460px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
              {/* Mobile stacked form */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className={`text-2xl font-bold ${textSub}`}>Create a new post</div>
                  <div className="flex items-center gap-2">
                    <button onClick={onCancel} className={`h-10 px-3 rounded-xl ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-white text-gray-900'} outline outline-1 ${isDark ? 'outline-slate-700' : 'outline-gray-200'}`}>Cancel</button>
                    <button onClick={onPublish} className="h-10 px-4 rounded-xl bg-indigo-500 text-white font-semibold">Publish</button>
                  </div>
                </div>

                {/* Basic details */}
                <div className={`${cardBg} rounded-2xl p-4 space-y-3`}>
                  <div className={`text-base font-bold ${textSub}`}>Basic details</div>
                  <div>
                    <label className={`block text-sm ${textMuted}`}>Post title</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} className={`w-full h-11 rounded-lg px-3 bg-white outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-800 text-slate-200 placeholder:text-slate-400' : 'outline-gray-200 text-gray-900 placeholder:text-gray-500'}`} placeholder="Title" />
                  </div>
                  <div>
                    <label className={`block text-sm ${textMuted}`}>Short description</label>
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} className={`w-full h-11 rounded-lg px-3 bg-white outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-800 text-slate-200 placeholder:text-slate-400' : 'outline-gray-200 text-gray-900 placeholder:text-gray-500'}`} placeholder="Short description" />
                  </div>
                </div>

                {/* Post cover */}
                <div className={`${cardBg} rounded-2xl p-4 space-y-3`}>
                  <div className={`text-base font-bold ${textSub}`}>Post cover</div>
                  <img src={coverPreview} alt="cover" className="w-full h-40 object-cover rounded-lg" />
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCoverPreview('https://placehold.co/861x230')} className={`underline ${textSub}`}>Remove photo</button>
                    <button onClick={onPickCover} className="ml-auto h-10 px-3 rounded-lg bg-indigo-500 text-white">Upload</button>
                  </div>
                  <input ref={fileInputRef} onChange={onCoverChange} type="file" accept="image/*" className="hidden" />
                  <div className={`${textMuted} text-sm`}>(SVG, JPG, PNG, or gif maximum 900x400)</div>
                </div>

                {/* Content */}
                <div className={`${cardBg} rounded-2xl p-4 space-y-3`}>
                  <div className={`text-base font-bold ${textSub}`}>Content</div>
                  <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder="Write something" className={`w-full h-40 resize-none rounded-lg p-3 outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-800 text-slate-200 placeholder:text-slate-400' : 'outline-gray-200 bg-white text-gray-900 placeholder:text-gray-500'}`} />
                </div>

                {/* Meta */}
                <div className={`${cardBg} rounded-2xl p-4 space-y-3`}>
                  <div className={`text-base font-bold ${textSub}`}>Meta</div>
                  <div>
                    <label className={`block text-sm ${textMuted}`}>SEO title</label>
                    <input value={seoTitle} onChange={(e)=>setSeoTitle(e.target.value)} className={`w-full h-11 rounded-lg px-3 bg-white outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-800 text-slate-200 placeholder:text-slate-400' : 'outline-gray-200 text-gray-900 placeholder:text-gray-500'}`} placeholder="SEO title" />
                  </div>
                  <div>
                    <label className={`block text-sm ${textMuted}`}>SEO description</label>
                    <input value={seoDescription} onChange={(e)=>setSeoDescription(e.target.value)} className={`w-full h-11 rounded-lg px-3 bg-white outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-800 text-slate-200 placeholder:text-slate-400' : 'outline-gray-200 text-gray-900 placeholder:text-gray-500'}`} placeholder="SEO description" />
                  </div>
                </div>
              </div>
              {/* Canvas following the provided absolute layout (desktop/tablet) */}
              <div className={`hidden lg:block w-[1492px] h-[2142px] relative ${isDark ? 'bg-slate-900' : 'bg-neutral-100'} rounded-2xl overflow-hidden`}>
                <div className="w-[1492px] h-[2142px] left-0 top-0 absolute">
                  <div className="w-[1400px] h-[1696.48px] left-[38px] top-[63.99px] absolute">
                    <div className={`w-80 h-11 left-[23.99px] top-[-1.11px] absolute justify-center ${textSub} text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10`}>Create a new post</div>
                    <div className={`w-20 h-4 left-[23.99px] top-[56.42px] absolute justify-center ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>Dashboard</div>
                    <div className="w-1 h-1 left-[105.02px] top-[62.06px] absolute bg-gray-500 rounded-sm" />
                    <div className={`w-8 h-4 left-[117px] top-[56.42px] absolute justify-center ${textSub} text-sm font-medium font-['Inter'] leading-snug`}>Blog</div>
                    <div className="w-1 h-1 left-[154.70px] top-[62.06px] absolute bg-gray-500 rounded-sm" />
                    <div className={`w-11 h-4 left-[166.68px] top-[55.31px] absolute justify-center ${textMuted} text-sm font-medium font-['Inter'] leading-snug`}>Create</div>

                    {/* Greeting + actions */}
                    <div className={`w-[1352.01px] h-20 left-[23.99px] top-[124.15px] absolute bg-amber-50 rounded-lg shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] overflow-hidden`}>
                      <div className={`w-24 h-6 left-[24px] top-[24.65px] absolute justify-center ${textSub} text-base font-medium font-['Inter'] leading-relaxed`}>Hello, Admin</div>
                      <div className="w-72 h-11 left-[1025.68px] top-[15.99px] absolute">
                        <div className="w-20 h-11 left-0 top-0 absolute rounded-xl">
                          <button onClick={onCancel} className={`w-full h-full text-left px-4 ${textSub} text-sm font-semibold font-['Inter'] leading-normal`}>Cancel</button>
                        </div>
                        <button onClick={onPublish} className="w-36 h-10 left-[95px] top-[1px] absolute bg-indigo-500 rounded-xl shadow-[0px_1px_5px_0px_rgba(0,0,0,0.08)] hover:bg-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-400">
                          <div className="w-28 h-4 left-[20px] top-[11.32px] absolute justify-center text-white text-sm font-semibold font-['Inter'] leading-normal">Publish changes</div>
                        </button>
                        <button className={`w-10 h-10 left-[262.38px] top-[1.25px] absolute rounded-[19.99px] flex items-center justify-center ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'} focus:outline-none focus:ring-2 focus:ring-indigo-400`} aria-label="More options">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#cbd5e1' : '#334155'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Basic details */}
                    <div className={`w-[1352.01px] h-48 left-[23.99px] top-[262.58px] absolute ${cardBg} rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden`}>
                      <div className={`w-24 h-5 left-[24px] top-[32px] absolute justify-center ${textSub} text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight`}>Basic details</div>
                      <div className={`w-[861.35px] h-14 left-[466.67px] top-[32px] absolute rounded-lg border ${isDark ? 'border-slate-600 bg-slate-700/30' : 'border-gray-200 bg-white'}`} />
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`absolute left-[482px] top-[38px] w-[830px] h-10 bg-transparent outline-none ${textSub} ${isDark ? 'placeholder-slate-400' : 'placeholder-gray-500'}`}
                        aria-label="Post title"
                      />
                      <div className="w-14 h-5 left-[478.67px] top-[50px] absolute overflow-hidden">
                        <div className={`w-14 h-4 left-0 top-[1.11px] absolute justify-center ${textMuted} text-sm font-medium font-['Inter'] leading-tight`}>Post title</div>
                      </div>
                      <div className={`w-[861.35px] h-14 left-[466.67px] top-[111.32px] absolute rounded-lg border ${isDark ? 'border-slate-600 bg-slate-700/30' : 'border-gray-200 bg-white'}`} />
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`absolute left-[482px] top-[117px] w-[830px] h-10 bg-transparent outline-none ${textSub} ${isDark ? 'placeholder-slate-400' : 'placeholder-gray-500'}`}
                        aria-label="Short description"
                      />
                      <div className="w-28 h-5 left-[478.67px] top-[129.32px] absolute overflow-hidden">
                        <div className={`w-28 h-4 left-0 top-[1.11px] absolute justify-center ${textMuted} text-sm font-medium font-['Inter'] leading-tight`}>Short description</div>
                      </div>
                    </div>

                    {/* Post cover */}
                    <div className={`w-[1352.01px] h-[570.63px] left-[23.99px] top-[485.22px] absolute ${cardBg} rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden`}>
                      <div className={`w-20 h-5 left-[24px] top-[32px] absolute justify-center ${textSub} text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight`}>Post cover</div>
                      <img className="w-[861.35px] h-56 left-[466.67px] top-[55.99px] absolute rounded-lg object-cover" src={coverPreview} />
                      <button onClick={() => setCoverPreview('https://placehold.co/861x230')} className={`w-24 h-16 left-[482.66px] top-[308.31px] absolute text-center justify-center ${textSub} text-sm font-semibold font-['Inter'] leading-normal hover:underline`}>Remove photo</button>
                      <div className={`w-[861.35px] h-40 left-[466.67px] top-[376.44px] absolute rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-600 bg-slate-800/30' : 'outline-gray-100 bg-white'}`}>
                        <div className="w-72 h-12 left-[327.47px] top-[56.11px] absolute">
                          <div className="w-72 h-5 left-0 top-0 absolute">
                            <span onClick={onPickCover} className="w-72 h-5 left-0 top-[-1.11px] absolute justify-center">
                              <button className="text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] underline leading-tight">Click to upload</button>
                              <span className="text-gray-900 text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight"> or drag and drop</span>
                            </span>
                          </div>
                          <div className={`w-72 h-4 left-0 top-[44.21px] absolute justify-center ${textMuted} text-sm font-normal font-['Inter'] leading-snug`}>(SVG, JPG, PNG, or gif maximum 900x400)</div>
                        </div>
                        <div className={`w-16 h-16 left-[247.48px] top-[49.10px] absolute ${isDark ? 'bg-slate-700/40' : 'bg-gray-200'} rounded-[32px] flex items-center justify-center`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${isDark ? 'text-slate-200' : 'text-gray-700'} w-6 h-6`}
                            aria-label="Upload"
                            role="img"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 5 17 10" />
                            <line x1="12" y1="5" x2="12" y2="20" />
                          </svg>
                        </div>
                        <input ref={fileInputRef} onChange={onCoverChange} type="file" accept="image/*" className="hidden" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-[1352.01px] h-96 left-[23.99px] top-[1079.84px] absolute ${cardBg} rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden`}>
                      <div className={`w-16 h-5 left-[24px] top-[32px] absolute justify-center ${textSub} text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight`}>Content</div>
                      <div className={`w-[861.35px] h-80 left-[466.67px] top-[32px] absolute rounded-lg outline outline-1 outline-offset-[-1px] ${isDark ? 'outline-slate-600 bg-slate-800/30' : 'outline-gray-100 bg-white'} overflow-hidden`}>
                        <div className="w-[859.13px] h-10 left-[1.11px] top-[1.11px] absolute border-b-1 border-gray-100">
                          <div className={`w-11 h-5 left-[17.08px] top-[9.62px] absolute justify-center ${textSub} text-sm font-normal leading-snug`}>Normal</div>
                          <div className="w-4 h-4 left-[86.88px] top-[11.51px] absolute overflow-hidden">
                            <div className="w-1 h-0.5 left-[7px] top-[10.98px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1 h-0.5 left-[7px] top-[4.99px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                          </div>
                          <div className="w-4 h-5 left-[125.97px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-1.5 h-[5.01px] left-[5px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-2 h-[5.01px] left-[5px] top-[9.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                          </div>
                          <div className="w-4 h-5 left-[153.96px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-1.5 h-0 left-[7px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1.5 h-0 left-[5px] top-[14.02px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-0.5 h-2.5 left-[8px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                          </div>
                          <div className="w-4 h-5 left-[181.95px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-2 h-2.5 left-[5px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-3 h-px left-[3px] top-[15.02px] absolute bg-neutral-700" />
                          </div>
                          <div className="w-4 h-5 left-[209.93px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-1 h-1 left-[7px] top-[7.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1.5 h-2 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1.5 h-1.5 left-[8.01px] top-[8.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                          </div>
                          <div className="w-4 h-5 left-[252.92px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-2 h-0 left-[7px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-2 h-0 left-[7px] top-[9.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-2 h-0 left-[7px] top-[14.02px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-0.5 h-0 left-[2.50px] top-[5.51px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-900" />
                            <div className="w-0.5 h-1 left-[2px] top-[2px] absolute bg-neutral-700" />
                            <div className="w-0.5 h-[3px] left-[2.50px] top-[7.51px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-900" />
                            <div className="w-0.5 h-[3.01px] left-[2.50px] top-[12.51px] absolute outline outline-1 outline-offset-[-0.50px] outline-gray-900" />
                          </div>
                          <div className="w-4 h-5 left-[280.90px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-2 h-0 left-[6px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-2 h-0 left-[6px] top-[9.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-2 h-0 left-[6px] top-[14.02px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-0.5 h-0.5 left-[2px] top-[3px] absolute bg-gray-900 rounded-full" />
                            <div className="w-0.5 h-0.5 left-[2px] top-[8.01px] absolute bg-gray-900 rounded-full" />
                            <div className="w-0.5 h-0.5 left-[2px] top-[13.01px] absolute bg-gray-900 rounded-full" />
                          </div>
                          <div className="w-4 h-5 left-[323.89px] top-[11.49px] absolute overflow-hidden">
                            <div className="w-2 h-0 left-[5px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-[3.35px] h-2.5 left-[6px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1 h-1 left-[11px] top-[11.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1 h-1 left-[11px] top-[11.01px] absolute outline outline-2 outline-offset-[-1px] outline-gray-900" />
                            <div className="w-1.5 h-px left-[2px] top-[14.02px] absolute bg-neutral-700" />
                          </div>
                        </div>
                        <div className="w-[859.13px] h-72 left-[1.11px] top-[42.70px] absolute overflow-hidden">
                          <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write something"
                            className={`absolute left-[16px] top-[12px] w-[828.5px] h-[260px] resize-none bg-transparent outline-none ${textSub} ${isDark ? 'placeholder-slate-400' : 'placeholder-gray-500'}`}
                            aria-label="Post content"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`w-[1352.01px] h-48 left-[23.99px] top-[1497.83px] absolute ${cardBg} rounded-[20px] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03)] shadow-[0px_5px_22px_0px_rgba(0,0,0,0.04)] overflow-hidden`}>
                      <div className={`w-10 h-5 left-[24px] top-[31.99px] absolute justify-center ${textSub} text-base font-bold font-['Plus_Jakarta_Sans'] leading-tight`}>Meta</div>
                      <div className={`w-[861.35px] h-14 left-[466.67px] top-[31.99px] absolute rounded-lg border ${isDark ? 'border-slate-600 bg-slate-700/30' : 'border-gray-200 bg-white'}`} />
                      <input
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        className={`absolute left-[482px] top-[37px] w-[830px] h-10 bg-transparent outline-none ${textSub} ${isDark ? 'placeholder-slate-400' : 'placeholder-gray-500'}`}
                        aria-label="SEO title"
                      />
                      <div className="w-14 h-5 left-[478.67px] top-[49.99px] absolute overflow-hidden">
                        <div className={`w-14 h-4 left-0 top-[1.11px] absolute justify-center ${textMuted} text-sm font-medium font-['Inter'] leading-tight`}>SEO title</div>
                      </div>
                      <div className={`w-[861.35px] h-14 left-[466.67px] top-[111.32px] absolute rounded-lg border ${isDark ? 'border-slate-600 bg-slate-700/30' : 'border-gray-200 bg-white'}`} />
                      <input
                        value={seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                        className={`absolute left-[482px] top-[117px] w-[830px] h-10 bg-transparent outline-none ${textSub} ${isDark ? 'placeholder-slate-400' : 'placeholder-gray-500'}`}
                        aria-label="SEO description"
                      />
                      <div className="w-28 h-5 left-[478.67px] top-[129.32px] absolute overflow-hidden">
                        <div className={`w-28 h-4 left-0 top-[1.11px] absolute justify-center ${textMuted} text-sm font-medium font-['Inter'] leading-tight`}>SEO description</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          </main>
        </div>
        
      </div>
    </div>
  )
}

export default AdminBlogCreatePage
