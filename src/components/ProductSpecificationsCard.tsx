import CardShell from './CardShell'

export default function ProductSpecificationsCard() {
  return (
    <CardShell
      title="Specifications"
      headerRight={<span className="px-2 py-1 rounded-full text-[11px] uppercase tracking-wide bg-amber-100 text-amber-700">Specs</span>}
    >
      <div className="flex flex-wrap gap-2">
        {[
          { label: 'Bluetooth 5.3', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
          { label: '40h Battery', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
          { label: 'USB‑C Fast', color: 'bg-sky-50 text-sky-700 border-sky-200' },
          { label: 'Dual Mics', color: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200' },
          { label: '240g', color: 'bg-rose-50 text-rose-700 border-rose-200' },
        ].map((chip, i) => (
          <span
            key={i}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs border ${chip.color} transition-transform duration-200 hover:-translate-y-0.5`}
          >
            {chip.label}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-md bg-neutral-50 border border-neutral-200">
          <div className="text-[11px] uppercase text-neutral-500">Latency</div>
          <div className="mt-1 text-sm font-medium text-neutral-800">Low-latency Mode</div>
        </div>
        <div className="p-3 rounded-md bg-neutral-50 border border-neutral-200">
          <div className="text-[11px] uppercase text-neutral-500">Codec</div>
          <div className="mt-1 text-sm font-medium text-neutral-800">AAC / SBC</div>
        </div>
      </div>
    </CardShell>
  )
}
