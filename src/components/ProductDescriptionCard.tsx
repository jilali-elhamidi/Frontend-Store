import CardShell from './CardShell'

export default function ProductDescriptionCard() {
  return (
    <CardShell
      title="Product Description"
      headerRight={<span className="px-2 py-1 rounded-full text-[11px] uppercase tracking-wide bg-violet-100 text-violet-700">Details</span>}
    >
      <div className="mb-3 rounded-md bg-gradient-to-r from-violet-50 to-fuchsia-50 p-3 border border-violet-100/60">
        <p className="text-xs text-violet-900/80">
          New: Enhanced ANC and improved comfort for long listening sessions.
        </p>
      </div>
      <p className="text-sm text-neutral-700 leading-6">
        Experience premium sound with advanced noise cancellation technology, soft
        over‑ear cushions, and up to 40 hours of battery life. Bluetooth 5.3 ensures
        seamless connectivity across your devices.
      </p>
      <a href="#" className="mt-3 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
        Read more
        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M7.5 5l5 5-5 5" />
        </svg>
      </a>
    </CardShell>
  )
}
