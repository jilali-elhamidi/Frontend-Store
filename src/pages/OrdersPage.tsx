import React from 'react'

function OrdersPage() {
  return (
    <section className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb + page title strip */}
      <div className="bg-white rounded-[10px]">
        <div className="flex items-center gap-2 py-5 text-sm font-bold">
          <span className="text-neutral-400">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-neutral-400">pages</span>
          <span className="text-gray-500">/</span>
          <span className="text-black">orders</span>
        </div>
        <div className="rounded-b-[5px] border-x border-b border-zinc-100 py-3 px-4 flex items-center justify-between">
          <div className="text-gray-600 text-base font-semibold capitalize tracking-tight">My Orders</div>
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <span className="text-gray-600">Home</span>
            <span className="text-gray-500">/</span>
            <span className="text-orange-300">My Orders</span>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="text-gray-600">Product </span>
          <span className="text-orange-300">Order List</span>
        </h2>
        <p className="mt-2 text-neutral-500 text-sm">Your product Order is our first priority.</p>
      </div>

      {/* Pending Orders */}
      <div className="mt-8 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden bg-white">
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
          <div className="text-neutral-500 text-sm sm:text-lg font-bold uppercase tracking-tight">Panding Orders</div>
          <button className="inline-flex items-center justify-center h-10 px-4 !bg-blue-300 hover:bg-zinc-300 !text-white text-sm font-medium rounded-[5px]">Shop Now</button>
        </div>
        <div className="px-6 py-4">
          <div className="grid grid-cols-7 text-gray-600 text-sm font-medium border-b border-zinc-200 py-2">
            <div className="col-span-1">Orders ID</div>
            <div className="col-span-1">Shipping</div>
            <div className="col-span-1">Quantity</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Price</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Action</div>
          </div>
          <div className="divide-y divide-zinc-200">
            <div className="grid grid-cols-7 items-center py-4 text-neutral-500">
              <div>47394</div>
              <div>free</div>
              <div>3</div>
              <div>23/01/2025</div>
              <div>$106.8</div>
              <div className="text-orange-300">Pending</div>
              <div>
                <button className="h-10 px-4 !bg-blue-300 hover:bg-zinc-300 !text-white text-sm font-medium rounded-[5px]">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Orders */}
      <div className="mt-8 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden bg-white">
        <div className="border-b border-zinc-100 px-6 py-5">
          <div className="text-neutral-500 text-sm sm:text-lg font-bold uppercase tracking-tight">Complete Orders</div>
        </div>
        <div className="px-6 py-4">
          <div className="grid grid-cols-7 text-gray-600 text-sm font-medium border-b border-zinc-200 py-2">
            <div className="col-span-1">Orders ID</div>
            <div className="col-span-1">Shipping</div>
            <div className="col-span-1">Quantity</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Price</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Action</div>
          </div>
          <div className="divide-y divide-zinc-200">
            <div className="grid grid-cols-7 items-center py-4 text-neutral-500">
              <div>65820</div>
              <div>free</div>
              <div>3</div>
              <div>23/01/2025</div>
              <div>$194.4</div>
              <div className="text-red-300">Completed</div>
              <div>
                <button className="h-10 px-4 !bg-blue-300 hover:bg-zinc-300 !text-white text-sm font-medium rounded-[5px]">View</button>
              </div>
            </div>
            <div className="grid grid-cols-7 items-center py-4 text-neutral-500">
              <div>31264</div>
              <div>free</div>
              <div>3</div>
              <div>23/01/2025</div>
              <div>$181.2</div>
              <div className="text-red-300">Completed</div>
              <div>
                <button className="h-10 px-4 !bg-blue-300 hover:bg-zinc-300 !text-white text-sm font-medium rounded-[5px]">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrdersPage
