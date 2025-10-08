import React, { useEffect, useRef } from 'react'
import DashboardSidebar from '../../components/Admin/DashboardSidebar'
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibregl from 'maplibre-gl'

export default function AdminFleetPage() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    // Initialize MapLibre using a public demo style (no API key required)
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [-74.006, 40.7128], // NYC
      zoom: 11,
    })

    // Add zoom controls
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right')

    // Example vehicle markers (roughly matching the screenshot positions around NYC)
    const points: Array<{ id: string; lng: number; lat: number; color?: string }> = [
      { id: 'VOL-653CD2', lng: -74.017, lat: 40.728, color: '#111827' }, // near Hoboken
      { id: 'VOL-653CD3', lng: -73.990, lat: 40.742, color: '#111827' }, // Chelsea
      { id: 'VOL-653CD4', lng: -73.950, lat: 40.780, color: '#111827' }, // Upper East
    ]

    points.forEach((p) => {
      const el = document.createElement('div')
      el.style.width = '24px'
      el.style.height = '24px'
      el.style.borderRadius = '12px'
      el.style.background = p.color || '#111827'
      el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)'
      el.style.border = '2px solid white'
      new maplibregl.Marker({ element: el })
        .setLngLat([p.lng, p.lat])
        .setPopup(new maplibregl.Popup({ offset: 12 }).setText(p.id))
        .addTo(map)
    })

    return () => map.remove()
  }, [])
  return (
    <div className="min-h-screen w-full bg-teal-50">
      {/* Sidebar */}
      <aside className="absolute left-0 top-0 h-full w-[280px]">
        <DashboardSidebar active="shipping" />
      </aside>

      {/* Main content to the right of the sidebar */}
      <main className="relative ml-[280px] p-6">
        {/* Fleet page layout per provided design */}
        <div className="w-[1453px] h-[882px] relative bg-teal-50">
          <div className="w-[1469px] h-px left-[-16px] top-[-0.01px] absolute border-b-1 border-gray-100" />
          <div className="w-[1469px] h-[880.45px] left-[-16px] top-[1.10px] absolute overflow-hidden">
            <div className="w-96 h-[880.45px] left-0 top-0 absolute border-r-1 border-gray-100">
              <div className="w-14 h-7 left-[15.99px] top-[14.88px] absolute justify-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-7">Fleet</div>
              <div className="w-96 h-[542.12px] left-0 top-[59.97px] absolute border-b-1 border-gray-100">
                <div className="w-96 h-96 left-0 top-0 absolute">
                  <div className="w-96 h-20 left-0 top-0 absolute">
                    <div className="w-32 h-11 left-[71.98px] top-[15.99px] absolute">
                      <div className="w-24 h-5 left-0 top-[2.22px] absolute justify-center text-gray-900 text-base font-normal font-['Inter'] leading-normal">VOL-653CD2</div>
                      <div className="w-32 h-4 left-0 top-[26.23px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">New York, NY, USA</div>
                    </div>
                    <div className="w-10 h-10 left-[15.99px] top-[18.98px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                      <div className="w-6 h-6 left-[8px] top-[8px] absolute overflow-hidden">
                        <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                          <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                          <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-96 h-80 left-0 top-[77.95px] absolute">
                    <div className="w-96 h-px left-0 top-0 absolute border-b-1 border-gray-100" />
                    <div className="w-28 h-3.5 left-[15.99px] top-[19.32px] absolute justify-center text-gray-500 text-xs font-medium font-['Inter'] leading-tight">Temperature (good)</div>
                    <div className="w-6 h-4 left-[357.88px] top-[47.22px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">8°C</div>
                    <div className="w-80 h-1 left-[15.99px] top-[53.98px] absolute bg-indigo-200 rounded-[3px] overflow-hidden">
                      <div className="w-80 h-1 left-[-299.83px] top-0 absolute bg-indigo-500" />
                    </div>
                    <div className="w-80 h-16 left-[39.98px] top-[72.95px] absolute">
                      <div className="w-2.5 h-16 left-0 top-0 absolute">
                        <div className="w-2.5 h-2.5 left-0 top-[11.50px] absolute bg-indigo-500 rounded-[5.11px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]" />
                        <div className="w-0.5 h-9 left-[4.10px] top-[33.20px] absolute bg-gray-100" />
                      </div>
                      <div className="w-80 h-16 left-[10.21px] top-0 absolute">
                        <div className="w-44 h-4 left-[15.99px] top-[8.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Tracking Number Created</div>
                        <div className="w-24 h-3.5 left-[15.99px] top-[34.62px] absolute justify-center text-gray-500 text-xs font-medium font-['Inter'] leading-tight">Sep 01, 7:53 AM</div>
                      </div>
                    </div>
                    <div className="w-80 h-16 left-[39.98px] top-[142.95px] absolute">
                      <div className="w-2.5 h-16 left-0 top-0 absolute">
                        <div className="w-2.5 h-2.5 left-0 top-[11.50px] absolute bg-indigo-500 rounded-[5.11px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]" />
                        <div className="w-0.5 h-9 left-[4.10px] top-[33.20px] absolute bg-gray-100" />
                      </div>
                      <div className="w-80 h-16 left-[10.21px] top-0 absolute">
                        <div className="w-28 h-4 left-[15.99px] top-[8.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Out for Delivery</div>
                        <div className="w-24 h-3.5 left-[15.99px] top-[34.62px] absolute justify-center text-gray-500 text-xs font-medium font-['Inter'] leading-tight">Sep 01, 8:02 AM</div>
                      </div>
                    </div>
                    <div className="w-80 h-16 left-[39.98px] top-[212.95px] absolute">
                      <div className="w-2.5 h-16 left-0 top-0 absolute">
                        <div className="w-2.5 h-2.5 left-0 top-[11.50px] absolute bg-indigo-500 rounded-[5.11px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]" />
                      </div>
                      <div className="w-80 h-16 left-[10.21px] top-0 absolute">
                        <div className="w-12 h-4 left-[15.99px] top-[8.21px] absolute justify-center text-gray-900 text-sm font-normal font-['Inter'] leading-snug">Arrived</div>
                        <div className="w-24 h-3.5 left-[15.99px] top-[34.62px] absolute justify-center text-gray-500 text-xs font-medium font-['Inter'] leading-tight">Sep 01, 8:18 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-96 h-px left-0 top-[382.88px] absolute border-b-1 border-gray-100" />
                <div className="w-96 h-20 left-0 top-[383.99px] absolute">
                  <div className="w-32 h-11 left-[71.98px] top-[15.99px] absolute">
                    <div className="w-24 h-5 left-0 top-[2.22px] absolute justify-center text-gray-900 text-base font-normal font-['Inter'] leading-normal">VOL-653CD3</div>
                    <div className="w-32 h-4 left-0 top-[26.23px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">New York, NY, USA</div>
                  </div>
                  <div className="w-10 h-10 left-[15.99px] top-[18.98px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                    <div className="w-6 h-6 left-[8px] top-[8px] absolute overflow-hidden">
                      <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-96 h-px left-0 top-[461.94px] absolute border-b-1 border-gray-100" />
                <div className="w-96 h-20 left-0 top-[463.06px] absolute">
                  <div className="w-32 h-11 left-[71.98px] top-[15.98px] absolute">
                    <div className="w-24 h-5 left-0 top-[2.23px] absolute justify-center text-gray-900 text-base font-normal font-['Inter'] leading-normal">VOL-653CD4</div>
                    <div className="w-32 h-4 left-0 top-[26.24px] absolute justify-center text-gray-500 text-sm font-normal font-['Inter'] leading-snug">New York, NY, USA</div>
                  </div>
                  <div className="w-10 h-10 left-[15.99px] top-[18.97px] absolute bg-gray-200 rounded-[20px] overflow-hidden">
                    <div className="w-6 h-6 left-[8px] top-[8px] absolute overflow-hidden">
                      <div className="w-6 h-6 left-0 top-0 absolute overflow-hidden">
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute bg-white/0" />
                        <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1069px] h-[880.45px] left-[400px] top-0 absolute overflow-hidden">
              <div ref={mapContainerRef} className="w-[1000px] h-[880.45px] absolute left-0 top-0 rounded-xl overflow-hidden" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
