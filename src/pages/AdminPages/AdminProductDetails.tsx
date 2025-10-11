import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'

export default function AdminProductDetailsPage() {
  const { id = '1' } = useParams()
  const [isDark, setIsDark] = useState<boolean>(false)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [imagePreviews, setImagePreviews] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const preferDark = saved ? saved === 'dark' : systemPrefersDark
    setIsDark(preferDark)
    document.documentElement.classList.toggle('dark', !!preferDark)
  }, [])

  const frameBg = isDark ? 'bg-slate-800' : 'bg-slate-50'
  const cardBg = isDark ? 'bg-slate-900/40' : 'bg-white'
  const textMain = isDark ? 'text-white' : 'text-black'
  const textSub = isDark ? 'text-slate-300' : 'text-neutral-800'
  const outline = isDark ? 'outline-slate-700' : 'outline-neutral-800'

  function handleFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    const urls = files.map((f) => URL.createObjectURL(f))
    setImagePreviews((prev) => [...prev, ...urls])
    e.target.value = ''
  }

  function removeImageAt(index: number) {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <main className="home-zoom overflow-x-hidden"> 
    <div className={isDark ? 'dark' : ''}>
      <div className={`w-screen lg:w-351 min-h-screen ${frameBg}`}>
        <div className="flex w-full min-h-full">
          {/* Sidebar */}
          <aside className="home-zoom hidden lg:block">
            <DashboardSidebar isDark={isDark} active="products" />
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
                  <DashboardSidebar isDark={isDark} active="products" />
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
          <main className="flex-1 p-6 flex flex-col gap-5">
            {/* Header */}
            <div className="inline-flex flex-col justify-start items-start gap-4 w-full">
              <div className="inline-flex justify-between items-center w-full gap-6">
                <div className="inline-flex flex-col justify-start items-start gap-1">
                  <div className={`justify-start ${textMain} text-2xl font-semibold font-['Rubik']`}>Product Details</div>
                  <div className={`opacity-80 justify-start ${textMain} text-base font-semibold font-['Open_Sans']`}>
                    Home &gt; All Products &gt; Product Details
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`${cardBg} rounded-2xl p-6 w-full`}>
              <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-start">
                {/* Left form */}
                <div className="inline-flex flex-col justify-start items-start gap-6">
                  {/* Product Name */}
                  <div className="w-full flex flex-col gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Product Name</div>
                    <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                      <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="Lorem Ipsum" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="w-full flex flex-col gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Description</div>
                    <div className={`h-44 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-start w-full`}>
                      <textarea className={`flex-1 bg-transparent outline-none resize-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="Lorem Ipsum Is A Dummy Text" />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="w-full flex flex-col gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Category</div>
                    <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                      <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="Sneaker" />
                    </div>
                  </div>

                  {/* Brand Name */}
                  <div className="w-full flex flex-col gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Brand Name</div>
                    <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                      <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="Addidas" />
                    </div>
                  </div>

                  {/* Row: SKU + Stock */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>SKU</div>
                      <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                        <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="#32A53" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Stock Quantity</div>
                      <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                        <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="211" />
                      </div>
                    </div>
                  </div>

                  {/* Row: Price Regular + Sale */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Regular Price</div>
                      <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                        <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} defaultValue="₹110.40" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Sale Price</div>
                      <div className={`h-12 px-4 py-2.5 rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-center w-full`}>
                        <input className={`flex-1 bg-transparent outline-none ${isDark ? 'text-slate-200' : 'text-neutral-900'} text-base font-normal font-['Inter'] tracking-wide`} placeholder="₹450" />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="w-full flex flex-col gap-2">
                    <div className={`justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Tag</div>
                    <div className={`h-24 p-4 rounded-lg outline outline-1 ${isDark ? 'outline-slate-700 bg-slate-900/60' : 'outline-neutral-200 bg-white'} inline-flex items-start gap-2 w-full`}>
                      <div className="flex justify-start items-start gap-3">
                        <div className="h-7 px-3 py-1 bg-neutral-700 rounded-[20px] flex items-center">
                          <div className="justify-start text-gray-200 text-sm font-normal font-['Inter'] tracking-tight">Lorem</div>
                        </div>
                        <div className="h-7 px-3 py-1 bg-neutral-700 rounded-[20px] flex items-center">
                          <div className="justify-start text-gray-200 text-sm font-normal font-['Inter'] tracking-tight">Lorem</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: gallery with uploads */}
                <div className="inline-flex flex-col justify-start items-start gap-6">
                  {/* Main preview */}
                  <div className="w-full h-72 p-2 bg-neutral-50 rounded-2xl inline-flex justify-start items-start dark:bg-slate-900/40">
                    {imagePreviews.length > 0 ? (
                      <img src={imagePreviews[0]} alt="Main preview" className="flex-1 h-full w-full object-cover rounded-lg" />
                    ) : (
                      <div className="flex-1 self-stretch bg-black/20 dark:bg-white/10 rounded-lg" />
                    )}
                  </div>

                  <div className="flex flex-col justify-start items-start gap-4 w-full">
                    <div className={`self-stretch justify-start ${textSub} text-xl font-semibold font-['Rubik']`}>Product Gallery</div>
                    {/* Upload zone */}
                    <label className={`p-4 rounded-lg outline outline-1 ${outline} border-dashed flex flex-col justify-center items-center gap-3 w-full cursor-pointer transition-colors ${isDark ? 'bg-slate-900/60 hover:bg-slate-900/50' : 'bg-white hover:bg-neutral-50'}`}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-600/10 text-indigo-600">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                      </div>
                      <div className={`text-center ${isDark ? 'text-slate-300' : 'text-neutral-600'} text-sm font-medium`}>Drop images here, or click to browse</div>
                      <input type="file" accept="image/*" multiple className="hidden" onChange={handleFilesSelected} />
                    </label>

                    {/* Thumbnails */}
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {imagePreviews.map((src, idx) => (
                        <div key={src} className={`group relative rounded-lg overflow-hidden outline outline-1 ${outline} ${isDark ? 'bg-slate-900/60' : 'bg-white'}`}>
                          <img src={src} alt={`Preview ${idx + 1}`} className="w-full h-28 object-cover" />
                          <button
                            type="button"
                            onClick={() => removeImageAt(idx)}
                            className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/70 hover:bg-black/80 text-white text-xs flex items-center justify-center"
                            aria-label="Remove image"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="w-full flex justify-end items-center gap-3 mt-6">
                <button className="h-10 px-5 rounded-lg bg-neutral-900 text-white text-sm font-medium">UPDATE</button>
                <button className="h-10 px-5 rounded-lg bg-emerald-300 text-white text-sm font-medium">DELETE</button>
                <button className={`h-10 px-5 rounded-lg outline outline-1 ${outline} text-sm font-medium ${isDark ? 'text-slate-200' : 'text-neutral-800'}`}>CANCEL</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    </main>
  )
}
