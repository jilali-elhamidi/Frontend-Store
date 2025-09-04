export default function CartSummary() {
  return (
    <aside className="bg-gray-50 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 p-4 w-full">
      <h3 className="text-gray-600 text-xl font-bold">Summary</h3>

      <div className="mt-4 border-b border-zinc-100 pb-3 flex items-center justify-between">
        <div className="text-neutral-500 text-base font-bold">Estimate Shipping</div>
      </div>

      <p className="mt-4 text-neutral-500 text-sm">Enter your destination to get a shipping estimate</p>

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Country *</label>
          <div className="rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 relative">
            <select className="w-full h-12 bg-white rounded-[5px] px-3 text-sm text-neutral-600 appearance-none">
              <option>Country</option>
              <option>USA</option>
              <option>France</option>
              <option>Morocco</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">▾</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">State/Province</label>
          <div className="rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 relative">
            <select className="w-full h-12 bg-white rounded-[5px] px-3 text-sm text-neutral-600 appearance-none">
              <option>Select</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">▾</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Zip/Postal Code</label>
          <input className="w-full h-12 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 px-4 text-sm text-neutral-600" placeholder="Zip/Postal Code" />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Sub-Total</span>
          <span className="text-gray-600 font-medium">$162.00</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Delivery Charges</span>
          <span className="text-gray-600 font-medium">$32.40</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Coupon Discount</span>
          <button className="text-orange-300 underline">Apply Discount</button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-gray-600 text-base font-medium">Total Amount</span>
        <span className="text-gray-600 text-base font-medium">$194.40</span>
      </div>
    </aside>
  )
}
